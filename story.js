let colorV = document.querySelector("#color");
let color2V = document.querySelector("#color2");
let patternV = document.querySelector("#pattern")
let landmarkV = document.querySelector("#landmark");
let objectV = document.querySelector("#object");
let numberV = document.querySelector("#number");
let story = document.querySelector("#output")
let btn = document.querySelector("#submitBTN")


btn.addEventListener('click', function() {
    console.log(colorV.value);
    console.log(color2V.value);
    console.log(patternV.value);
    console.log(landmarkV.value);
    console.log(objectV.value);
    console.log(numberV.value);
    story.textContent = "Once upon a time there was a little girl who went to a birthday party filled with balloons." + " One " + colorV.value + " balloon caught here eye because it was spinning round and round. The little girl got curious and followed the balloon to the next room. When she finally caught it, She noticed it had " +
     patternV.value + " on it. She was mesmerized by the, "  + patternV.value + " She looked closely at it and noticed a " + 
     color2V.value + " face in it. This made her scream and run away but the " + colorV.value + " balloon chased her. She could not escape. She  came across twisted " +
    landmarkV.value + " She was cornered. The Balloon finally popped and out came " + color2V.value + " clown. The clown scared the little girl. She found a " +
    objectV.value + " and stabbed the clown with it and the clown popped and exploded into " + numberV.value + " balloons which then exploded into confetti. The little girl ran away and never went to birthday parties again"


})



