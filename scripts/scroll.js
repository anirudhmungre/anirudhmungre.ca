let amountScrolled = 0;
let borderRadius = 0;
let headerImage = document.getElementById("header-image");
// headerImage.style.borderRadius = "0%";
// headerImage.style.height = window.innerHeight;

const setAmountScrolled = () => {
    amountScrolled = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
};

const resetDistances = () => {
    headerImage.style.borderTopRightRadius = `${50/window.innerHeight * amountScrolled}%`;
    headerImage.style.borderBottomRightRadius = `${50/window.innerHeight * amountScrolled}%`;
    headerImage.style.height = ((window.innerHeight - amountScrolled) < 100) 
                                ? `100px` : `${window.innerHeight - amountScrolled}px`;
    headerImage.style.width = ((window.innerWidth - amountScrolled * (window.innerWidth/window.innerHeight)) < 100) 
                                ? `100px` : `${window.innerWidth - amountScrolled * (window.innerWidth/window.innerHeight)}px`;
};

window.addEventListener("resize", () => {
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
