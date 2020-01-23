function wakeDog(a,b)
{
  return (`Wake ${a} the ${b}`); 
  
}
//wakeDog(a, b)).to.equal(`Wake Skippy the Welsh Corgi`)

function leashDog(a,b)
{
  return (`Leash ${a} the ${b}`);
  //return "Leash ".concat(a, " the ").concat(b);
}
function walkToPark(a,b)
{
 return (`Walk to the park with ${a} the ${b}`);
}
function throwFrisbee(a,b)
{
  return (`Throw the frisbee for ${a} the ${b}`);
}
function walkHome(a,b)
{
   return (`Walk home with ${a} the ${b}`);
}
function unleashDog(a,b)
{
return (`Unleash ${a} the ${b}`);
}

function exerciseDog(dogName,dogBreed)
{
 let routine=[wakeDog(dogName,dogBreed),leashDog(dogName,dogBreed),walkToPark(dogName,dogBreed),throwFrisbee(dogName,dogBreed),walkHome(dogName,dogBreed), unleashDog(dogName,dogBreed)];
 return routine;
}


let routine=exerciseDog("Esther","Dalmation");
routine;

