
const linearSearch = (arr,searchItem) => {
    for(let i = 0; i<arr.length; i++){
        if(arr[i] === searchItem){
            return i;
        }
    }
    return -1;
}

let players = ["warner","rohit","mustafizur","sakib","bravo","taylor"];
const res = linearSearch(players, 'shakil');
console.log(res);
