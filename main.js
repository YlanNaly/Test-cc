
keepWarm(){
	if(this.ricePresent){
		console.log("the rice is now..);
		if(this.riceCooked){
			if(!this.heatingInProgress){
				this.heatingInProgress = true;
			}
		}
		else{
			console.log("can't cook");
		}
	}	
}


export function simulateRiceCooker(){
	let input;
	const condition = true;
	
	while(condition){
		displayMenu();
		input = prompt("enter your choice: ")
		
		if(input){
			const choice = parseInt(input);
			
			switch(choice){
				case  1 : 
					riceCooker.addRice();
					break;
				case 2 : 
					riceCooker.cookRice();
					break;
				...
				break;
				default:
					console.log("invalid input");
			}
		}
	}
}
