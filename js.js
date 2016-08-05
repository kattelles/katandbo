let hearted = function() {
  document.getElementById("heart").classList.toggle("liked");
  document.getElementById("heart").classList.toggle("unliked");
};

document.addEventListener("DOMContentLoaded", function(){
  document.getElementById("heart").addEventListener("click", hearted);

  document.getElementById("six").addEventListener("click", () => {
    document.getElementById("header").style["background-color"] = "white";
  });

  document.getElementById("one").addEventListener("click", () => {
      document.getElementById("header").style["background-color"] = "#dcbac8";
  });

  document.getElementById("two").addEventListener("click", () => {
      document.getElementById("header").style["background-color"] = "#d9e6a1";
  });

  document.getElementById("three").addEventListener("click", () => {
      document.getElementById("header").style["background-color"] = "#fefb92";
  });

  document.getElementById("four").addEventListener("click", () => {
      document.getElementById("header").style["background-color"] = "#f7f4d0";
  });

  document.getElementById("five").addEventListener("click", () => {
      document.getElementById("header").style["background-color"] = "#b1bae1";
  });
});
