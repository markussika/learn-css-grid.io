const response = await fetch("questions.json");
const questions = await response.json();
console.log(questions);


questions.forEach((q) =>{
    
    const form = document.createElement("form");
    
    console.log(form);
    
  })


  const main = document.getElementById("main");

