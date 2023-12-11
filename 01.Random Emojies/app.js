const emoji = document.querySelector(".randomEmoji");
const vehicle = document.querySelector(".randomVehicle");
const body = document.querySelector("body");
const emojiList = [
  "😊",
  "😂",
  "😒",
  "🤣",
  "😍",
  "😘",
  "😉",
  "😎",
  "😢",
  "😜",
  "😗",
  "🥲",
  "🤔",
  "🫡",
  "🙄",
  "😥",
  "😴",
  "🫤",
  "😟",
  "😤",
  "😭",
  "😨",
  "😠",
  "🥺",
  "🤓",
];

const vehicles = [
  "🚗",
  "🚕",
  "🛺",
  "🛻",
  "🚒",
  "🚜",
  "🚔",
  "🚲",
  "🏎️",
  "🛵",
  "🚋",
  "🚂",
  "🚀",
  "🪂",
  "🚁",
  "⚓",
  "🏭",
];

emoji.addEventListener("mouseover", () => {
  emoji.innerHTML = emojiList[Math.floor(Math.random() * emojiList.length)];
});

vehicle.addEventListener("mouseover", () => {
  vehicle.innerHTML = vehicles[Math.floor(Math.random() * vehicles.length)];
});
