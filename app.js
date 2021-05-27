var userName = prompt("Whats your name ?");
alert("welcome to our websit " + userName );
var favTennisPlayer = prompt("what's your fav tennis player");
if(favTennisPlayer === "novak" ){
  
  document.write("<p> check his social account on instagram</p>" );
document.write("<a href='https://www.instagram.com/djokernole/'> novak djokovic instagram</a>");
}else if(favTennisPlayer === "Rafael" ){
  
  document.write("<p> check his social account </p>" );
document.write("<a href='https://www.instagram.com/rafaelnadal/'> Rafael Nadal instagram</a>");

}else if(favTennisPlayer === "Roger" ){
  
  document.write("<p> check his social account </p>" );
document.write("<a href='https://www.instagram.com/rogerfederer/?hl=en'> roger federer instagram</a>");

}else{
  
  alert('please next time answer either novak or Rafael or Roger');

}

