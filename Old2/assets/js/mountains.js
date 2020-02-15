const doneLoading = () => {
    document.getElementById('loader').style.display = "none";
};

let scene = document.getElementById('scene');
let parallaxInstance = new Parallax(scene, {
    relativeInput: true,
    hoverOnly: true,
    invertX: false,
    invertY: false
});

window.addEventListener('load', doneLoading);
