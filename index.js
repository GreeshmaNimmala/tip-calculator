function calculatetip(){
    var BillAmt=document.getElementById("billamt").value;
    var serviceQul=document.getElementById("serviceQul").value;
    var numofpeople=document.getElementById("sharingbill").value;

    //checking for empty fields
    if(BillAmt == " " || serviceQul == 0){
        alert("Please enter the BillAmt and the Service Quality");
        return;
        
    }
    //checking to see if the numofpeople are empty or less than 1
    if(numofpeople == "  " || numofpeople <=1 ){
        numofpeople = 1;
        document.getElementById("each").style.display="none";
    }
    else{
        document.getElementById("each").style.display="block";
    }
    //calculating the tip
    var total=(BillAmt * serviceQul) /numofpeople;
    console.log(total);

    //total=Math.round(total*100)/100;
    //total=total.toFixed(2);
    document.getElementById("totaltip").style.display="block";
    document.getElementById("tip").innerHTML=total;

}
document.getElementById("totaltip").style.display = "none";
document.getElementById("each").style.display = "none";


//function calling
document.getElementById("calculate").onclick=function(){
    calculatetip();
};