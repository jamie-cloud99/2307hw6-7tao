<template>
  <div>
    <p class="font-Yese mb-2 text-[32px] lg:mb-3 xl:text-[48px]">
      {{ props.event.date }}
    </p>
    <hr class="mb-4 border-b-3 lg:mb-3" />
    <img
      class="mb-2 block h-[210px] w-full object-cover lg:mb-3 lg:h-[255px]"
      :src="$format.getImageUrl(props.event.imgPath)"
      :alt="props.event.title"
    />
    <h3 class="mb-2 font-serif text-lg lg:mb-3 lg:text-2xl">
      {{ props.event.title }}
    </h3>
    <p class="mb-4 line-clamp-3">{{ props.event.description }}</p>
    <div class="flex items-center justify-between border-y-2">
      <a href="#" class="py-2 font-serif font-bold block hover:underline">
        <img src="/images/sparkler.png" alt="sparkler" class="w-6 h-6 inline-block pb-1">
        {{ props.event.category }}</a>
      <a href="#" class="relative block py-2 font-bold link-spot"
        >開賣中 <span class="ml-1">»</span>
        <span class="absolute w-0 h-0 top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary -z-10 hide transition-all duration-300"></span>
      </a>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  event: {
    type: Object,
    default: () => ({}),
  },
});

</script>


<style>
.link-spot:hover .hide {
  width: 28px;
  height: 28px;
  display: block;
}

</style>
