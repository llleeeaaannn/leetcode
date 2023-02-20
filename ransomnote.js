// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

// Input: ransomNote = "aa", magazine = "aab"
// Output: true

// Input: ransomNote = "aa", magazine = "ab"
// Output: false

var canConstruct = function(ransomNote, magazine) {
    let mag = magazine.split('');
    for (let i = 0; i < ransomNote.length; i++) {
        if (!mag.includes(ransomNote[i])) return false;
        mag.splice(mag.indexOf(ransomNote[i]), 1);
    }
    return true;
};
