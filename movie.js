var day;
var age;
var discount;

// day="ab";
day="weekdays";
// day="weekends";
age=10;

if(day=="weekdays"){
    if(age>=65){
        discount=12-(12*0.5);
        console.log("The price is",discount);
    }
    else if(age>=12&&age<65){
        console.log("The price is 12");
    }
    else if(age<12){
        discount=12-(12*0.5);
        console.log("The price is",discount);
    }
    else{
        console.log("Invalid age");
    }
}
else if(day=="weekends"){
    if(age>=65){
        discount=15-(15*0.3);
        console.log("The price is",discount);
    }
    else if(age>=12&&age<65){
        console.log("The price is 15");
    }
    else if(age<12){
        discount=12-(15*0.3);
        console.log("The price is",discount);
    }
    else{
        console.log("Invalid age");
    }
}
else{
    console.log("Invalid data");
}