// Q2. Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array.

function mjProgTwo(arr){
    console.log(`Array before reversing : ${arr}`);
    let len=arr.length;
    for(let i=0;i<len/2;i++)
    {
        let temp=arr[i];
        arr[i]=arr[len-i-1];
        arr[len-i-1]=temp;
    }
    console.log(`Array after reversing : ${arr}`);
}
//Test
mjProgTwo([1,2,3,9,4,5,8,6,7]);

// Sample Output

// Array before reversing : 1,2,3,9,4,5,8,6,7
// Array after reversing : 7,6,8,5,4,9,3,2,1
