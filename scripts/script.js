console.log("I'm from script.js");

let topics = new Map();
document
  .querySelectorAll("#title > h3")
  .forEach((element) => topics.set(element.innerText, element.title));

if (topics.size == 0) {
  document
    .querySelectorAll("#title > h1")
    .forEach((element) => topics.set(element.innerText, element.title));
}
function searchQuery() {
  let results = new Map();
  const searchQuery = document.getElementById("search").value;
  if (searchQuery !== "") {
    topics.forEach((value, topic) => {
      if (topic.toUpperCase().includes(searchQuery.toUpperCase())) {
        results.set(topic, value);
      }
    });
  }

  let popupElement = document.getElementById("searchPopup");
  while (popupElement.hasChildNodes()) {
    popupElement.removeChild(popupElement.firstChild);
  }

  if (results.size > 0) {
    results.forEach((value, key) => {
      const div = document.createElement("a");
      div.setAttribute("href", `./blogs.html#${value}`);
      div.setAttribute("onclick", `navigateToSection("${value}", event)`);
      div.innerText = key;
      popupElement.appendChild(div);
    });
  }
}

document.addEventListener("click", (event) => {
  let searchDiv = document.getElementById("searchDiv");
  let popupDiv = document.getElementById("searchPopup");

  if (
    popupDiv.hasChildNodes() &&
    event.target !== searchDiv &&
    event.target !== popupDiv
  ) {
    while (popupDiv.hasChildNodes()) {
      popupDiv.removeChild(popupDiv.firstChild);
    }
  }
});

// With the help of window.scrollTo we can achieve client side navigation also
// function navigateToSection(sectionId, event) {
//   const section = document.getElementById(sectionId);
//   if (section) {
//     event.preventDefault();
//     console.log(section.offsetTop);
//     // Scroll to the section with an animated behavior
//     window.scrollTo({
//       top: section.offsetTop,
//     });
//   }
// }

// Used sessionStorage to keep track on which title was clicked by the user
// const nodes = document.querySelectorAll("#title");
// for (const node of nodes) {
//   node.addEventListener("click", function (event) {
//     sessionStorage.setItem("displayBlog", event.target.title);
//   });
// }
