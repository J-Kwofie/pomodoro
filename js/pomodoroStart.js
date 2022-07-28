
let progressStatus = document.querySelector('#progres')
console.log(progressStatus, 'progressStatus')
let radius  = progressStatus.r.baseVal.value;
let circumference = radius* 2 *Math.PI;
let myInterval;
let minuteTimer;
let increment = 0;
let g;
let time
let minuteSoFar; 
let minute ;

function setProgress(event){
	let minuteEle = document.querySelector('#text .active .minutes')
	let secondsEle = minuteEle.nextElementSibling.nextElementSibling


		if(!minute){
			 minute = parseInt(minuteEle.textContent)
		}
		let second = parseInt(secondsEle.textContent);

		console.log(secondsEle,"minute and seconds")
		const date = new Date();
		date.setMinutes(minute)
		date.setSeconds((second%60)-1)
		console.log(date.getMinutes(),"end time")
		let s =date.getSeconds()
		 	time = (date.getMinutes()*60+(s+1)+increment);

		 
		console.log(s,'progressStatus')
		progressStatus.style.strokeDasharray = circumference;
		if(increment!==0){
			progressStatus.style.strokeDashoffset = circumference-(increment/time)*circumference;

		}else{
			progressStatus.style.strokeDashoffset = circumference
		}
		console.log(myInterval,'myInterval')
		let minuteInit =minute;
		
		


				myInterval = setInterval( ()=>{
					if((increment%60==0)&&minuteInit!=0){
						minuteInit-=1;

						minuteEle.textContent=minuteInit.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});

					}
 
						increment++

						console.log(date.getSeconds(), "getSeconds")
						console.log(date.getMinutes(),"end time")
						console.log(date,'date')
						console.log(time,'time')
						console.log(increment, "gh")
						console.log(increment, "gh")
					  progressStatus.style.strokeDashoffset = circumference-(increment/time)*circumference;
					 
					  //set seconds element 
					  	date.setSeconds(date.getSeconds()-1)
					  	if(date.getSeconds()%60+1==60){
					  		secondsEle.textContent=(0).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})

					  	}
					  	else{
					  	secondsEle.textContent=(date.getSeconds()%60+1).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
	
					  	}
					  
					
					  if (increment>=time) {
					  	const startButton = document.getElementById('status');

					  	startButton.textContent="Restart"
					  	clearInterval(myInterval)
					  	increment=0

					  }
				}

					, 1000);


		
		


	
}


function setIncrement(va){
	increment=va
}
function getIncrement(){
	return increment
}


function setMinute(min){
	minute = min;
}

export {setProgress,myInterval,progressStatus,circumference,setIncrement,getIncrement,setMinute} ;