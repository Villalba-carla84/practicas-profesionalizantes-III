import { CalculatorView } from './view.js';


 function startApplicationGUI()
{
   
   let myCalculatorView = new CalculatorView();
 
   document.body.appendChild(myCalculatorView);


}
window.addEventListener('load',startApplicationGUI);








 
 