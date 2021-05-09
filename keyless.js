age = prompt("Please enter your age :")
if (age < 18 && age > 0) {
    alert("Sorry, you are too young to drive this car. Powering off")
}
else if (age == 18) {
    alert("Congratulations on your first year of driving. Enjoy the ride!")
}
    
else if (age<0) {
    alert("Please enter a correct age")
}
else{
    alert("Powering On. Enjoy the ride!")
};
