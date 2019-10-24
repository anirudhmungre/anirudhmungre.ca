let amountScrolled;
let borderRadius = 0;
let headerImage = document.getElementById("header-image");
headerImage.style.borderRadius = "0%";
headerImage.style.height = window.innerHeight;

const setAmountScrolled = () => {
    amountScrolled = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
    // console.log(amountScrolled);
    // console.log(window.innerHeight);
}

window.addEventListener("scroll", () => {
    let initialAmountScrolled = amountScrolled;
    setAmountScrolled();
    headerImage.style.borderRadius = `${50/window.innerHeight * amountScrolled}%`;
    // console.log(headerImage.offsetHeight);
    // headerImage.style.height = `${window.innerHeight - amountScrolled - 100}px`
    // headerImage.style.width = `${window.innerWidth - amountScrolled - 100}px`
}, false);