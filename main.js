import promptSync from 'prompt-sync';
import {displayMenu} from "./menu.js";
const prompt = promptSync();

export const riceCooker = {
  ricePresent: false,
  riceCooked: false,
  steamingInProgress: false,
  heatingInProgress: false,

  addRice() {
    if (!this.ricePresent) {
      this.ricePresent = true;
      console.log('Rice has been added.');
    } else {
      console.log('There\'s already rice in the rice cooker.');
    }
  },

  cookRice() {
    if (this.ricePresent && !this.riceCooked) {
      console.log('Cooking rice...');
      this.delaySync(1500);
      this.riceCooked = true;
      console.log('The rice has been cooked!');
    } else if (!this.ricePresent) {
      console.log('Cannot cook. The rice cooker is empty.');
    } else {
      console.log('The rice is already cooked.');
    }
  },

  steam() {
    if (this.ricePresent && !this.steamingInProgress) {
      console.log('Steaming in progress...');
      this.steamingInProgress = true;
      this.delaySync(1500);
      this.steamingInProgress = false;
      console.log('Steaming completed!');
    } else if (!this.ricePresent) {
      console.log('Cannot steam. The rice cooker is empty.');
    } else {
      console.log('Steaming is already in progress.');
    }
  },

  removeRice() {
    if (this.ricePresent && (this.riceCooked || this.heatingInProgress)) {
      this.ricePresent = false;
      this.riceCooked = false;
      this.steamingInProgress = false;
      this.heatingInProgress = false;
      console.log('The rice has been removed from the rice cooker.');
    } else {
      console.log('There\'s no rice to remove or it is not cooked yet.');
    }
  },


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
				/**
    				The rest of case
    				*/
				break;
				default:
					console.log("invalid input");
			}
		}
	}
}
simulateRiceCooker();
