
var titulos = document.querySelectorAll(".titulo");

titulos.forEach(function(titulo) {
  titulo.addEventListener("click", function() {
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
});
