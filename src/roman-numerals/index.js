/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
const romDec = { 
    I:1,
    V:5,
    X :10,
    L:50,
    C :100,
    D :500,
    M : 1000};

    let ans = 0;

    for (let i=0; i<roman.length; i++){
        let currentNum = romDec[roman.charAt(i)];
        let nextNum =romDec[roman.charAt(i+1)];

       
        if (currentNum >= nextNum){
            ans += currentNum;
        }else if (currentNum < nextNum) {
            ans += (nextNum-currentNum);
            i++;
        } else{
        ans+=currentNum
        }
    }
    return ans;
}

module.exports = romanToDecimal;
