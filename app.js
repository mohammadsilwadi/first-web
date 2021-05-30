var userName = prompt("Whats your name ?");
alert("welcome to our website " + userName );
document.write(" welcome to our website "+ userName   );
var yourAge = prompt("how old are u ?");
document.write(  " Happy "      + yourAge   )
document.write(  " Years  inshallah"         );
var favTennisPlayer = prompt("what's your fav tennis player");
if(favTennisPlayer === "novak" ){
  
  document.write("<p> check his social account on instagram</p>" );
document.write("<a href='https://www.instagram.com/djokernole/'> novak djokovic instagram</a>");
}else if(favTennisPlayer === "Rafael" ){
  
  document.write("<p> check his social account on instagram </p>" );
document.write("<a href='https://www.instagram.com/rafaelnadal/'> Rafael Nadal instagram</a>");

}else if(favTennisPlayer === "Roger" ){
  
  document.write("<p> check his social account on instagram </p>" );
document.write("<a href='https://www.instagram.com/rogerfederer/?hl=en'> roger federer instagram</a>");

}else{
  
  alert('please next time answer either novak or Rafael or Roger');

}


var starRating = prompt('can u rate us between 0 to 10')
var i
for(var i = 1; i <= starRating; i++)  { 
  if(starRating ==0 ) {
   break;
  }
  else if(starRating >10 ) {
   break;
  }
  else document.write('<img src="https://image.shutterstock.com/image-vector/golden-christmas-star-isolated-on-260nw-1723051297.jpg" />')

}
var answerQus=prompt('please answer this question "1+1=?" ')
while(answerQus != 2) {
 console.log('inside the while loop');
    
  answerQus = prompt('please enter your answer to this question "1+1=?" again with incorrect answer!!!!');
 }