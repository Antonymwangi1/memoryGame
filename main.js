console.log("working");
const emojis = [
  "😂",
  "😂",
  "❤",
  "❤",
  "🥵",
  "🥵",
  "🤢",
  "🤢",
  "🤡",
  "🤡",
  "😍",
  "😍",
  "👺",
  "👺",
  "💀",
  "💀",
];

// sorting the emojis randomly
var shuff_emojis = emojis.sort(() => Math.random() - 0.5);

let counter = 0;

for (let i = 0; i < emojis.length; i++) {
  let box = document.createElement("div");
  box.className = "item";
  box.innerHTML = shuff_emojis[i];

  box.onclick = (e) => {
    /*
     The event handler function checks
     if the clicked box does not already 
     have the "boxOpen" class and the counter is 
     less than 2 (to prevent opening more than two boxes at a time).
    */
    if (!e.target.classList.contains("boxOpen") && counter < 2) {
      e.target.classList.add("boxOpen");
      counter++;

    //   when the counter is 2 we are setting timeout with a delay of 500ms
      if (counter === 2) {
        setTimeout(() => {
          const openBoxes = document.querySelectorAll(".boxOpen");

        //   if both boxes match, boxMatch class is added and boxOpen is added then the counter is reset to 0
          if (openBoxes[0].innerHTML === openBoxes[1].innerHTML) {
            openBoxes.forEach((box) => {
              box.classList.add("boxMatch");
              box.classList.remove("boxOpen");
            });

            counter = 0;

            // if all boxes are matched or 'opened' the player wins else the boxes close again using a set time with a delay of 500ms and counter reset to 0
            if (
              document.querySelectorAll(".boxMatch").length === emojis.length
            ) {
              alert("You win!");
            }
          } else {
            setTimeout(() => {
              openBoxes.forEach((box) => {
                box.classList.remove("boxOpen");
              });

              counter = 0;
            }, 500);
          }
        }, 500);
      }
    }
  };

//   appending our emojis to our boxes
  document.querySelector(".game").appendChild(box);
}
