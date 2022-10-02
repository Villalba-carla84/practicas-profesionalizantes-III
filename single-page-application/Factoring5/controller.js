class  CalculatorController
{
    constructor(calculatorView,calculatorModel)
    {
       this.view =calculatorView;
       this.model = calculatorModel;
    }

    onclickbutton1()
     {
        this.view.display.value += '1';
     }

    onclickbutton2()
     {
        this.view.display.value += '2';
     }

    onclickbutton3()
     {
        this.view.display.value += '3';
     }
    onclickbutton4()
     {
        this.view.display.value += '4';
     }

    onclickbutton5()
     {
        this.view.display.value += '5';
     }

    onclickbutton6()
     {
        this.view.display.value += '6';
     }

    onclickbutton7()
     {
        this.view.display.value += '7';
     }

    onclickbutton8()
     {
        this.view.display.value += '8';
     }

    onclickbutton9()
     {
        this.view.display.value += '9';
     }
    onclickbutton0()
     {
        this.view.display.value += '0';
     }

    onclickbuttonSum()
     {
        this.view.display.value += '+';
     }

    onclickbuttonSubtract()
     {
        this.view.display.value += '-';
     }
    onclickbuttonDivide()
     {
        this.view.display.value += '/';
     }

    onclickbuttonMultiply()
     {
        this.view.display.value += '*';
     }

    onclickbuttonDecimal()
     {
        this.view.display.value += '.';
     }
    onclickbuttonClear()
     {
        this.view.display.value = '';
    }
 
    onclickbuttonCalculate()
     {
        this.view.display.value = this.model.calculate(this.view.display.value);
 
    }
   
}

export {CalculatorController};

