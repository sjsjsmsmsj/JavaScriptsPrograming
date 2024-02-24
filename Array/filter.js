let nums = [11, 6, 2005, 349, 3, 4];

nums.filter( n => n % 2 === 0 ) 
    .map( n => n * 2 )
    .forEach( n => {
        console.log(n);
    });