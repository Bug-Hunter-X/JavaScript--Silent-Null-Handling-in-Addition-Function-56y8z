# JavaScript Bug: Silent Null Handling

This repository demonstrates a subtle bug in JavaScript related to how null values are handled in an addition function. The `bug.js` file contains the buggy code, while `bugSolution.js` provides a corrected version.

## Bug Description
The function `foo` adds two numbers. However, if either input is `null`, it silently returns 0. This behavior might mask deeper problems.  A better approach is to either throw an error or use a default value more explicitly.

## Solution
The solution, in `bugSolution.js`, either throws an error when encountering null values for better debugging and error handling or uses default values to prevent unexpected behavior.  Explicitly handling nulls will improve code clarity and predictability.