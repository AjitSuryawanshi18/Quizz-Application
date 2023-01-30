const question = [{
    'que': 'which is the markup language?',
    'a'  : 'HTML',
    'b'  : 'CSS',
    'c'  : 'JAVASCRIPT',
    'd'  : 'REACTJS',
'correct': 'a'

},
{
'que': 'which is the full form of CSS?',
'a'  : 'computer science students',
'b'  : 'cascaiding standards specification',
'c'  : 'Cascading Styling Sheet',
'd'  : 'none of the above',
'correct': 'c'

},
{
'que': 'What year was javascript launched?',
'a'  : '1996',
'b'  : '1995',
'c'  : '1994',
'd'  : 'none of the above',
'correct': 'b'

},
{
'que': 'what is mean by . in programming languages?',
'a'  : 'operator',
'b'  : 'dot',
'c'  : 'end of sentence',
'd'  : 'All of the Above',
'correct': 'a',

},
{
    'que' : 'What is a class in java?',
    'a' : 'A class is a blue print from which individual objects are created. A class can contain fields and methods to describe the behavior of an object.',
    'b' : 'class is a special data type.',
    'c' : "class is used to allocate memory to a data type.",
    'd' : "none of the above.",
    'correct' : 'a'
},
{
'que': 'What is the size of char variable?',
'a'  : '8 bit',
'b'  : '16 bit',
'c'  : '32 bit',
'd'  : '64 bit',
'correct': 'b',

},
{
'que': 'What is the size of short variable?',
'a'  : '8 bit',
'b'  : '16 bit',
'c'  : '32 bit',
'd'  : '64 bit',
'correct': 'b',

},
{
'que': 'Inheritance represents',

'a'  :' HAS-A relationship',

'b' :  'IS-A relationship.',
'c' : "both a and b",
'd' : "none of  above",

'correct': 'b'

},
{
    'que' : 'Can be constructor be made private?',
    'a' : 'True',
    'b' : 'False',
    'c' : "get error",
    'd' : "none of above",
    'correct' : 'a'
},
{
'que': ' Method Overloading is an example of?'
,
'a'  : 'Static Binding.',
'b'  : 'Dynamic Binding.',
'c'  : 'Both of the above',
'd'  : 'None of the above.',
'correct': 'a',

}

]


let index =0;
let total = question.length;
let right=0, wrong =0;
let quesBox=document.getElementById("quesBox");
let optioninputs=document.querySelectorAll('.options')

let loadQuestion =()=>{
if(index === total){
return endQuiz();
}
reset();
let data = question[index];
quesBox.innerText =` ${index+1}) ${data.que}`;
optioninputs[0].nextElementSibling.innerText = data.a;
optioninputs[1].nextElementSibling.innerText = data.b;
optioninputs[2].nextElementSibling.innerText = data.c;
optioninputs[3].nextElementSibling.innerText = data.d;
}



const submitQuiz =() => {
 const data = question[index];
 const ans = getAnswer();
 
 let t=confirm("are You sure want to submit??");
 if(t){
   alert("Answer Submitted..!");
   if(ans === data.correct){
    right++;
    }else{
    wrong++;
    }
  index++;
  loadQuestion();
  return;
 }else{
    alert("Answer not Saved !!!");
    reset();
 }

}



let getAnswer = () =>{
let answer ;
optioninputs.forEach(
    (input) => {
        if(input.checked){
            answer = input.value;
            
        }
    }
)
return answer;
}



let reset =() =>  {
  optioninputs.forEach(
    (input) => {
        input.checked=false;
    }
 )  
}

//  code for quizz start
 
let realod = ()=>{
    document.location.reload();
}

let endQuiz = ()=>{
document.getElementById("box").innerHTML=`
<h3> Quizz Completed Successfully..! <br>  Thank you for playing Quizz... </h3>
 <h2>Your's ${right}/${total} are Correct  </h2> `
 
}
//  code for endquizz end
// code for previous start


let previous = ()=>{
    
 right--;
 wrong--;
//  then make index --
 index--;

 loadQuestion();
 return;
}

//  code for previous end
//  code for marklater start

let marklater = ()=>{


 index++;
 loadQuestion();
 return;
}

//  code for marklater end

loadQuestion();