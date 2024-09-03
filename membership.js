var membership = "Basic Membership";
// var membership = "Standard Membership";
// var membership = "Premium Membership";
// var membership = "Better Membership";

if(membership=="Basic Membership"){
    console.log('Access to only free books.');
}
else if(membership=="Standard Membership"){
    console.log('Access to free books and discounted paid books.');
}
else if(membership=="Premium Membership"){
    console.log('Access to all books, including exclusive content.');
}
else{
    console.log('Invalid Membership');
}