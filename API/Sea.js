// Get an array of all the image sources
const images = [
    "assets/shrimp.png",
    "assets/fish.png",
    "assets/octopus.png",
    "assets/shark.png",
  ];
  
  // Shuffle the array of image sources
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  const shuffledImages = shuffle(images);
  
  // Populate the grid items with the shuffled images
  const gridItems = document.querySelectorAll(".grid-item img");
  for (let i = 0; i < gridItems.length; i++) {
    gridItems[i].src = shuffledImages[i % shuffledImages.length];
  }



  function catchFish(element) {
    element.style.display = "none";
    showMessage("You've caught something!");
  }
  
  function showMessage(text) {
    var messageContainer = document.querySelector(".message-container");
    var messageElement = document.querySelector("#message");
    
    messageElement.innerText = text;
    messageContainer.style.display = "block";
  }
  

