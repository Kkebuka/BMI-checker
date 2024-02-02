
const submit = document.querySelector('.submit');
const mainDiv = document.querySelector('.main');
const result = document.querySelector('.result');
const resultDiv = document.querySelector('.bmi-div');
const goBack = document.querySelector('#return');




submit.addEventListener('click', function(e){
    const weight = document.getElementById('weight').value;
    const height = document.querySelector('.height').value;
    console.log(height)
    if(weight === '' || height === '') {
        alert('fill all boxes');
    } else {
    console.log(bmiCalculator(weight, height));
    }
    e.preventDefault()
})



function bmiCalculator(weight, height){
    let bmi = Math.round(weight / (height * height))
    mainDiv.style.display = 'none';
    resultDiv.style.display = 'flex';

    if (bmi < 18.5){
        result.innerHTML = `Your BMI is ${bmi}, you are underweight`
        result.style.color = '#06D3B5';
    } else if ( bmi <= 24.9 ) {
        result.innerHTML = `Your BMI is ${bmi}, you are normal`
        result.style.color = 'rgb(41,184,8)';
    } else if ( bmi <= 29.9 ) {
        result.innerHTML = `Your BMI is ${bmi}, you are overweight`
        result.style.color = 'rgb(253,175,4)';
    } else if ( bmi <= 34.9 ) {
        result.innerHTML = `Your BMI is ${bmi}, you are obese`
        result.style.color = 'rgb(248,104,5)';
    } else if    ( bmi >= 35 ) {
        result.innerHTML = `Your BMI is ${bmi}, you are extremely obese`
        result.style.color = 'rgb(255,24,1)';
    }
    console.log(bmi)
} 

goBack.addEventListener('click', function(){
    location.reload()
})