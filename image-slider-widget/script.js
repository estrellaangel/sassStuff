$(function(){

    let interval;
    let isRunning = true;

    function displayImgs(){
        clickNum = 0;
        interval = setInterval(function(){
        let newImg = document.createElement('div');
        let r = Math.floor(Math.random()*225);
        let b = Math.floor(Math.random()*225);
        let g = Math.floor(Math.random()*225);
        newImg.style.width = "100px";
        newImg.style.height = "100px";
        newImg.style.background = `RGB(${r}, ${g}, ${b})`;
        newImg.addEventListener('click', onOff);
        boxs.appendChild(newImg);
        }, 1000)
    }

displayImgs();

function onOff(){
    if(isRunning){
        isRunning = false;
        clearInterval(interval);
    }else{
        isRunning = true;
        displayImgs();
    }
}

    // let $indivBox = $("#individualBox");
    // function stopDisplay(){
    //     alert('WORKDIN')
    //     clickNum++;
    //     clearInterval(interval);
    //     if(clickNum >= 2){
    //         displayImgs();
    //     }
    // };
    // let $individualBox = $(".individualBox");

    // $individualBox
    //     .on(`click`, stopDisplay)

    // $indivBox
    // .on('click', stopDisplay());


    // let $boxs = $(`#box`);
    // $boxs
    // .on('click', stopDisplay());
        





// //Build Settings For Slider
// let width = 720;
// let animationSpeed = 1500;
// let pause = 2000; //2000 + 500 delay

// //cache DOM elements
// let $slideContainer = $('.slides');
// let $slides = $('.slide');

// let interval;
// let currentSlide = 1;


//create a function that will start the slider
// function startSlider(){
//     interval = setInterval(function(){
//         //animating the slide container will cause the action in the function to happen every delay
//         $slideContainer.animate(
//             {'margin-left': '-='+ width},
//             animationSpeed,
//             function(){
//                 for(let i = 0; i<6; i++){
//                     array[i] = Math.floor(Math.random()*6)+1
//                 }
//                 currentSlide = array[0];
//                 if(currentSlide == $slides.length){
//                     currentSlide = array[0];
//                     $slideContainer.css('margin-left',0);
//                 }
//             }
//         )
//     }, pause);
// };


// // function pauseSlider(){
// //     clearInterval(interval);
// // };

// startSlider();

// let $background = $("#background")
// let randomizer;
// function background(){
//     randomizer = setInterval(function(){
//         let randomColor = [(Math.floor(Math.random()*256)+1), (Math.floor(Math.random()*256)+1), (Math.floor(Math.random()*256)+1)] 
//         $($background).css({'background-color': randomColor}),
//         3000,
//     }, 3000, 0)
// }

// background();



// $slideContainer
//     .on(`mouseenter`, pauseSlider)
//     .on(`mouseleave`, startSlider)

// let html = $('html');

// let delay = 1000;
// let interval;

// function backgroundRandom(){
//     interval = setInterval(function(){
        // let r = Math.floor(Math.random()*225);
        // let b = Math.floor(Math.random()*225);
        // let g = Math.floor(Math.random()*225);
        // let $backgroundColor = `RGB(${r}, ${g}, ${b})`;
//         html.css(`background-color`, $backgroundColor);
//     }, delay);
// }

// backgroundRandom();

// });


// let interval;

//     function every3secs(){
//         let randPicNum = Math.random()*6 + 1;
//         interval = setInterval(function(){
//             $slideContainer.animate(
//                 {'margin-left': '-='+ width},

//             )
//         }, 3000)
        
        
        
//     }
// $slideContainer
//     .on('mouseleave', every3secs)
});