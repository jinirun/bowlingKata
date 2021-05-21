const {
  bowlingKata
} = require("../Solution/bowlingKata");

describe("bowlingKata", () => {
  test("Returns an error if the input is empty", () => {
    expect(bowlingKata("")).toBe("Input cannot be empty");
  })
  test("Returns the maximum score for the game if there are 10 strikes", () => {
    expect(bowlingKata("X X X X X X X X X X X X")).toBe(300);
    expect(bowlingKata("9- 9- 9- 9- 9- 9- 9- 9- 9- 9-")).toBe(90);
    expect(bowlingKata("5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/5")).toBe(150);
    expect(bowlingKata("45 51 9- 34 6/ 81 12 42 8/ 31")).toBe(84);
  })
})
