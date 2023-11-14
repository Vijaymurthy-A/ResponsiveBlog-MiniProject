console.log("Inside blog Page");

// document.getElementById("blog1").style.display = "none";
// document.getElementById("blog2").style.display = "none";
// document.getElementById("blog3").style.display = "none";
// document.getElementById("blog4").style.display = "none";

// let title = sessionStorage.getItem("displayBlog");
// if (title === "blog1") {
//   document.getElementById("blog1").style.display = "block";
//   document.getElementById("prev").style.color = `hsl(0, 0%, 60%)`;
// } else if (title === "blog2") {
//   document.getElementById("blog2").style.display = "block";
// } else if (title === "blog3") {
//   document.getElementById("blog3").style.display = "block";
// } else if (title === "blog4") {
//   document.getElementById("blog4").style.display = "block";
//   document.getElementById("next").style.color = `hsl(0, 0%, 60%)`;
// }

// document.getElementById("prev").addEventListener("click", (event) => {
//   title = sessionStorage.getItem("displayBlog");
//   if (title === "blog2") {
//     document.getElementById("blog1").style.display = "block";
//     document.getElementById(title).style.display = "none";
//     sessionStorage.setItem("displayBlog", "blog1");
//     document.getElementById("prev").style.color = `hsl(0, 0%, 60%)`;
//   } else if (title === "blog3") {
//     document.getElementById("blog2").style.display = "block";
//     document.getElementById(title).style.display = "none";
//     sessionStorage.setItem("displayBlog", "blog2");
//   } else if (title === "blog4") {
//     document.getElementById("blog3").style.display = "block";
//     document.getElementById(title).style.display = "none";
//     sessionStorage.setItem("displayBlog", "blog3");
//     document.getElementById("prev").style.color = "black";
//     document.getElementById("next").style.color = "black";
//   }
// });

// document.getElementById("next").addEventListener("click", (event) => {
//   title = sessionStorage.getItem("displayBlog");
//   if (title === "blog1") {
//     document.getElementById("blog1").style.display = "none";
//     document.getElementById("blog2").style.display = "block";
//     sessionStorage.setItem("displayBlog", "blog2");
//     document.getElementById("prev").style.color = "black";
//     document.getElementById("next").style.color = "black";
//   } else if (title === "blog2") {
//     document.getElementById("blog2").style.display = "none";
//     document.getElementById("blog3").style.display = "block";
//     sessionStorage.setItem("displayBlog", "blog3");
//   } else if (title === "blog3") {
//     document.getElementById("blog3").style.display = "none";
//     document.getElementById("blog4").style.display = "block";
//     sessionStorage.setItem("displayBlog", "blog4");
//     document.getElementById("next").style.color = `hsl(0, 0%, 60%)`;
//   }
// });

// document.getElementById("title").addEventListener("click", (event) => {
//   sessionStorage.setItem("displayBlog", event.target.title);
// });
