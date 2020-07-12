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
