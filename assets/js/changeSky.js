let d = new Date();
let hour = d.getHours();

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
    let newHour = d.getHours();
    if (newHour !== hour) {
        // REMOVE THIS LATER FOR TESTING ONLY
        // newHour = newHour >= 24 ? 0 : newHour;

        hour = newHour;
        changeGradient(hour);
    }
    setTimeout("currentTime()", 1000);
}

changeGradient(hour);
currentTime();
