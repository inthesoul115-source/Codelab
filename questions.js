/* ==========================================================================
   QUIZ QUESTIONS  -  edit this file to change the quiz. No HTML knowledge needed.

   Each question looks like this:

     {
       q: "The question text",
       code: "optional code shown under the question (delete this line if none)",
       options: ["Option A", "Option B", "Option C", "Option D"],
       answer: 1,            // position of the correct option: 0 = first, 1 = second, 2 = third, 3 = fourth
       explain: "Why the correct answer is right (shown after the user answers)."
     },

   Rules:
   - Keep the comma after every closing brace  }
   - Keep text inside "double quotes". If your text contains a double quote, write it as \"
   - Each language can have as many questions as you like; the quiz asks all of them
     (set QUESTIONS_PER_QUIZ in settings.js to limit how many are asked).
   ========================================================================== */

const QUIZ_QUESTIONS = {

  /* ------------------------------- C ------------------------------- */
  c: [
    {
      q: "Which header file must be included to use printf() in C?",
      options: ["<stdlib.h>", "<stdio.h>", "<string.h>", "<math.h>"],
      answer: 1,
      explain: "printf() and scanf() are declared in <stdio.h> (standard input/output). <stdlib.h> is for malloc/free, <string.h> for string functions and <math.h> for maths."
    },
    {
      q: "What is the output of this program?",
      code: "int a = 10, b = 3;\nprintf(\"%d\", a / b);",
      options: ["3.33", "4", "3.0", "3"],
      answer: 3,
      explain: "When both operands are integers, C performs integer division and discards the fractional part, so 10 / 3 gives 3. To get 3.33 you would write 10.0 / 3."
    },
    {
      q: "What is the value of sizeof(char) in C?",
      options: ["Depends on the compiler", "2", "1", "4"],
      answer: 2,
      explain: "By definition, sizeof(char) is always 1. Other types (int, long, etc.) can differ between systems, but char is the unit that sizeof is measured in."
    },
    {
      q: "Which operator gives the address of a variable?",
      options: ["&", "*", "->", "%"],
      answer: 0,
      explain: "The address-of operator & returns the memory address of a variable. The * operator does the opposite: it dereferences a pointer to get the value stored at that address."
    },
    {
      q: "For the declaration int arr[5]; which indices are valid?",
      options: ["1 to 5", "0 to 5", "0 to 4", "0 to 6"],
      answer: 2,
      explain: "Arrays in C are zero-indexed, so an array of 5 elements has valid indices 0, 1, 2, 3 and 4. Accessing arr[5] is out of bounds and causes undefined behaviour."
    },
    {
      q: "What does strlen(\"hello\") return?",
      options: ["6", "5", "4", "It is undefined"],
      answer: 1,
      explain: "strlen() counts the characters before the terminating '\\0' character, so it returns 5. The null terminator is stored but not counted (the string needs 6 bytes of storage)."
    },
    {
      q: "What does this code print?",
      code: "int x = 7;\nint *p = &x;\n*p = 9;\nprintf(\"%d\", x);",
      options: ["7", "The address of x", "A compile error", "9"],
      answer: 3,
      explain: "p stores the address of x. Writing *p = 9 changes the value at that address, which is x itself, so x becomes 9."
    },
    {
      q: "Which function is used to allocate memory dynamically in C?",
      options: ["new()", "malloc()", "alloc()", "create()"],
      answer: 1,
      explain: "malloc() (declared in <stdlib.h>) reserves a block of memory on the heap at runtime. 'new' exists in C++, not C. Memory from malloc must later be released with free()."
    },
    {
      q: "What happens if you repeatedly call malloc() but never call free()?",
      options: ["The compiler reports an error", "The memory is cleaned up automatically while the program runs", "A memory leak", "The stack overflows immediately"],
      answer: 2,
      explain: "C has no garbage collector. Heap memory stays reserved until you call free(), so forgetting to free it causes a memory leak that can slowly exhaust available memory."
    },
    {
      q: "What is the correct way to check whether two C strings a and b are equal?",
      options: ["a == b", "a.equals(b)", "compare(a, b)", "strcmp(a, b) == 0"],
      answer: 3,
      explain: "a == b compares the pointers (addresses), not the characters. strcmp() compares the contents and returns 0 when the strings are identical."
    }
  ],

  /* ------------------------------ C++ ------------------------------ */
  cpp: [
    {
      q: "Which object is used to print output to the console in C++?",
      options: ["cin", "print", "cout", "echo"],
      answer: 2,
      explain: "std::cout (from <iostream>) is the standard output stream, used with the << operator. std::cin is the input stream and is used with >>."
    },
    {
      q: "Which line correctly declares a reference r to an existing int variable x?",
      options: ["int *r = x;", "int &r = x;", "int r = &x;", "ref int r = x;"],
      answer: 1,
      explain: "int &r = x; makes r another name (alias) for x. A reference must be initialised when declared and cannot later be changed to refer to a different variable."
    },
    {
      q: "What does this code print?",
      code: "int a = 5;\nint &b = a;\nb = 8;\ncout << a;",
      options: ["5", "13", "8", "A compile error"],
      answer: 2,
      explain: "b is a reference to a, so they share the same memory. Assigning 8 to b changes a as well."
    },
    {
      q: "What is the name of a class constructor in C++?",
      options: ["Same as the class name", "constructor", "init", "Any name you like"],
      answer: 0,
      explain: "A constructor has exactly the same name as its class and no return type. It runs automatically when an object is created."
    },
    {
      q: "What is the default access level of members in a C++ class (not struct)?",
      options: ["public", "protected", "package", "private"],
      answer: 3,
      explain: "Members of a class are private by default. In a struct the default is public. That is the only difference between class and struct in C++."
    },
    {
      q: "What is the purpose of the virtual keyword on a member function?",
      options: ["To make the function run faster", "To enable runtime polymorphism through base-class pointers/references", "To prevent the function from being overridden", "To make the function private"],
      answer: 1,
      explain: "A virtual function is looked up at runtime, so calling it through a base-class pointer runs the derived class's version. This is how C++ implements runtime (dynamic) polymorphism."
    },
    {
      q: "Which container stores key-value pairs sorted by key?",
      options: ["std::vector", "std::set", "std::stack", "std::map"],
      answer: 3,
      explain: "std::map keeps unique keys in sorted order, each with an associated value. std::set stores only keys, and std::vector is a sequential array."
    },
    {
      q: "After running this code, what does v.size() return?",
      code: "std::vector<int> v;\nv.push_back(3);\nv.push_back(7);\nv.push_back(9);",
      options: ["2", "3", "0", "9"],
      answer: 1,
      explain: "push_back() adds one element at the end each time. Three calls leave three elements, so size() is 3."
    },
    {
      q: "What does RAII stand for / mean in C++?",
      options: ["A resource's lifetime is tied to an object's lifetime (acquire in constructor, release in destructor)", "Random Access Iterator Interface", "Runtime Allocation of Instance Information", "Reference And Instance Initialisation"],
      answer: 0,
      explain: "Resource Acquisition Is Initialisation: resources such as memory, files or locks are acquired in a constructor and released in the destructor, so they are cleaned up automatically even if an exception occurs. Smart pointers like std::unique_ptr use this idea."
    },
    {
      q: "Which operator allocates a single object on the heap in C++?",
      options: ["malloc", "alloc", "new", "create"],
      answer: 2,
      explain: "new allocates memory and calls the constructor; it must be paired with delete. (malloc also works but does not call constructors and is rarely used in modern C++.) Prefer smart pointers or containers when possible."
    }
  ],

  /* ----------------------------- Python ----------------------------- */
  python: [
    {
      q: "What does print(type(3 / 2)) display?",
      options: ["<class 'int'>", "<class 'double'>", "<class 'number'>", "<class 'float'>"],
      answer: 3,
      explain: "In Python 3 the / operator always performs true division and returns a float (1.5). Use // for floor division, which gives 1."
    },
    {
      q: "What is the output of this code?",
      code: "print(len([1, 2, 3] * 2))",
      options: ["6", "3", "2", "A TypeError"],
      answer: 0,
      explain: "Multiplying a list by an integer repeats it, so [1, 2, 3] * 2 becomes [1, 2, 3, 1, 2, 3], which has length 6."
    },
    {
      q: "Which of these data types is mutable?",
      options: ["tuple", "str", "int", "list"],
      answer: 3,
      explain: "Lists can be changed in place (append, remove, item assignment). Tuples, strings and integers are immutable: operations on them create new objects."
    },
    {
      q: "What does this code print?",
      code: "x = \"hi\"\nprint(x * 3)",
      options: ["hihihi", "hi3", "hi hi hi", "An error"],
      answer: 0,
      explain: "Multiplying a string by an integer repeats it, so \"hi\" * 3 is \"hihihi\" (no spaces are added)."
    },
    {
      q: "Which keyword is used to define a function in Python?",
      options: ["function", "func", "def", "define"],
      answer: 2,
      explain: "Functions are defined with def, for example: def add(a, b): return a + b"
    },
    {
      q: "What is the value of 2 ** 3?",
      options: ["6", "8", "5", "9"],
      answer: 1,
      explain: "The ** operator is exponentiation: 2 ** 3 means 2 to the power 3, which is 8. The * operator is ordinary multiplication (2 * 3 = 6)."
    },
    {
      q: "For a = [10, 20, 30, 40], what does a[1:3] return?",
      options: ["[10, 20, 30]", "[20, 30, 40]", "[20, 30]", "[10, 20]"],
      answer: 2,
      explain: "A slice a[start:stop] includes the start index but excludes the stop index. Indices 1 and 2 are 20 and 30, so the result is [20, 30]."
    },
    {
      q: "Which statement block is used to handle exceptions in Python?",
      options: ["try / catch", "try / except", "do / rescue", "handle / error"],
      answer: 1,
      explain: "Python uses try / except (optionally with else and finally). 'catch' is the keyword used in languages such as Java, C++ and JavaScript."
    },
    {
      q: "What does this code print?",
      code: "d = {\"a\": 1}\nprint(d.get(\"b\", 0))",
      options: ["None", "KeyError", "0", "1"],
      answer: 2,
      explain: "dict.get(key, default) returns the default value when the key is missing instead of raising a KeyError. Here \"b\" is not in d, so it returns 0."
    },
    {
      q: "What is the role of indentation in Python?",
      options: ["It only makes code look neater", "It defines blocks of code", "It marks comments", "It is needed only for functions"],
      answer: 1,
      explain: "Python uses indentation (not braces) to group statements into blocks such as the body of an if, loop, function or class. Incorrect indentation causes an IndentationError or changes program behaviour."
    }
  ],

  /* ------------------------------ Java ------------------------------ */
  java: [
    {
      q: "Which method signature is the standard entry point of a Java program?",
      options: ["public static void main(String[] args)", "public void main()", "static int start(String[] args)", "public static void run(String[] args)"],
      answer: 0,
      explain: "The JVM looks for public static void main(String[] args) to start execution. It must be public (accessible), static (callable without an object) and return void."
    },
    {
      q: "Which of the following is NOT a primitive data type in Java?",
      options: ["int", "boolean", "char", "String"],
      answer: 3,
      explain: "String is a class (a reference type). The eight primitives are byte, short, int, long, float, double, char and boolean."
    },
    {
      q: "Which keyword is used to inherit from a class in Java?",
      options: ["implements", "inherits", "extends", "super"],
      answer: 2,
      explain: "A class inherits from another class with extends. implements is used for interfaces, and super refers to the parent class inside a subclass."
    },
    {
      q: "What does this code print?",
      code: "String s1 = new String(\"a\");\nString s2 = new String(\"a\");\nSystem.out.println(s1 == s2);",
      options: ["true", "false", "A compile error", "A runtime exception"],
      answer: 1,
      explain: "== compares object references, and new String creates two separate objects, so the result is false. To compare contents use s1.equals(s2), which would be true."
    },
    {
      q: "What does JVM stand for?",
      options: ["Java Variable Manager", "Java Visual Module", "Java Virtual Machine", "Java Version Manager"],
      answer: 2,
      explain: "The Java Virtual Machine runs compiled bytecode. That is why the same compiled Java program can run on any operating system that has a JVM."
    },
    {
      q: "Which collection does not allow duplicate elements?",
      options: ["ArrayList", "LinkedList", "Vector", "HashSet"],
      answer: 3,
      explain: "A Set holds unique elements; adding a value that is already present is ignored. Lists (ArrayList, LinkedList, Vector) allow duplicates."
    },
    {
      q: "What does declaring a variable with the final keyword mean?",
      options: ["It can be assigned only once", "It is stored in a file", "It is shared between all objects", "It is hidden from other classes"],
      answer: 0,
      explain: "A final variable cannot be reassigned after it is initialised. (For a final object reference, the reference is fixed but the object's internal state can still change.)"
    },
    {
      q: "Can a Java class extend more than one class directly?",
      options: ["Yes, using a comma-separated list", "Yes, but only abstract classes", "No, but it can implement multiple interfaces", "No, and it cannot implement interfaces either"],
      answer: 2,
      explain: "Java allows single inheritance of classes to avoid ambiguity problems, but a class can implement any number of interfaces to get multiple types."
    },
    {
      q: "Which of these is a checked exception that must be caught or declared?",
      options: ["NullPointerException", "ArithmeticException", "IOException", "ArrayIndexOutOfBoundsException"],
      answer: 2,
      explain: "IOException is a checked exception: the compiler forces you to handle it with try/catch or declare it with throws. The others are unchecked (runtime) exceptions."
    },
    {
      q: "What does Java's garbage collector do?",
      options: ["Deletes unused source files", "Frees memory of objects that are no longer reachable", "Compresses the compiled .class files", "Removes unused import statements"],
      answer: 1,
      explain: "The garbage collector automatically reclaims heap memory used by objects that no longer have any references, so you do not free memory manually as in C."
    }
  ],

  /* --------------------------- JavaScript --------------------------- */
  javascript: [
    {
      q: "What does typeof null return?",
      options: ["\"null\"", "\"undefined\"", "\"object\"", "\"number\""],
      answer: 2,
      explain: "typeof null returns \"object\". This is a well-known historical quirk of JavaScript; null is actually a primitive value."
    },
    {
      q: "What does this code print?",
      code: "console.log(0.1 + 0.2 === 0.3);",
      options: ["false", "true", "undefined", "NaN"],
      answer: 0,
      explain: "Numbers are stored as binary floating point, so 0.1 + 0.2 is 0.30000000000000004, not exactly 0.3. Compare with a small tolerance instead, e.g. Math.abs(a - b) < Number.EPSILON."
    },
    {
      q: "What is the main difference between let and var?",
      options: ["let can only hold numbers", "var is block-scoped, let is not", "let is block-scoped, var is function-scoped", "There is no difference"],
      answer: 2,
      explain: "let (and const) are block-scoped: they exist only inside the nearest { }. var is function-scoped and is hoisted, which can cause surprising bugs."
    },
    {
      q: "What does this code output?",
      code: "console.log([1, 2, 3].map(x => x * 2));",
      options: ["[2, 4, 6]", "[1, 2, 3]", "6", "[1, 4, 9]"],
      answer: 0,
      explain: "map() builds a new array by applying the function to every element, so each number is doubled: [2, 4, 6]. The original array is unchanged."
    },
    {
      q: "What is the difference between == and === in JavaScript?",
      options: ["There is none", "=== checks type and value, == converts types first", "== is faster and always preferred", "=== works only on strings"],
      answer: 1,
      explain: "=== is strict equality (no type conversion), while == converts types before comparing, so 5 == \"5\" is true but 5 === \"5\" is false. Using === avoids many bugs."
    },
    {
      q: "What does this code print?",
      code: "console.log(\"5\" + 3);",
      options: ["8", "NaN", "An error", "\"53\""],
      answer: 3,
      explain: "When one operand of + is a string, JavaScript converts the other to a string and concatenates, giving \"53\". With - (\"5\" - 3) the string would be converted to a number instead and give 2."
    },
    {
      q: "What does JSON.stringify(obj) do?",
      options: ["Converts a JSON string to an object", "Converts a JavaScript value into a JSON string", "Deletes the object", "Prints the object in the console"],
      answer: 1,
      explain: "JSON.stringify turns a JavaScript object or array into a JSON-formatted string (useful for sending data or saving it). JSON.parse does the reverse."
    },
    {
      q: "What is a Promise in JavaScript?",
      options: ["A guarantee that code runs faster", "A way to define a class", "A loop that never ends", "An object representing the eventual result of an asynchronous operation"],
      answer: 3,
      explain: "A Promise represents a value that will be available later (pending, then fulfilled or rejected). You consume it with .then()/.catch() or with async/await."
    },
    {
      q: "Which array method adds an element to the end of the array?",
      options: ["push()", "pop()", "shift()", "unshift()"],
      answer: 0,
      explain: "push() appends to the end. pop() removes the last element, shift() removes the first, and unshift() adds to the beginning."
    },
    {
      q: "What does declaring a variable with const guarantee?",
      options: ["The value is deeply frozen and can never change", "The variable cannot be reassigned, but an object's contents can still be changed", "The variable is global", "The variable is deleted after use"],
      answer: 1,
      explain: "const prevents reassigning the variable itself. If it holds an object or array, you can still change its properties or elements (use Object.freeze to prevent that)."
    }
  ],

  /* ------------------------------ SQL ------------------------------ */
  sql: [
    {
      q: "Which SQL statement is used to retrieve data from a table?",
      options: ["GET", "SELECT", "FETCH", "OPEN"],
      answer: 1,
      explain: "SELECT retrieves rows (and columns) from one or more tables, e.g. SELECT name FROM students;"
    },
    {
      q: "Which clause filters rows before they are returned?",
      options: ["ORDER BY", "GROUP BY", "WHERE", "LIMIT"],
      answer: 2,
      explain: "WHERE keeps only the rows that satisfy a condition, e.g. WHERE marks > 50. ORDER BY sorts, GROUP BY groups, and LIMIT restricts the number of rows."
    },
    {
      q: "What does SELECT DISTINCT city FROM customers; do?",
      options: ["Returns each city only once, removing duplicates", "Sorts cities alphabetically", "Deletes duplicate cities from the table", "Counts the cities"],
      answer: 0,
      explain: "DISTINCT removes duplicate rows from the result of the query. It does not change the stored data."
    },
    {
      q: "Which clause sorts the result set?",
      options: ["SORT BY", "ORDER BY", "ARRANGE", "GROUP BY"],
      answer: 1,
      explain: "ORDER BY sorts results ascending (ASC, the default) or descending (DESC), e.g. ORDER BY marks DESC."
    },
    {
      q: "What is a primary key?",
      options: ["A column that can contain duplicates", "The first column of every table", "A column (or set of columns) that uniquely identifies each row and cannot be NULL", "A password for the table"],
      answer: 2,
      explain: "A primary key uniquely identifies each row. Its values must be unique and not NULL, and it is what other tables point to using foreign keys."
    },
    {
      q: "Which join returns only the rows that have matching values in both tables?",
      options: ["LEFT JOIN", "FULL OUTER JOIN", "CROSS JOIN", "INNER JOIN"],
      answer: 3,
      explain: "INNER JOIN keeps only matching rows. LEFT JOIN also keeps unmatched rows from the left table (with NULLs for the right side)."
    },
    {
      q: "What is the difference between WHERE and HAVING?",
      options: ["There is none", "WHERE filters rows before grouping; HAVING filters groups after GROUP BY", "HAVING filters rows before grouping; WHERE filters groups", "WHERE works only on numbers"],
      answer: 1,
      explain: "WHERE is applied to individual rows before aggregation, so it cannot use COUNT/SUM. HAVING is applied after GROUP BY and can filter on aggregates, e.g. HAVING COUNT(*) > 5."
    },
    {
      q: "A table has 10 rows and 3 of them have NULL in the column score. What does COUNT(score) return?",
      options: ["10", "7", "3", "0"],
      answer: 1,
      explain: "COUNT(column) ignores NULL values, so it counts the 7 non-NULL scores. COUNT(*) would count all 10 rows."
    },
    {
      q: "Which values does this condition match?",
      code: "WHERE name LIKE 'A%'",
      options: ["Names that start with A", "Names that end with A", "Names that contain only the letter A", "Names with exactly two characters"],
      answer: 0,
      explain: "In LIKE patterns, % matches any sequence of characters (including none), so 'A%' matches every name starting with A. '%A' would match names ending with A."
    },
    {
      q: "Which statement changes values in existing rows?",
      options: ["INSERT", "ALTER", "MODIFY ROWS", "UPDATE"],
      answer: 3,
      explain: "UPDATE changes existing rows, e.g. UPDATE students SET marks = 90 WHERE id = 1; INSERT adds new rows and ALTER changes the table structure. Always include a WHERE or every row will be updated."
    }
  ]
};
