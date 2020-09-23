let input = document.getElementById("text");
let button = document.getElementById("btn");
let textarea = document.getElementById("textarea");
let testNum = document.getElementById("test_num");

let randomNumber = Math.floor(Math.random() * 101);

let counter = 0
console.log(randomNumber);



button.addEventListener("click", myFunction);



function myFunction(){
    
    let num = Number(input.value);
    console.log(num);

    if(isNaN(num) || num =="") {
       textarea.innerText = "Are you sure that this is a number?";
       return;
    }

    if(num == randomNumber){
        
        counter ++;
        testNum.innerText = `This is your test number : ${counter}`;
        alert(`You are the winner. You guest after ${counter} times!`);

        if (confirm("You wanna play again")){
            window.location.reload();
        }else{
            window.close();
        };
        
        

    }else if (num > randomNumber){

        textarea.innerText = "I am thinking about lower number";

    }else {
        textarea.innerText = "I am thinking about higher number";
    };

    counter ++;

    testNum.innerText = `This is your test number : ${counter}`;

    input.value = ""
    input.focus()

};


