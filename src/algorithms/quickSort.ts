import Order from "./type";
let order: Order = [];

const partition = (arr: number[], start: number, end: number) => {
    const pivotIndex = start;
    let j = start;

    for (let i = start + 1; i <= end; i++) {
        order.push([i, pivotIndex, null, null]);
        if (arr[i] < arr[pivotIndex]) {
            j++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
            order.push([i, j, [...arr], null]);
        }
    }

    [arr[pivotIndex], arr[j]] = [arr[j], arr[pivotIndex]];
    order.push([j, pivotIndex, [...arr], null]);
    order.push([null, null, null, j]);
    return j;
};

function quickSortHelper(arr: number[], start: number, end: number) {
    if (start >= end) {
        if(start === end) {
            order.push([null, null, null, start]);
        }
        return;
    }

    const index = partition(arr, start, end);
    quickSortHelper(arr, start, index - 1);
    quickSortHelper(arr, index + 1, end);
}

const quickSort = (arr: number[]): Order => {
    const duplicateArray = [...arr];
    order = [];

    quickSortHelper(duplicateArray, 0, duplicateArray.length - 1);

    return order;
};

export default quickSort;
