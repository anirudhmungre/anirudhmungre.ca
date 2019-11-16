let myFullpage = new fullpage('#fullpage', {
    licenseKey: FULLPAGE_API_KEY,
    sectionsColor: ['#212121', '#212121', '#212121', '#212121']
});

let scene = document.getElementById('scene');
let parallaxInstance = new Parallax(scene, {
    relativeInput: true
});
