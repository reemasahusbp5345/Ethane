console.log("Carousel js is loaded");

const track = document.querySelector(".SuccessStories_carousel__track__3BxHY");
const slides = Array.from(track.children);
const nextButton = document.querySelector(
  ".SuccessStories_carousel__button__right__2WMIl"
);
const prevButton = document.querySelector(
  ".SuccessStories_carousel__button__left__2Uku0"
);
const dotsNav = document.querySelector(".carousel__nav");
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;
console.log(slideWidth);

//arrange the slides next to one another

const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("SuccessStories_current__slide__1-uZJ");
  targetSlide.classList.add("SuccessStories_current__slide__1-uZJ");
};

const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove("SuccessStories_current__slide__1-uZJ");
  targetDot.classList.add("SuccessStories_current__slide__1-uZJ");
};

const hideShowArrow = (slides, prevButton, nextButton, targetIndex) => {
  if (targetIndex === 0) {
    prevButton.classList.add("is-hidden");
    nextButton.classList.remove("is-hidden");
  } else if (targetIndex === slides.length - 1) {
    prevButton.classList.remove("is-hidden");
    nextButton.classList.add("is-hidden");
  } else {
    prevButton.classList.remove("is-hidden");
    nextButton.classList.remove("is-hidden");
  }
};

//when I click right, move the slides to the right
nextButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(
    ".SuccessStories_current__slide__1-uZJ"
  );
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = dotsNav.querySelector(
    ".SuccessStories_current__slide__1-uZJ"
  );
  const nextDot = currentDot.nextElementSibling;
  const targetIndex = slides.findIndex((slide) => slide === nextSlide);

  //move to the next slide
  moveToSlide(track, currentSlide, nextSlide);
  updateDots(currentDot, nextDot);

  //Show/Hide the arrows
  hideShowArrow(slides, prevButton, nextButton, targetIndex);
});

//when I click left, move the slides to the left
prevButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(
    ".SuccessStories_current__slide__1-uZJ"
  );
  const prevSlide = currentSlide.previousElementSibling;
  const currentDot = dotsNav.querySelector(
    ".SuccessStories_current__slide__1-uZJ"
  );
  const prevDot = currentDot.previousElementSibling;
  const targetIndex = slides.findIndex((slide) => slide === prevSlide);
  //move to the prev slide
  moveToSlide(track, currentSlide, prevSlide);
  updateDots(currentDot, prevDot);

  //Show/Hide the arrows
  hideShowArrow(slides, prevButton, nextButton, targetIndex);
});

dotsNav.addEventListener("click", (e) => {
  const targetDot = e.target.closest("button");

  if (!targetDot) return;

  const currentSlide = track.querySelector(
    ".SuccessStories_current__slide__1-uZJ"
  );
  const currentDot = dotsNav.querySelector(
    ".SuccessStories_current__slide__1-uZJ"
  );
  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  const targetSlide = slides[targetIndex];

  moveToSlide(track, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);

  hideShowArrow(slides, prevButton, nextButton, targetIndex);
});
