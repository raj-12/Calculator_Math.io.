let prevInput='0'
let calculatoroperator=''
let currentInput='0'
	
const calculatorScreen=document.querySelector('.calculator-screen')

const updateScreen=(number)=>
{
calculatorScreen.value=number	
}

const operator =document.querySelectorAll(".operator")

operator.forEach((operator)=>
{
	operator.addEventListener("click",(event)=>{
		inputoperator(event.target.value)
		})
	})


const inputNumber=(number)=>
{   if(currentInput==='0'){
	currentInput=number
}
else
	{
	currentInput+=number
}
}

const inputoperator=(operator)=>
{
	prevInput =currentInput
	calculatoroperator=operator
	currentInput='0'
}


const numbers=document.querySelectorAll(".number")
numbers.forEach((number)=>
{
	
	number.addEventListener("click",(event)=>
	{
	inputNumber(event.target.value)
	updateScreen(currentInput)
	})
	})

const equalSign=document.querySelector('.equal-sign')

equalSign.addEventListener('click',()=>
{

calculate()
updateScreen(currentInput)
})
const calculate=()=>
{

let result=0
switch(calculatoroperator)
{
case'+':
result=parseFloat(prevInput)+parseFloat(currentInput)
break
case '-':
result=parseFloat(prevInput)-parseFloat(currentInput)
break
case '*':
result=parseFloat(prevInput)*parseFloat(currentInput)
break
case '/':
result=parseFloat(prevInput)/parseFloat(currentInput)
break
default:
return 
}
currentInput=result.toString()
calculatoroperator=''

}


const clearBtn=document.querySelector(".all-clear")
{
	clearBtn.addEventListener('click',()=>{
		clearAll()
		updateScreen(currentInput)
		})
}

clearAll=()=>{
	
	prevInput='0'
	calculatoroperator=''
	currentInput='0'
}
const decimal =document.querySelector('.decimal')
const inputDecimal=(dot)=>{
	if(currentInput.includes('.'))
		{
		return
	}
currentInput+=dot
}
decimal.addEventListener('click',(event)=>
{
inputDecimal(event.target.value)
updateScreen(currentInput)
	})

const percentage=document.querySelector('.percentage')

percentage.addEventListener("click",(event)=>
{
      getPercentage()
      updateScreen(currentInput)
	})
const getPercentage=()=>
{

	currentInput=currentInput/100
}