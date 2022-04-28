import Order from "./type";

function insertionSort(arr: number[]): Order {

    const duplicateArray = [...arr];
    const order: Order = [];

    for (let i = 0; i < duplicateArray.length; i++) {

        let j = i - 1;
        while (j > -1 && duplicateArray[j] > duplicateArray[j + 1]) {
            
            let temp = duplicateArray[j];
            duplicateArray[j] = duplicateArray[j + 1];
            duplicateArray[j + 1] = temp;
            
            order.push([j, j + 1, null, null]);     //Comparing
            order.push([j, j + 1, duplicateArray.slice(), null]);    //Swapping
            j--;
        }
    }

    for (let i = 0; i < duplicateArray.length; i++) {
        order.push([null, null, null, i]);    //Sorted
    }
    return order;
}

export default insertionSort;