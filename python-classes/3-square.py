#!/usr/bin/python3

"""Explain a Class Square"""


class Square:
    """this is a commentaire"""
    def __init__(self, size=0):
        """This is a commentaire"""
        if type(size) is not int:
            raise TypeError("size must be an integer")
        if size < 0:
            raise ValueError("size must be >= 0")
        self.__size = size

    def area(self):
        """this is a new commentaire"""
        return self.__size ** 2
