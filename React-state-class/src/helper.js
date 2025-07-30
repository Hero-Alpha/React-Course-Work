//function to get random no. for ticket
function getTicket(n){
    let arr = new Array(n);
    for(let i = 0 ; i < n ; i++){
        arr[i] = Math.floor(Math.random() * 10);
    }
    return arr;
}

//function to get sum of ticket no.
function sum(arr){
    let add = 0;
    for(let i = 0 ; i<arr.length ; i++){
        add += arr[i];
    }
    return add;
}


export {getTicket, sum};