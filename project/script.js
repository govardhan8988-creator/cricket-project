// ---------------------------
// GAME STATE
// ---------------------------
let runs = 0;
let wickets = 0;
let overs = 0;
const maxOvers = 5;
const maxWickets = 10;

// DOM Elements
const runsEl = document.getElementById("runs");
const wicketsEl = document.getElementById("wickets");
const oversEl = document.getElementById("overs");
const commentaryEl = document.getElementById("commentary-text");

// ---------------------------
// EVENT HANDLERS
// ---------------------------
document.getElementById("bat-button").addEventListener("click", handleBat);
document.getElementById("bowl-button").addEventListener("click", handleBowl);
document.getElementById("add-run").addEventListener("click", () => addRun(1));
document.getElementById("add-wicket").addEventListener("click", addWicket);
document.getElementById("add-over").addEventListener("click", addOver);

// ---------------------------
// GAME LOGIC FUNCTIONS
// ---------------------------
function handleBat() {
  if (wickets >= maxWickets || overs >= maxOvers) {
    commentaryEl.textContent = "Innings Over!";
    return;
  }
  const run = Math.floor(Math.random() * 6) + 1;
  addRun(run);
  commentaryEl.textContent = `Batsman hits ${run} run${run > 1 ? "s" : ""}!`;
}

function handleBowl() {
  const ball = Math.floor(Math.random() * 10);
  if (ball === 0) {
    addWicket();
    commentaryEl.textContent = "Bowled! That's a wicket!";
  } else {
    commentaryEl.textContent = "Nice delivery, no run!";
  }
}

// ---------------------------
// SCOREBOARD FUNCTIONS
// ---------------------------
function addRun(run) {
  runs += run;
  updateScoreboard();
}

function addWicket() {
  if (wickets < maxWickets) {
    wickets++;
    updateScoreboard();
  } else {
    commentaryEl.textContent = "All out!";
  }
}

function addOver() {
  if (overs < maxOvers) {
    overs++;
    updateScoreboard();
  } else {
    commentaryEl.textContent = "Innings complete!";
  }
}

function updateScoreboard() {
  runsEl.textContent = runs;
  wicketsEl.textContent = wickets;
  oversEl.textContent = overs;
}