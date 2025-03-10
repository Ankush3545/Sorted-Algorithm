//. Quick sort algorithm
//.algorithm:
//.1 Choose last element as pivot
//.2 all element smaller than pivot go to the left and all element greater than pivot go to the right
//.3. Left and right elements are sorted recursively
//.4 sorted left array, pivot and sorted right array merged

function quickSort(arr){
    if(arr.length<=1){
        return arr;
    }
    const pivot=arr[arr.length-1];// choosing last element as pivot
    const left=[];
    const right=[];
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i]);

        }
        else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)];

}
const arr=[45,48,25,36,19,55,17];
console.log(`unsorted array:${arr}`);
console.log(`sorted array:${quickSort(arr)}`);