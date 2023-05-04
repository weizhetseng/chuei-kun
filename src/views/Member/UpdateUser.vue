<template>
  <div class="mb-20 flex gap-10">
    <div class="w-1/5 hidden lg:block">
      <btn_memberList />
    </div>
    <div class="w-full lg:w-4/5">
      <form action="" class="w-full xs:w-2/3 m-auto" @submit="sendData()" v-if="!sendStatus">
        <div class="flex flex-col gap-5 mb-6 xs:flex-row">
          <label class="w-full text-lg p-1 xs:border-r xs:border-gray xs:w-[100px]" for="name">姓名</label>
          <input class="w-full outline-none border-b border-lgray xs:w-[calc(100%-120px)]" id="name" type="text"
            placeholder="請輸入姓名" />
        </div>
        <div class="flex flex-col gap-5 mb-6 xs:flex-row">
          <div class="w-full text-lg p-1 xs:border-r xs:border-gray xs:w-[100px]">性別</div>
          <div class="flex gap-5">
            <div class="flex items-center gap-2">
              <input type="radio" name="sex" id="male" />
              <label for="male">男</label>
            </div>
            <div class="flex items-center gap-2">
              <input type="radio" name="sex" id="female" />
              <label for="female">女</label>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-5 mb-6 xs:flex-row">
          <label class="w-full text-lg p-1 xs:border-r xs:border-gray xs:w-[100px]" for="date">生日</label>
          <input
            class="dateStyle w-1/2 outline-none shadow-main rounded-lg p-2 bg-date bg-no-repeat bg-[length:20px_20px] bg-[center_right_10px]"
            id="date" type="date" />
        </div>
        <div class="flex flex-col gap-5 mb-6 xs:flex-row">
          <label class="w-full text-lg p-1 xs:border-r xs:border-gray xs:w-[100px]" for="email2">電子信箱</label>
          <input class="w-full outline-none border-b border-lgray xs:w-[calc(100%-120px)]" id="email2" type="text"
            placeholder="請輸入電子信箱" />
        </div>
        <div class="flex flex-col gap-5 mb-6 xs:flex-row">
          <label class="w-full text-lg p-1 xs:border-r xs:border-gray xs:w-[100px]" for="emailQ">驗證碼</label>
          <input class="w-full outline-none shadow-main rounded-lg p-2 xs:w-[calc(100%-120px)]" id="emailQ" type="text"
            placeholder="請輸入驗證碼" />
        </div>
        <div class="flex flex-col gap-5 mb-6 xs:flex-row">
          <label class="w-full text-lg p-1 xs:border-r xs:border-gray xs:w-[100px]" for="hphone">市話</label>
          <input class="w-full outline-none border-b border-lgray xs:w-[calc(100%-120px)]" id="hphone" type="text"
            placeholder="請輸入市話號碼" />
        </div>
        <div class="flex flex-col gap-5 mb-6 xs:flex-row">
          <label class="w-full text-lg p-1 xs:border-r xs:border-gray xs:w-[100px]" for="">聯絡地址</label>
          <div class="w-full flex flex-col xs:flex-row xs:gap-3 xs:w-[calc(100%-120px)]">
            <template v-if="disabledLoad != ''">{{ disabledLoad }}</template>
            <template v-else>
              <select class="w-full mb-5 outline-none shadow-main rounded-lg p-2 xs:w-1/3 xs:mb-0" name="" id="" v-model.number="selectCity" @change="selectArea = 0;selectRoad = 0">
                <option :value="0">請選擇縣市</option>
                <option
                    v-for="item in showCity"
                    :key="item.Id"
                    :value="item.Id">{{ item.Title }}</option>
              </select>
              <select class="w-full mb-5 outline-none shadow-main rounded-lg p-2 xs:w-1/3 xs:mb-0" name="" id="" v-model.number="selectArea" @change="selectRoad = 0">
                <option value="0">請選擇鄉鎮區</option>
                <option
                    v-for="item in showArea.filter(t => t.CityId == selectCity)"
                    :key="item.Id"
                    :value="item.Id">{{ item.Title }}</option>
              </select>
              <select class="w-full outline-none shadow-main rounded-lg p-2 xs:w-1/3" name="" id="" v-model.number="selectRoad">
                <option value="0">請選擇街道</option>
                <option
                    v-for="item in showRoad.filter(t => t.AreaId == selectArea)"
                    :key="item.Id"
                    :value="item.Id">{{ item.Title }}</option>
              </select>
            </template>
          </div>
        </div>
        <div class="flex flex-col gap-5 mb-16 xs:flex-row">
          <label class="hidden xs:w-[100px] xs:block" for=""></label>
          <input class="outline-none shadow-main rounded-lg p-2 xs:w-[calc(100%-120px)]" type="text"
            placeholder="請輸入詳細地址" />
        </div>
        <div class="flex justify-center items-center gap-5">
          <button class="buttonStyle2 group" type="reset">
            <span class="btnWordStyle2">清除</span>
          </button>
          <button class="buttonStyle group" type="submit">
            <span class="btnWordStyle">送出</span>
          </button>
        </div>
      </form>
      <div class="mt-7" v-else>
        <p class="text-center text-3xl font-bold text-Mred mb-20">修改資料成功</p>
        <div class="text-center">
          <RouterLink to="/" class="group linkStyle">
            <span class="linkWordStyle">返回首頁</span>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
//模組引入
import { onMounted, ref } from 'vue'
//組件引入
import btn_memberList from '../../components/btn_memberList.vue'
import { apiGetCityCategory } from '../../api/api'

const sendStatus = ref(false)
const showCity = ref([])
const showArea = ref([])
const showRoad = ref([])
const selectCity = ref(0)
const selectArea = ref(0)
const selectRoad = ref(0)
const disabledLoad = ref('載入中')

function sendData() {
  sendStatus.value = true
}

onMounted(() => {
  apiGetCityCategory({
        "u_id": $cookies.get('u_id'),
        "Lang": 'tw'//語系跟明緯設定一樣寫到cookie，只是在這邊預設給tw，以後其他專案有要分語系拿來用就不用再調整
    })
        .then((res) => {
          const errorCodes1 = ['01', '97', '98'];
          let checkNum = res.data.message.substr(0, 2);
          if (parseInt(checkNum) <= 0) {
            alert("目前系統繁忙，暫時無法處理您的要求，請稍後在試");
          } else if (errorCodes1.includes(checkNum)) {
            if (checkNum == '01')
            {
              disabledLoad.value = res.data.message.substr(3)
            } else {
              alert(res.data.message.substr(3));
            }
          } else if (checkNum != '99') {
            alert(res.data.message.substr(3));
          } else {
            showCity.value = res.data.CityList
            showArea.value = res.data.AreaList
            showRoad.value = res.data.RoadList
            disabledLoad.value = ''
          }

          if (checkNum != '99' && disabledLoad.value == '載入中')
          {
            disabledLoad.value = '載入失敗'
          }
        })
        .catch((error) => {
          console.log(error);
          alert('目前系統繁忙，暫時無法處理您的要求，請稍後在試');
        })
        .then(() => {

        });
})
</script>
