function getCharArray(arr, char) {
    for (let i = 0; i <arr.length; i++) {
        if (arr[i][0] === char) {
            if (arr[i][0] !== arr[i][1]) return (i + "0");
            return (i + "2");
        }
    } for (let i = 0; i <arr.length; i++) {
        if (arr[i][1] === char) return (i + "1");
    }
    return -1;
}

function deleteDuplicates (array){
    // удаляем все последовательно идущие скобки
    // имеющие одинаковый открытый/закрытый вид
    for (let i = 0; i < array.length; i++) {
        let char = array[i];
        if (char[1] === "2") {
            let char2 = array[i+1];
            if (char2 === char) array.splice(i,2);
        }
    }
    return array;
}

module.exports = function check(str, bracketsConfig) {
    let arr_seq = [];
    // массив для проверки соответствия
    for (let i = 0; i < str.length; i++) {
        let next_element = getCharArray(bracketsConfig, str[i]);
        if (next_element === -1) return false;
        arr_seq.push(next_element);
    }

    // проверка на соответствие последовательности шаблону
    for (let i = 0; i < arr_seq.length; i++) {
        if (deleteDuplicates(arr_seq).length !== 0){
            let char = arr_seq[i];
            if (char[1] === "1") {
                let char2 = arr_seq[i-1];
                if (char2 !== char[0] + "0") return false;
                else {
                    arr_seq.splice(i-1,2);
                    i = -1;
                }
            }
        }
    }
    
return arr_seq.length === 0;
}
