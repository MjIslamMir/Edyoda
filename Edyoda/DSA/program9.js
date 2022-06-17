// Q9. Write a program to reverse a stack.

class QS9Node
{
    constructor(element, next)
    {
        this.element = element;
        this.next = next;
    }
}
class QS9Stack
{
    constructor()
    {
        this.top = null;
        this.size = 0;
    }

    push(element)
    {
        this.top = new QS9Node(element, this.top);
        this.size++;
    }
    isEmpty()
    {
        if (this.size > 0 && this.top != null)
        {
            return false;
        }
        else
        {
            return true;
        }
    }
    pop()
    {
        if (this.size > 0 && this.top != null)
        {
            var temp = this.top;
            this.top = temp.next;
            this.size--;
        }
    }
    peek()
    {
        return this.top.element;
    }
}
class ReverseString
{
	constructor(){}
    reverse=function(text)
    {
        var size = text.length;
        var result = "";
        var stack = new QS9Stack();
        for (var i = 0; i < size; i++)
        {
            stack.push(text.charAt(i));
        }
        while (stack.isEmpty() == false)
        {
            result += stack.peek();
            stack.pop();
        }
        return result;
    }
}

function test()
{
    var task = new ReverseString();
    var text = "This is a simple words";
    console.log(" Before Reverse : [" + text + "]");
    text = task.reverse(text);
    console.log("\n After Reverse : [" + text + "]");
}
test();


//Sample Output
// Before Reverse : [This is a simple words]

// After Reverse : [sdrow elpmis a si sihT]

