<template>
  <main class="pt-8">
    <div class="container">
      <div
        class="mb-8 flex h-[350px] w-full flex-col bg-[url('../assets/images/event/13.jpg')] bg-cover bg-center text-white lg:mb-12 lg:h-[518px]"
      >
        <p data-aos="fade-in" class="pl-10 pt-4 font-Yese text-8 lg:pl-12 lg:pt-12 lg:text-6xl">
          19 MAY 2023
        </p>
        <div class="mb-6 mt-auto grid grid-cols-12 gap-6">
          <div class="col-span-8 col-start-3">
            <h2 data-aos="fade-in"
              class="mb-4 text-center font-serif text-lg font-bold tracking-[0.9px] lg:mb-6 lg:text-2xl lg:tracking-[1.2px]"
            >
              隔牆有耳-沒有草東的派對
            </h2>
            <p data-aos="fade-in" class="hidden text-center lg:block">
              你各位聽團仔們！每次想跟朋友一起聽草東專場卻每一次都搶不到票？「草東沒有派對」永遠都是「草東沒有門票」！<br />
              帶上啤酒、野餐墊，讓我們在Live
              House外面一起開場「沒有草東的派對」吧！
            </p>
          </div>
        </div>
      </div>
      <ul class="mb-8 grid grid-cols-3 gap-6 lg:mb-12 lg:grid-cols-6">
        <li :data-aos="index % 2 === 0 ? 'flip-left' : 'flip-right'" class="col-span-1" v-for="(item, index) in categoryList" :key="item.title">
          <a
            href="#"
            class="flex aspect-square flex-col items-center justify-center border-2"
          >
            <img
              class="mb-2 block h-10 w-10 object-contain md:mb-3 md:h-16 md:w-16 xl:h-20 xl:w-20"
              :src="$format.getImageUrl(item.iconPath)"
              :alt="item.title"
            />
            <h3 class="text-center font-serif font-bold md:text-xl lg:text-2xl">
              {{ item.title }}
            </h3>
          </a>
        </li>
        <li data-aos="zoom-in" class="col-span-1">
          <a
            href="#"
            class="flex aspect-square items-center justify-center border-2 border-primary bg-primary text-secondary"
          >
            <h3
              class="text-center font-serif text-2xl font-bold md:text-3xl xl:text-5xl"
            >
              探索<br />更多
            </h3>
          </a>
        </li>
      </ul>
      <SectionTitle data-aos="fade-in" :title="sections[0]" class="mb-6 lg:mb-8" />
      <ul
        class="mb-8 grid grid-cols-1 gap-6 md:mb-12 md:grid-cols-2 md:gap-y-8 lg:mb-15 lg:grid-cols-3 lg:gap-y-12"
      >
        <li data-aos="zoom-in"
          class="col-span-1"
          v-for="item in events.recentEvents"
          :key="item.id"
        >
          <EventCard :event="item" />
        </li>
      </ul>
      <SectionTitle data-aos="fade-in" :title="sections[1]" class="mb-6 lg:mb-8" />
      <div class="mb-8 grid grid-cols-1 gap-x-6 gap-y-3 lg:grid-cols-12 overflow-hidden">
        <div data-aos="fade-up-right" class="col-span-1 lg:col-span-7">
          <img
            :src="$format.getImageUrl(onlineEvent.imgPath)"
            :alt="onlineEvent.title"
            class="mb-3 block h-[158px] w-full object-cover object-[center_30%] md:min-h-[240px] lg:mb-0 lg:min-h-[325px]"
          />
        </div>
        <div data-aos="fade-up-left" class="col-span-1 lg:col-span-5">
          <h3 class="mb-2 font-serif text-lg font-bold lg:mb-4 lg:text-8">
            {{ onlineEvent.title }}
          </h3>
          <ul class="mb-3 flex gap-x-2 lg:mb-8">
            <li v-for="item in onlineEvent.tags" :key="item">
              <TagComponent :tag="item" />
            </li>
          </ul>
          <p
            v-html="onlineEvent.description"
            class="mb-3 line-clamp-[8] lg:mb-8 lg:line-clamp-5"
          ></p>
          <button type="button" class="btn w-full">
            查看活動詳情 <span class="ml-1">»</span>
          </button>
        </div>
      </div>
    </div>
    <div class="mb-8 lg:mb-15">
      <TextMarquee />
      <div class="container pb-11 pt-12 lg:pb-14 lg:pt-15">
        <AlbumsComponent />
      </div>
      <TextMarquee />
    </div>
    <div class="container">
      <div class="mb-12 grid grid-cols-1 gap-y-6 lg:mb-15 lg:grid-cols-2">
        <div class="col-span-1">
          <div class="divide-y-2 border-2">
            <div class="px-3 py-4 lg:px-8">
              <h2 data-aos="fade-in" data-aos-duration="1000" data-aos-anchor-placement="bottom-bottom" data-aos-delay="300" class="font-serif text-2xl font-bold uppercase lg:text-8">
                #FOLLOW US
              </h2>
            </div>
            <div data-aos="fade-in" data-aos-delay="300" class="px-3 py-4 lg:px-8 lg:py-8">
              <p class="mb-4 lg:mb-8">
                想第一時間獲得新奇有趣的活動資訊？ <br />追蹤我們的社群吧！
                <br />
                也歡迎你聯繫我們，提供好玩有趣的活動企劃。
              </p>
              <ul class="space-y-4">
                <li
                  class="flex items-center gap-4 hover:text-secondary-dark"
                  v-for="item in contactList"
                  :key="item.title"
                >
                  <div
                    class="flex h-8 w-8 items-center justify-center bg-primary text-white"
                  >
                    <i :class="item.icon"></i>
                  </div>
                  <a :href="item.link" class="block">{{ item.content }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-span-1">
          <div class="flex h-full flex-col divide-y-2 border-2 lg:border-l-0">
            <div  class="px-3 py-4 lg:px-8">
              <h2 data-aos="fade-in" data-aos-anchor-placement="bottom-bottom" data-aos-delay="500" class="font-serif text-2xl font-bold uppercase lg:text-8">
                #subscribe us
              </h2>
            </div>
            <div data-aos="fade-in" data-aos-delay="500" class="flex-grow px-3 py-4 lg:px-8 lg:py-8">
              <p class="mb-4 lg:mb-8">
                訂閱電子報送折價券！ <br />定期精選文章資訊及最新優惠資訊，
                <br />
                還不通通給我訂閱起來？
              </p>
              <input
                type="email"
                class="form-input mb-4 w-full border-2 border-primary bg-transparent px-6 py-4 placeholder:text-[#4F4F4F]"
                placeholder="輸入Email"
              />
            </div>
            <button data-aos="fade-in" type="button" class="btn mt-auto w-full border-primary">
              確認訂閱
              <span class="ml-1">»</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <hr class="border-b-3" />
    <div class="py-12">
      <div class="container">
        <p data-aos="fade-in" 
          class="text-center font-serif text-lg font-bold md:text-2xl lg:text-8"
        >
          此刻打盹，你將做夢；此刻學習，你將圓夢
        </p>
      </div>
    </div>
  </main>
</template>

<script setup>
import { reactive } from "vue";
import eventStore from "../stores/eventStore";
import EventCard from "../components/EventCard.vue";
import TagComponent from "../components/TagComponent.vue";
import TextMarquee from "../components/TextMarquee.vue";
import AlbumsComponent from "../components/AlbumsComponent.vue";
import SectionTitle from "../components/SectionTitle.vue";

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();



const events = eventStore();
const categoryList = reactive([
  {
    iconPath: "category/cate01.svg",
    title: "演出",
  },
  {
    iconPath: "category/cate02.svg",
    title: "聯誼",
  },
  {
    iconPath: "category/cate03.svg",
    title: "展覽",
  },
  {
    iconPath: "category/cate04.svg",
    title: "美食",
  },
  {
    iconPath: "category/cate05.svg",
    title: "戶外",
  },
]);
const onlineEvent = reactive({
  title: "切特居批踢",
  imgPath: "event/online.jpg",
  description:
    "最近網路上很流行的AI程式 ChatGPT，可以用來聊天或是查詢、整理各種資料，不同的應用方式如雨後春筍般冒出來。<br>這個活動讓大家把自己最有特色的使用方法提出來讓大家參考，也會投票出最有趣的用法。<br>該讓其他人知道自己使用 ChatGPT 的姿勢才是最特別的那個了！",
  tags: ["競賽", "科技", "有趣"],
});
const contactList = reactive([
  {
    icon: "icofont-ui-email",
    title: "email",
    content: "7tao.event@gmail.com",
    link: "mailto:7tao.event@gmail.com",
  },
  {
    icon: "icofont-phone",
    title: "phone",
    content: "09123123123",
    link: "+8869123123123",
  },
  {
    icon: "icofont-facebook",
    title: "facebook",
    content: "7TAO七逃",
    link: "",
  },
]);

const sections = reactive([
  {
    title: "近期活動",
    engTitle: "Recent",
  },
  {
    title: "線上活動",
    engTitle: "Online",
  },
]);





</script>
