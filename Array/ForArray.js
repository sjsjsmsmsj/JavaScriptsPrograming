let nums = [];
nums[0] = 11;
nums[1] = '06';
nums[2] = 2005;
nums[99] = 10;
for (let n of nums) {
    console.log(n);
}

for (let key in nums) {
    console.log(key);
}