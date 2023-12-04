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
reelIcon.forEach((element) => {
    element.innerText = img[Math.round(Math.random()*(img.length-1))]
    // element.innerHTML = `<img src="${img[13]}">`
});

//Get the array of the reels.
const reelArray =[]
reelIcon.forEach((element)=>{
     reelArray.push(element.textContent)
})

//add event listener.

const startBtn = document.querySelector('#start')
const resetBtn = document.querySelector('#reset')
const message = document.querySelector('.message')

startBtn.addEventListener('click', init)

function init(){
    if (state === 1){
        spin()

    }
}
//Get the new array after the START button clicked.
function change(i){
    // reelArray[i] = img[Math.round(Math.random()*(img.length-1))]
    // // return (reelArray)
    // console.log(reelArray)
    reelIcon[i].innerText = img[Math.round(Math.random()*(img.length-1))]

}

//Set promise.
function timeout(ms){
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}

// function startSpin(){
//     return new Promise((resolve) =>{
//     reelIcon.forEach((element)=>{element.classList.add('spin-animation')
//     })
//     })
// }
// function stopSpin(){
//     return new Promise((resolve) =>{
//     reelIcon.forEach((element)=>{element.classList.remove('spin-animation')})
//     })
// }
// When START button is clicked, the reels starts to spin asynchronously.
async function spin(){
    // await startSpin()
    // await stopSpin()
    await timeout(1000)
    change(0)
    await timeout(1000)
    change(1)
    await timeout(1000)
    change(2)
    compareResult()

    //get the new array. could DELETE later.
    reelIcon.forEach((element,index)=>{
        reelArray[index] = element.textContent})
    console.log(reelArray)
}

function compareResult(){
    chances -=1
    if (reelArray[0]=== reelArray[1] && reelArray[1] === reelArray[2]) {
        message.innerText = 'You won!'
        state = -1
        startBtn.style.backgroundColor = 'grey';
    }else{
        if (chances === 2){
            message.innerText = `You have ${chances} more chances.`
            console.log(`You have ${chances} chances.`)
            
        }else  if (chances === 1){
            message.innerText = `You have ${chances} more chance.`
            console.log(`You have ${chances} chances.`)
        }else if(chances === 0){
            message.innerText = `You lose.`
            console.log(`You lose.`)
            state = -1
            startBtn.style.backgroundColor = 'grey';
        }

    }
}

document.querySelector('#reset').addEventListener('click', reset)

 function reset(){

    chances = 3
    message.innerText = 'Click START to play.'
    startBtn.style.backgroundColor = 'rgb(42, 142, 26)'
    state = 1
 }