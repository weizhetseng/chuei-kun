<template>
  <btn_banner />
  <btn_animateBG />
  <div class="container mt-20">
    <btn_breadcrumb />
    <div class="lg:flex lg:gap-5 mb-28">
      <!-- 會員登入 -->
      <div class="mb-10 lg:mb-0 lg:w-1/2">
        <div class="titleStyle mb-9">
          <h2 class="text-4xl text-Mred font-bold">會員登入</h2>
          <p>Member Login</p>
        </div>
        <Form v-slot="{ errors }" action="" class="p-5 mb-10 lg:mb-16">
          <div class="mb-12 lg:mb-20 gap-5 sm:flex">
            <!-- 帳號 -->
            <label class="w-full p-2 flex items-center gap-1 text-lg font-bold sm:w-32 sm:border-r sm:border-gray"
              for="user">
              <div class="border border-Mred rounded-full p-2">
                <img src="../../assets/image/other/envelope-solid.png" alt="" />
              </div>
              帳號
            </label>
            <div class="sm:w-[calc(100%-148px)]">
              <Field class="w-full outline-none border-b border-lgray p-2" id="userID" name="userID" type="text"
                label="帳號" :class="{ 'is-invalid': errors['userID'] }" placeholder="請輸入手機號碼或電子信箱" rules="required">
              </Field>
              <error-message name="userID" class="block text-red-700 text-right"></error-message>
            </div>
          </div>
          <div class="mb-12 lg:mb-16 gap-5 sm:flex">
            <!-- 密碼 -->
            <label class="w-full p-2 flex items-center gap-1 text-lg font-bold sm:w-32 sm:border-r sm:border-gray"
              for="pw">
              <div class="border border-Mred rounded-full p-2">
                <img src="../../assets/image/other/key-solid.png" alt="" />
              </div>
              密碼
            </label>
            <div class="sm:w-[calc(100%-148px)]">
              <Field class="w-full outline-none border-b border-lgray p-2" id="userPW" name="userPW" type="password"
                label="密碼" :class="{ 'is-invalid': errors['userPW'] }" placeholder="請輸入密碼" rules="required">
              </Field>
              <error-message name="userPW" class="block text-red-700 text-right"></error-message>
            </div>
          </div>
          <!-- 記住我 -->
          <div class="flex justify-between items-center mb-10">
            <div class="flex items-center gap-1">
              <input type="checkbox" name="remember" id="remember" />
              <label class="text-lg font-bold" for="remember">記住我</label>
            </div>
            <RouterLink class="text-lg font-bold" to="/forget">忘記密碼</RouterLink>
          </div>
          <!-- <button class="buttonStyle group" type="submit">
                    <span class="btnWordStyle">登入</span>
                </button> -->
          <RouterLink to="/memberCenter" class="group linkStyle">
            <span class="linkWordStyle">登入</span>
          </RouterLink>
        </Form>
        <!-- 其他方式登入 -->
        <div class="p-5 text-center">
          <div
            class="relative mb-5 lg:mb-10 after:absolute after:content-[''] after:w-4/5 after:h-px after:bg-lgray after:top-1/2 after:left-1/2 after:-translate-y-1/2 after:-translate-x-1/2">
            <p
              class="inline-block relative z-10 px-5 py-2 rounded-tr-3xl rounded-bl-3xl shadow-mYellow bg-Mred text-white">
              其他方式登入
            </p>
          </div>
          <div class="flex items-center justify-center gap-7">
            <div class="flex items-center justify-center border border-Mred p-5 rounded-full">
              <img src="../../assets/image/other/facebook.png" alt="" />
            </div>
            <div class="flex items-center justify-center border border-Mred p-5 rounded-full"
              @click="googleLogin.googleLoginBtn()">
              <img src="../../assets/image/other/google.png" alt="" />
            </div>
            <div class="flex items-center justify-center border border-Mred p-5 rounded-full"
              @click="lineLogin.lineLoginBtn()">
              <img src="../../assets/image/other/line.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <!-- 會員註冊 -->
      <div class="lg:w-1/2">
        <div class="mb-9">
          <h2 class="text-4xl text-Mred font-bold">會員註冊</h2>
          <p>Sign Up</p>
        </div>
        <div class="term shadow-main mb-7 px-10 py-4 text-xs h-[500px] overflow-y-scroll">
          <h3 class="text-4xl text-Mred mb-5">會員條款說明</h3>
          <h4 class="text-xl font-bold mb-2">一、會員服務條款</h4>
          <ol class="mb-4">
            <li class="mb-3">
              本會員服務條款所稱之「會員」，為依照本站所定之加入會員程序加入完成並通過認證者。
            </li>
            <li class="mb-3">
              當您使用本站服務時，即表示您同意及遵守本服務條款的規定事項及相關法律之規定。
            </li>
            <li class="mb-3">
              本站保留有審核加入會員資格之權利，另外已加入會員者，本站亦保留有解除其會員資格之權利。
            </li>
            <li class="mb-3">
              本會員服務條款之修訂，適用於所有會員，當本站修訂本服務條款時，將於本站上公告。
            </li>
          </ol>
          <h4 class="text-xl font-bold mb-2">二、隱私權保護</h4>
          <p class="mb-4">
            尊重並依據本網站「隱私權保護聲明」保護您的隱私(請參閱「隱私權保護聲明」條款)。
          </p>
          <h4 class="text-xl font-bold mb-2">三、會員</h4>
          <ol class="mb-4">
            <li class="mb-3">使用本站所提供之會員服務時，於加入會員時所登錄之帳號及密碼使用之。</li>
            <li class="mb-3">
              會員須善盡帳號及密碼的使用與管理之責任。對於使用該會員之帳號及密碼(無關於會員本身或其他人)
              利用本站服務所造成或衍生之所有行為及結果，會員須自行負擔全部責任。
            </li>
            <li class="mb-3">
              會員之帳號及密碼遺失，或發現無故遭第三者盜用時，應立即通知本站連絡掛失，因未即時通知，
              導致本站無法有效防止及修改時，所造成的所有損失，會員應自負全責。
            </li>
            <li class="mb-3">每次結束使用本服務，執行會員之登出並關閉視窗，以確保您的會員權益。</li>
          </ol>
          <h4 class="text-xl font-bold mb-2">一、會員服務條款</h4>
          <ol class="mb-4">
            <li class="mb-3">
              本會員服務條款所稱之「會員」，為依照本站所定之加入會員程序加入完成並通過認證者。
            </li>
            <li class="mb-3">
              當您使用本站服務時，即表示您同意及遵守本服務條款的規定事項及相關法律之規定。
            </li>
            <li class="mb-3">
              本站保留有審核加入會員資格之權利，另外已加入會員者，本站亦保留有解除其會員資格之權利。
            </li>
            <li class="mb-3">
              本會員服務條款之修訂，適用於所有會員，當本站修訂本服務條款時，將於本站上公告。
            </li>
          </ol>
          <h4 class="text-xl font-bold mb-2">二、隱私權保護</h4>
          <p class="mb-4">
            尊重並依據本網站「隱私權保護聲明」保護您的隱私(請參閱「隱私權保護聲明」條款)。
          </p>
          <h4 class="text-xl font-bold mb-2">三、會員</h4>
          <ol class="mb-4">
            <li class="mb-3">使用本站所提供之會員服務時，於加入會員時所登錄之帳號及密碼使用之。</li>
            <li class="mb-3">
              會員須善盡帳號及密碼的使用與管理之責任。對於使用該會員之帳號及密碼(無關於會員本身或其他人)
              利用本站服務所造成或衍生之所有行為及結果，會員須自行負擔全部責任。
            </li>
            <li class="mb-3">
              會員之帳號及密碼遺失，或發現無故遭第三者盜用時，應立即通知本站連絡掛失，因未即時通知，
              導致本站無法有效防止及修改時，所造成的所有損失，會員應自負全責。
            </li>
            <li class="mb-3">每次結束使用本服務，執行會員之登出並關閉視窗，以確保您的會員權益。</li>
          </ol>
        </div>
        <!-- 同意 -->
        <Form v-slot="{ errors }" action="" class="">
          <div class="flex flex-wrap gap-1 items-center justify-start mb-10">
            <Field id="termsCheckbox" name="termsCheckbox" :value="true" type="checkbox" label="會員條款"
              :class="{ 'is-invalid': errors['termsCheckbox'] }" rules="required">
            </Field>
            <label class="text-lg font-bold" for="termsCheckbox">我已閱讀並同意提供以上資料供垂坤連繫使用。</label>
            <error-message name="termsCheckbox" class="block text-red-700 text-right"></error-message>
          </div>
          <!-- <button class="buttonStyle group" type="submit">
                    <span class="btnWordStyle">下一步</span>
                </button> -->
          <RouterLink to="/register" class="group linkStyle">
            <span class="linkWordStyle">下一步</span>
          </RouterLink>
        </Form>
      </div>
    </div>
  </div>
</template>

<script setup>
import btn_banner from '../../components/btn_banner.vue'
import btn_breadcrumb from '../../components/btn_breadcrumb.vue'
import { uselineLogin, usegoogleLogin } from '../../stores/counter'
import btn_animateBG from '../../components/btn_animateBG.vue'

const lineLogin = uselineLogin()
const googleLogin = usegoogleLogin()
</script>
