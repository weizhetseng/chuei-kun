<template>
    <div class="bg-wrap fixed top-0 left-0 z-[41]"
        :class="{ 'w-0': !navBar.asideNav, 'w-full': navBar.asideNav, 'h-0': !navBar.asideNav, 'h-full': navBar.asideNav }"
        @click="navBar.closeAside()"></div>
    <div class="fixed bg-white w-96 h-screen z-50 top-0 left-0 ease-in-out duration-300 p-10"
        :class="{ '-translate-x-96': !navBar.asideNav, 'translate-x-0': navBar.asideNav }">
        <div class="w-full h-full flex flex-col justify-between">
            <div>
                <div class="mb-5">
                    <input class="bg-Myellow w-full p-2 rounded-xl outline outline-gold" type="text" placeholder="關鍵字搜尋" />
                    <label for=""></label>
                </div>
                <ul class="text-xl font-bold flex flex-col gap-5">
                    <li>
                        <div class="flex justify-between items-center cursor-pointer" @click="navBar.toggleNewsDropdown()">
                            最新消息
                            <img class="transition-all" :class="navBar.newsDropdown ? 'rotate-90' : 'rotate-0'"
                                src="../assets/image/other/right.png" alt="" />
                        </div>
                        <ul class="text-base font-normal flex flex-col gap-2 my-2"
                            :class="{ hidden: !navBar.newsDropdown, block: navBar.newsDropdown }">
                            <li>
                                <RouterLink to="/news" @click="navBar.closeAside()">最新消息</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/news" @click="navBar.closeAside()">營業時間</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/news" @click="navBar.closeAside()">食品檢驗報告</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/news" @click="navBar.closeAside()">食品工廠登記字號</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/news" @click="navBar.closeAside()">食品業者登記字號</RouterLink>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <RouterLink to="/about" @click="navBar.closeAside()">關於垂坤</RouterLink>
                    </li>
                    <li>
                        <div class="flex justify-between items-center cursor-pointer" @click="navBar.toggleShopDropdown()">
                            線上購物
                            <img class="transition-all" :class="navBar.shopDropdown ? 'rotate-90' : 'rotate-0'"
                                src="../assets/image/other/right.png" alt="" />
                        </div>
                        <ul class="text-base font-normal flex flex-col gap-2 my-2"
                            :class="{ hidden: !navBar.shopDropdown, block: navBar.shopDropdown }">
                            <li>
                                <RouterLink to="/product/productItem/1" @click="navBar.closeAside()">呷卡鶴系列</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/product/productItem/2" @click="navBar.closeAside()">皇啡系列</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/product/productItem/3" @click="navBar.closeAside()">冷凍系列</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/product/productItem/4" @click="navBar.closeAside()">冷藏系列</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/product/productItem/5" @click="navBar.closeAside()">肉鬆系列</RouterLink>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <RouterLink to="/location" @click="navBar.closeAside()">營業據點</RouterLink>
                    </li>
                    <li>
                        <a href="#" @click="navBar.closeAside()">訂單下載</a>
                    </li>
                </ul>
            </div>
            <ul class="text-xl font-bold text-white flex flex-col gap-5">
                <li @click="scamModal.openModal()">
                    <div class="bg-black rounded-xl p-3 flex items-center gap-5" @click="navBar.closeAside()">
                        <img src="../assets/image/other/user-alert.png" alt="" />
                        詐騙手法大公開
                    </div>
                </li>
                <li>
                    <RouterLink class="bg-gold rounded-xl p-3 flex items-center gap-5" to="/shoppingCart"
                        @click="navBar.closeAside()">
                        <img src="../assets/image/other/cart.png" alt="" />
                        購物車
                    </RouterLink>
                </li>
                <li>
                    <RouterLink class="bg-Mred rounded-xl p-3 flex items-center gap-5"
                        :to="loginStatus ? '/memberCenter' : '/login'" @click="navBar.closeAside()">
                        <img src="../assets/image/other/user.png" alt="" />
                        會員專區
                    </RouterLink>
                </li>
            </ul>
        </div>
    </div>
    <btn_scamModal ref="scamModal" />
</template>


<script setup>
import { ref } from 'vue'
import { useNavBar } from '../stores/counter';
import btn_scamModal from './btn_scamModal.vue'
const navBar = useNavBar()

const scamModal = ref(null)
const loginStatus = $cookies.get('loginStatus')

</script>
