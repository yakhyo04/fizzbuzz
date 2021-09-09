const elForm = document.querySelector('#form');
const elInput = elForm.querySelector('#input');
const elSecondInput = elForm.querySelector('#secondinput');
const elSubmit = elForm.querySelector('#submit');


elForm.addEventListener('submit', function FizzBuzz(e){
    e.preventDefault();
        if(elInput.value % 5 === 0 && elInput.value % 3 === 0){
            elSecondInput.value = "FizzBuzz";
        }else if(elInput.value % 3 === 0){
            elSecondInput.value = "Fizz";
        }else if(elInput.value % 5 === 0){
            elSecondInput.value = "Buzz";
        }else{
            elSecondInput.value = elInput.value;
        }
        return elSecondInput   
})