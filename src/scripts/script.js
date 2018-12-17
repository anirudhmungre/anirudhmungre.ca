let body = document.querySelector("body")
console.log(body)
body.onscroll = function(){
    let stylesheet = document.styleSheets[1]
    stylesheet.cssRules[2].style.backgroundColor="white"//"0px 20px 10px white"
}