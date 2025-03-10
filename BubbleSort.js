// bubble sort=>simple algorithm that compares adjacent elements and swaaps them if they are in wrong order
// algorithm:
//1.compares adjacent elements in an array
//2.if element are greater than next one they are swapped
//3.process continues ,moving the largest element to the end in each pass
//4.continues until no swapps are needed
function bubbleSort(arr){
    let length=arr.length;
    let swapped;
    do{
        swapped=false;
        for(let i=0;i<length-1;i++){
            if(arr[i]>arr[i+1]){
                // swapp the elements
                let temp=arr[i];
                arr[i]=arr[i+1];
                arr[i+1]=temp;
                swapped=true;
            }
        }
        length--;
    }
    while(swapped);
    return arr;

}

let numbers=[64,44,25,12,22,11,95];
console.log("Sorted Array:",bubbleSort(numbers));