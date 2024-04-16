const splash_text_library = [
  "CC14, The Subject of All Time",
  "Sir Venn, The Teacher of All Time",
  "AAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
  "Already ran out of text ideas",
  "Definitely a Moment, or is it??",
  "Sir masyado kayo mabait samin",
  "😏😏😏😏😏😏😏😏😏😏😏😏",
  "Truly one of the Portfolios",
  "Tailwind? More like Failwind",
  "flex-direction: flex-tape;",
  "rather unique set of splash texts",
  "Math.floor(Math.random() * range);"
];

const randomNumberGenerator = (range) => { return Math.floor(Math.random() * range); };

let size = splash_text_library.length
let index = randomNumberGenerator(size)
const splash_text = document.getElementById("splash-text");

splash_text.onclick = () => { splash_text.innerHTML = splash_text_library[randomNumberGenerator(size)]; }