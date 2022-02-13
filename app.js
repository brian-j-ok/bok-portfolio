const links = document.getElementsByTagName("li");
const pages = document.getElementsByClassName("content");

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function (e) {
    activateLink(e.target);
  });
}

function activateLink(link) {
  for (var i = 0; i < pages.length; i++) {
    if (pages[i].id == link.innerHTML.toLowerCase()) {
      pages[i].setAttribute("data-active", "true");
    } else {
      pages[i].setAttribute("data-active", "false")
    }
  }
}