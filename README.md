# ANALYSE DE COMPLEXITE

### Code Original :

- **Complexité Temporelle** :
  - Les méthodes de `riceCooker` effectuent des actions directes sans itérer sur des structures de données, donc elles ont une complexité temporelle relativement constante O(1) .
  - La fonction `simulateRiceCooker()` utilise une boucle `while` pour demander en continu des entrées utilisateur et exécute des actions en fonction de ces entrées. Sa complexité temporelle dépend du nombre d'itérations dans la boucle, basé sur l'interaction utilisateur.

- **Complexité Spatiale** :
  - La complexité spatiale est faible car il n'y a pas de grandes structures de données utilisées ou créées pendant l'exécution du code. L'utilisation de mémoire est principalement pour stocker des variables booléennes et quelques chaînes de caractères pour les sorties console.

### Code Refactorisé :
- **Complexité Temporelle** :
  - Les méthodes dans `riceCooker` ont la même complexité temporelle que le code original.
  - Dans la fonction `simulateRiceCooker()` refactorisée, la logique est simplifiée avec une instruction `switch-case` au lieu de multiples conditions `if-else`; elle dépend toujours de l'interaction et du traitement des entrées utilisateur.

- **Complexité Spatiale** :
  - La complexité spatiale reste identique au code original, car les variables et l'utilisation de mémoire sont les mêmes.


| Code Original                                            | Code Refactorisé                                         |
|----------------------------------------------------------|-----------------------------------------------------------|
| import promptSync from 'prompt-sync';                     | import promptSync from 'prompt-sync';                      |
| import {displayMenu} from "./menu.js";                    | import {displayMenu} from "./menu.js";                     |
| const prompt = promptSync();                             | const prompt = promptSync();                              |
|                                                           | export const riceCooker = {                               |
| export const riceCooker = {                              |   ricePresent: false,                                     |
|   ricePresent: false,                                    |   riceCooked: false,                                      |
|   riceCooked: false,                                     |   steamingInProgress: false,                              |
|   steamingInProgress: false,                             |   heatingInProgress: false,                               |
|                                                           |   addRice() {                                            |
|   addRice() {                                            |     if (!this.ricePresent) {                              |
|     if (!this.ricePresent) {                              |       this.ricePresent = true;                            |
|       this.ricePresent = true;                            |       console.log('Rice has been added.');               |
|       console.log('Rice has been added.');               |     } else {                                             |
|     } else {                                             |       console.log('There\'s already rice in the rice cooker.'); |
|       console.log('There\'s already rice in the rice cooker.'); |     }                                                    |
|     }                                                    |   },                                                      |
|   },                                                      |                                                           |
|                                                           |   cookRice() {                                           |
|   cookRice() {                                           |     if (this.ricePresent && !this.riceCooked) {          |
|     if (this.ricePresent && !this.riceCooked) {          |       console.log('Cooking rice...');                     |
|       console.log('Cooking rice...');                     |       this.delaySync(1500);                              |
|       this.delaySync(1500);                              |       this.riceCooked = true;                            |
|       this.riceCooked = true;                            |       console.log('The rice has been cooked!');          |
|       console.log('The rice has been cooked!');          |     } else if (!this.ricePresent) {                       |
|     } else if (!this.ricePresent) {                       |       console.log('Cannot cook. The rice cooker is empty.'); |
|       console.log('Cannot cook. The rice cooker is empty.'); |     } else {                                             |
|     } else {                                             |       console.log('The rice is already cooked.');        |
|       console.log('The rice is already cooked.');        |     }                                                    |
|     }                                                    |   },                                                      |
|   },                                                      |                                                           |
|                                                           |   steam() {                                               |
|   steam() {                                               |     if (this.ricePresent && !this.steamingInProgress) {  |
|     if (this.ricePresent && !this.steamingInProgress) {  |       console.log('Steaming in progress...');             |
|       console.log('Steaming in progress...');             |       this.steamingInProgress = true;                    |
|       this.steamingInProgress = true;                    |       this.delaySync(1500);                              |
|       this.delaySync(1500);                              |       this.steamingInProgress = false;                   |
|       this.steamingInProgress = false;                   |       console.log('Steaming completed!');                 |
|       console.log('Steaming completed!');                 |     } else if (!this.ricePresent) {                       |
|     } else if (!this.ricePresent) {                       |       console.log('Cannot steam. The rice cooker is empty.'); |
|       console.log('Cannot steam. The rice cooker is empty.'); |     } else {                                             |
|     } else {                                             |       console.log('Steaming is already in progress.');   |
|       console.log('Steaming is already in progress.');   |     }                                                    |
|     }                                                    |   },                                                      |
|                                                           |                                                           |
|   keepWarm() {                                            |   removeRice() {                                          |
|     if (this.ricePresent && this.riceCooked && !this.heatingInProgress) { |     if (this.ricePresent && (this.riceCooked || this.heatingInProgress)) { |
|       console.log('The rice is now being kept warm.');    |       this.ricePresent = false;                           |
|       this.heatingInProgress = true;                     |       this.riceCooked = false;                            |
|     } else if (!this.ricePresent) {                       |       this.steamingInProgress = false;                    |
|       console.log('Cannot keep warm. The rice cooker is empty.'); |       this.heatingInProgress = false;                      |
|     } else if (!this.riceCooked) {                        |       console.log('The rice has been removed from the rice cooker.'); |
|       console.log('Cannot keep warm. The rice is not cooked.'); |     } else {                                               |
|     } else {                                             |       console.log('There\'s no rice to remove or it is not cooked yet.'); |
|       console.log('Keeping warm is already in progress.'); |     }                                                      |
|     }                                                    |   },                                                        |
|   },                                                      |                                                             |
|                                                           |   delaySync(ms) {                                           |
|   removeRice() {                                         |     const start = Date.now();                               |
|     if (this.ricePresent && (this.riceCooked || this.heatingInProgress)) { |     while (Date.now() - start < ms) {                     |
|       this.ricePresent = false;                           |     }                                                       |
|       this.riceCooked = false;                            |   },                                                        |
|       this.steamingInProgress = false;                    |                                                             |
|       this.heatingInProgress = false;                     | export function simulateRiceCooker() {                       |
|       console.log('The rice has been removed from the rice cooker.'); |   let input;                                               |
|     } else {                                             |   const condition = true;                                   |
|       console.log('There\'s no rice to remove or it is not cooked yet.'); |                                                             |
|     }                                                    |   while (condition) {                                       |
|   },                                                      |     displayMenu();                                          |
|                                                           |     input = prompt("enter your choice: ")                   |
|   delaySync(ms) {                                        |                                                             |
|     const start = Date.now();                            |     if (input) {                                            |
|     while (Date.now() - start < ms) {                    |       const choice = parseInt(input);                       |
|     }                                                   |                                                             |
|   },                                                     |       switch (choice) {                                     |
|                                                           |         case 1:                                            |
| export function simulateRiceCooker() {                   |           riceCooker.addRice();                             |
|   let input;                                             |           break;                                           |
|   const condition = true;                                |         case 2:                                            |
|                                                           |           riceCooker.cookRice();                            |
|   while (condition) {                                    |           break;                                           |
|     displayMenu();                                       |         ... (rest of the switch cases)                      |
|     input = prompt("Enter your choice: ");                |           break;                                           |
|                                                           |         default:                                           |
|     if (input) {                                         |           console.log("Invalid input");                     |
|       const choice = parseInt(input);                    |       }                                                     |
|                                                           |     }                                                       |
|       if (!isNaN(choice)) {                              |   }                                                         |
|         if (choice === 1) {                              | }                                                           |
|           riceCooker.addRice();                           |                                                   |
|         } else if (choice === 2) {                       |                                                             |
|           riceCooker.cookRice();                          |                                                             |
|         } else if (choice === 3) {                       |                                                             |
|           riceCooker.steam();                             |                                                             |
|         } else if (choice === 4) {                       |                                                             |
|           riceCooker.keepWarm();                          |                                                             |
|         } else if (choice === 5) {                       |                                                             |
|           riceCooker.removeRice();                         |                                                             |
|         } else if (choice === 6) {                       |                                                             |
|           console.log('Thank you for using the Rice Cooker Simulator. Goodbye!'); |                                                        |
|           break;                                         |                                                             |
|         } else {                                         |                                                             |
|           console.log('Invalid choice. Please select a valid option.'); |                                               |
|         }                                               |                                                             |
|       } else {                                          |                                                             |
|         console.log('Invalid input. Please enter a valid number.'); |                                                   |
|       }                                                 |                                                             |
|     } else {                                            |                                                             |
|       console.log('No input provided.');                |                                                             |
|     }                                                   |                                                             |
|   }                                                     |                                                             |
