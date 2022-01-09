const PUZZLE_API_URL = "https://puzzle.mead.io/puzzle?wordCount=";

const getPuzzle = async (wordCount) => {
  const response = await fetch(PUZZLE_API_URL + wordCount);
  const puzzleObj = await response.json();
  return puzzleObj.puzzle;
};

export { getPuzzle as default };
