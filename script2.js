$(document).ready(() => {
  $.get("https://lit-fortress-6467.herokuapp.com/object", (data) => {
    console.log(data);
    for(let i = 0; i < data.results.length; i++) {

      let div = document.createElement("div");
      let img = document.createElement("img");
      img.src = "./images/" + data.results[i].cover_art;
      img.className = "albums";
      img.style.cursor = "pointer"
      $(img).appendTo("#album-scroll");

      $(img).click(() => {
        let p = document.createElement("p");
        p.className = "bin-p";
        $(p).text(data.results[i].artist + ": " + data.results[i].title);
        $(p).appendTo("#bin");
        img.style.cursor = "";
        $(img).unbind("click");
      }) // Click functionality for each image
    } // For Loop for All Album covers

    let albums = document.getElementsByClassName("albums");
    $("#clear").click(() => {
      $("#bin").empty();
      for(let i = 0; i < albums.length; i++) {
        if(!albums[i].style.cursor) {
        $(albums[i]).css("cursor", "pointer");
          $(albums[i]).click(() => {
            let p = document.createElement("p");
            p.className = "bin-p";
            $(p).text(data.results[i].artist + ": " + data.results[i].title);
            $(p).appendTo("#bin");
            $(albums[i]).css("cursor", "");
            $(albums[i]).unbind("click");
          }) // Readding click to images
        } // If statement to check if the image still has a cursor property of pointer
      } // For loops to select each element with the class name of "albums"
    }) // Click functionality for CLEAR button

    $("#submit").click(() => {
      $.post("https://lit-fortress-6467.herokuapp.com/post", (data) => {
          alert("Data loaded: " + data);
      }) // Post request
      $("#bin").empty();
    }) // click functionality for SUBMIT button
  }) // Get Request
}) // Document Ready Function
