//Q6. Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.
class QS6Node
{
	constructor(data, top)
	{
		this.data = data;
		this.next = top;
	}
}
class QS6Stack
{
	constructor()
	{
		this.top = null;
		this.count = 0;
	}
	// Returns the number of element in stack
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
	// Add a new element in stack
	push(data)
	{
		// Make a new stack node
		// And set as top
		this.top = new QS6Node(data, this.top);
		// Increase node value
		this.count++;
	}
	// Add a top element in stack
	pop()
	{
		var temp = "";
		if (this.isEmpty() == false)
		{
			// Get remove top value
			temp = this.top.data;
			this.top = this.top.next;
			// Reduce size
			this.count--;
		}
		return temp;
	}
	// Used to get top element of stack
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
class Conversion
{
	// Check operator
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
	// Check operands
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
	// Converting the given postfix expression to 
	// prefix expression
	postfixToPrefix(postfix)
	{
		// Get the size
		var size = postfix.length;
		// Create stack object
		var s = new QS6Stack();
		// Some useful variables which is using 
		// of to storing current result
		var auxiliary = "";
		var isValid = true;
		for (var i = 0; i < size && isValid; i++)
		{
			// Check whether given postfix location
			// at [i] is an operator or not
			if (this.isOperator(postfix.charAt(i)))
			{
				// When operator exist
				// Check that two operands exist or not
				if (s.size() > 1)
				{
					auxiliary = s.pop();
					auxiliary = s.pop() + auxiliary;
					auxiliary = postfix.charAt(i) + auxiliary;
					s.push(auxiliary);
				}
				else
				{
					isValid = false;
				}
			}
			else if (this.isOperands(postfix.charAt(i)))
			{
				// When get valid operands
				auxiliary = postfix.charAt(i);
				s.push(auxiliary);
			}
			else
			{
				// Invalid operands or operator
				isValid = false;
			}
		}
		if (isValid == false)
		{
			// When have something wrong
			console.log("Invalid postfix : " + postfix);
		}
		else
		{
			// Display calculated result
			console.log(" Postfix : " + postfix);
			console.log(" Prefix  : " + s.pop());
		}
	}
}

function test()
{
	var task = new Conversion();
	var postfix = "ab+c*ef+g/+";
	task.postfixToPrefix(postfix);
	postfix = "abc*de-/+";
	task.postfixToPrefix(postfix);
}
// Start program execution
test();


// Sample OUTPUT
// Postfix : ab+c*ef+g/+
// Prefix  : +*+abc/+efg
// Postfix : abc*de-/+  
// Prefix  : +a/*bc-de 
