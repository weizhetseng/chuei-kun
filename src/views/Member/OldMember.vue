<template>
    <btn_banner />
    <div class="bg-bgword bg-no-repeat bg-[center_top_-40px] pt-10">
        <div class="container">
            <btn_breadcrumb />
            <div class="titleStyle mb-9">
                <h2 class="text-4xl text-Mred font-bold">會員登入</h2>
                <p>Member Login</p>
            </div>
            <Form v-slot="{ errors }" action="" class="w-4/5 m-auto mb-20" v-if="!sendStatus" @submit="sendData()">
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
                        placeholder="請輸入手機號碼 " rules="required">
                    </Field>
                    <error-message name="userID"
                        class="block absolute right-0 -bottom-6 text-red-700 text-right"></error-message>
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
                        placeholder="請輸入驗證碼 " rules="required">
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
            <div class="mt-7 mb-20" v-else>
                <p class="text-3xl text-center mb-20 font-bold text-Mred">
                    您的新密碼已經發送到您的手機，請查看訊息
                </p>
                <div class="text-center">
                    <RouterLink to="/login" class="group linkStyle">
                        <span class="linkWordStyle">返回登入頁</span>
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue'
import btn_banner from '../../components/btn_banner.vue'
import btn_breadcrumb from '../../components/btn_breadcrumb.vue'

const sendStatus = ref(false)
function sendData() {
    sendStatus.value = true
}

</script>
  