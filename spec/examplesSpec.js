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

describe("mock Ajax", function (){
  
  beforeEach(function() {
    jasmine.Ajax.install();
  });

  afterEach(function() {
    jasmine.Ajax.uninstall();
  });

  if("filters large values", function (){

    //Arrange
    jasmine.Ajax.stubRequest('/values').andReturn([1, 2, 3, 4, 5]);
    const expected = [3, 4, 5];

    //Act
    const actual = getLargeValues();

    //Assert
    expect(expected).toEqual(actual);

  });

  if("filters small posts ", function (){

    //Act
    const actual = postSmallValues();

    //Assert
    const request = jasmine.Ajax.requests.mostRecent();
    expect(request.url).toBe('/values');
    expect(request.method).toBe('POST');
    expect(request.data()).toEqual([1, 2]);
  })



})