
// FOR W
const button = document.getElementById ("crash");

document.getElementById("crash").addEventListener("click", handleClick,)

document.addEventListener("keydown", function(event) {
    if (event.key === "w") {  // Change "c" to any key you want
        handleClick();
        whenClicked();
        
    }
});

function handleClick(){
    var audio = new Audio('crash.mp3');
    audio.play();
    whenClicked();
}

function whenClicked(){
    button.classList.add("pressed");

    setTimeout(() => {
        button.classList.remove("pressed");
    }, 2000);
}

// FOR A

const button1 = document.getElementById ("bass");

document.getElementById("bass").addEventListener("click", handleClick1)

document.addEventListener("keydown", function(event) {
    if (event.key === "a") {  // Change "c" to any key you want
        handleClick1();
        whenClicked1();
    }
});

function handleClick1(){
    var audio = new Audio('kick-bass.mp3');
    audio.play();
    whenClicked1();
}

function whenClicked1(){
    button1.classList.add("pressed");

    setTimeout(() => {
        button1.classList.remove("pressed");
    }, 2000);
}
// FOR S

const button2 = document.getElementById ("snare");

document.getElementById("snare").addEventListener("click", handleClick2)

document.addEventListener("keydown", function(event) {
    if (event.key === "s") {  // Change "c" to any key you want
        handleClick2();
        whenClicked2();
    }
});

function handleClick2(){
    var audio = new Audio('snare.mp3');
    audio.play();
    whenClicked2();
}

function whenClicked2(){
    button2.classList.add("pressed");

    setTimeout(() => {
        button2.classList.remove("pressed");
    }, 2000);
}

// FOR D

const button3 = document.getElementById ("tom1");

document.getElementById("tom1").addEventListener("click", handleClick3)

document.addEventListener("keydown", function(event) {
    if (event.key === "d") {  // Change "c" to any key you want
        handleClick3();
        whenClicked3();
    }
});

function handleClick3(){
    var audio = new Audio('tom-1.mp3');
    audio.play();
    whenClicked3();


    function whenClicked3(){
        button3.classList.add("pressed");
    
        setTimeout(() => {
            button3.classList.remove("pressed");
        }, 2000);
    }
}

// FOR J

const button4 = document.getElementById ("tom2");

document.getElementById("tom2").addEventListener("click", handleClick4)

document.addEventListener("keydown", function(event) {
    if (event.key === "j") {  // Change "c" to any key you want
        handleClick4();
        whenClicked4();
    }
});

function handleClick4(){
    var audio = new Audio('tom-2.mp3');
    audio.play();
    whenClicked4();
}

function whenClicked4(){
    button4.classList.add("pressed");

    setTimeout(() => {
        button4.classList.remove("pressed");
    }, 2000);
}

// FOR K

const button5 = document.getElementById ("tom3");

document.getElementById("tom3").addEventListener("click", handleClick5)

document.addEventListener("keydown", function(event) {
    if (event.key === "k") {  // Change "c" to any key you want
        handleClick5();
        whenClicked5();
    }
});

function handleClick5(){
    var audio = new Audio('tom-3.mp3');
    audio.play();
    whenClicked5();
}

function whenClicked5(){
    button5.classList.add("pressed");

    setTimeout(() => {
        button5.classList.remove("pressed");
    }, 2000);
}

// FOR L

const button6 = document.getElementById ("tom4");

document.getElementById("tom4").addEventListener("click", handleClick6)

document.addEventListener("keydown", function(event) {
    if (event.key === "l") {  // Change "c" to any key you want
        handleClick6();
        whenClicked6();
    }
});

function handleClick6(){
    var audio = new Audio('tom-4.mp3');
    audio.play();
    whenClicked6();
}

function whenClicked6(){
    button6.classList.add("pressed");

    setTimeout(() => {
        button6.classList.remove("pressed");
    }, 2000);
}



/*function animateButton(btn) {
    btn.classList.add("pressed");
    setTimeout(() => btn.classList.remove("pressed"), 100);  // Remove after 100ms
}
    */