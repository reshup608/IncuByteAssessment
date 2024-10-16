#String Calculator TDD Kata
This is an implementation of the String Calculator following the Test-Driven Development (TDD) approach.

Project Overview
This project is a solution to the String Calculator kata. The goal is to develop a simple string calculator that adds numbers from a string input, using TDD principles. Tests are written using Jest.

Features
Add numbers from a string (comma-separated or newline-separated).
Support for custom delimiters.
Throws exceptions for negative numbers.
Prerequisites
Before running the project, ensure you have the following installed:

Node.js (version 12 or above)
npm
Getting Started
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/StringCalculator.git
Navigate to the project directory:

bash
Copy code
cd StringCalculator
Install dependencies: After navigating into the project folder, install the necessary dependencies using npm:

bash
Copy code
npm install
Running the Tests
This project uses Jest for testing. Follow the instructions below to run the tests:

Run all tests:

bash
Copy code
npm test
Run tests in verbose mode (detailed output):

bash
Copy code
npm test -- --verbose
Run tests with watch mode (reruns tests when changes are detected):

bash
Copy code
npm test -- --watch
How the String Calculator Works
Empty String:

Input: ""
Output: 0
Single Number:

Input: "1"
Output: 1
Two Numbers:

Input: "1,5"
Output: 6
Newline Delimiter:

Input: "1\n2,3"
Output: 6
Custom Delimiters:

Input: "//;\n1;2"
Output: 3
Negative Numbers:

Throws an exception: "negative numbers not allowed: <negative_number>".
If multiple negatives, the exception shows all negative numbers in the error message.
Project Structure
stringCalculator.js: Contains the logic for the String Calculator.
stringCalculator.test.js: Test cases for the String Calculator.
package.json: Project dependencies and scripts.
