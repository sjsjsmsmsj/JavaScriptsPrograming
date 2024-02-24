let map = new Map();

map.set("Lam", "gia");
map.set("Apple", "Android");
map.set("Mac", "Asus");

console.log(map.keys());
console.log(map.has("Lam"));
console.log(map.get("Mac"));

for (let [k, v] of map) {
    console.log(k, " : ", v);
}
console.log("_-----");
map.forEach((v, k) => {
    console.log(v, k);
})