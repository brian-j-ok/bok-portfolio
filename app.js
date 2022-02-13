const links = document.getElementsByTagName("li");

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function (e) {
    console.log(e.target.innerHTML);
  });
}