$(document).ready(() => {
  $.get("https://lit-fortress-6467.herokuapp.com/object", (data) => {
    console.log(data);

    let randomCheck = [null, null, null, null, null];
    let r = Math.floor(Math.random() * data.results.length);

    for(let i = 0; i < 3; i++) {
      let img = document.createElement("img");
      img.className = "albums";

      while(randomCheck[r]) {
        r = Math.floor(Math.random()*data.results.length);
      }

      randomCheck[r] = true;
      img.src = "./images/" + data.results[r].cover_art;
      $(img).appendTo("#right");
    } // For Loop to create 3 random images

  }) // Get Request
}) // Document Ready Function
