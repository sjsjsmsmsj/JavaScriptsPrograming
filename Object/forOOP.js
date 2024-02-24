let lamGiaThinh = {
    name : 'Lam Gia Thinh',
    tech : 'Javascripts',
    laptop : {
        cpu : 'i7',
        ram : 4,
        brand : 'Mac'
    }
}

for (let key in lamGiaThinh)
{
    console.log(key, lamGiaThinh[key]);
}