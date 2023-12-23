const array = [1, 2, 3, 4, 5, 6, 7];
const k = 3;

const revArray = (arr, start, end) => {
  while (start < end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;
  }
};

const rotateArray = (arr, k) => {
  k = k % arr.length;

  revArray(arr, 0, arr.length - 1);
  revArray(arr, 0, k - 1);
  revArray(arr, k, arr.length - 1);
};

rotateArray(array, k);
