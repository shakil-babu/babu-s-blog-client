const findTheNumber = (nums, x) => {
    let halfNumber = Math.floor(nums.length/2);
    let array = [...nums.slice(halfNumber, nums.length - 1)];
    for(let i = 0; i <= halfNumber; i++){
        array.push(nums[i] + 5);
    };

    // linear search apply
    let isFound = false;
    for(let j = 0; j<array.length; j++){
        if(array[j] === x){
            isFound = true;
        }
    }

    return (isFound ? "YES" : "NO");
}

let result = findTheNumber([1,2,3,4,5],7);
console.log(result);
// YES