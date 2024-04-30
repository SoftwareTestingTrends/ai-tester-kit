---
sidebar_position: 4
---

# 🎓 Python Foundations

## Python Data Types
Python has a variety of data types that you can use to store and organize information in your programs. Please note that:
* All data in a Python program is stored in objects. 
* These objects have three components: id, type, and value.
* Each object has a unique identifier.
* Object’s type determines what functions can operate on that particular data type

```py
print(id(50))
print(type(50))
```

Here's a breakdown of some of the common data types:

**Numeric Types:**

* **int:** Stores whole numbers (positive, negative, or zero).
* **float:** Stores numbers with decimals.
* **complex:** Stores complex numbers (combination of a real and imaginary part).

**String Type:**

* **str:** Stores text data (letters, numbers, symbols).

**Collection Types:**

* **list:** An ordered, changeable collection of items (can contain different data types). You can add, remove, or modify elements in a list.
* **tuple:** An ordered, immutable collection of items (like a list, but you can't change it after creation).
* **set:** An unordered collection of unique items. Sets are useful for checking membership and removing duplicates.
* **dictionary:** An unordered collection of key-value pairs. You can use keys to access and modify values.


**Other Built-in Types:**
* **NoneType:** None is a special keyword in Python that represents a null value or the absence of a value.
* **bool:** Represents Boolean values (True or False).
* **bytes:** Stores binary data (sequences of 8-bit integers).

These are just some of the fundamental data types in Python. There are also additional specialized data types available in modules like `datetime` for handling dates and times, and `collections` for more complex data structures.

For a more comprehensive list and detailed explanations, you can refer to the official Python documentation on data types [https://docs.python.org/3/library/datatypes.html](https://docs.python.org/3/library/datatypes.html).

### Determining types of data values
The `type()` method is a built-in function in Python that returns the type of an object. It's a fundamental tool for understanding the data types you're working with in your code.

```py
number = 42
text = "Hello, world!"
is_true = True
is_None = None

number_type = type(number)  # Output: <class 'int'>
text_type = type(text)  # Output: <class 'str'>
bool_type = type(is_true)  # Output: <class 'bool'>
none_type = type(is_None) # Output: <class 'NoneType'>
```

**Tip:** If you encounter a TypeError or unexpected behavior while passing data through a function, consider using type() to verify the correct data type. Sometimes, values can be stored incorrectly, so it's helpful to double-check.

### Type Casting
Type conversion, also known as type casting, is the process of transforming a value from one data type to another. This is often necessary when you want to perform operations on data that are not inherently compatible due to their different data types.

You can convert data types by using `<data type>(object)`

```py
a = int(1)        # a will be 1
b = int(2.5)      # b will be 2
c = int("3")      # c will be 3
#c1 = int("3.4")   # c1 will be... This will result in an error; replace it with below statement to work:
c1 = int(float("3.4"))
d = float(1)      # d will be 1.0
e = float(2.5)    # e will be 2.5
f = float("3")    # f will be 3.0
g = float("4.23") # g will be 4.23
h = str("80s")    # h will be '80s'
i = str(22)       # i will be '22'
j = str(3.01)     # j will be '3.01'
print([a,b,c,c1,d,e,f,g,h,i,j])
```
### Iterables
An iterable is a collection of items from which elements can be retrieved one at a time in a specific order (or without order for some). It's like having a sequence you can step through element by element.
* **Examples:** Common iterables in Python include lists, tuples, strings, sets, and dictionaries.
* **Usage:** You can use iterables with `for` loops to iterate over their elements, or with functions like `map()`, `filter()`, and `reduce()` that work on sequences.

### Mutability
Mutability refers to the ability to modify the content of a data structure after it's created. A mutable object can have its elements changed, added, or removed.

Immutable data types in Python are those that cannot be changed after they are created. Once you assign a value to an immutable variable, the value itself cannot be modified.  Here are some key points about immutable data types:

Common examples of immutable data types in Python include:
* **Numbers:** Integers (`int`), floats (`float`), and complex numbers (`complex`).
* **Strings (`str`):** Text data cannot be changed after creation.
* **Tuples (`tuple`):** Ordered sequences of elements are immutable.
* **Frozen Sets (`frozenset`):** Unordered collections of unique elements, similar to sets (`set`), but frozen.

* **Behavior:** When you try to modify an immutable object, Python won't modify the original object itself. Instead, it will create a new object with the changes and assign that new object to the variable.

* **Use Cases:** Immutable data types are useful for various reasons:
  * **Thread Safety:** In multi-threaded environments, immutability ensures that data remains consistent as multiple threads cannot accidentally modify the same object.
  * **Security:** Immutability can help prevent accidental or malicious data corruption.
  * **Hashing:** Immutable objects are often used as keys in dictionaries because their hashable nature guarantees they won't change, allowing for efficient dictionary operations.

Here's an example to illustrate the concept:

```python
# Immutable string
my_string = "Hello, world!"

# Attempt to modify a character (will result in a TypeError)
# my_string[0] = 'X'

`TypeError: 'str' object does not support item assignment`

# Instead, create a new string with the modification
modified_string = "X" + my_string[1:]
print(modified_string)  # Output: Xello, world!

# Original string remains unchanged
print(my_string)        # Output: Hello, world!
```

As you can see, trying to modify `my_string` directly raises a `TypeError`. However, we can create a new string `modified_string` with the desired change.

## Variables
Variables are named containers that store data throughout your program. They act like labeled boxes where you can assign values and then refer to those values using the variable's name. Here's a closer look at their characteristics:

**Creating Variables:**
* Unlike some other programming languages, Python doesn't require you to declare variables before using them. You simply assign a value to a name, and that creates the variable.
* The assignment uses an equal sign (`=`). For example:

```python
age = 30
name = "Alice"
is_running = True
```

**Naming Conventions:**

* Variable names can consist of letters, numbers, and underscores (`_`). However, the first character must be a letter or an underscore.
* By convention (PEP 8 style guide), it's recommended to use lowercase letters with underscores for variable names (e.g., `total_cost`, `user_input`).

**Data Types:**

* Variables can hold different types of data, like integers (`int`), floating-point numbers (`float`), strings (`str`), Booleans (`bool`), lists (`list`), dictionaries (`dict`), and more. The type of data a variable holds determines the operations you can perform on it.

**Using Variables:**

* Once you've assigned a value to a variable, you can use its name to refer to that value throughout your code. This allows you to reuse the data without having to rewrite the actual value everywhere.
* Here's an example:

```python
age = 30
print(f"Alice is {age} years old.")
```

**Reassigning Values:**

* You can change the value stored in a variable later in your code by assigning a new value to the same name. The variable will now point to the new data.

**Key Points:**

* Variables provide a flexible way to manage data in your Python programs.
* They make your code more readable and maintainable by using meaningful names instead of repeating values.
* Understanding data types is crucial for working effectively with variables, as different types have different functionalities.
* A Python variable is not an object and does not actually store data; it stores an id that refers to an object that stores data.

### Tracking Variables
The `%who` and `%whos` commands are used to display information about defined variables in the current session. Here's what each command does:
* `%who`: This command lists all interactive variables (i.e., variables that you have defined or imported) in the current session. It displays a simple list of variable names.
* `%whos`: This command provides more detailed information about the interactive variables. It shows the variable names along with their data types, sizes (for arrays), and a brief summary of the variable's contents.

Both `%who` and `%whos` can be useful for inspecting the variables you have defined and checking their properties without having to manually inspect each variable individually.

