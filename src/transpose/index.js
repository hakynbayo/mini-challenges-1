/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
 let ans = [];
    for (let i = 0; i<array[0].length; i++){
        let column =[];
        for (let j = 0; j<array.length;j++){
            column.push(array[j][i]);
        }
        ans.push(column)
     }
     return ans;
}

module.exports = transpose;
