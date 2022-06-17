//Q7. Write a program to convert prefix expression to infix expression.

class QS7Node
{
	constructor(data, top)
	{
		this.data = data;
		this.next = top;
	}
}
class QS7Stack
{
	constructor()
	{
		this.top = null;
		this.count = 0;
	}
	size()
	{
		return this.count;
	}
	isEmpty()
	{
		if (this.size() > 0)
		{
			return false;
		}
		else
		{
			return true;
		}
	}
	push(data)
	{

		this.top = new QS7Node(data, this.top);
		this.count++;
	}
	pop()
	{
		var temp = "";
		if (this.isEmpty() == false)
		{
			temp = this.top.data;
			this.top = this.top.next;
			this.count--;
		}
		return temp;
	}
	peek()
	{
		if (!this.isEmpty())
		{
			return this.top.data;
		}
		else
		{
			return "";
		}
	}
}
class Conversion1
{
	isOperator(text)
	{
		if (text == '+' || text == '-' || 
            text == '*' || text == '/' || 
            text == '^' || text == '%')
		{
			return true;
		}
		return false;
	}
	isOperands(text)
	{
		if ((text >= '0' && text <= '9') || 
            (text >= 'a' && text <= 'z') || 
            (text >= 'A' && text <= 'Z'))
		{
			return true;
		}
		return false;
	}
	prefixToinfix(prefix)
	{
		var size = prefix.length;
		var s = new QS7Stack();
		var auxiliary = "";
		var op1 = "";
		var op2 = "";
		var isValid = true;
		for (var i = size - 1; i >= 0; i--)
		{
			if (this.isOperator(prefix.charAt(i)))
			{
				if (s.size() > 1)
				{
					op1 = s.pop();
					op2 = s.pop();
					auxiliary = "(" + op1 + prefix.charAt(i) + op2 + ")";
					s.push(auxiliary);
				}
				else
				{
					isValid = false;
				}
			}
			else if (this.isOperands(prefix.charAt(i)))
			{
				auxiliary = "" + prefix.charAt(i);
				s.push(auxiliary);
			}
			else
			{
				isValid = false;
			}
		}
		if (isValid == false)
		{
			console.log("Invalid Prefix : " + prefix);
		}
		else
		{
			console.log(" Prefix : " + prefix);
			console.log(" Infix  : " + s.pop());
		}
	}
}

function test()
{
	var task = new Conversion1();
	var prefix = "+*ab^cd";
	task.prefixToinfix(prefix);
	prefix = "-+*^%adcex*y^ab";
	task.prefixToinfix(prefix);
};
test();

// Sample OUTPUT
// Prefix : +*ab^cd
// Infix  : ((a*b)+(c^d))
// Prefix : -+*^%adcex*y^ab
// Infix  : (((((a%d)^c)*e)+x)-(y*(a^b)))
