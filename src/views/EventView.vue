<template>
  <div class="pt-4 lg:pt-[30px]">
    <div class="container">
      <div class="mb-6 grid grid-cols-12 gap-2 lg:gap-6">
        <div class="col-span-12 lg:col-span-10">
          <div class="lg:border-3 h-full border-2 p-3 lg:p-6">
            <img
              class="block max-h-[180px] w-full object-cover md:max-h-[500px] 2xl:max-h-[560px]"
              :src="$format.getImageUrl(event.imgPath)"
              :alt="event.title"
            />
          </div>
        </div>
        <div class="col-span-12 lg:col-span-2">
          <div class="grid h-full grid-cols-12 flex-col gap-2 lg:flex lg:gap-6">
            <div class="col-span-4">
              <div
                class="lg:border-3 border-2 px-4 py-6 text-center 2xl:px-10 2xl:py-8"
              >
                <p
                  class="font-Yese text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl"
                >
                  {{ event.date.slice(-5) }}
                </p>
              </div>
            </div>
            <div class="col-span-8 flex-grow">
              <div
                class="lg:border-3 flex h-full items-center justify-between border-2 px-6 py-3 text-center lg:flex-col lg:px-8 lg:py-12 2xl:px-10"
              >
                <div
                  class="font-Yese text-[22px] leading-[25px] lg:text-3xl xl:text-4xl 2xl:text-5xl"
                >
                  <p class="">{{ event.date.slice(3, 6) }}</p>
                  <p class="">{{ event.date.slice(0, 3) }}</p>
                </div>
                <div
                  class="h-0.5 w-[50px] -rotate-[60deg] bg-primary lg:my-[45px]"
                ></div>
                <div
                  class="font-Yese 2xl:text-8 leading-[18px] lg:space-y-1 lg:text-2xl"
                >
                  <p>{{ event.startTime }}</p>
                  <p>｜</p>
                  <p>{{ event.endTime }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2
        class="text-8 mb-2 font-serif font-bold tracking-wider lg:mb-4 lg:text-6xl"
      >
        {{ event.title }}
      </h2>
      <h3 class="mb-6 lg:text-[22px]">{{ event.subtitle }}</h3>
      <div class="hidden lg:block">
        <ul class="mb-12 flex gap-2">
          <li class="" v-for="item in event.tags" :key="item">
            <TagComponent :tag="item" />
          </li>
        </ul>
      </div>
      <div
        v-html="event.description"
        class="lg:border-3 mb-6 border-2 p-4 lg:mb-12 lg:p-8"
      ></div>
      <SectionTitle :title="sections[0]" class="mb-2 lg:mb-4"/>
      <table class="mb-12 lg:mb-15 w-full text-left table-auto">
        <thead>
          <tr class="font-serif border-b-2 lg:border-b-3 ">
            <th class="pb-2 lg:pb-4 xl:w-1/4">活動日期</th>
            <th class="pb-2 lg:pb-4 xl:w-1/5">票種</th>
            <th class="pb-2 lg:pb-4 text-center lg:text-left xl:w-1/5">票價</th>
            <th class="pb-2 lg:pb-4 text-center lg:text-left lg:w-[12%] xl:w-[10%] 2xl:w-[7%]">購票</th>
          </tr>
        </thead>
        <tbody class="text-sm">
          <tr class="border-b" v-for="item in event.tickets" :key="item.title">
            <td class="py-4">{{ item.date }}</td>
            <td class="py-4">{{ item.title }}</td>
            <td class="py-4 text-right lg:text-left">{{ item.price }}</td>
            <td class="py-2 text-center lg:text-left">
              <button type="button" class="lg:border-2 border py-2 px-3 font-serif font-bold lg:px-6 hover:bg-primary hover:text-secondary transition-all duration-500 border-primary">
                <span class="hidden lg:inline">立即</span>購票</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import eventStore from "../stores/eventStore";
import TagComponent from "../components/TagComponent.vue";
import SectionTitle from "../components/SectionTitle.vue";

const event = eventStore().event;

const sections = reactive([
  {
    title: '購票資訊',
    engTitle: 'Ticket'
  }
])



</script>
