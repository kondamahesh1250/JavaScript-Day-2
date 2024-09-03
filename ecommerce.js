var membership;
var amount;
var discount;
// membership="abc";
membership="Regular Customers";
// membership="VIP Customers";
amount=50;
// amount=150;
// amount=550;



if(membership=="Regular Customers"){
    if(amount<100&&amount>0){
        console.log("No discount for purchases under $100");
    }
    else if(amount>=100&&amount<=500){
        discount = amount-(amount*0.05);
        console.log("A 5% discount for purchases between $100 and $500",discount);
    }
    else if(amount>500){
        discount = amount-(amount*0.1);
        console.log("A 10% discount for purchases over $500",discount);
    }
    else{
        console.log("Enter valid number");   
    }
   
}
else if(membership=="VIP Customers"){
    if(amount<100&&amount>0){
        discount =amount-(amount*0.1);
        console.log("A 10% discount for purchases under $100",discount);
    }
    else if(amount>=100&&amount<=500){
        discount = amount-(amount*0.15)
        console.log("A 15% discount for purchases between $100 and $500",discount);
    }
    else if(amount>500){
        discount =amount-(amount*0.20)
        console.log("A 20% discount for purchases over $500",discount);
    }
    else{
        console.log("Enter valid number");   
    }
}
else{
    console.log("Invalid Membership");
}