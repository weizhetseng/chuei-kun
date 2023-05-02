<template>
    <btn_banner />
    <div class="bg-bgword bg-no-repeat bg-[center_top_-40px] pt-10">
        <div class="container">
            <btn_breadcrumb />
            <div class="titleStyle mb-9">
                <h2 class="text-4xl text-Mred font-bold">會員登入</h2>
                <p>Member Login</p>
            </div>
            <Form v-slot="{ errors }" action="" class="w-4/5 m-auto mb-20" @submit="OldAccountVerify()">
                <div class="gap-5 m-auto mb-16 relative sm:flex lg:w-2/3">
                    <label class="w-full p-2 flex items-center gap-1 text-lg font-bold sm:w-32 sm:border-r sm:border-gray"
                        for="user">
                        <div class="border border-Mred rounded-full p-2">
                            <img src="../../assets/image/other/envelope-solid.png" alt="" />
                        </div>
                        手機號碼
                    </label>
                    <Field class="w-full outline-none border-b border-lgray p-2 sm:w-[calc(100%-148px)]" id="userID"
                        name="userID" type="text" label="帳號" :class="{ 'is-invalid': errors['userID'] }"
                        placeholder="請輸入手機號碼 " rules="required" v-model="oldAccount.Mobile">
                    </Field>
                    <error-message name="userID"
                        class="block absolute right-0 -bottom-6 text-red-700 text-right"></error-message>
                    <button
                        class="absolute bg-Mred text-white py-[2px] px-5 right-0 bottom-2 rounded-tr-3xl rounded-bl-3xl shadow-mYellow"
                        type="button" @click="Register.SendPhoneCode()" :disabled="Register.phoneCountdown !== 0">
                        {{ Register.phoneCountdown === 0 ? '發送驗證碼' : `重發驗證碼(${Register.phoneCountdown})` }}
                    </button>
                </div>
                <div class="gap-5 m-auto mb-16 relative sm:flex lg:w-2/3">
                    <label class="w-full p-2 flex items-center gap-1 text-lg font-bold sm:w-32 sm:border-r sm:border-gray"
                        for="user">
                        <div class="border border-Mred rounded-full p-2">
                            <img src="../../assets/image/other/envelope-solid.png" alt="" />
                        </div>
                        驗證碼
                    </label>
                    <Field class="w-full outline-none border-b border-lgray p-2 sm:w-[calc(100%-148px)]" id="usercode"
                        name="usercode" type="text" label="驗證碼" :class="{ 'is-invalid': errors['usercode'] }"
                        placeholder="請輸入驗證碼 " rules="required" v-model="oldAccount.Auth_Mobile">
                    </Field>
                    <error-message name="usercode"
                        class="block absolute right-0 -bottom-6 text-red-700 text-right"></error-message>
                </div>
                <div class="flex justify-center items-center gap-5">
                    <button class="buttonStyle2 group" type="reset">
                        <span class="btnWordStyle2">清除</span>
                    </button>
                    <button class="buttonStyle group" type="submit">
                        <span class="btnWordStyle">送出</span>
                    </button>
                </div>
            </Form>
        </div>
    </div>
</template>
  
<script setup>
import btn_banner from '../../components/btn_banner.vue'
import btn_breadcrumb from '../../components/btn_breadcrumb.vue'
import { useRegister } from '../../stores/counter.js'
import { apiOldAccountVerify } from '../../api/api';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
const Register = useRegister()
const router = useRouter()

const oldAccount = ref({
    u_id: "",
    AuthCode: "0",
    Lang: "tw",
    Mobile: "",
    Auth_Mobile: ""
})

function OldAccountVerify() {
    apiOldAccountVerify(oldAccount.value)
        .then((res) => {
            const errorCodes1 = ['01', '92', '97', '98'];
            let checkNum = res.data.message.substr(0, 2);
            if (parseInt(checkNum) <= 0) {
                alert("系統忙碌中，請稍後嘗試重新載入頁面。");
            } else if (errorCodes1.includes(checkNum)) {
                alert(res.data.message.substr(3));
                console.log(res)
            } else {
                //跳轉產品頁
                router.push('/product/shopMethod1')
            }
        })
        .catch((err) => {
            console.log(err)
        })

}

</script>
  