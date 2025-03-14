//Merge Sort=>Sorting algorithm for sorting the elemnts from the array
//. algorithm:
//.1.Divide:Split the array into two halves
//.2.Conquer:Recursively sort each half
//.3.Merge:Combine sorted half into single array
function mergeSort(arr){
    if(arr.length<=1){
        return arr;
    }

 const mid=Math.floor(arr.length/2);
 const left=mergeSort(arr.slice(0,mid));
 const right=mergeSort(arr.slice(mid));
 return merge(left,right)

}
function merge(left,right){
    let result=[],i=0,j=0;
    while(i<left.length && j<right.length){
        if(left[i]<right[j]){
            result.push(left[i]);
            i++;
        }
        else{
            result.push(right[j]);
            j++;
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j));

}
const arr=[5,2,8,3,9,15];   
console.log(`unsorted array:${arr}`)
console.log(` sorted array:${mergeSort(arr)}`);