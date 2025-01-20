const MATRIX_DEFAULT_SIZE = 5;
const cellTypePool = [
  "teamA",
  "teamA",
  "teamA",
  "teamA",
  "teamA",
  "teamA",
  "teamA",
  "teamA",
  "teamB",
  "teamB",
  "teamB",
  "teamB",
  "teamB",
  "teamB",
  "teamB",
  "teamB",
  "neutral",
  "neutral",
  "neutral",
  "neutral",
  "neutral",
  "neutral",
  "neutral",
  "death",
];

const matrixNode = document.querySelector("#matrix");
const teamSelectNode = document.querySelector("#team-select");
const generateMatrixBtnNode = document.querySelector(".generate-matrix-wrapper button");

generateMatrixBtnNode.addEventListener("click", () => generateMatrix());

generateMatrix();

function generateMatrix() {
  matrixNode.innerHTML = "";
  const shuffledCellTypes = shuffle([teamSelectNode.value, ...cellTypePool]);

  for (let row = 0; row < MATRIX_DEFAULT_SIZE; row++) {
    for (let col = 0; col < MATRIX_DEFAULT_SIZE; col++) {
      const cell = generateCell(shuffledCellTypes[row * MATRIX_DEFAULT_SIZE + col]);
      matrixNode.appendChild(cell);
    }
  }
}

function generateCell(type) {
  const cell = document.createElement("div");
  cell.classList.add(type);
  return cell;
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
