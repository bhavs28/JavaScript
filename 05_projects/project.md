# Projects related to DOM

## Project 1
```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');


buttons.forEach(function(item){
  //console.log(item)
  item.addEventListener('click',function(e){
    switch(e.target.id){
      case 'grey':
        body.style.backgroundColor='grey'
        break
      case 'white':
        body.style.backgroundColor='white'
        break  
      case 'blue':
        body.style.backgroundColor='blue'
        break
      case 'yellow':
        body.style.backgroundColor='yellow'
        break
      case 'lightblue':
        body.style.backgroundColor='lightblue'
        break
    }
  })
})
```
## other way for proj 1 using if else loop
```javascript
console.log("hitesh")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);//e is the event object
    console.log(e.target);//from where the event started that element will be shown
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
});
```
## Project 2

```javascript
const form=document.querySelector('form')
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function(e){
  e.preventDefault();
  //values from the form on submitting will go to the browser which should be stopped here

  const height=parseInt(document.querySelector('#height').value)
  const weight=parseInt(document.querySelector('#weight').value)
  const result=document.querySelector('#results')
  
  //check the values
  if(height==='' || height<0 || isNaN(height)){
    result.innerHTML=`<span>Enter valid height</span>`
  } else if(weight==='' || weight<0 || isNaN(weight)){
    result.innerHTML=`<span>Enter valid weight</span>`
  }else{
    const bmi= (weight / ((height * height) / 10000)).toFixed(2)
    result.innerHTML=`${bmi}`
    if(bmi<18.6){
      const abc=document.createTextNode('Under weight')
      document.getElementById('results').appendChild(abc)
     }
     else if(bmi>=18.6 && bmi<24.9){
      const abc=document.createTextNode('Normal Range')
      document.getElementById('results').appendChild(abc)
     }
     else{
      const abc=document.createTextNode('Over weight')
      document.getElementById('results').appendChild(abc)
     }
  }    
})
```

## Project 3
```javascript
const clock=document.getElementById('clock')

setInterval(function(){
  const date=new Date()
  //console.log(date.toLocaleTimeString())
  clock.innerHTML=date.toLocaleTimeString()
},1000)
```

## Project 4

```javascript

let randomnumber=parseInt(Math.random()*100+1)

const submit=document.querySelector('#subt')
const userInput=document.querySelector('.guessField')
const guessSlot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHi')
const StartOver=document.querySelector('.resultParas')

const p=document.createElement('p')


let numGuess=2;

let playgame=true

if(playgame){
  submit.addEventListener('click',function(e){
    e.preventDefault()
    const guess=parseInt(userInput.value)
    validation(guess)
  });
}

function validation(guess){
  if(isNaN(guess)){
    alert('Guess a valid number')
  }else if(guess<1 || guess>100){
    alert('Guess a number between 1 and 100')
  }else{
   
    if(numGuess===11){
      clearupguess(guess)
      displaymessage(Game Over and the random number was ${randomnumber})
      endgame()
    }else{
      clearupguess(guess)
      checkguess(guess)
    }
  }
}
function checkguess(guess){
  if(guess===randomnumber){
    displaymessage(You guessed it right)
    endgame()
  }else if(guess<randomnumber){
    displaymessage(Your guess is low)
  }else{
    displaymessage(Your guess is high)
  }
}
function clearupguess(guess){
  userInput.value='';
  guessSlot.innerHTML+=${guess},
  remaining.innerHTML=${10-guess}
  numGuess++;
}
function displaymessage(message){
  lowOrHi.innerHTML=<h2>${message}</h2>
}
function endgame(){
  userInput.value=''
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML=<h2 id='newgame'>Start a new game</h2>
  StartOver.appendChild(p)
  playgame=false
  newgame()
}
function newgame(){
  const newgamebutton=document.querySelector('#newgame')
  newgamebutton.addEventListener('click',function(e){

    numGuess=1
    randomnumber=parseInt(Math.random()*100+1)
    guessSlot.innerHTML=''
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${10} `;
    userInput.removeAttribute('disabled');
    StartOver.removeChild(p);

    playgame=true
  })
}


```