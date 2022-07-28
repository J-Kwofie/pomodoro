
import {setProgress,myInterval,progressStatus,circumference,setIncrement,setMinute,getIncrement} from './pomodoroStart.js'
import event from './index.js'

function setColorAndFont(backgroundElementToBeChange, baColorSet,font,fontSet){
	const ba = document.querySelector(':root');
	ba.style.setProperty('--color', baColorSet);
	ba.style.setProperty('--fontFamily', fontSet);
}


function setting(startButton){
	const backgroundElementToBeChange = document.querySelector('.activeColor').parentNode
	const baColorSet = window.getComputedStyle( backgroundElementToBeChange ,null).getPropertyValue('background-color');  


	const font = document.querySelector('#font .active');
	const fontSet = window.getComputedStyle( font ,null).getPropertyValue('font-family'); 

	setColorAndFont(backgroundElementToBeChange, baColorSet,font,fontSet);



	const pomodoroValue = document.getElementById('pomodoro-value').textContent;
	const longValue = document.getElementById('long-value').textContent;
	const shortValue = document.getElementById('short-value').textContent;

	
	 //set minute
	 
	if(startButton.textContent==="Pause"){
		clearInterval(myInterval)
		document.getElementById('pomodoro__time').textContent = parseInt(pomodoroValue)
		document.getElementById('long').textContent =   parseInt(longValue)
		document.getElementById('short').textContent = parseInt(longValue)

		let minuteEle = document.querySelector('#text .active .minutes')
		minuteEle.textContent= minuteEle.textContent;
		console.log(minuteEle,'hu kjg,fhv kvh,hj,hc, jkb,vjhv,j kjv,jvjj')

		//setTime(minuteEle*60)
		setMinute(null)
		setIncrement(getIncrement())
		//progressStatus.style.strokeDashoffset = circumference-(getIncrement()/getTime())*circumference;
		setProgress(event);
		

		
	}	else if(startButton.textContent==="Start"){
		document.getElementById('pomodoro__time').textContent = parseInt(pomodoroValue)
		document.getElementById('long').textContent =   parseInt(longValue)
		document.getElementById('short').textContent = parseInt(longValue)
		setMinute(null)


	}

	
}

export default setting;