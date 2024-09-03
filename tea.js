var tea;
var addons;
var cost;
tea="Regular Tea";
// tea="Masala Tea";
// tea="Ginger Tea";
addons="Extra Sugar";
// addons="Extra Milk";
// tea="abc";

if(tea=="Regular Tea"){
    if(addons=="Extra Sugar"){
        a=15;
        b=2.50;
        console.log("Base Price for Regular Tea:",a);
        console.log("Add-On Cost for Extra Sugar:",b);
        cost=15+2.50;
        console.log("Total Price",cost);
    }
    else if(addons=="Extra Milk"){
        a=15;
        b=5;
        console.log("Base Price for Regular Tea:",a);
        console.log("Add-On Cost for Extra Milk:",b);
        cost=15+5;
        console.log("Total Price",cost);
    }
    else{
        a=15;
        console.log("The cost of Regular tea is",a);
    }
}
else if(tea=="Masala Tea"){
    if(addons=="Extra Sugar"){
        a=20;
        b=2.50;
        console.log("Base Price for Masala Tea:",a);
        console.log("Add-On Cost for Extra Sugar:",b);    
        cost=20+2.50;
        console.log("Total Price",cost);
    }
    else if(addons=="Extra Milk"){
        a=20;
        b=5;
        console.log("Base Price for Masala Tea:",a);
        console.log("Add-On Cost for Extra Milk:",b); 
        cost=20+5;
        console.log("Total Price",cost);
    }
    else{
        a=20;
        console.log("The cost of Masala tea is",a);
    }
}
else if(tea=="Ginger Tea"){
    if(addons=="Extra Sugar"){
        a=25;
        b=2.50;
        console.log("Base Price for Ginger Tea:",a);
        console.log("Add-On Cost for Extra Sugar:",b);
        cost=25+2.50;
        console.log("Total Price",cost);
    }
    else if(addons=="Extra Milk"){
        a=25;
        b=5;
        console.log("Base Price for Ginger Tea:",a);
        console.log("Add-On Cost for Extra Milk:",b);
        cost=25+5;
        console.log("Total Price",cost);
    }
    else{
        a=25;
        console.log("The cost of Ginger tea is",a);
    }
}
else{
    console.log("Enter valid data");
}