// ---REGULAR EXPRESSIONS:---
/* RegEx literal is enclosed within forward slashes. Example:
    /pattern/flags

Or create a new RegEx using the RegExp constructor. Example:
    const regex  = new RegExp(pattern [, flags])

FLAGS:
g = global match.
i = ignore case.
m = multiline. Treats beginning (^) and end ($) characters as working over multiple lines.
u = unicode. Treat pattern as a sequence of unicode code points.
y =  sticky. Matches only from the index indicated by the lastIndex property of this regular expression in the target string.
*/

// Create a RegExp that checks for first letter to be a vowel and last letter to be of the same vowel.
const regexVar = () => {
    let re = /^([aeiou]).*\1$/;
    // RegExp needs to be explained. Not a large focus currently. 
    return re
}