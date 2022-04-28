import Order from "./type";
let order: Order = [];

const merge = (dupBlocks: number[], l: number, m: number, r: number) => {
    let i = l, j = m + 1;

    const arr: number[] = [];

    while (i <= m && j <= r) {
        order.push([i, j, null, null]);     // Compare i-th and j-th elements
        if (dupBlocks[i] < dupBlocks[j]) {
            arr.push(dupBlocks[i++]);
        } else {
            arr.push(dupBlocks[j++]);
        }
    }

    while (i <= m) {
        order.push([i, null, null, null]);
        arr.push(dupBlocks[i++]);
    }

    while (j <= r) {
        order.push([null, j, null, null]);
        arr.push(dupBlocks[j++]);

    }

    for (i = l; i <= r; i++) {
        dupBlocks[i] = arr[i - l];
        order.push([i, null, [...dupBlocks], null]);
    }
}

const mergeSortHelper = (arr: number[], l: number, r: number) => {
    if (l >= r) {
        return;
    }
    // const m: number = Math.floor((r + l) / 2);
    const m: number = l + Math.floor((r - l) / 2);
    mergeSortHelper(arr, l, m);
    mergeSortHelper(arr, m + 1, r);

    merge(arr, l, m, r);
}

const mergeSort = (arr: number[]): Order => {
    const duplicateArray = [...arr];
    order = [];

    mergeSortHelper(duplicateArray, 0, duplicateArray.length - 1);

    for (let i = 0; i < duplicateArray.length; i++) {
        order.push([null, null, null, i]); // i th element will be in correct position
    }
    return order;
}

export default mergeSort;
