// 1
const splitAndMerge = (str, joiner) => str.split(" ")
																					.map((word) => word.split("").join(joiner))
																					.join(" ");
console.log(splitAndMerge("My name is John"," ")); //"M y n a m e i s J o h n"
console.log(splitAndMerge("Hello World!",",")); //"H,e,l,l,o W,o,r,l,d,!"

// 2
const convert = obj => Object.entries(obj);
console.log(convert({ name: "Jeremy", age: 24, role: "Software Engineer" })); //[["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]

// 3
const toCamelCase = str => str.split(/-|_/)
															.map((word, i) => i === 0 ? word
																												: word.replace(word.charAt(0), word.charAt(0).toUpperCase())).join("");
console.log(toCamelCase("the_stealth-warrior"));

// 4
let reverseWords = str => str.split(" ")
															.map(word => word.split("").reverse().join(""))
															.join(" ");
console.log(reverseWords("hello world"));

// 5
const stringExpansion = str => {
	let chars = str.split("");
	for (let i = 0; i < chars.length; i++) {
		if (chars[i].match(/\D/) && i > 0 && chars[i - 1].match(/\d/)) {
			chars[i] = chars[i].repeat(chars[i - 1]);
		}
	}
	return chars.join("").replace(/\d/g, "");
}

console.log(stringExpansion("3D2a5d2f")); // expected DDDaadddddff
console.log(stringExpansion("3d332f2a")); // expected dddffaa
console.log(stringExpansion("abcde")); // expected abcde

// 6
const largest = (... numbers) => Math.max.apply(null, numbers);
const smallest = (... numbers) => Math.min.apply(null, numbers);
console.log(largest(2, 0.1, -5, 100, 3)); // 100
console.log(smallest(2, 0.1, -5, 100, 3)); // -5

// 7
const transform = arr => arr.map(item => (() => item));

const baseArray = [10, 20, 30, 40, 50];
const newArray = transform(baseArray);
console.log(newArray[3]()); // 40
console.log(newArray[4]()); // 50

// 8
const rec = (... numbers) => (numbers.length === 1 ? numbers[0]
																										: numbers[0] + rec(... numbers.slice(1)));
console.log(rec(1, 3, 5, 7));

// 9
const countDown = (startPoint) => {
	setInterval(function() {
		if (startPoint >= 0) {
			console.log(startPoint);
			startPoint--;
		} else {
			return;
		}
	}, 1000);
}

countDown(3);
