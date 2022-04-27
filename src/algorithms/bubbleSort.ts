type Order = Array < [number | null, number | null, number[] | null, number | null] >;

function bubbleSort (arr: number[]): Order {

    const duplicateArray = [...arr];
    const order: Order = [];

    let i, j;
    for (i = 0; i < duplicateArray.length; i++) {
        for (j = 0; j < duplicateArray.length - i - 1; j++) {

            order.push([j, j + 1, null, null]);    //Comparing j, j + 1

            if (duplicateArray[j] > duplicateArray[j + 1]) { 
                let temp = duplicateArray[j];
                duplicateArray[j] = duplicateArray[j + 1];
                duplicateArray[j + 1] = temp;

                order.push([j, j + 1, duplicateArray.slice(), null]);   //Swapping j, j + 1
            }
        }
        order.push([null, null, null, j]);    //j-th element is sorted
    }
    return order;
}

export default bubbleSort;