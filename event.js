var age;
var participants;
var email;

age=18;
participants=100;
email="abc@gmail.com";

if(age>=18){
    if(participants<=100){
        if(email=="abc@gmail.com"){
            console.log("Registration Successful");
        }
        else{
            console.log("Enter valid email id");
        }
    }
    else{
        console.log("No more registrations are accepted.")
    }
}
else if(age<18){
    console.log("Not eligible for register");
}