# Create A Phone Number
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
Example:

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

The returned format must be correct in order to complete this challenge.
Don't forget the space after the closing parentheses!

# Problem
input:
    array of integers

output:
    numbers in form of phone number string

integer: 
    whole number

phone number format:
("first three numbers") "second three numbers"-"last four numbers"

model 1 (what the problem requires):
    take array, divide into three groups, format each as a string of numbers, add each group together in number format.

model 2:
    add into number format string different parts of integers array

# Examples / Test Cases (validate understanding the problem)

Example 1
Input:
    Integers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

Output:
    "(012) 345-6789"

Example 2
Input:
    Integers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

Output:
    "(000) 000-0000"
    
Example 3
Input:
    Integers: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9]

Output:
    "(999) 999-9999"

# Data Structure
integers array
slices of integers array
phone number string

# Algorithm
(based on model 2)
add and return "(" + integers 1 to 3 (accessed directly from integers array) + ")" + " " + integers 4 to 6 + "-" + integers 7 to 10