let myFullpage = new fullpage('#fullpage', {
    licenseKey: FULLPAGE_API_KEY,
    sectionsColor: ['#212121', '#121212', '#212121', '#121212']
});

let scene = document.getElementById('scene');
let parallaxInstance = new Parallax(scene, {
    relativeInput: true
});