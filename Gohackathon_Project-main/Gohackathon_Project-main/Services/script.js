let currentSet = "set1";
let intervalId;

function toggleImages() {
  const images = document.querySelectorAll(".image-grid img");

  if (currentSet === "set2") {
    images[0].src = "../Public/images/toggleImg11.png";
    images[1].src = "../Public/images/toggleImg12.png";
    images[2].src = "../Public/images/toggleImg13.png";
    images[3].src = "../Public/images/toggleImg14.png";
    images[4].src = "../Public/images/toggleImg15.png";
    images[5].src = "../Public/images/toggleImg16.png";
    images[6].src = "../Public/images/toggleImg17.png";
    images[7].src = "../Public/images/toggleImg18.png";
    images[8].src = "../Public/images/toggleImg19.png";
    images[9].src = "../Public/images/toggleImg110.png";
    currentSet = "set1";
  } else {
    images[0].src = "../Public/images/toggleImg21.png";
    images[1].src = "../Public/images/toggleImg22.png";
    images[2].src = "../Public/images/toggleImg23.png";
    images[3].src = "../Public/images/toggleImg24.png";
    images[4].src = "../Public/images/toggleImg25.png";
    images[5].src = "../Public/images/toggleImg26.png";
    images[6].src = "../Public/images/toggleImg27.png";
    images[7].src = "../Public/images/toggleImg28.png";
    images[8].src = "../Public/images/toggleImg29.png";
    images[9].src = "../Public/images/toggleImg210.png";
    currentSet = "set2";
  }
}

document.getElementById("imageGrid").addEventListener("mouseenter", function() {
  if (!intervalId) {
    intervalId = setInterval(toggleImages, 2000);
  }
});
