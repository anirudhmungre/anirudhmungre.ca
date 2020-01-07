const doneLoading = () => {
    document.getElementById('loader').style.display = "none";
};

// if (typeof(Worker) !== "undefined") {
//     // Yes! Web worker support!
//     if (typeof(w) == "undefined") {
//         w = new Worker('getTime.js');
//     }
// } else {
//     // Sorry! No Web Worker support..
// }
  

let scene = document.getElementById('scene');
let parallaxInstance = new Parallax(scene, {
    relativeInput: true,
    hoverOnly: true,
    invertX: false,
    invertY: false
});

window.addEventListener('load', doneLoading);
