// toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// ketika menu di klik
document.querySelector("#Menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik asal untuk close nav
const menu = document.querySelector("#Menu");
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

/////////////////////
////////DATA////////////
////////////////////

const DB_QUIZ = [
  {
    question:
      "What tense is used to describe habitual actions or general truths?",
    answer: [
      "Present Continuous",
      "Simple Present",
      "Simple Past",
      " Present Perfect",
    ],
  },
  {
    question: "What is a synonym for “happy”?",
    answer: [" Sad", "Joyful", "Angry ", "Tired"],
  },
  {
    question:
      "Which tense is used to describe actions happening at the moment of speaking?",
    answer: [
      "Simple Present ",
      "Present Continuous",
      "Simple Past ",
      " Present Perfect ",
    ],
  },
  {
    question: "What is the opposite of “fast”?",
    answer: ["speedy", "Quick", " Rapid ", "Slow"],
  },
  {
    question:
      "Which word sounds the same but has a different meaning from “flower”?",
    answer: [" Flare ", "Flour", "Floor", "Flaw"],
  },
  {
    question:
      "Which tense is used to express predictions or plans for the future? ",
    answer: [
      " Simple Present ",
      "Present Continuous",
      "Simple Futur",
      "Present Perfect",
    ],
  },
  {
    question: "What does the idiom “break a leg” mean?",
    answer: [
      "To injure your leg  ",
      "To wish someone good luck",
      "To dance gracefully ",
      "To run fast",
    ],
  },
  {
    question:
      "What is the compound word formed by combining “tooth” and “brush”? ",
    answer: ["Toothpaste  ", "Toothpick", "Toothache", " Toothbrush"],
  },
  {
    question: "What does the prefix “un-” usually indicate? ",
    answer: [
      "  Before or in front of ",
      "Together or with",
      "Opposite or negative",
      "After or behind",
    ],
  },
  {
    question:
      "Which word commonly collocates with “make” to form the phrase “make a decision”?",
    answer: ["Have  ", "Do", "Take", "Give"],
  },
];

const CORRECT_ANSWER = [1, 1, 1, 3, 1, 2, 1, 3, 2, 2];

/////////////////////
////////SETUP QUESTION////////////
////////////////////

function startQUiz() {
  document.getElementById("opening").style.display = "none";
  document.getElementById("quiz").style.display = "block";
}

let current_q = 0;
let saved_Answer = [];
let total_Score = 0;

document.addEventListener("DOMContentLoaded", function (event) {
  setupQuestion();
});

function setupQuestion() {
  document.getElementById("question").innerText =
    DB_QUIZ[current_q]["question"];
  document.getElementById("choiceText0").innerText =
    DB_QUIZ[current_q]["answer"][0];
  document.getElementById("choiceText1").innerText =
    DB_QUIZ[current_q]["answer"][1];
  document.getElementById("choiceText2").innerText =
    DB_QUIZ[current_q]["answer"][2];
  document.getElementById("choiceText3").innerText =
    DB_QUIZ[current_q]["answer"][3];
}

function nextQuestion() {
  current_q++;

  saveAnswer();

  if (current_q > DB_QUIZ.length - 1) stopQuiz();

  setupQuestion();

  resetState();
}

function resetState() {
  const chooseAnswer = document.querySelector('input[name="choices"]:checked');
  if (chooseAnswer != null) chooseAnswer.checked = false;
}

function stopQuiz() {
  checkScore();

  document.getElementById("quiz").style.display = "none";
  document.getElementById("closing").style.display = "block";

  document.getElementById("scoreText").innerHTML = "Score Anda " + total_Score;
  return;
}

function saveAnswer() {
  const answer = document.querySelector('input[name="choices"]:checked');

  if (answer != null) {
    saved_Answer.push(parseInt(answer.getAttribute("data-id")));
  } else {
    // default answer A
    saved_Answer.push(0);
  }
}

function checkScore() {
  for (i = 0; i < saved_Answer.length; i++) {
    if (saved_Answer[i] == CORRECT_ANSWER[i]) total_Score += 10;
  }
}
