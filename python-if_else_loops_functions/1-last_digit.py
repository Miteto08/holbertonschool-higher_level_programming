#!/usr/bin/python3
import random
number = random.randint(-10000, 10000)
if number > 0:
    print(f"Le nombre {number} est positif")
elif number == 0:
    print(f"Le nombre {number} est zéro")
else:
    print(f"Le nombre {number} est négatif")

