# 04 Web APIs: Code Quiz

As you proceed in your career as a web developer, you will probably be asked to complete a coding assessment, which is typically a combination of multiple-choice questions and interactive challenges. Build a timed code quiz with multiple-choice questions. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

## User Story

```
AS A coding bootcamp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

1. page loads
2. click start button to begin quiz
3. timer appears and begins countdown
    -timer appears
    -begins countdown
4. quiz question #1 appears with choices
5. user selects answer to qeustion #1
6. capture  user answer, compare to actual answer
7. if answer is incorrect, deduct time from timer and if answer is correct increment score or use remaining time as score. Track number incorrect and correct.
8. system provides answer feedback: correct vs. incorrect
9. repeat for all questions
10. game end conditions:
    a. answer all questions in time allowed
    b. time runs out
11. Game ends
12. display of final score
13. user submits score & initials to high scores with submit button
14. store initials/high score in local storage
15. local storage object will be an array of user scores and initials

have to sort this array - look up array sort methods, score high to low

16. when page loads get all local storage data and populate high scores page
17. high scores link/button to high scores
18. main page button

single .js file vs multiple .js files
-modularize js code into different files with different purposes

-store static info in one .js file and import into code

BONUS;
1. soundbyte for correct answer
2. soundbyte for incorrect answer

-- requires html audio tag <audio>
-- requires js new Audio();


## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
```

The following animation demonstrates the application functionality:

![code quiz](./Assets/04-web-apis-homework-demo.gif)

### Review

You are required to submit the following for review:

* The URL of the functional, deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
