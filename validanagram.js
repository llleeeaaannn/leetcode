// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Input: s = "anagram", t = "nagaram"
// Output: true

// Input: s = "rat", t = "car"
// Output: false

// var isAnagram = function(s, t) {
//     let x = s.split("");
//     let y = t.split("");
//     if (x.length !== y.length) return false;
//     for (let i = 0; i < x.length; i++) {
//         if (y.includes(x[i])) {
//             y.splice(y.indexOf(x[i]), 1);
//         } else {
//             return false;
//         }
//     }
//     return true;
// };

var isAnagram = function(s, t) {
    let x = s.split("").sort();
    let y = t.split("").sort();
    if (x.length !== y.length) return false;
    for (let i = 0; i < x.length; i++) {
        if (x[i] !== y[i]) return false;
    }
    return true;
};
