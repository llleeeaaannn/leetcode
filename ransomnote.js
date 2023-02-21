// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

// Input: ransomNote = "aa", magazine = "aab"
// Output: true

// Input: ransomNote = "aa", magazine = "ab"
// Output: false

// Easy to read solution (For each letter in ransomNote, if its not in magazine return false. If it is, remove it from magazine and continue, if we finish the loop then every letter in ransomNote is in magazine and we return true)
var canConstruct = function(ransomNote, magazine) {
    let mag = magazine.split('');
    for (let i = 0; i < ransomNote.length; i++) {
        if (!mag.includes(ransomNote[i])) return false;
        mag.splice(mag.indexOf(ransomNote[i]), 1);
    }
    return true;
};

// Concise Solution (For each letter in magazine, remove it from ransomNote, if ransomNote is empty at the end the all letters were in magazine and we can return true (!false) or if ransomNote isnt an empty string we return false)
var canConstruct = function(ransomNote, magazine) {
    for (let letter of magazine) {
      ransomNote = ransomNote.replace(letter, '');
    }
    return !ransomNote;
};

// Runtime beats 84.9%
// Memory beats 44.9%
