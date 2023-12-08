let chances = 3 
let state = -1


const winSound = new Audio('winSound.wav')
const loseSound = new Audio('loseSound.wav')

// set 13 slots for each reel.
const img = [
    '🎄',
    '❄️',
//     '🔥',
//     '🎉',
//     '👀',
//     '🥳',
//     '🌟',
//     '💩',
//     '☃️',
//     '🐔',
//     '🥩',
//     '🥟',
//     '🍓',
]


//Set the default dispaly by randomly picking an icon from the img array.
const reelIcon = document.querySelectorAll('.reel')

// Define variables.
const startBtn = document.querySelector('#start')
const resetBtn = document.querySelector('#reset')
const submitBtn = document.querySelector('#submit')
const inputValue = document.querySelector('input')
const message = document.querySelector('.message')
const reel = document.querySelector('.reel')
const icon = document.querySelectorAll('.icon')
const emoji = document.createElement('div')
const userName = document.querySelector('.name').value
emoji.classList.add('emoji')
startBtn.style.backgroundColor = 'grey';
const user = {
    scores:{
        first:'',
        second:'',
        third:'',
}}

//Append the image array to the reelIcon.
reelIcon.forEach(element =>{
    for (let i=0; i<img.length; i++){
        emoji.textContent = img[i]
        element.appendChild(emoji.cloneNode(true))
    }})

//Add event listener to Submit button to get the game started.
submitBtn.addEventListener('click', active)
function active(){
    if (inputValue.value == ''){
        state = -1
    }else{
        state = 1
        chances = 3
        startBtn.style.backgroundColor = 'rgb(42, 142, 26)'
        message.innerText = 'Click START to play.'
        //add start button event listener.
        startBtn.addEventListener('click', init)
}
}
//Start button function init.
function init(){
    if (state === 1){
        spin()
    }
}

//Define the change function for transition.
function change(i){
    const randomIndex = Math.floor(Math.random()*(img.length))
    const translateY = -randomIndex
    reelIcon[i].style.transform = `translateY(${translateY/img.length*100}%)`
    return img[randomIndex]
}

//Add event listener to each reel.
reel.addEventListener('transitionend',()=>{
    if (chances === 0){
        spin()
    }
    }, {once:true})
    
//Set promise.
function timeout(ms){
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}




//Compare the result to decide if there is a winner.
function compareResult(result0,result1,result2){
    
    if (result0 === result1 && result1 === result2 ) {
        message.innerText = 'You won!'
        if (chances === 3){
            user.scores.first = 'won'
        }else if(chances === 2){
            user.scores.second = 'won'
        }else if(chances === 1){
            console.log(chances)
            user.scores.third = 'won'
        }
        state = -1
        winSound.play()
        startBtn.style.backgroundColor = 'grey';

 
    }else{
        chances -=1
        
        if (chances === 2){
            message.innerHTML = `You have <span>${chances}</span> more chances.`
            loseSound.play()
            user.scores.first = 'lost'
        }else  if (chances === 1){
            message.innerHTML = `You have <span>${chances}</span> more chance.`
            loseSound.play()
            user.scores.second = 'lost'
        }else if(chances === 0){
            message.innerHTML = `<span class="lost">You lost 🥺.</span>`
            loseSound.play() 
            user.scores.third = 'lost'  
            state = -1          
            startBtn.style.backgroundColor = 'grey';
                  
        }
    }
}

// Define spin function to cover rolling, delay and result comparison requirements.
async function spin(){
    await timeout(100)
    const result0 = change(0)
    // console.log(result0)
    await timeout(500)
    const result1 = change(1)
    // console.log(result1)
    await timeout(500)
    const result2 = change(2)
    // console.log(result2)

    compareResult(result0,result1,result2)

    localStorage.setItem(inputValue.value, JSON.stringify(user))
    submitBtn.removeEventListener('click',active)
    submitBtn.style.backgroundColor = 'grey'
        
}

//Add reset button listener.
document.querySelector('#reset').addEventListener('click', reset)

// Reset button function.
 function reset(){
    state = -1
    chances = 0
    message.innerText = 'Input your name to start the game.'
    startBtn.style.backgroundColor = 'grey';
    inputValue.value = ''
    user.scores.first = '';
    user.scores.second = '';
    user.scores.third = '';
    submitBtn.addEventListener('click', active)
    submitBtn.style.backgroundColor = 'rgb(158, 2, 2)';

 }