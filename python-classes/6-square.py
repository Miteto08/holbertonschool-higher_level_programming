#!/usr/bin/python3

"""Explain class square"""


class Square:
    """Shows a square"""
    def __init__(self, size=0, position=(0, 0)):
        """Boot fresh square"""
        self.size = size
        self.position = position

    @property
    def size(self):
        """Acquire current size of square"""
        return self.__size

    @property
    def position(self):
        """Le blabla est important"""
        return self.__position

    @size.setter
    def size(self, value):
        """Calibrate current size of square"""
        if type(value) is not int:
            raise TypeError("size must be an integer")
        if value < 0:
            raise ValueError("size must be >= 0")
        self.__size = value

    @position.setter
    def position(self, value):
        """La vieille femme est laide"""
        if type(value) is not tuple:
            raise TypeError("position must be a tuple of 2 positive integers")
        self.__position = value

    def area(self):
        """Restores current area of square"""
        return self.__size ** 2

    def my_print(self):
        """the new commentaire"""
        for i in range(self.size):
            print("#" * self.size)

        if not self.size:
            print()
