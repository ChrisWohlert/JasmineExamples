describe("the whole test suite", function () {
  it("is a spec testing one unit", function () {
    // Arrange
    const expected = 42;
    let actual;

    // Act
    actual = computeTheAnswerToTheUniverseAndEverything();

    // Assert
    expect(actual).toBe(expected);
    });
  });