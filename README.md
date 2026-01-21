# College Admissions Calculator
This project was developed as part of Assignment 4 in the Web Programming course at the Academic College of Tel Aviv-Yafo. The application is a tool for calculating university admission eligibility and scholarships based on user input.

## Project Overview
The application is an interactive web-based calculator that uses HTML, CSS, and JavaScript to validate candidate data and determine admission status.

## GitHub Pages Website
You can the project online here: https://itaytro.github.io/HW4/

### Key Features:
* Dynamic UI: The form fields update dynamically based on the selected track (Psychometric or Mechina).
* Input Validation: Ensures that a Bagrut (matriculation) grade is entered before processing.
* Age-Based Eligibility: Candidates over the age of 30 receive an immediate eligibility notification with a highlighted green background.
* Responsive Logic: Automatically enables or disables specific input fields to prevent incorrect data entry.

## Technologies Used
* HTML5: Structure of the admission form and input controls.
* CSS3: Layout styling and dynamic class toggling for success messages.
* JavaScript: Core logic, DOM manipulation, and event handling.

## How to Use
1. Select your study track: Psychometric and Bagrut or Mechina and Bagrut.
2. Note that the irrelevant grade field will be automatically disabled.
3. Enter your age and the required grades.
4. Click the Validate button:
   * If the Bagrut grade is missing, an alert will prompt you to enter it.
   * If you are over 30, a success message will appear: "You are eligible for admission to any faculty you choose".

## File Structure
* index.html - The main structure of the calculator.
* AdmissionsCalc.css - Styling rules, including the .green class for eligibility alerts.
* AdmissionsCalc.js - Contains the updateFields and validate functions.
