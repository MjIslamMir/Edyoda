class QS8Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}
class QS8Stack {
	constructor() {
		this.top = null;
	}

	push(data) {
		var new_node = new QS8Node(data);
		if (new_node != null) {
			new_node.next = this.top;
			this.top = new_node;
		} else {
			process.stdout.write("Memory overflow\n");
		}
	}

	pop() {
		if (this.top != null) {
			this.top = this.top.next;
		}
	}
	parentheses(str, size) {
		var status = true;
		for (var i = 0; i < size &&
			status == true; ++i) {
			if (str[i] == '{' ||
				str[i] == '[' ||
				str[i] == '(') {
				this.push(str[i]);
			} else
			if (this.top != null) {
				if ((str[i] == '}' &&
						this.top.data == '{') ||
					(str[i] == ']' &&
						this.top.data == '[') ||
					(str[i] == ')' &&
						this.top.data == '(')) {
					this.pop();
				} else {
					status = false;
				}
			} else {
				status = false;
			}
		}

		if (status == true &&
			this.top == null) {
			console.log("\nBrackets are closed  properly\n");
		} else {
			console.log("\nBrackets are not closed  properly\n");
		}
		while (this.top != null) {
			this.pop();
		}
	}
}

var obj = new QS8Stack();
var str = "[()]{}{[()()]()}";
console.log(str);
obj.parentheses(str, str.length);
str = "(())[](){}{}[{]}";
console.log(str);
obj.parentheses(str, str.length);


//Sample output
// [()]{}{[()()]()}

// Brackets are closed  properly

// (())[](){}{}[{]}

// Brackets are not closed  properly
