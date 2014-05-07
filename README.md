JS10: Test Drive 101

	Objective

		Implement a pure (no side effects) splice function using test-driven development. (The unit tests have already been written for you.)


	Background

		In the Seatbelt exercise we wrote unit tests for a working function. Test-driven development reverses this: You write unit tests before your function is implemented. Then you can implement the function piece by piece until all the tests pass.


	Resources

		Unit Testing: https://slides.com/rainelourie/unit-testing/fullscreen#/

		Documentation for built-in (destructive) splice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

		Jasmine (docs) http://jasmine.github.io/

		How Do I Jasmine (up to "Make me my own matcher"): http://evanhahn.com/how-do-i-jasmine/


	Requirements

	Part I

		1) Clone the exercise-starters repo, or do a git pull if you already have it.

		2) Find the test-drive-101 starter code and copy it into a new project folder.

		3) Open test-runner.html in your browser. Open the dev tools console. See the errors that say FAIL? Congratulations, you're already through the "red" phase of test-drive development!

		4) Open src.js in your editor. Implement the splice method so the accompanying tests all pass. You are not allowed to use the built-in splice method in your function; you are reproducing its functionality from scratch in a functional style.

			Tip: Look over the unit tests in spec.js to see the kinds of things that are being tested for. You will get to write your own unit tests soon!


	Part II

		1) Read the How Do I Jasmine tutorial, up to "Make me my own matcher."

		2) Use the refactoru-html generator to scaffold out a new project, choosing yes when asked to include Jasmine tests.

			$ yo refactoru-html

		3) Copy src.js from Part I, with your working implementation of splice, into the current project.

		4) Modify runner.html to include src.js.

		5) Open runner.html in your browser. You should see a single mock test that is failing.

		6) In spec.js, rewrite the unit tests from Part I using Jasmine. Write these in spec.js which is already being included by runner.html. Make sure that the tests all pass, and that they cover all the cases originally covered in Part I.

			Success! You should see 6 Jasmine tests passing upon completion.