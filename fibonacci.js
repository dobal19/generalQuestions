function fibonacci(n){
    let cache= {};
    return function fib(n){
        if(n in cache){
            return cache[n]
        }
        else{
            if(n <= 2) return 1;
            cache[n] = fib(n-1)+ fib(n-2)
            return cache[n]
        }
    }
    
}
let fibSeries = fibonacci();
console.log(fibSeries(12))