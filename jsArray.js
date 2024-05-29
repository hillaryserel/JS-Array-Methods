const array = [1,2,3,4];

array.at(2); // 3

array.pop(); // returns 4, array value:[1,2,3]

array.push(5); // returns 5, array value:[1,2,3,4,5]

array.fill(6); // returns: [6,6,6,6,]

array.join(''); // returns: " 1 2 3 4"(string)

array.shift(); // returns: 1, array value:[2,3,4]

array.unshift(0); // [0,1,2,3,4]

array.reverse(); // [4,3,2,1]

array.includes(3); // true 

array.map((item) => 3 * item); // [3,6,9,12]

array.find((item) => item > 2); // 3(first match)

array.filter((item) => item > 2); // [3,4]

array.every((item) => item > 0); // true

array.findIndex((item) => item = 3); // 2

array.reduce((prev, curr) => prev + curr, 0); // 10e

