import { sum } from "./sum";

describe("sum", () => {
  it("returns the sum of all the numbers passed.", () => {
    // Arrange
    // Act
    const actual = sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    // Assert
    expect(actual).toEqual(55);
  });

  it("returns 0 if no numbers are passed.", () => {
    // Arrange
    // Act
    const actual = sum();
    // Assert
    expect(actual).toEqual(0);
  });
});
