function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: " ",
    delay: 20,
  });
}

function generatePoem(event) {
  event.preventDefault();
  let inputEl = document.querySelector("#input-el");
  let poem = document.querySelector("#poem");
  let input = inputEl.value.toLowerCase().trim();

  let apiKey = "4obaa93faa4d0abd12t05933a7d742d3";
  let prompt = `Generate a motivational quote based on ${input}`;
  let context =
    "You are a motivational speaker and you always have short quotes to motivate people working as they start of their day.User instructions are: Your mission is to generate a short quote. Make sure to follow user instructions. At the end can you skip a line with a <br /> and write , Stay Positive and Enjoy your day😉";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  poem.innerHTML = `Generating quote on " ${input} ".... `;

  axios.get(apiUrl).then(displayPoem);
}

let form = document.querySelector("#form");
form.addEventListener("submit", generatePoem);
