const doneLoading = () => {
    document.getElementsByClassName('loader').style.visibility = "hidden";
}

let scene = document.getElementById('scene');
let parallaxInstance = new Parallax(scene, {
    relativeInput: true,
    hoverOnly: true,
    invertX: false,
    invertY: false,
    onReady: doneLoading()
});
document.getElementsByClassName('loader').visibility = "hidden";