class Person():
    # Constructor
    def __init__(self, weight, height):
        self.weight = weight
        self.height = height
    
    # Method to get the BMI
    def getBmi(self):
        return self.weight / (self.height ** 2)


def main():
    
    weight = float(input("Enter weight"))
    height = float(input("Enter height"))
    newPerson = Person(weight, height)
    print(newPerson.getBmi())

main()