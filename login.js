// Create the login function here.
function login() {

player_name = document.getElementById("playername").value;
localStorage.setItem("player_name" , player_name);

window.location = "gamepage.html";
}
function submit() {

  var x = document.getElementById("guessField") .value;
if(x == y)
{
  alert("CONGRATULATIONS!!!"+playername+" YOU GUESSED IT RIGHT IN" 
  + guess + " GUESS ");
  guess= 1;
}
else if(x > y)

{
guess++;
alert("OOPS SORRY!! TRY A SMALLER NUMBER");
}
else
{
guess++;
 alert("OOPS SORRY!! TRY A GREATER NUMBER")  
}
}
function playAgain(){
    y = Math.floor(Math.random() * 10 + 1);
}