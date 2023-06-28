const minus = document.querySelector('.minus');
const input = document.querySelector('.input');
const plus = document.querySelector('.plus');

const coolRanch = document.querySelector('#cool-ranch');

const title = document.querySelector('.header__title');
const text = document.querySelector('.header__text');

const nachoCheese = document.querySelector('#nacho-cheese');
const sweetChilli = document.querySelector('#sweet-chilli');


let currentImg = "nacho_cheese.webp";
let progress = 0;


minus.addEventListener('click', () => {
    if (parseInt(input.value) <= 1) return;
    input.value = parseInt(input.value) - 1
});

plus.addEventListener('click', () => {
    input.value = parseInt(input.value) + 1
});
const animation1 = anime.timeline({
    autoplay: false,
    update: function (anim) {
        progress = Math.round(anim.progress);
    },
    complete: function (anim) {
        progress = 0;
    }
});
animation1.add({
    targets: ".header__img",
    translateX: -1200,
    rotate: '2deg',
    changeComplete: function (anim) {
        document.querySelector(".header__img").src = "images/" + currentImg;
    }
}).add({
    targets: ".header__img",
    translateX: 0,
    rotate: '-15deg',
});


coolRanch.addEventListener("click", () => {
    if (currentImg === "cool_ranch.webp" || progress > 0) return;
    title.innerText = "COOL RANCH";
    text.innerText = "No seasoninghas ever reigned down a cool factor quite like these zesty, crunchy tortilla chips.";
    currentImg = "cool_ranch.webp";

    animation1.play();
});

nachoCheese.addEventListener("click", () => {
    if (currentImg === "nacho_cheese.webp" || progress > 0) return;
    title.innerText = "NACHO CHEESE ";
    text.innerText = "Savory nacho cheese meets crunchy tortilla chip in this crazy delicious snack. 110% awesome.";
    currentImg = "nacho_cheese.webp";

    animation1.play();
});

sweetChilli.addEventListener("click", () => {
    if (currentImg === "spicy_sweet_chili.webp" || progress > 0) return;
    title.innerText = "SWEET CHILLI";
    text.innerText = "This isn’t just a chip. It’s fuel for disruption — our flavors ignite adventure and inspire action.";
    currentImg = "spicy_sweet_chili.webp";

    animation1.play();
});