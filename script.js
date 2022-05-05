var total=3;

function validityCheck(){
    let index=2,i=2,j=3;
    var whichOne=document.querySelectorAll("input");
    const labObj=document.querySelectorAll("select"); //2,3  6,7   10,11
    for(let x=0; x<total; x++){
        if(whichOne[index].checked){
            //whichone index 2,5,8
            if(labObj[i].value=='Day' || labObj[j].value=='Time'){
                alert("Please select Lab"+(x+1)+"-> day and time");
                return true;
            }
        }
        index+=3;
        i+=4;
        j+=4;
    }
    return false;
}
function classCheck(){
let x1=document.getElementById("time1").value;
let y1=document.getElementById("days1").value;

let x2=document.getElementById("time2").value;
let y2=document.getElementById("days2").value;

let x3=document.getElementById("time3").value;
let y3=document.getElementById("days3").value;

let x4=document.getElementById("time4").value;
let y4=document.getElementById("days4").value;

let x5=document.getElementById("time5").value;
let y5=document.getElementById("days5").value;


var obj=[];
 obj[0]={time:x1,
    days:y1};
 obj[1]={time:x2,
        days:y2};
 obj[2]={time:x3,
            days:y3};
 obj[3]={time:x4,
                days:y4};
 obj[4]={time:x5,
                days:y5};

        let flag=0,conflict=[];
    for(var i=0; i<total-1; i++){
        for(var j=i+1; j<total; j++){
            if(obj[i].time==obj[j].time && ((String(obj[i].days).includes(obj[j].days[0]) ||  String(obj[i].days).includes(obj[j].days[1])))){
                conflict[flag]="Course"+(i+1)+" & Course"+(j+1)+" class time conflicts <br>";
                flag++;
            }
        }
    }

    
    //var s="Congratulations, There is no conflicts in class Times.";
    if(flag==0)
    //document.getElementById("output").innerHTML=s;
   // return s;
   return "";
    else{
       // document.getElementById("output").innerHTML=conflict;
       return conflict;
    }
}

function labCheck(){//classTime er sathe Lab conflict check
 //labobj index=0 Day, index=1 Time, index=2 checkbox   
    let x1=document.getElementById("time1").value;
let y1=document.getElementById("days1").value;

let x2=document.getElementById("time2").value;
let y2=document.getElementById("days2").value;

let x3=document.getElementById("time3").value;
let y3=document.getElementById("days3").value;

let x4=document.getElementById("time4").value;
let y4=document.getElementById("days4").value;

let x5=document.getElementById("time5").value;
let y5=document.getElementById("days5").value;

const labObj=document.querySelectorAll("select");
let whichOne=document.querySelectorAll("input");
var obj=[];
 obj[0]={time:x1,
    days:y1};
 obj[1]={time:x2,
        days:y2};
 obj[2]={time:x3,
            days:y3};
  obj[3]={time:x4,
                days:y4};
 obj[4]={time:x5,
                days:y5};

        let flag=0,conflict=[];
    let chk=2;     let d=2,t=3;
    let out="";
    for(let w=0; w<total; w++){
        if(whichOne[chk].checked){
           // console.log(labObj[d].value);//{2,3} ,{6,7}, {10,11} labobj Lab day,time
           // console.log(labObj[t].value);
console.log("3 number check korte aschi");
            for(let pp=0; pp<total; pp++){
                var s=String(obj[pp].days);
                console.log(labObj[d].value);
                console.log(s);
                if(s[0]==labObj[d].value || s[1]==labObj[d].value){
                   // console.log((pp+1)+" no row er sathe "+(w+1) +" no Lab day milse");
                   console.log("din to mil peye gelam");
                    var tm=obj[pp].time;
                    //console.log("class tm "+tm);
                   // console.log("lab time "+labObj[t].value);
                    if((tm==1 && labObj[t].value==1)||(tm==1 && labObj[t].value==2)){
                        //console.log("Course "+(pp+1)+" no  er sathe Course "+(w+1) +" no er Lab conflict kore");
                        out+="Course"+(pp+1)+"  classtime conflicts with Course"+(w+1) +"  Lab time<br>";
                    }
                    else if((tm==2 && labObj[t].value==2)||(tm==2 && labObj[t].value==3)||(tm==2 && labObj[t].value==4)){
                        out+="Course"+(pp+1)+"  classtime conflicts with Course"+(w+1) +"  Lab time<br>";
                    }
                    else if((tm==3 && labObj[t].value==4)||(tm==3 && labObj[t].value==3)){
                        out+="Course"+(pp+1)+"  classtime conflicts with Course"+(w+1) +"  Lab time<br>";
                    }
                    else if(tm==4 && labObj[t].value==5){
                        out+="Course"+(pp+1)+"  classtime conflicts with Course"+(w+1) +"  Lab time<br>";
                        
                    }
                    else if(tm==5 && labObj[t].value==5){
                        out+="Course"+(pp+1)+"  classtime conflicts with Course"+(w+1) +"  Lab time<br>";
                        
                    }
                }
            }
            chk+=3;
            d+=4;
            t+=4;
        }
        else{
            chk+=3;
            d+=4;
            t+=4;
        }
    }
    //console.log(out);
    //console.log(obj[0].days);
    return out;
}
function labDayConflict(){//akta course er sathe arektar lab conflict check
    const labObj=document.querySelectorAll("select");
let whichOne=document.querySelectorAll("input");
//console.log(whichOne[2].checked);
let out="";
let chkx=2;
let chky=0; let dx=2; let tx=3; let dy=0; let ty=0;
let unknown,dayy,timey;
for(let x=0; x<total-1; x++){
    if(whichOne[chkx].checked){
        console.log("for 3 number chkx "+chkx);
        chky=chkx; dy=dx;ty=tx;
        chky+=3;
        dy+=4;
        ty+=4;
        for(let y=x+1; y<total; y++){

            if(whichOne[chky].checked){
                if(labObj[dx].value==labObj[dy].value){
                    if((labObj[tx].value==1 &&labObj[ty].value==1)||(labObj[tx].value==1 &&labObj[ty].value==2)){
                        out+="Course"+(x+1)+" and Course"+(y+1)+" Lab time conflicts<br>"
                        //console.log(out+"x = "+x+" y ="+y+" chky "+chky+" dy "+dy+" ty "+ty);
                    }
                    else if((labObj[tx].value==2 &&labObj[ty].value==2)||(labObj[tx].value==2 &&labObj[ty].value==1)||(labObj[tx].value==2 &&labObj[ty].value==3)||(labObj[tx].value==2 &&labObj[ty].value==4)){
                        out+="Course"+(x+1)+" and Course"+(y+1)+" Lab time conflicts<br>"
                        
                        
                    }
                    else if((labObj[tx].value==3 &&labObj[ty].value==3)||(labObj[tx].value==3 &&labObj[ty].value==4)||(labObj[tx].value==3 &&labObj[ty].value==2)){
                        out+="Course"+(x+1)+" and Course"+(y+1)+" Lab time conflicts<br>"
                        
                    }
                    else if((labObj[tx].value==4 &&labObj[ty].value==4)||(labObj[tx].value==4 &&labObj[ty].value==2)){
                        out+="Course"+(x+1)+" and Course"+(y+1)+" Lab time conflicts<br>"
                        
                    }
                    else if((labObj[tx].value==5 &&labObj[ty].value==5)||(labObj[tx].value==5 &&labObj[ty].value==6)){
                        out+="Course"+(x+1)+" and Course"+(y+1)+" Lab time conflicts<br>"
                        
                    }
                    else if((labObj[tx].value==6 &&labObj[ty].value==6)||(labObj[tx].value==6 &&labObj[ty].value==7)){
                        out+="Course"+(x+1)+" and Course"+(y+1)+" Lab time conflicts<br>"
                        
                    }
                    else if((labObj[tx].value==7 &&labObj[ty].value==7)||(labObj[tx].value==7 &&labObj[ty].value==6)){
                        out+="Course"+(x+1)+" and Course"+(y+1)+" Lab time conflicts<br>"
                        
                    }
                }
                chky+=3;
                dy+=4;
                ty+=4;
            }
            else{
                chky+=3;
                dy+=4;
                ty+=4;
            }
            console.log("chky "+chky+" dy "+dy+" ty="+ty);
        }
        chkx+=3;
        dx+=4;
        tx+=4;
    }
    else{
        chkx+=3;
        dx+=4;
        tx+=4;
    }
    
}      

        /*if(whichOne[chkx].checked && whichOne[chky].checked){//checking if both are checked
            if(labObj[dx].value==labObj[dy].value){//checking if days are same
                console.log("same day");
                console.log(labObj[tx].value+" =tx  , ty="+labObj[ty].value)
                if((labObj[tx].value==1 &&labObj[ty].value==1)||(labObj[tx].value==1 &&labObj[ty].value==2)){
                    out+="Course"+(x+1)+" and Course"+(y+1)+" Lab time conflicts<br>"
                    console.log(out);
                }
                else if((labObj[tx].value==3 &&labObj[ty].value==3)||(labObj[tx].value==3 &&labObj[ty].value==4)){
                    out+="Course"+(x+1)+" and Course"+(y+1)+" Lab time conflicts<br>"
                    console.log(out);
                }
                else if(labObj[tx].value==4 &&labObj[ty].value==4){
                    out+="Course"+(x+1)+" and Course"+(y+1)+" Lab time conflicts<br>"
                    console.log(out);
                }
                else if((labObj[tx].value==5 &&labObj[ty].value==5)||(labObj[tx].value==5 &&labObj[ty].value==6)){
                    out+="Course"+(x+1)+" and Course"+(y+1)+" Lab time conflicts<br>"
                    console.log(out);
                }
                
            }
            // chkx+=3;
            // dx+=4;
            // tx+=4;


        }
        else{

            chky+=3;
            dy+=4;
            ty+=4;
        }
    }
*/

//console.log(out);
return out;
}

function btnClicked(){
    if(validityCheck()){
        
    }else{
        let finalOutput="";
        finalOutput+=classCheck();
        finalOutput+=String(labCheck());
        finalOutput+=String(labDayConflict());
        if(finalOutput.length==0){
            finalOutput="Congratulations, No conflicts with this schedule.";
            document.getElementById("output").style.backgroundColor="greenyellow";
            document.getElementById("output").style.color="black"
        }
        else{
            document.getElementById("output").style.backgroundColor="white";
            document.getElementById("output").style.color="indianred"
        }
        
        document.getElementById("output").innerHTML=finalOutput;
    }


}
/*checkbox indexs 2,5,8  */
/*var labObj=[];
labObj[0]={
    labD:
}*/

function myFunction(param) {
     let whichOne=document.querySelectorAll("input");
     const labObj=document.querySelectorAll("select");
     let index=2;
     let d=2,t=3;
     if(param==1){
         index=2;
         d=2,t=3;
     }
     else{
         for(let x=0; x<param-1; x++){
             index+=3;
             d+=4;
             t+=4;
         }
     }

     if(whichOne[index].checked){
        labObj[d].disabled=false;
        labObj[t].disabled=false;
    }
    else{
        labObj[d].disabled=true;
        labObj[t].disabled=true;
    }


/* for lab needed indexs {2,3} ,{6,7}, {10,11} labobj*/
}

function createNew(){
    if(total==3){
        var neww=document.getElementById("new1");
        neww.style.display="block";
        var neww=document.getElementById("removebtn");
        neww.style.display="block";
        total++;
    }
    else if(total==4){
        var neww=document.getElementById("new2");
        neww.style.display="block";
        total++;
    }
    else{
        alert("Can't add more than 5 rows");
    }
    
}
function remove(){
    if(total==4){
        var neww=document.getElementById("new1");
        neww.style.display="none";
        var neww=document.getElementById("removebtn");
        neww.style.display="none";
        total--;
    }
    else{
        var neww=document.getElementById("new2");
        neww.style.display="none";
        total--;
    }
}
