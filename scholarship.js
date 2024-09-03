var GPA;
var service;
var extracurricular;
GPA=2.5;
extracurricular=3;
service=120;

if(GPA>=3.5){
    console.log("Eligible for Merit-Based Scholarship");
}
else if((GPA>=3.0&&GPA<3.5)&&extracurricular>=2){
    console.log("Eligible for Leadership Scholarship");
}
else if((GPA>=2.5&&GPA<3.0)&&service>=100){
    console.log("Eligible for Community Service Scholarship");
}
else{
    console.log("Not eligible");
}