function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Either you run the day or the day runs you😉",
    autoStart: true,
    cursor: " ",
    delay: 20,
  });
}

let form = document.querySelector("#form");
form.addEventListener("submit", generatePoem);

// new Typewriter("#typewriter", {
//   strings: ["Hello", "World"],
//   autoStart: true,
// });
