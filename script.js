function yesBtn() {
  alert('I love you tooo🥹😘');
}

function moveNo() {
  let noBtn = document.getElementById("noBtn");

  let messages = [
    "No nau😭",
    "Nopeee",
    "Nice try",
    "Try again🤣",
    "You can't say no",
    "My Nanss please🥺",
    "STAWPP 😭",
    "Just SAY YES!!"
  ];

  // change text randomly
  let randomMessage = Math.floor(Math.random()*messages.length);
  noBtn.textContent = messages[randomMessage];

  // move the button randomly
  let x = Math.random() * (window.innerWidth-noBtn.offsetWidth);
  let y = Math.random() * (window.innerHeight-noBtn.offsetHeight);

  noBtn.style.position = "fixed";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}