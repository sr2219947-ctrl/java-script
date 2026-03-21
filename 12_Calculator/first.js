const button=document.querySelector('button');
button.addEventListener('click',()=>{ 
    //read the data
    const input1 =document.getElementById('first');//access over the input field 
    const number1=Number(input1.value); // access over the value 
    
    const input2 =document.getElementById('second');//access over the input field 
    const number2=Number(input2.value);
    //is(NaN(number1)|| isNAN(number2))
    //return;

    //Output the result 
    const result=number1+number2;
    const re = document.getElementById('result');
    re.textContent ="Result:"+ result;
});

//BMI calculator 

