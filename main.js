const citation = document.querySelector('.citation button');
const afficher = document.querySelector('.citation p');

async function getData(){
  let response = await fetch('https://api.kanye.rest/');
  let data = await response.json();
  console.log(data);
  fetch("https://api.kanye.rest/").then((response)=>{
  return response.json().then((data)=>{
  console.log(data);
  })
  })
}

citation.addEventListener('click', getData);


