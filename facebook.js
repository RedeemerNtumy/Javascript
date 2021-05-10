var database = [{
    username: "Redeemer",
    password:"secret"
}];

var newsfeed = [
    {
        username: "James",
        timeline: "UG cannot stress me"
    }
    {
        username: "Anna",
        timeline: "Just got admitted to UG"
    }
];
var userNamePrompt = prompt("What is your username?")
var passwordPrompt = prompt("What is your password?")
function signIn(username, password) {
    if (username === database[0].username && password === database[0].password) {
        console.log(newsfeed);
    }
    else {
        alert("Sorry,wrong username and password")
    }
}
signIn(userNamePrompt,passwordPrompt)