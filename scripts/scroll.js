let amountScrolled;
let headerMinimumDimension;
let headerImage = document.getElementById("header-image");
let headerNav = document.getElementById("header-nav");
let content = document.getElementById("content");

const start = () => {
    headerMinimumDimension = window.innerWidth < 500 ? 50 : 100;
    headerImage.style.height = `${window.innerHeight}px`;
    headerImage.style.width = `${window.width}px`;
    headerNav.style.height = `${headerMinimumDimension * 0.6}px`;
    setAmountScrolled();
    resetDistances();
}

const belowHeader = () => {
    return amountScrolled > window.innerHeight;
}

const setAmountScrolled = () => {
    amountScrolled = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
};

const resetDistances = () => {
    if (belowHeader()) {
        if (headerNav.classList.contains("animate-nav-out")) {
            headerNav.classList.remove("animate-nav-out");
        }
        if (!headerNav.classList.contains("animate-nav-in")) {
            headerNav.classList.add("animate-nav-in");
        }
    } else {
        // There is a reason this if statement is different
        if (headerNav.classList.contains("animate-nav-in") && !headerNav.classList.contains("animate-nav-out")) {
            headerNav.classList.remove("animate-nav-in");
            headerNav.classList.add("animate-nav-out");
        }
    }
    headerImage.style.borderBottomLeftRadius = 50 / window.innerHeight * amountScrolled > 50 ? "50%" : `${50 / window.innerHeight * amountScrolled}%`;
    headerImage.style.borderBottomRightRadius = 50 / window.innerHeight * amountScrolled > 50 ? "50%" : `${50 / window.innerHeight * amountScrolled}%`;
    headerImage.style.height = window.innerHeight - (window.innerHeight * (amountScrolled / (window.innerHeight - headerMinimumDimension))) < headerMinimumDimension
        ? `${headerMinimumDimension}px` : `${window.innerHeight - (window.innerHeight * (amountScrolled / (window.innerHeight - headerMinimumDimension)))}px`;
    headerImage.style.width = window.innerWidth - window.innerWidth * (amountScrolled / (window.innerHeight-headerMinimumDimension)) < headerMinimumDimension
        ? `${headerMinimumDimension}px` : `${window.innerWidth - (window.innerWidth * (amountScrolled / (window.innerHeight-headerMinimumDimension)))}px`;
    content.style.marginTop = amountScrolled + headerImage.offsetHeight > window.innerHeight ? content.style.marginTop : `${amountScrolled + headerImage.offsetHeight}px`;
};

window.addEventListener("resize", () => {
    start();
}, false)

window.addEventListener("scroll", () => {
    setAmountScrolled();
    resetDistances();
}, false);

start();
