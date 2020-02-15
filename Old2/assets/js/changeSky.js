let d = new Date();
let hour = d.getHours();

// THIS IS JUST TO ONLY USE CERTAIN HOURS DELETE LATER
let minHour = 19
let maxHour = 22
let newHour = parseInt((Math.random() * (maxHour - minHour + 1)), 10) + minHour;
// THIS IS JUST TO ONLY USE CERTAIN HOURS DELETE LATER

const changeGradient = (index) => {
    document.getElementById('sky').style.opacity = mountainConfig[index]['opacity'];
    document.getElementById('header').style.background = mountainConfig[index]['gradient'];

    let mountains = document.getElementsByClassName('mountain');
    for (let i = 0; i < mountains.length; i++) {
        mountains[i].style.filter = mountainConfig[index]['brightness'];
    }
};

const currentTime = () => {
    d = new Date();
    // let newHour = d.getHours();
    if (newHour !== hour) {
        // REMOVE THIS LATER FOR TESTING ONLY
        newHour = newHour >= 24 ? 0 : newHour;

        hour = newHour;
        changeGradient(hour);
    }
    setTimeout("currentTime()", 1000);
}

changeGradient(hour);
currentTime();
