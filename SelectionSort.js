// selection sort=>simple algorithm that works repeteadley selection the smallest element from unsorted part of the array
// and swapping it with first unsorted element
//.algorithm:
//1.sorted part() and unsorted part()
//2.repetedly find the smallest element in the unsorted part and swaps it with the first element of the unsorted part
//3.continues until array is sorted

function selectionSort(arr){
    let length=arr.length;
    for(let i=0;i<length-1;i++){    
        let minIndex=i;
        for(j=i+1;j<length;j++){
            if(arr[j]<arr[minIndex]){
                minIndex=j;
            }
        }
        if(minIndex!==i){
            let temp=arr[i];
            arr[i]=arr[minIndex];
            arr[minIndex]=temp;
        }
    }
    return arr;

}

let numbers=[25,35,15,20,50,60,70];
console.log(`sorted array: ${selectionSort(numbers)}`);