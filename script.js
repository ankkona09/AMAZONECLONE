// JavaScript code
const slider = document.querySelectorAll(".slide");
var counter = 0;
var timer;

slider.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const goPrev = () => {
    if (counter === 0) {
        counter = slider.length - 1;
    } else {
        counter--;
    }
    slideShow();
};

const goNext = () => {
    if (counter === slider.length - 1) {
        counter = 0;
    } else {
        counter++;
    }
    slideShow();
};

const slideShow = () => {
    slider.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
};

// Function to automatically slide after 5 seconds
const startAutoSlide = () => {
    timer = setInterval(() => {
        goNext();
    }, 6000); // 6000 milliseconds = 6 seconds
};

// Function to stop automatic sliding
const stopAutoSlide = () => {
    clearInterval(timer);
};

// Start automatic sliding on page load
startAutoSlide();

document.getElementById("prevbtn").addEventListener("click", goPrev);
document.getElementById("nextbtn").addEventListener("click", goNext);

// Event listeners for buttons to stop automatic sliding when clicked
document.querySelector(".hero").addEventListener("mouseenter", stopAutoSlide);
document.querySelector(".hero").addEventListener("mouseleave", startAutoSlide);
