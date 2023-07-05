// let arr = [1, 2, 3, 4, 5]
// // output=[5,4,3,2,1]
// let start = 0;
// let end = arr.length - 1;
// while (start < end) {
//     let temp = arr[start]
//     arr[start] = arr[end]
//     arr[end] = temp;
//     start++;
//     end--
// }
// console.log(arr.join)
function table (N) {
    for (let i = 1; i <=10; i++){
        console.log(i*N)
    }

}

table(3)