// Q10. Write a program to find the smallest number using a stack.


class QS10Stack{
    constructor(){
        this.item=[];
        this.length=0;
        this.push=(element)=>{
            this.item.push(element);
            this.length+=1;
        }
        this.pop=()=>{
            if(this.length==0)
            {
                return "underflow";
            }
            else{
                this.item.pop();
                this.length-=1;
            }
        }
        this.peek=()=>{
            return this.item[this.length-1];
        }
    }
    
}
let stack =new QS10Stack();
let numberList=[35,15,7,85,3,27];
for(let i=0;i<numberList.length-1;i++){
    stack.push(numberList[i]);
}
let minimum=stack.peek();
while(stack.length){
    let x=stack.peek();
    if(x<minimum)
    {
        minimum=x;
    }
    stack.pop();
}
console.log(minimum);


//Sample OUTPUT
// 3
