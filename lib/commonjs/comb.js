const {
    isEven,
    stringAND
} = require('./utils.js');

/*---------------------------------------------------------------
    Heap algorithm - recursive - permutations without repetition   
-----------------------------------------------------------------*/

/**
 * Return an array of array of single permutation.
 * @param {anyArray} array Array of elements subject of permutation
 */
const heapPerm = (anyArray)=>{
    let pointer = anyArray.length;
    return heapPermMain(pointer, anyArray);
}

/*
    Utility function, not exported. Should only be called inside of a module (heapPerm method).
*/
const heapPermMain = (pointer, anyArray, newArray = [])=>{
    if(pointer==1){
       // console.log(anyArray)
        newArray.push([...anyArray]);
    }
    else{
        heapPermMain(pointer - 1, anyArray, newArray);

        for(let i=0; i<pointer-1; i++){
            if(isEven(pointer)){
                //swap(a[0]) i a[k-1]
                let temp = anyArray[pointer-1];
                anyArray[pointer-1] = anyArray[0];
                anyArray[0] = temp;
            }
            else{
                //swap(a[i]) i a[k-1]
                let temp = anyArray[pointer-1];
                anyArray[pointer-1] = anyArray[i];
                anyArray[i] = temp;
            }
            heapPermMain(pointer - 1, anyArray, newArray);
        }
    }
    return newArray;
}


/*-------------------------------------------------------------------
    Heap algorithm - iterative - permutations without repetition    
---------------------------------------------------------------------*/

/**
 * @param {array} anyArray Array of elements subject to permutations 
 */
const heapPermIterative = (anyArray)=>{
    let pointer = anyArray.length;

    let result = [];

    let c = [];
    for(let i=0; i<pointer; i++) c[i]=0;

    //console.log(anyArray);
    result.push([...anyArray]);

    let i=0;
    while(i < pointer){
        if(c[i] < i){
            if(isEven(i)){
                let temp = anyArray[i];
                anyArray[i] = anyArray[0];
                anyArray[0] = temp;
            }
            else{
                let temp = anyArray[i];
                anyArray[i] = anyArray[c[i]];
                anyArray[c[i]] = temp;
            }
            //console.log(anyArray);
            result.push([...anyArray]);

            c[i] += 1;
            i = 0;
        }
        else{
            c[i] = 0;
            i += 1;
        }
    }
    return result;
}


/*
    Binary combination algorithms
*/

/**
 * 
 * @param {array} anyArray Array of elements subject to combination
 * @param {'f' or 'b'} direction Combine forward or backward (default is 'f')
 * Returns an array of arrays that contains all possible combinations.
 */
const combAll = (anyArray, direction='f')=>{
    let resultArray = [];
    //anyArray.length-1, num_of_combinations = 2^(anyArray.length-1)
    let arrLength = anyArray.length;
    let num_of_combinations = Math.pow(2, arrLength) - 1;   

    let tempArray = [];
    if(direction==='f') tempArray = [...anyArray]
    else tempArray=[...anyArray.reverse()];

    for(let i = 1; i < num_of_combinations+1; i++){
        //console.log(i, Number(i).toString(2).split(""));
        let compareString = Number(i).toString(2).split("").reverse();          
        let result = [];
        for(let j = 0; j < arrLength; j++){
            stringAND(tempArray[j], compareString[j])!=0 ? result.push(tempArray[j])  : null;
        }
        resultArray.push(result.reverse());
    }

    return resultArray;
}

/**
 * 
 * @param {array} anyArray Array of elements subject to combinations
 * @param {'f' or 'b'} direction Combine forward or backward (default is 'f')
 * @param {boolean} strict  If strict is true, combinbinations are of exact lenght of length param, if false, combinations are less length than length param
 * @param {number} length Length of results.
 * Returns an array of arrays that contains all possible combinations whose length is definded by strict param less or exact length of given length
 */
const combAllStrict = (anyArray, direction='f', length, strict)=>{
    let resultArray = [];
    //anyArray.length-1, num_of_combinations = 2^(anyArray.length-1)
    let arrLength = anyArray.length;
    let num_of_combinations = Math.pow(2, arrLength) - 1;   

    let tempArray = [];
    if(direction==='f') tempArray = [...anyArray]
    else tempArray=[...anyArray.reverse()];

    for(let i = 1; i < num_of_combinations+1; i++){
        //console.log(i, Number(i).toString(2).split(""));
        let compareString = Number(i).toString(2).split("").reverse();          
        let result = [];
        for(let j = 0; j < arrLength; j++){
            stringAND(tempArray[j], compareString[j])!=0 ? result.push(tempArray[j])  : null;
        }
        if(strict){
            if(result.length===length) resultArray.push(result.reverse());
        }
        else{
            if(result.length<=length) resultArray.push(result.reverse());
        } 
    }

    return resultArray;
}

module.exports = {
    'heapPerm' : heapPerm,
    'heapPermIterative' : heapPermIterative,
    'combAll' : combAll,
    'combAllStrict' : combAllStrict
}