function binarySearch(arr,target){
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while(leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex + rightIndex)/2);
        if (arr[middleIndex] === target) {
            return middleIndex
        }
        if(target < arr[middleIndex]){
            rightIndex = middleIndex - 1;
        }else{
            leftIndex = middleIndex+1;
        }
    }
    return -1
}

console.log(binarySearch([2,3,4,5,6,7],4))
console.log(binarySearch([2,3,4,5,6],5))
console.log(binarySearch([2,3,4,5,6],8))

