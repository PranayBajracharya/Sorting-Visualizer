import Order from "./type";

function selectionSort(arr: number[]): Order {
    const duplicateArray = [...arr];
    const order: Order = [];

    let i, j;
    for (i = 0; i < duplicateArray.length; i++) {
        // Finding the smallest number in the subarray
        let min: number = i;
        for (j = i + 1; j < duplicateArray.length; j++) {
            order.push([i, j, null, null]);    //Comparing

            if (duplicateArray[j] < duplicateArray[min]) {
                min = j;
            }
        }
        if (min !== i) {
            let tmp = duplicateArray[i];
            duplicateArray[i] = duplicateArray[min];
            duplicateArray[min] = tmp;
            order.push([i, min, [...duplicateArray], null]);   //Swapping
        }
        order.push([null, null, null, i]);    //i-th element is sorted
    }
    return order;
}

export default selectionSort;
