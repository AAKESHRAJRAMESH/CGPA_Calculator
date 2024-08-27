var tb; var r; var c; var c1; var c2;
var all_point=[]; var curr_point=[];
var all_credit=[]; var curr_credit=[];
var s=0;
var sem=[];
var course_history=[];
function add_sem(){
    let sn=document.getElementById("sem_no");
    if(sn.value<1||sn.value>10){ document.getElementById("alert1").innerHTML="<small class='alert alert-danger'><strong>alert!</strong> Sem-no sholud be 1-10!</small>"; }
    else if(sem.includes(sn.value)){document.getElementById("alert1").innerHTML="<small class='alert alert-danger'><strong>alert!</strong> sem "+sn.value+" is already added!</small>"; }
    else{ s=parseInt(sn.value);
        document.getElementById("alert1").innerHTML="";
        document.getElementById("div0").hidden=true;
        document.getElementById("div1").hidden=false;
    tb=document.getElementById("sem_table");
    tb.hidden=false;
    sem.push(sn.value);
    r=tb.insertRow();
    c1=r.insertCell(0);
    c1.innerHTML="SEM : <mark>"+sn.value+"</mark>";
    c=r.insertCell(1);
    c.innerHTML="";
    c1=r.insertCell(2); c2=r.insertCell(3);
}
}

function add_course(){
    c_id=document.getElementById("course_id").value;
    gd=parseInt(document.forms.cgpa.grade.value);
    ct=parseInt(document.forms.cgpa.credit.value);
    if(gd==-1){ document.getElementById("alert3").innerHTML="<small class='alert alert-danger'><strong>alert!</strong> Reappear - CGPA cannot be calculated!</small>"; }
    else if(gd==-2){ document.getElementById("alert3").innerHTML="<small class='alert alert-danger'><strong>alert!</strong> Absent - CGPA cannot be calculated!</small>"; }
    else if(c_id.length!=7){ document.getElementById("alert2").innerHTML="<small class='alert alert-danger'><strong>alert!</strong> Course Id should be of length 8</small>"; }
    else if(isNaN(c_id[0])||isNaN(c_id[1])||isNaN(c_id[5])||isNaN(c_id[6])){ document.getElementById("alert2").innerHTML="<small class='alert alert-danger'><strong>alert!</strong> Course Id - format error</small>"; }
    else if(!(isNaN(c_id[2])&&isNaN(c_id[3])&&isNaN(c_id[4]))){ document.getElementById("alert2").innerHTML="<small class='alert alert-danger'><strong>alert!</strong> Course Id - format error</small>"; }
    else if(course_history.includes(c_id)){ document.getElementById("alert2").innerHTML="<small class='alert alert-danger'><strong>alert!</strong> Course Id - Already exist</small>"; }
    else{ document.getElementById("alert2").innerHTML="";
    document.getElementById("alert3").innerHTML="";
    all_point.push(gd); curr_point.push(gd); all_credit.push(ct); curr_credit.push(ct);
    course_history.push(c_id);
    let g1;
    switch(gd){
        case 10: g1='O'; break;
        case 9: g1='A+'; break;
        case 8: g1='A'; break;
        case 7: g1='B+'; break;
        case 6: g1='B'; break;
        case 5: g1='C'; break;
        case 0: g1='SC'; break;

    }
    c.innerHTML+="<div>"+c_id+"<mark> - </mark>"+g1+"</div>"; }
}

function change_sem(){ 
    if(curr_point.length==0){ document.getElementById("alert3").innerHTML="<small class='alert alert-danger'><strong>alert!</strong>No courses added!</small>"; }
    else{ document.getElementById("alert3").innerHTML="";
    let sp=0; s=0;
    for(i=0;i<curr_credit.length;i++){
        sp+=curr_credit[i]*curr_point[i];
        s+=curr_credit[i];
    }
    course_history=[];
    c1.innerHTML="<mark>"+(sp/s).toFixed(2)+"</mark>";

    sp=0; s=0;
    for(i=0;i<all_credit.length;i++){
        sp+=all_credit[i]*all_point[i];
        s+=all_credit[i];
    }
    
    c2.innerHTML="<mark>"+(sp/s).toFixed(2)+"</mark>";
    document.getElementById("div0").hidden=false;
    curr_point=[];
    curr_credit=[];
    document.getElementById("div1").hidden=true;
    } 
}

 function check_sem(t){
    sn=parseInt(t.value);
    if (!(sn>0&&sn<=10)){ document.getElementById("alert1").innerHTML="<small class='alert alert-danger'><strong>alert!</strong> Sem-no sholud be 1-10!</small>"; }
    else{document.getElementById("alert1").innerHTML="";}
 }
 
function desc(){
    document.getElementById("alert2").innerHTML="<small class='alert alert-success'><strong>Format!</strong>*22CST11*</small>";
}

function cancel_desc(){
    document.getElementById("alert2").innerHTML="";

}
 


