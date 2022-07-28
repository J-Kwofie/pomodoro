import {myInterval,progressStatus,setIncrement,setMinute} from './pomodoroStart.js';

function toggler(e,active) {
	const navItemClicked = e.target

	//check the item clicked
	if(navItemClicked.tagName.toLowerCase()==='a'){
		active.removeAttribute('id')	
		navItemClicked.setAttribute('id', 'active');
		clearInterval(myInterval)
		progressStatus.style.strokeDashoffset  = 0;

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
		setIncrement(0)
		setMinute(null)


		document.getElementById('status').textContent="Start"
		//set the seconds timer to 0
		let seconds = document.querySelectorAll('.seconds');
		seconds.forEach((item)=>{
			console.log(item," HEL")
			item.textContent='00'});

		const timerActive =  document.querySelector('#text .active');
		const e =document.getElementById(navItemClicked.textContent.replace(/ /g, ""));
		//const newActive = document.querySelectorAll('.')
		timerActive.removeAttribute('class')
		timerActive.setAttribute('class', 'timer')
		e.setAttribute('class', 'timer active')

		console.log(navItemClicked, 'navItemClicked');
	}
		//check the item clicked

	if(navItemClicked.getAttribute('class')==='font-setting'){
		active.removeAttribute('class');
		active.setAttribute('class','font-setting');
		navItemClicked.setAttribute('class', 'font-setting active');
	}
	//check the item clicked

	if (navItemClicked.getAttribute('class')==='colors' ) {
			console.log(active, "mex")

			active.removeAttribute('class');
			active.setAttribute('class','material-symbols-outlined check');
			navItemClicked.firstElementChild.setAttribute('class', 'material-symbols-outlined check activeColor');
			console.log(active,navItemClicked)
		}

	if(navItemClicked.getAttribute('class')==='material-symbols-outlined check' ){
	console.log(active, "jude")
	 active.removeAttribute('class');
	 active.setAttribute('class','material-symbols-outlined ');
	 navItemClicked.setAttribute('class', 'material-symbols-outlined check  activeColor');
	 //console.log(active,navItemClicked)	
	}



}

export default toggler;
