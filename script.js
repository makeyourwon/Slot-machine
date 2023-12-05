let chances = 3 
let state = 1



// set 13 slots for each reel.
const img = [
    '🎄',
    '❄️',
    '🔥',
    '🎉',
    '👀',
    '🥳',
    '🌟',
    '💩',
    '☃️',
    '🐔',
    '🥩',
    '🥟',
    '🍓',
]


//Set the default dispaly by randomly picking an icon from the img array.
const reelIcon = document.querySelectorAll('.reel')
// reelIcon.forEach((element) => {
//     element.innerText = img[Math.round(Math.random()*(img.length-1))]

// });

//Get the array of the reels. related to promise.
const reelArray =[]
reelIcon.forEach((element)=>{
     reelArray.push(element.textContent)
})


const startBtn = document.querySelector('#start')
const resetBtn = document.querySelector('#reset')
const message = document.querySelector('.message')
const reel = document.querySelector('.reel')
const icon = document.querySelectorAll('.icon')
const emoji = document.createElement('div')
emoji.classList.add('emoji')


//Append the image array to the reelicon.
reelIcon.forEach(element =>{
    for (let i=0; i<img.length; i++){
        emoji.textContent = img[i]
        element.appendChild(emoji.cloneNode(true))

    }})


//add event listener.
startBtn.addEventListener('click', init)

//start button function
function init(){
    if (state === 1){
        spin()

    }
}
// get the arry of emojiheight:
const emojiHeights = Array.from(document.querySelectorAll('.emoji')).map(
    (emojiElement) => emojiElement.clientHeight + 'px'
);
const emojiHeight = emojiHeights[1]
// console.log(emojiHeight);

// get the length of the img which is also the length of the spinner.
const spinnerHeight = 80 * img.length




//Get the new array after the START button clicked.
function change(i){
    const randomIndex = Math.floor(Math.random()*(img.length))
    // const randomOffset = -randomIndex * reel.clientHeight + 'px'
    const translateY = -randomIndex
    reelIcon[i].style.transform = `translateY(${translateY/img.length*100}%)`
    // reelIcon[i].style.transform = `${randomOffset}px`
    // reelIcon[i].style.transform = `translateY(${translateY})`;
    console.log(spinnerHeight)
    console.log(`${translateY/img.length * 100}%`)
    console.log(randomIndex)
    //Define randomIndex
    const displayIcon = img[randomIndex]
    console.log(displayIcon)
    return displayIcon

}






reel.addEventListener('transitionend',()=>{
    chances--
    if (chances === 0){
        spin()}
    }, {once:true})

//Set promise.
function timeout(ms){
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}



async function spin(){
    
        await timeout(500)
        const result0 = change(0)
        console.log(result0)
        await timeout(500)
        const result1 = change(1)
        console.log(result1)
        await timeout(500)
        const result2 = change(2)
        console.log(result2)

        compareResult(result0,result1,result2)
        
    //get the new array. could DELETE later.
    // reelIcon.forEach((element,index)=>{
    //     reelArray[index] = element.textContent})
    // console.log(reelArray)
}

//Compare the result to decide if there is a winner.
function compareResult(result0,result1,result2){
    chances -=1
    if (result0 === result1 && result1 === result2) {
        message.innerText = 'You won!'
        state = -1
        startBtn.style.backgroundColor = 'grey';
    }else{
        if (chances === 2){
            message.innerText = `You have ${chances} more chances.`
            // console.log(`You have ${chances} chances.`)
            
        }else  if (chances === 1){
            message.innerText = `You have ${chances} more chance.`
            // console.log(`You have ${chances} chances.`)
        }else if(chances === 0){
            message.innerText = `You lost.`
            // console.log(`You lost.`)
            state = -1
            startBtn.style.backgroundColor = 'grey';
        }

    }
}

//Add reset button listener.
document.querySelector('#reset').addEventListener('click', reset)

// Reset button function.
 function reset(){

    chances = 3
    message.innerText = 'Click START to play.'
    startBtn.style.backgroundColor = 'rgb(42, 142, 26)'
    reelIcon.forEach(element =>{
        element.style.transform = `translateY(0%)`
    })
    
    state = 1
 }