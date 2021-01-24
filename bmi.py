class Person():
    # Constructor
    def __init__(self, weight, height):
        self.weight = weight
        self.height = height
    
    # Method to get the BMI
    def getBmi(self):
        return self.weight / (self.height ** 2)


def getBMI(parameter_list):
    """
    docstring
    """
    pass

weight = int(input("Enter weight"))
height = int(input("Enter height"))
newPerson = Person(weight, height)
print(newPerson.getBmi())