<template>
    <div class="fixed bottom-32 right-10 w-16 h-16 m-auto bg-Mred flex items-center justify-center p-5 cursor-pointer duration-300 rounded-full shadow-main hover:scale-110 active:scale-100"
        @click="toggleWindow()">
        <img src="../assets/image/other/comments-solid.png" alt="">
    </div>
    <div class="fixed justify-between shadow-main rounded-lg overflow-hidden duration-150 whitespace-nowrap right-20 bottom-52 bg-white"
        :class="{ 'w-0': !customerStatus, 'h-0': !customerStatus, 'w-96': customerStatus, 'h-auto': customerStatus }">
        <div class="relative">
            <h3 class="text-xl text-white bg-Mred text-center p-2">線上客服</h3>
            <button class="absolute text-white right-3 top-1/2 -translate-y-1/2" type="button" @click="SignIn()"
                v-if="currentUser === null">Login</button>
            <button class="absolute text-white right-3 top-1/2 -translate-y-1/2" type="button" @click="SignOutUser()"
                v-else>LogOut</button>
        </div>
        <div class="message-list p-3 h-[400px] overflow-y-scroll overflow-x-hidden whitespace-normal">
            <ul>
                <li class="mb-1">
                    <div>
                        <p class="rounded-lg shadow-main inline-block px-2 py-1">
                            {{ currentUser?.userName }} 您好! 很高興為您服務 </p>
                    </div>
                </li>
                <li class="mb-1" v-for="(item, index) in messages" :key="index" v-if="currentUser !== null">
                    <div class="flex flex-col" :class="{
                        'items-end': ((currentUser?.userEmail === 'springoniondog@gmail.com') && (item.email === 'springoniondog@gmail.com')) || ((currentUser?.userEmail !== 'springoniondog@gmail.com') && (item.email !== 'springoniondog@gmail.com')),
                        'items-start': (currentUser?.userEmail === 'springoniondog@gmail.com') && (item.email !== 'springoniondog@gmail.com') || ((currentUser?.userEmail !== 'springoniondog@gmail.com') && (item.email === 'springoniondog@gmail.com')),
                    }">
                        <p class="rounded-lg shadow-main inline-block px-2 py-1 mb-1" :class="{
                            'bg-green-200': ((currentUser?.userEmail === 'springoniondog@gmail.com') && (item.email === 'springoniondog@gmail.com')) || ((currentUser?.userEmail !== 'springoniondog@gmail.com') && (item.email !== 'springoniondog@gmail.com')),
                            'bg-white': (currentUser?.userEmail === 'springoniondog@gmail.com') && (item.email !== 'springoniondog@gmail.com') || ((currentUser?.userEmail !== 'springoniondog@gmail.com') && (item.email === 'springoniondog@gmail.com')),
                        }">
                            {{ item.text }}</p>
                        <span class="text-xs text-wrap">{{ item.timestamp }}</span>
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
import db from '../firebase/init.js'
import { collection, addDoc, query, orderBy, onSnapshot, setDoc, doc, getDoc } from 'firebase/firestore';
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth'


const customerStatus = ref(false)

const message = ref('')
const messages = ref([])

function toggleWindow() {
    customerStatus.value = !customerStatus.value
}


async function createChatRoomForUser(userId) {
    const userType = userId === `${import.meta.env.VITE_admin}` ? 'admin' : 'user';

    const chatRoomDocRef = doc(db, userType, userId);
    const chatRoomDoc = await getDoc(chatRoomDocRef);
    if (chatRoomDoc.exists()) {
        console.log('Chat room already exists for user:', userId);
        return;
    }
    await setDoc(chatRoomDocRef, {});
    const messagesCollRef = collection(chatRoomDocRef, 'chatRoom');
    await addDoc(messagesCollRef, {});
}

//google 登入
async function SignIn() {
    var provider = new GoogleAuthProvider();
    try {
        const result = await signInWithPopup(getAuth(), provider);
        createChatRoomForUser(result.user.email)
    } catch (error) {
        console.log(error);
    }
}
//登出 
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

function getEmail() {
    return getAuth().currentUser.email;
}

function authStateObserver(user) {
    if (user) {
        const profilePicUrl = getProfilePicUrl();
        const userName = getUserName();
        const userEmail = getEmail();
        currentUser.value = {
            userName: userName,
            profilePicUrl: profilePicUrl,
            userEmail: userEmail
        };
    } else {
        currentUser.value = null;
    }
}

async function saveMessage(messageText) {
    const messageList = document.querySelector('.message-list');
    try {
        const userEmail = `${import.meta.env.VITE_user}`;
        await addDoc(collection(db, 'user', userEmail, 'chatRoom'), {
            name: currentUser.value.userName,
            text: messageText,
            profilePicUrl: currentUser.value.profilePicUrl,
            email: currentUser.value.userEmail,
            timestamp: new Date().toLocaleString()
        });
        messageList.scrollTo({
            top: messageList.scrollHeight,
            behavior: 'smooth'
        });
        message.value = ''
    }
    catch (error) {
        console.error('Error writing new message to Firebase Database', error);
    }
}

function loadMessages() {
    if (!currentUser.value) {
        setTimeout(loadMessages, 1000);
        return;
    }
    const userEmail = `${import.meta.env.VITE_user}`;
    const recentMessagesQuery = query(collection(db, 'user', userEmail, 'chatRoom'), orderBy('timestamp'));
    onSnapshot(recentMessagesQuery, function (snapshot) {
        snapshot.docChanges().forEach(function (change) {
            if (change.type === 'added') {
                const messageData = change.doc.data();
                messages.value.push(messageData);
            }
        });
    });
}


onMounted(() => {
    initFirebaseAuth()
    loadMessages()
})

</script>