
import {setProgress,myInterval,minuteTimer,progressStatus,setIncrement} from './pomodoroStart.js'

function setting(startButton){
	const backgroundElementToBeChange = document.querySelector('.activeColor').parentNode
	const baColorSet = window.getComputedStyle( backgroundElementToBeChange ,null).getPropertyValue('background-color');  


	const font = document.querySelector('#font .active');
	const fontSet = window.getComputedStyle( font ,null).getPropertyValue('font-family');  

	const pomodoroValue = document.getElementById('pomodoro-value').textContent;
	const longValue = document.getElementById('long-value').textContent;
	const shortValue = document.getElementById('short-value').textContent;

	 document.getElementById('pomodoro__time').textContent = parseInt(pomodoroValue)
	 document.getElementById('long').textContent =   parseInt(longValue)
	 document.getElementById('short').textContent = parseInt(longValue)
	 //set minute
	 clearInterval(myInterval)
	 clearInterval(minuteTimer)
	 
	if(startButton.textContent==="Start"){
		progressStatus.style.strokeDashoffset  = 0;
		setIncrement(0)
		setProgress();
	}
	if(startButton.textContent==="Pause"){
		progressStatus.style.strokeDashoffset  = 0;
		setIncrement(0)
		document.getElementById('pomodoro__time').textContent = parseInt(pomodoroValue)+1
		document.getElementById('long').textContent =   parseInt(longValue)+1
		document.getElementById('short').textContent = parseInt(longValue)+1
		setProgress();
	}
	const ba = document.querySelector(':root');
	ba.style.setProperty('--color', baColorSet);
	ba.style.setProperty('--fontFamily', fontSet);
	console.log(pomodoroValue,longValue,shortValue)
}

export default setting;