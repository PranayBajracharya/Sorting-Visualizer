import Order from "./type";

const bubbleSort = (arr: number[]): Order => {

    const duplicateArray: number[] = [...arr];
    const order: Order = [];

    let i: number, j: number;
    for (i = 0; i < duplicateArray.length; i++) {
        for (j = 0; j < duplicateArray.length - i - 1; j++) {

            order.push([j, j + 1, null, null]);    //Comparing j, j + 1

            if (duplicateArray[j] > duplicateArray[j + 1]) { 
                let temp: number = duplicateArray[j];
                duplicateArray[j] = duplicateArray[j + 1];
                duplicateArray[j + 1] = temp;

                order.push([j, j + 1, [...duplicateArray], null]);   //Swapping j, j + 1
            }
        }
        order.push([null, null, null, j]);    //j-th element is sorted
    }
    return order;
}

export default bubbleSort;