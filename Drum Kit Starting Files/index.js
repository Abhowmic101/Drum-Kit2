const drums = document.getElementsByClassName("drum");
const lengthOfDrums = drums.length;
for (let i = 0; i < lengthOfDrums; i++) {
    drums[i].addEventListener('click', function () {
        // alert("Drum Key " + (i + 1) + " " + " got clicked");
        var audio = new Audio("sounds/tom-" + i + ".mp3");//audio is a object here.
        audio.play();//play() method
    })
}
