function isPrime(  num ){
    let prime = num;
    
    let isPrime= false;

    for(let i = 2; i < prime -1;    i++){
        console.log(i +','+prime % i);
        if( prime % i=== 0 ){
        
            return  isPrime = false;
        }
    }

    return true;

}
module.exports = isPrime;