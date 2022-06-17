//Q1. Write a program to find all pairs of an integer array whose sum is equal to a given number?

function mjProgOne(arr,sumVal){
    let count=0;
    for(let i=0;i<arr.length-1;i++)
    {
        for(let j=i+1;j<arr.length;j++){
            if((arr[i]+arr[j])==sumVal)
            {
                count++;
                console.log(`sum of value ${arr[i]} and ${arr[j]}=${sumVal}`);
            }
        }
    }
    if(count==0)
    {
        console.log("There are no such pairs");
    }
}
//Test
mjProgOne([1,2,3,4,5,6],7);
mjProgOne([1,2,3,4,5,6],17);

//Sample output
// sum of value 1 and 6=7
// sum of value 2 and 5=7
// sum of value 3 and 4=7
// There are no such pairs
