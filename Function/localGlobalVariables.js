let user = 'Lam Gia Thinh';

function helloWorld(user)
{
    let num = 5;
    console.log(num);
    return `Hello ${user}`;
}
// error because num is local variable only use function helloWorld
// console.log(num);

let str = helloWorld(user);
console.log(user);