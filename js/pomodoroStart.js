
let progressStatus = document.querySelector('#progres')
console.log(progressStatus, 'progressStatus')
let radius  = progressStatus.r.baseVal.value;
let circumference = radius* 2 *Math.PI;
let myInterval;
let minuteTimer;
let increment = 0;
let g;
function setProgress(event){
	let minute ;
	let minuteEle = document.querySelector('#text .active .minutes')
	let secondsEle = document.querySelector('#text .active .seconds')


		if(!minute){
			 minute = parseInt(minuteEle.textContent)
		}
		let second = parseInt(secondsEle.textContent);

		console.log(minute,second,"minute and seconds")
		const date = new Date();
		date.setMinutes(minute)
		date.setSeconds((second%60)-1)
		console.log(date.getMinutes(),"end time")

		let time = (date.getMinutes()*60+(date.getSeconds()+1)+increment);

		console.log(time,'progressStatus')
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
					  	event.target.textContent="Restart"
					  	clearInterval(myInterval)
					  	increment=0

					  }
				}

					, 1000);


		
		


	
}


function setIncrement(va){
	increment=va
}


export {setProgress,myInterval,minuteTimer,progressStatus,setIncrement} ;