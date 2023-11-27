#!/usr/bin/python3

def print_last_digit(number):
     return number  % 10

num = int(input("Please Enter any Number: "))

last_digit = lastDigit(num)

print("The Last Digit in a Given Number %d = %d" %(num, last_digit))
