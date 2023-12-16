var randomNum=Math.floor(Math.random()*36)+65;
document.querySelector("#myform").addEventListener("submit",(e)=>{
    e.preventDefault();
    var x=document.querySelector("#fname").value;
    var y=document.querySelector("#lname").value;
    if(x!=""&&y!=""){
        var res=document.querySelector("#res").innerHTML=randomNum;
        if(res >=80){
            document.querySelector("p").innerHTML="Congratulations! Your love percentage is off the charts! This indicates a strong connection and compatibility. ";
        }else if(res >50 && res<80){
            document.querySelector("p").innerHTML="You've got a solid foundation!  Your love percentage suggests a good level of compatibility.";
        }else{
            document.querySelector("p").innerHTML="Love is a journey, and every journey has its twists and turns. While the percentage may be lower, it doesn't mean all hope is lost.";
        }
    }
})
