export function capitalize(str){
    return str[0].toUpperCase() + str.slice(1)
}

export function reverseString(str){
    return str.split("").reverse().join("");
}


export const calculator = {
   add(a,b){
    return a + b
    },

    subtract(a,b){
        return a - b
    },

    divide(a,b){
        return a/b
    },

    multiply(a,b){
        return a * b
    }
}

export function ceasarCipher(str, value){
   const alphabets = ["a", "b" , "c" ,"d" , "e" , "f" , "g" , "h" ,"i" ,"j" ,"k" ,"l" ,"m" ,"n" ,"o" ,"p" ,"q" ,"r" ,"s" ,"t" ,"u" ,"v" ,"w" ,"x" ,"y" ,"z"]
           const newWord = []

   for (let i = 0; i < str.length; i++){
        let matchFound = false;
        for(let j = 0; j < alphabets.length; j++){
        if (str[i] === alphabets[j]){
        let newValue = j + value
        let newLetter;
        if (newValue > 25){
            newLetter = alphabets[newValue % 26]
        } else newLetter = alphabets[newValue]
    
        newWord.push(newLetter)
        matchFound = true;
        break; } 
        
        }

        if (!matchFound){
            newWord.push(str[i])
        }
    }
    let finalWord = newWord.join("")
    return finalWord
}

export function analyzeArray(arr){
    if (arr.length == 0) return;
    let averageSum = 0
    for (let i = 0; i < arr.length; i++){
    averageSum += arr[i]
    }
    let newAverage = averageSum/arr.length

    let minNumber = Math.min(...arr)
    let maxNumber = Math.max(...arr)

    return {
        average: newAverage,
        length: arr.length,
        min: minNumber,
        max: maxNumber
        

    }
}