var flag=0;
document.getElementById("addition").addEventListener("click",function(){

    const result=document.getElementById("res").innerText;
    const lastEntry=result[result.length-1];
    if(result!="" && (lastEntry!="+" && lastEntry!="-" && lastEntry!="*" && lastEntry!="/"))
    {
        document.getElementById("res").innerText=result.concat("+");
    }
})

document.getElementById("subtraction").addEventListener("click",function(){

    const result=document.getElementById("res").innerText;
    const lastEntry=result[result.length-1];
    if(result!="" && (lastEntry!="+" && lastEntry!="-" && lastEntry!="*" && lastEntry!="/"))
    {
        document.getElementById("res").innerText=result.concat("-");
    }
})

document.getElementById("multiplication").addEventListener("click",function(){

    const result=document.getElementById("res").innerText;
    const lastEntry=result[result.length-1];
    if(result!="" && (lastEntry!="+" && lastEntry!="-" && lastEntry!="*" && lastEntry!="/"))
    {
        document.getElementById("res").innerText=result.concat("*");
    }
})

document.getElementById("division").addEventListener("click",function(){

    const result=document.getElementById("res").innerText;
    const lastEntry=result[result.length-1];
    if(result!="" && (lastEntry!="+" && lastEntry!="-" && lastEntry!="*" && lastEntry!="/"))
    {
        document.getElementById("res").innerText=result.concat("/");
    }
})

document.getElementById("one").addEventListener("click",function(){
    const result=document.getElementById("res").innerText;
    if(flag==1)
    {
        document.getElementById("res").innerText=""+1;
        flag=0;
    }
    else
    {
        document.getElementById("res").innerText=result.concat("1");
    }
    
})
document.getElementById("two").addEventListener("click",function(){
    const result=document.getElementById("res").innerText;
    if(flag==1 && result[result.length-1]!="*" && result[result.length-1]!="-" && result[result.length-1]!="+" && result[result.length-1]!="/")
    {
        document.getElementById("res").innerText=""+2;
        flag=0;
    }
    else
    {
        document.getElementById("res").innerText=result.concat("2");
    }
})
document.getElementById("three").addEventListener("click",function(){
    const result=document.getElementById("res").innerText;
    if(flag==1 && result[result.length-1]!="*" && result[result.length-1]!="-" && result[result.length-1]!="+" && result[result.length-1]!="/")
    {
        document.getElementById("res").innerText=""+3;
        flag=0;
    }
    else
    {
        document.getElementById("res").innerText=result.concat("3");
    }
})

document.getElementById("four").addEventListener("click",function(){
    const result=document.getElementById("res").innerText;
    if(flag==1 && result[result.length-1]!="*" && result[result.length-1]!="-" && result[result.length-1]!="+" && result[result.length-1]!="/")
    {
        document.getElementById("res").innerText=""+4;
        flag=0;
    }
    else
    {
        document.getElementById("res").innerText=result.concat("4");
    }
})
document.getElementById("five").addEventListener("click",function(){
    const result=document.getElementById("res").innerText;
    if(flag==1 && result[result.length-1]!="*" && result[result.length-1]!="-" && result[result.length-1]!="+" && result[result.length-1]!="/")
    {
        document.getElementById("res").innerText=""+5;
        flag=0;
    }
    else
    {
        document.getElementById("res").innerText=result.concat("5");
    }
})
document.getElementById("six").addEventListener("click",function(){
    const result=document.getElementById("res").innerText;
    if(flag==1 && result[result.length-1]!="*" && result[result.length-1]!="-" && result[result.length-1]!="+" && result[result.length-1]!="/")
    {
        document.getElementById("res").innerText=""+6;
        flag=0;
    }
    else
    {
        document.getElementById("res").innerText=result.concat("6");
    }
})
document.getElementById("seven").addEventListener("click",function(){
    const result=document.getElementById("res").innerText;
    if(flag==1 && result[result.length-1]!="*" && result[result.length-1]!="-" && result[result.length-1]!="+" && result[result.length-1]!="/")
    {
        document.getElementById("res").innerText=""+7;
        flag=0;
    }
    else
    {
        document.getElementById("res").innerText=result.concat("7");
    }
})
document.getElementById("eight").addEventListener("click",function(){
    const result=document.getElementById("res").innerText;
    if(flag==1 && result[result.length-1]!="*" && result[result.length-1]!="-" && result[result.length-1]!="+" && result[result.length-1]!="/")
    {
        document.getElementById("res").innerText=""+8;
        flag=0;
    }
    else
    {
        document.getElementById("res").innerText=result.concat("8");
    }
})
document.getElementById("nine").addEventListener("click",function(){
    const result=document.getElementById("res").innerText;
    if(flag==1 && result[result.length-1]!="*" && result[result.length-1]!="-" && result[result.length-1]!="+" && result[result.length-1]!="/")
    {
        document.getElementById("res").innerText=""+9;
        flag=0;
    }
    else
    {
        document.getElementById("res").innerText=result.concat("9");
    }
})

document.getElementById("zero").addEventListener("click",function(){
    const result=document.getElementById("res").innerText;
    if(flag==1 && result[result.length-1]!="*" && result[result.length-1]!="-" && result[result.length-1]!="+" && result[result.length-1]!="/")
    {
        document.getElementById("res").innerText=""+0;
        flag=0;
    }
    else
    {
        document.getElementById("res").innerText=result.concat("0");
    }
})

document.getElementById("dot").addEventListener("click",function(){
    const result=document.getElementById("res").innerText;
    document.getElementById("res").innerText=result.concat(".");
    flag=0;
})

document.getElementById("deleteAll").addEventListener("click",function(){
    document.getElementById("res").innerText="";
})

document.getElementById("equal").addEventListener("click",function(){
    const result=document.getElementById("res").innerText;
    const lastEntry=result[result.length-1];
    if(result!="" && (lastEntry!="+" && lastEntry!="-" && lastEntry!="*" && lastEntry!="/" && lastEntry!="."))
    {
       const finalResult=parseFloat(evaluate(result)).toFixed(2);
       document.getElementById("res").innerText=finalResult;
       flag=1;
    }
})
function evaluate(str) {
    return new Function('return ' + str)();
  }