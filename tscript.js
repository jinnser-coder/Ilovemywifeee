<meta name='viewport' content='width=device-width, initial-scale=1'/><script>const title = document.getElementById("title");
const message = document.getElementById("message");
const nextBtn = document.getElementById("nextBtn");

const steps = [
  {
    title: "Hey vavee … 🌸",
    message: "I've been wanting to tell you somethingggg."
  },
  {
    title: "So here it is 💭",
    message: "I'm truly sorry for everything I did. None of it was intentional, and I never meant to hurt you in any way. I realize that I behaved in a childish and immature way and didn't handle things properly, and I'm sorry for that too ."
  },
  {
    title: "Honestly… ✨",
    message: "You're the only one that I truly admire and care about."
  },
  {
    title: "And I was wondering 💗",
    message: "Even though it's been five months since we committed to each other, we still haven't had a proper proposal 🙃"
  },
  {
    title: "so..........",
    message: "Will uu marry me 🫴🏻??"
  }
];

let index = 0;

nextBtn.addEventListener("click", () => {
  index++;

  if (index < steps.length) {
    title.textContent = steps[index].title;
    message.textContent = steps[index].message;

    if (index === steps.length - 1) {
      nextBtn.textContent = "💌 ";
    }
  } else {
    title.textContent = "And....";
    message.textContent =
      "I don't love you just as a time pass. I want to grow old with you, build a life with you, and someday marry you. No matter what problems come in life,enik ninne cherth pidich kude nirthanm, nee ellathe njan ella vavee :)";
    nextBtn.style.display = "none";
  }
});
