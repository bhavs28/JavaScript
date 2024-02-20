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