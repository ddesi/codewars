function fibonacci(n) {
	if (n===0){
		return [0]
	} else if (n===1) {
		return [0, 1]
	} else {
		var fib = fibonacci(n - 1)
		fib.push(fib[fib.length - 1] + fib[fib.length - 2])
		return fib
	}
}

console.log(fibonacci(0))

console.log(fibonacci(1))

console.log(fibonacci(2))

console.log(fibonacci(3))