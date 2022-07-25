import toggler from './toggler.js'
import settingToggler from './settingToggler.js'
import settingTogglerClose from './closeButton.js'
import setting from './applyCustomize.js'
import {setProgress,myInterval,minuteTimer,progressStatus} from './pomodoroStart.js'

const nav = document.querySelector('nav')
const settingButton = document.getElementById('settingButton')
const closeButton = document.getElementById('closeButton');
const startButton = document.getElementById('status');

//select nav item
nav.addEventListener('click', function (event) {
	const NavActive = document.getElementById('active');
	toggler(event,NavActive)
})

//opens select item when click on settng icon
settingButton.addEventListener('click',  settingToggler)

//close setting ui when clickd on it
closeButton.addEventListener('click',settingTogglerClose)


//
const font = document.getElementById('font');

font.addEventListener('click' ,function (event) {
	const fontActive = document.querySelector('#font .active')

	toggler(event,fontActive)
	//console.log(fontActive)
})
const color = document.getElementById('color');

color.addEventListener('click' ,function (event) {
	const colorActive = document.querySelector('.activeColor')
	console.log(colorActive,"dbds ")
	toggler(event,colorActive)
	//console.log(fontActive)
})


//applying changes

const apply = document.getElementById('apply');
apply.addEventListener('click',function (e){setting(startButton)})


//changing values
const arrowUp = document.querySelectorAll('.arrow-up')
arrowUp.forEach((item)=>{
	console.log(item)
	item.addEventListener('click', function (e){
	let elementVaalueToBeChange = e.target.parentNode.previousElementSibling;

	let currentValue= +elementVaalueToBeChange.textContent
	
	console.log(currentValue)
	if(currentValue!==60){
		elementVaalueToBeChange.textContent = ++currentValue
	}
	

});
})

const arrowDown = document.querySelectorAll('.arrow-down')
console.log(arrowDown)
arrowDown.forEach((item)=>{
	console.log(item)
	item.addEventListener('click', function (e){
	const elementVaalueToBeChange = e.target.parentNode.previousElementSibling;
	let currentValue= +elementVaalueToBeChange.textContent
	console.log(currentValue)
	if(currentValue!==0){
		elementVaalueToBeChange.textContent = --currentValue
	}

});

})


//pomodoro start function

startButton.addEventListener('click', function(e){

	if(startButton.textContent==="Start"){

		setProgress(e);
		startButton.textContent="Pause"
	}else if(startButton.textContent==="Restart"){
		//set timer value
		let pomodoro_value = document.getElementById('pomodoro-value').textContent
		let short_value = document.getElementById('short-value').textContent
		let long_value = document.getElementById('long-value').textContent

		let pomodoro__time=document.getElementById('pomodoro__time');
		pomodoro__time.textContent = pomodoro_value;

		let short = document.getElementById('short');
		short.textContent= short_value;

		let long = document.getElementById('long');
		long.textContent = long_value;
		setProgress(e);
		startButton.textContent="Pause"


	}
	else{
		clearInterval(myInterval)
		startButton.textContent="Start"

	}

});

