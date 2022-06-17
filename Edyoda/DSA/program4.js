// Q4. Write a program to print the first non-repeated character from a string?

function mjProgFour(str)
{
    let ch;
    let state=false;
    for(let i=0;i<str.length-1;i++)
    {
        if(str.indexOf(str[i])===str.lastIndexOf(str[i])){
            ch=str[i];
            state=true;
            break;
        }
    }
    if(ch===undefined)
    {
        console.log(`There is no such character`);
    }
    else{
        console.log(`The first Non-repeating character is ${ch}`);
    }
    return ch
}
mjProgFour("ilili");
mjProgFour("Kuchbee");

//Sample Output
// There is no such character
// The first Non-repeating character is K
