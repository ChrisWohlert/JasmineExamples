describe("the whole test suite", function () {
	// Specs
	it("is a Spec testing one unit", function () {
		expect(true).toBe(true);
	});

	// Expectations
	it("is an Expectation of the answer", function () {
		expect(theAnswerToEverything).toBe(42);
	});

	// Test Setup
	it("computes the answer to everything", function () {
		// Arrange
		const expected = 42;
		let actual;

		// Act
		actual = computeTheAnswerToTheUniverseAndEverything();

		// Assert
		expect(actual).toBe(expected);
	});
});

// Setup and Teardown
describe("sets up and tears down", function () {
	beforeEach(function () {
		runBeforeEachSpec();
	});

	afterEach(function () {
		runAfterEachSpec();
	});

	beforeAll(function () {
		runBeforeTestSuite();
	});

	afterAll(function () {
		runAfterTestSuite();
	});
});