// Q3. Write a program to check if two strings are a rotation of each other?

function mjProgThree(string1,string2)
{
    if(string1.length!=string2.length){
        console.log("The given string are not rotation of each other");
    }
    else{
        let stringSum=string2+string2;
        if(stringSum.includes(string1))
        {
            console.log("The given strings are rotations of each other");
        }
        else{
            console.log("The given strings are not rotations of each other");}

        }
}
//Test
mjProgThree("Helol","elloH");
mjProgThree("Hello","elloH");
//Sample Output
// The given strings are not rotations of each other
// The given strings are rotations of each other
