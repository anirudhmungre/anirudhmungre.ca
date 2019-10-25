let amountScrolled = 0;
let headerImage = document.getElementById("header-image");
let imageMinimumHeight = window.innerWidth < 500 ? 50 : 100;

const setAmountScrolled = () => {
    amountScrolled = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
};

const resetDistances = () => {
    headerImage.style.borderTopRightRadius = 50/window.innerHeight * amountScrolled > 50 ? "50%" : `${50/window.innerHeight * amountScrolled}%`;
    headerImage.style.borderBottomRightRadius = 50/window.innerHeight * amountScrolled > 50 ? "50%" : `${50/window.innerHeight * amountScrolled}%`;
    headerImage.style.height = ((window.innerHeight - amountScrolled) < imageMinimumHeight) 
                                ? `${imageMinimumHeight}px` : `${window.innerHeight - amountScrolled}px`;
    headerImage.style.width = ((window.innerWidth - amountScrolled * (window.innerWidth/window.innerHeight)) < imageMinimumHeight) 
                                ? `${imageMinimumHeight}px` : `${window.innerWidth - amountScrolled * (window.innerWidth/window.innerHeight)}px`;
};

window.addEventListener("resize", () => {
    imageMinimumHeight = window.innerWidth < 500 ? 50 : 100;
    headerImage.style.height = `${window.innerHeight}px`;
    headerImage.style.width = `${window.width}px`;
    setAmountScrolled();
    resetDistances();
}, false)

window.addEventListener("scroll", () => {
    setAmountScrolled();
    resetDistances();
}, false);

setAmountScrolled();
resetDistances();
