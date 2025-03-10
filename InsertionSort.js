// Insertion sort=>Sorting algorithm for sorted elements using insertion of element on its right position
// algorithm:
//.1.  Considered First element as sorted
//.2. pick the next element and insert it into right position
//.3. Process repeats for all elements until entire array  sorted

function insertionSort(arr){
    let length=arr.length;
    for(let i=1;i<length;i++){
        // let i=1;i<length;i++
        let key=arr[i];
        let j=i-1;
        while(j>=0 && arr[j] > key){
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1]=key;
    }
    return arr;
}
let numbers=[25,35,24,19,55,45,85,15]
console.log(`Sorted array:${insertionSort(numbers)}`);