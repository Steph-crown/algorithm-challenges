# A function that returns True if the array in secondList is a subsequence of the firstList

def subsequence(firstList, secondList):
    return all([item in firstList for item in secondList]);

