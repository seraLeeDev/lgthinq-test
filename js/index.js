// Global settings:
AOS.init({
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 0, // offset (in px) from the original trigger point
  delay: 50, // values from 0 to 3000, with step 50ms
  duration: 500, // values from 0 to 3000, with step 50ms
  easing: "ease-in-out-cubic", // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

//FAQ 클릭 시 클래스 토글
const FaqList = document.getElementById("faqList");

const toggleFaq = () => {
  const toggleWrap = event.target.parentElement.parentElement;
  const answerBox = toggleWrap.parentElement.nextElementSibling;

  toggleWrap.classList.toggle("open");
  answerBox.classList.toggle("hidden");
};

//빼기 앱 바로가기 링크
const bbegiLink = {
  stg: "https://bbegi.page.link/NiEpLmXxsvwb8NX87",
  prod: "https://bbegi.page.link/J7QE2qwQfyCpytDs7",
};

//내려드림 배너 링크
const bannerLink = {
  stg: "https://bbegi.page.link/agETCUvmVqckxPEf7",
  prod: "https://bbegi.page.link/66dwHKnKsjcsLKJN9",
};

//빼기 FAQ 링크
const faqLink =
  "https://gatdahome.notion.site/FAQ-77135bc9814940fd8cad62ce1faf0e9c#b536a3d8f3e54a468b37ddd0a35136e8";

//링크 이동 함수
const routeUrl = (url) => {
  window.location.href = url;
};
