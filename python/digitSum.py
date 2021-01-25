"""
    ALGORITHM
    
    1. Accept an integer input. Save as `number`
    2. Set `sum` to 0
    3. Get the last digit of the number. `number % 10'
    4. Add it to `sum`
    5. Integer-divide `number` by 10. Save result as `number`.
    6. If new value of `number` > 0, go back to step 3.
    7. Else return `sum`
"""

def sumDigits(number):
    sum = 0
    while (number):
        # Last digit.
        lastDigit = number % 10

        sum += lastDigit
        number //= 10
    return sum

def main():
    print(sumDigits(int(input("Input number: \t"))))


main()