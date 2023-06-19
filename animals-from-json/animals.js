const response = await fetch("animals.json");
const description = await response.json();

const main = document.getElementById("main");

description.forEach((description) => {
    const article = document.createElement("article");
    main.appendChild(article);

    const img = document.createElement("img");
    article.appendChild(img);
    img.src = description["image"];
    const div = document.createElement("div")
    article.appendChild(div);
    div.className = "info";
    const h2 = document.createElement("h2")
    div.appendChild(h2);
    h2.textContent = description["animal"];
    

    const p = document.createElement("p")
    div.appendChild(p);
    p.textContent = description["description"];
    
    
    
    const ul = document.createElement("ul");
    div.appendChild(ul);

    
    
    

    description["answers"].forEach((dzivniekaDarbibas) =>{
        const li = document.createElement("li");
        ul.appendChild(li);
        li.textContent = dzivniekaDarbibas;
    })
})