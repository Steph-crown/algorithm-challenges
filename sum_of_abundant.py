def abundant(n):
	"""A function that returns Boolean value True if it's argument is an abundant number
		otherwise returns False"""
	
	#Avoids non integer argument
	assert(isinstance(n, int) == True), f"{n} is not an integer"
	
	#Iterates from 1 to square root of n and stores all factors of n in that interval
	#e.g if n=20, stores : 1,2,4 alone
	factors = (i for i in range(1,int(pow(n, 0.5) + 1)) if n % i == 0)
	
	#Gets the other part of factors by dividing each element in 'factors' by 'n'
	#Sums all the factors including n
	factor_sum = sum(map(lambda x : sum((x, n / x)), factors))
	
	#Returns True if factor_sum is greater than '2 * n'(because value of n was added in 'factor_sum')
	#Otherwise return False
	#Takes into consideration values that may appear twice(for perfect primes e.g 2 and 2 in 4)
	if int(pow(n, 0.5)) == pow(n, 0.5):
		return factor_sum - pow(n,0.5) - n > n
	else:
		return factor_sum > 2 * n
	
def sum_abundant(n):
	"""A function that returns sum of first n abundant numbers where n is it's argument"""
	
	#Avoids no integer argument
	assert(isinstance(n, int)), f"{n} is not an integer"

	#Initializes variables
	counter = 1
	sum = 0
	true_counter = 1
	
	#Iterates until n abundant numbers have been encountered adding each one to 'sum'
	while true_counter < n:
		if abundant(counter) == True:
			sum += counter
			true_counter += 1
		counter += 1
		
	#Returns sum
	return sum
	

print (abundant(220))
print (sum_abundant(100))