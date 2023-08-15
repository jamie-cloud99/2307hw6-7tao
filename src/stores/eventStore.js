import { defineStore } from "pinia";
import { computed, reactive } from "vue";

export default defineStore('eventStore', () => {
  const eventList = reactive([
    {
      id: 1,
      date: '19 MAY 2023',
      imgPath: 'event/01.jpg',
      title: '邪典電影派對——房間',
      description: '你有聽說過「大災難家」裡面的主角 Tommy Wiseau 製作的「史上最爛的電影」——房間嗎？在美國甚至演變成一種邪教、一種派對的形式，在電影播放的對著螢幕丟湯匙都...',
      category: '電影'
    },
    {
      id: 2,
      date: '23 MAY 2023',
      imgPath: 'event/02.jpg',
      title: '怪舞俱樂部',
      description: '覺得自己的舞蹈細胞異於常人？每次隨著音樂起舞身邊的人總是露出無法理解的表情？來這裡就對了！來參加這場一起跳舞的聚會，也會在每一次的舞會中選出舞步最怪的...',
      category: '演出'
    },
    {
      id: 3,
      date: '30 MAY 2023',
      imgPath: 'event/03.jpg',
      title: '哈利波特馬拉松',
      description: '每次身邊有人開啟哈利波特的話題，自己永遠都是聽不懂的那個麻瓜？看大家在討論魁地奇、用咒語鬥法的時候，自己永遠是陪笑的那個人？穿好你的法袍、帶上你的法杖...',
      category: '研討會'
    },
    {
      id: 4,
      date: '12 June 2023',
      imgPath: 'event/04.jpg',
      title: '皮卡丘排球大賽',
      description: '還記得小時候玩的小遊戲嗎？總是有朋友吹噓自己獨孤求敗、只求一敗？是時候該展現真正的實力了！本活動採用瑞士制賽程，以絕對公平的方式進行，是時候該證明自己...',
      category: '遊戲競賽'
    },
    {
      id: 5,
      date: '25 June 2023',
      imgPath: 'event/05.jpg',
      title: '酒精路跑',
      description: '身邊總是有對自己酒量有高度自信的朋友嗎？拉著他/她一起來參加酒精路跑吧！一起拍下第一杯直到倒下為止的照片，一起喝遍市區內各家極具品味的酒吧。',
      category: '社群活動'
    },
    {
      id: 6,
      date: '9 July 2023',
      imgPath: 'event/06.jpg',
      title: '展覽——我的房間',
      description: '每個人的房間總會有那麼一兩個能代表自己的物事，或許是再平凡不過的牙刷、馬克杯，或許有那些別人的房間從沒出現過的小東西——那些能定義自己的特別的東西。',
      category: '展覽'
    }
  ])

  const recentEvents = computed(() => {
    return eventList.slice(0, 6)
  })

  return { eventList, recentEvents}
})