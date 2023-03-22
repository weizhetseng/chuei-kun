<template>
    <div class="fixed bottom-80 right-8 w-16 h-16 m-auto bg-Mred flex items-center justify-center p-5 cursor-pointer duration-300 rounded-full shadow-main hover:scale-110 active:scale-100"
        @click="toggleWindow()">
        <img src="../assets/image/other/comments-solid.png" alt="">
    </div>
    <div class="fixed justify-between shadow-main rounded-lg overflow-hidden duration-150 whitespace-nowrap right-20 bottom-[400px] bg-white"
        :class="{ 'w-0': customerStatus, 'h-0': customerStatus, 'w-96': !customerStatus, 'h-auto': !customerStatus }">
        <div class="relative">
            <h3 class="text-xl text-white bg-Mred text-center p-2">線上客服</h3>
            <button class="absolute text-white right-3 top-1/2 -translate-y-1/2" type="button" @click="SignIn()"
                v-if="currentUser === null">Login</button>
            <button class="absolute text-white right-3 top-1/2 -translate-y-1/2" type="button" @click="SignOutUser()"
                v-else>LogOut</button>
        </div>
        <div class="p-1 h-[400px] overflow-y-scroll overflow-x-hidden whitespace-normal">
            <ul>
                <li>
                    <div>
                        <p class="rounded-lg shadow-main inline-block px-2 py-1">
                            {{ currentUser?.userName }} 您好! 很高興為您服務 </p>
                    </div>
                </li>
                <li class="" v-for="(item, index) in messages" :key="index">
                    <div>
                        <p class="rounded-lg shadow-main inline-block px-2 py-1">
                            {{ item.text }}</p>
                    </div>
                </li>
            </ul>
        </div>
        <form action="" class="flex flex-col justify-between" @submit.prevent="saveMessage(message)">
            <div class="p-3 bg-Myellow flex justify-between">
                <input class="bg-transparent outline-none" type="text" placeholder="請輸入問題..." v-model="message">
                <button type="submit" class="bg-Mred text-white px-2 py-1">送出</button>
            </div>
        </form>
    </div>
</template>


<script setup>
import { onMounted, ref } from 'vue';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase/init.js"
import { getFirestore, collection, addDoc, query, orderBy, limit, onSnapshot, setDoc, updateDoc, doc, serverTimestamp } from 'firebase/firestore';
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth'

const customerStatus = ref(false)

const message = ref('')
const messages = ref([])

function toggleWindow() {
    customerStatus.value = !customerStatus.value
}

async function SignIn() {
    var provider = new GoogleAuthProvider();
    try {
        const result = await signInWithPopup(getAuth(), provider);
        return result.user
    } catch (error) {
        console.log(error);
    }
}

function SignOutUser() {
    signOut(getAuth());
}

const currentUser = ref(null)

function initFirebaseAuth() {
    onAuthStateChanged(getAuth(), authStateObserver);
}

function getProfilePicUrl() {
    return getAuth().currentUser.photoURL || '/images/profile_placeholder.png';
}

function getUserName() {
    return getAuth().currentUser.displayName;
}

function authStateObserver(user) {
    if (user) {
        const profilePicUrl = getProfilePicUrl();
        const userName = getUserName();
        currentUser.value = {
            userName: userName,
            profilePicUrl: profilePicUrl
        };
    } else {
        currentUser.value = null;
    }
}

async function saveMessage(messageText) {
    try {
        await addDoc(collection(getFirestore(), 'messages'), {
            name: currentUser.value.userName,
            text: messageText,
            profilePicUrl: currentUser.value.profilePicUrl,
            timestamp: serverTimestamp()
        });
        message.value = ''
    }
    catch (error) {
        console.error('Error writing new message to Firebase Database', error);
    }
}

function loadMessages() {
    const recentMessagesQuery = query(collection(getFirestore(), 'messages'), orderBy('timestamp', 'desc'), limit(12));

    onSnapshot(recentMessagesQuery, function (snapshot) {
        snapshot.docChanges().forEach(function (change) {
            if (change.type === 'added') {
                const messageData = change.doc.data();
                messages.value.push(messageData)
                console.log(messages)
            }
        });
    });

}


onMounted(() => {
    initializeApp(firebaseConfig)
    initFirebaseAuth()
    loadMessages()
})

</script>