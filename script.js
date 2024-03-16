const questions=[{
    'que':'which of the following is a markup language',
    'a':'HTML',
    'b':'CSS',
    'c':'JavaScript',
    'd':'PHP',
    'correct':'a'
},
{
    'que':'What year was javaScript launch',
    'a':'1996',
    'b':'1995',
    'c':'1994',
    'd':'none of above',
    'correct':'b'
},
{
    'que':'what does css stand for',
    'a':'Hyper text markup language',
    'b':'cascading style sheet',
    'c':'jason object notation',
    'd':'none of obove',
    'correct':'b'
}

]
let index = 0;
let total=questions.length;
let right=0;
let wrong=0;
const queBox=document.getElementById("queBox");
const optionInputs=document.querySelectorAll('.option');
const loadQuestion=()=>{
       if(index===total){
        return endQuiz()
       }
       reset();
    const data= questions[index];
    // console.log(data);
    queBox.innerText=`${index+1})${data.que}`;
    optionInputs[0].nextElementSibling.innerText=data.a;
    optionInputs[1].nextElementSibling.innerText=data.b;
    optionInputs[2].nextElementSibling.innerText=data.c;
    optionInputs[3].nextElementSibling.innerText=data.d;

}
const submitQuiz=()=>{
    const data=questions[index];
    const ans=getAnswer();
    console.log(ans,data.correct)
    if(ans=== data.correct){
        right++;
}else{
    wrong++;
}
index++;
loadQuestion();
return;
}
const getAnswer=()=>{
    let answer;
    optionInputs.forEach(
        (input)=>{
            if(input.checked){
                answer=input.value;
            }
        }
    )
    return answer;
}
const reset=()=>{
    optionInputs.forEach(
        (input)=>{
            input.checked=false;
        }
    )
}
const endQuiz=()=>{
    document.getElementById("box").innerHTML=`<h3> Thank you playing the Quize<h3>  <h2> ${right}/${total}are correct<h2>`


}
// intial call
loadQuestion();