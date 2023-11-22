#!/usr/bin/python3

for i in range(ord("a"), ord("z") + 1):
    e = chr(i)
    if e not in "qe":
        print(e, end="")

