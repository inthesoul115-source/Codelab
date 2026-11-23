/* ==========================================================================
   QUIZ QUESTIONS  -  edit this file to change the quiz. No HTML knowledge needed.

   Each question looks like this:

     {
       level: 1,             // which round it belongs to: 1 = easy, 2 = medium, 3 = hard
       q: "The question text",
       code: "optional code shown under the question (delete this line if none)",
       options: ["Option A", "Option B", "Option C", "Option D"],
       answer: 1,            // position of the correct option: 0 = first, 1 = second, 2 = third, 3 = fourth
       explain: "Why the correct answer is right (shown after the user answers)."
     },

   Rules:
   - Keep the comma after every closing brace  }
   - Keep text inside "double quotes". If your text contains a double quote, write it as \"
   - Use \n inside code to start a new line.
   - The site shuffles the order of the options, so never write "all of the above" or "option B".
   - Each round asks 10 questions (SITE.questionsPerQuiz in settings.js). Keep MORE than 10 questions per
     level so the same quiz does not come back again and again: the site always picks questions the
     visitor has not seen yet, and only repeats when they have seen them all.
   - A round with a perfect score unlocks the next level. Add level 4 questions and a name in
     SITE.roundNames (settings.js) to create a 4th round.
   ========================================================================== */

const QUIZ_QUESTIONS = {

  /* ===================== C ===================== */
  c: [
    /* ---- C: Round 1 (easy), 15 questions ---- */
    {
      level: 1,
      q: "Which header file must be included to use printf() in C?",
      options: ["<stdlib.h>", "<stdio.h>", "<string.h>", "<math.h>"],
      answer: 1,
      explain: "printf() and scanf() are declared in <stdio.h> (standard input/output). <stdlib.h> is for malloc/free, <string.h> for string functions and <math.h> for maths."
    },
    {
      level: 1,
      q: "What is the output of this program?",
      code: "int a = 10, b = 3;\nprintf(\"%d\", a / b);",
      options: ["3.33", "4", "3.0", "3"],
      answer: 3,
      explain: "When both operands are integers, C performs integer division and discards the fractional part, so 10 / 3 gives 3. To get 3.33 you would write 10.0 / 3."
    },
    {
      level: 1,
      q: "What is the value of sizeof(char) in C?",
      options: ["Depends on the compiler", "2", "1", "4"],
      answer: 2,
      explain: "By definition, sizeof(char) is always 1. Other types (int, long, etc.) can differ between systems, but char is the unit that sizeof is measured in."
    },
    {
      level: 1,
      q: "Which operator gives the address of a variable?",
      options: ["&", "*", "->", "%"],
      answer: 0,
      explain: "The address-of operator & returns the memory address of a variable. The * operator does the opposite: it dereferences a pointer to get the value stored at that address."
    },
    {
      level: 1,
      q: "For the declaration int arr[5]; which indices are valid?",
      options: ["1 to 5", "0 to 5", "0 to 4", "0 to 6"],
      answer: 2,
      explain: "Arrays in C are zero-indexed, so an array of 5 elements has valid indices 0, 1, 2, 3 and 4. Accessing arr[5] is out of bounds and causes undefined behaviour."
    },
    {
      level: 1,
      q: "What does strlen(\"hello\") return?",
      options: ["6", "5", "4", "It is undefined"],
      answer: 1,
      explain: "strlen() counts the characters before the terminating '\\0' character, so it returns 5. The null terminator is stored but not counted (the string needs 6 bytes of storage)."
    },
    {
      level: 1,
      q: "What does this code print?",
      code: "int x = 7;\nint *p = &x;\n*p = 9;\nprintf(\"%d\", x);",
      options: ["7", "The address of x", "A compile error", "9"],
      answer: 3,
      explain: "p stores the address of x. Writing *p = 9 changes the value at that address, which is x itself, so x becomes 9."
    },
    {
      level: 1,
      q: "Which function is used to allocate memory dynamically in C?",
      options: ["new()", "malloc()", "alloc()", "create()"],
      answer: 1,
      explain: "malloc() (declared in <stdlib.h>) reserves a block of memory on the heap at runtime. 'new' exists in C++, not C. Memory from malloc must later be released with free()."
    },
    {
      level: 1,
      q: "What happens if you repeatedly call malloc() but never call free()?",
      options: ["The compiler reports an error", "The memory is cleaned up automatically while the program runs", "A memory leak", "The stack overflows immediately"],
      answer: 2,
      explain: "C has no garbage collector. Heap memory stays reserved until you call free(), so forgetting to free it causes a memory leak that can slowly exhaust available memory."
    },
    {
      level: 1,
      q: "What is the correct way to check whether two C strings a and b are equal?",
      options: ["a == b", "a.equals(b)", "compare(a, b)", "strcmp(a, b) == 0"],
      answer: 3,
      explain: "a == b compares the pointers (addresses), not the characters. strcmp() compares the contents and returns 0 when the strings are identical."
    },
    {
      level: 1,
      q: "Which printf format specifier is used to print a double value?",
      options: ["%f", "%d", "%s", "%c"],
      answer: 0,
      explain: "%f prints floating-point values (float arguments are promoted to double in printf). %d is for int, %s for strings and %c for a single character."
    },
    {
      level: 1,
      q: "What does this code print?",
      code: "char c = 'A';\nprintf(\"%d\", c);",
      options: ["A", "65", "a", "97"],
      answer: 1,
      explain: "A char is just a small integer. Printing it with %d shows its character code, and 'A' is 65 in ASCII. %c would have printed the letter."
    },
    {
      level: 1,
      q: "What is the value of the expression 17 % 5 ?",
      code: "printf(\"%d\", 17 % 5);",
      options: ["3", "3.4", "2", "0"],
      answer: 2,
      explain: "The % operator gives the remainder of integer division. 17 divided by 5 is 3 with remainder 2."
    },
    {
      level: 1,
      q: "Which loop is guaranteed to run its body at least once, even if the condition is false at the start?",
      options: ["while (cond) { ... }", "for (;cond;) { ... }", "if (cond) { ... }", "do { ... } while (cond);"],
      answer: 3,
      explain: "A do-while loop checks its condition after the body, so the body always runs once. while and for check the condition first and may never run the body."
    },
    {
      level: 1,
      q: "What does this code print?",
      code: "int x = 0;\nif (x = 5)\n    printf(\"yes\");\nelse\n    printf(\"no\");",
      options: ["no", "Nothing is printed", "yes", "It does not compile"],
      answer: 2,
      explain: "A single = is assignment, not comparison. x = 5 stores 5 in x and the expression's value is 5, which is non-zero and therefore true. Use == to compare."
    },

    /* ---- C: Round 2 (medium), 15 questions ---- */
    {
      level: 2,
      q: "What does this code print?",
      code: "int a[] = {10, 20, 30};\nint *p = a;\np++;\nprintf(\"%d\", *p + *(p + 1));",
      options: ["50", "30", "40", "20"],
      answer: 0,
      explain: "p starts at a[0]; p++ moves it to a[1]. So *p is 20 and *(p+1) is 30, giving 50."
    },
    {
      level: 2,
      q: "What does this code print?",
      code: "char s[] = \"hello\";\ns[0] = 'J';\nprintf(\"%s\", s);",
      options: ["hello", "Compile error", "Jello followed by garbage", "Jello"],
      answer: 3,
      explain: "char s[] = \"hello\" makes a modifiable copy of the text in the array, so changing s[0] is fine and the string becomes Jello."
    },
    {
      level: 2,
      q: "Given the declaration below, what does sizeof(arr) / sizeof(arr[0]) evaluate to?",
      code: "int arr[10];",
      options: ["40", "10", "1", "It depends on the system"],
      answer: 1,
      explain: "sizeof(arr) is the total bytes of the array and sizeof(arr[0]) is the bytes of one element. Their ratio is always the element count, 10, whatever the size of int is."
    },
    {
      level: 2,
      q: "What does this code print?",
      code: "struct P { int x, y; };\nstruct P a = {1, 2};\nstruct P b = a;\nb.x = 9;\nprintf(\"%d\", a.x);",
      options: ["1", "9", "10", "It does not compile"],
      answer: 0,
      explain: "Assigning one struct to another copies all its members. b is an independent copy, so changing b.x does not affect a.x."
    },
    {
      level: 2,
      q: "What does this code print?",
      code: "void inc(int n) { n++; }\n\nint main(void) {\n    int n = 5;\n    inc(n);\n    printf(\"%d\", n);\n}",
      options: ["6", "5", "0", "It does not compile"],
      answer: 1,
      explain: "C passes arguments by value, so inc() increments its own copy of n. The caller's n is unchanged. To modify it you would pass &n and use a pointer."
    },
    {
      level: 2,
      q: "What does this code print?",
      code: "int next(void) {\n    static int c = 0;\n    return ++c;\n}\n/* in main: */\nprintf(\"%d\", next());\nprintf(\"%d\", next());\nprintf(\"%d\", next());",
      options: ["111", "012", "123", "321"],
      answer: 2,
      explain: "A static local variable is initialised once and keeps its value between calls. Each call increments it, so the three calls return 1, 2 and 3."
    },
    {
      level: 2,
      q: "What does this code print?",
      code: "int x = 1;\n{\n    int x = 5;\n    x++;\n}\nprintf(\"%d\", x);",
      options: ["5", "6", "It does not compile", "1"],
      answer: 3,
      explain: "The inner x is a different variable that hides the outer x inside the braces. Incrementing it has no effect on the outer x, which is still 1."
    },
    {
      level: 2,
      q: "What value does r hold after this statement?",
      code: "int r = 2 + 3 * 4 % 5;",
      options: ["2", "6", "4", "14"],
      answer: 2,
      explain: "*, / and % bind tighter than +, and they associate left to right. So 3 * 4 = 12, then 12 % 5 = 2, then 2 + 2 = 4."
    },
    {
      level: 2,
      q: "What does this code print?",
      code: "switch (2) {\n    case 1: printf(\"a\");\n    case 2: printf(\"b\");\n    case 3: printf(\"c\"); break;\n    default: printf(\"d\");\n}",
      options: ["bc", "b", "c", "bcd"],
      answer: 0,
      explain: "switch jumps to case 2 and keeps running through later cases until a break. So it prints b, then c, and break stops it before default."
    },
    {
      level: 2,
      q: "What does this program print? (string.h is included)",
      code: "printf(\"%d\", strcmp(\"apple\", \"banana\") < 0);",
      options: ["0", "-1", "Nothing; it does not compile", "1"],
      answer: 3,
      explain: "strcmp returns a negative number when the first string is alphabetically before the second, so the comparison < 0 is true and prints 1. It compares strings, not their addresses."
    },
    {
      level: 2,
      q: "What does this code print?",
      code: "double d = 7 / 2;\nprintf(\"%.1f\", d);",
      options: ["3.5", "3.0", "4.0", "3"],
      answer: 1,
      explain: "7 / 2 is integer division and gives 3 before the result is converted to double. So d holds 3.0. Writing 7 / 2.0 would give 3.5."
    },
    {
      level: 2,
      q: "What does this code print?",
      code: "printf(\"%d\", 'z' - 'a');",
      options: ["25", "26", "122", "-25"],
      answer: 0,
      explain: "Characters are integers, so 'z' - 'a' is the difference of their codes. In ASCII (and in any set with contiguous letters) that is 25."
    },
    {
      level: 2,
      q: "What does this code print?",
      code: "void set(int *p) { *p = *p * 2; }\n\nint main(void) {\n    int n = 10;\n    set(&n);\n    printf(\"%d\", n);\n}",
      options: ["10", "20", "The address of n", "It does not compile"],
      answer: 1,
      explain: "set() receives the address of n and writes through it, doubling the original variable. That is how C functions modify caller variables."
    },
    {
      level: 2,
      q: "What happens when this code is compiled?",
      code: "const int n = 5;\nn = 6;\nprintf(\"%d\", n);",
      options: ["It compiles and prints 6", "It compiles and prints 5", "The compiler reports an error because n is read-only", "It compiles but crashes at run time"],
      answer: 2,
      explain: "A const object cannot be assigned to after initialisation, and the compiler rejects the assignment at compile time."
    },
    {
      level: 2,
      q: "What does this code print?",
      code: "for (int i = 0; i < 8; i++) {\n    if (i % 2 == 0) continue;\n    if (i == 5) break;\n    printf(\"%d\", i);\n}",
      options: ["135", "1", "0135", "13"],
      answer: 3,
      explain: "continue skips even i. i = 1 and 3 print. At i = 5 the break leaves the loop before printing, so the output is 13."
    },

    /* ---- C: Round 3 (hard), 15 questions ---- */
    {
      level: 3,
      q: "What does this code print?",
      code: "unsigned int u = 1;\nint i = -2;\nif (i < u) printf(\"yes\");\nelse printf(\"no\");",
      options: ["yes", "Nothing is printed", "no", "It does not compile"],
      answer: 2,
      explain: "When an int and an unsigned int are compared, the int is converted to unsigned. -2 becomes a huge value (UINT_MAX - 1), so i < u is false."
    },
    {
      level: 3,
      q: "What does this code print?",
      code: "unsigned char a = 200, b = 100;\nprintf(\"%d\", a + b);",
      options: ["300", "44", "200", "255"],
      answer: 0,
      explain: "unsigned char operands are promoted to int before the addition, so 200 + 100 is computed as the int 300 and nothing wraps around."
    },
    {
      level: 3,
      q: "What does this code print?",
      code: "char s[] = \"hi\";\nprintf(\"%zu %zu\", sizeof s, strlen(s));",
      options: ["2 2", "3 3", "8 2", "3 2"],
      answer: 3,
      explain: "The array s holds 'h', 'i' and the terminating '\\0', so sizeof s is 3 (the array size, not a pointer size). strlen stops at the terminator and returns 2."
    },
    {
      level: 3,
      q: "What does this code print?",
      code: "#define SQ(x) x * x\n\nprintf(\"%d\", SQ(1 + 2));",
      options: ["9", "5", "3", "1"],
      answer: 1,
      explain: "The macro does plain text replacement, so SQ(1+2) becomes 1+2*1+2, which is 1 + 2 + 2 = 5. Parenthesising each use, ((x)*(x)), would give 9."
    },
    {
      level: 3,
      q: "What does this code print?",
      code: "int a[] = {1, 2, 3, 4, 5};\nint *p = &a[1];\nint *q = &a[4];\nprintf(\"%td %d\", q - p, *(q - 1));",
      options: ["3 4", "3 3", "4 3", "4 5"],
      answer: 0,
      explain: "Subtracting two pointers into the same array gives the number of elements between them: index 4 minus index 1 is 3. q - 1 points to a[3], which is 4."
    },
    {
      level: 3,
      q: "What does this code print?",
      code: "int x = 0, y = 0;\nif (x++ && y++) { }\nprintf(\"%d %d\", x, y);",
      options: ["1 1", "1 0", "0 0", "0 1"],
      answer: 1,
      explain: "x++ yields the old value 0, which is false, so && short-circuits and y++ is never evaluated. x still gets incremented to 1, while y stays 0."
    },
    {
      level: 3,
      q: "Which declaration makes p a constant pointer, so p itself cannot be reassigned, while the int it points to can still be modified through p?",
      options: ["const int *p = &x;", "int const *p = &x;", "int *const p = &x;", "const int *const p = &x;"],
      answer: 2,
      explain: "Read declarations right to left: 'int *const p' is a const pointer to int. The other forms make the pointed-to int read-only (const int * and int const * are the same thing), and the last makes both read-only."
    },
    {
      level: 3,
      q: "What does this code print?",
      code: "unsigned char x = 0x0F;\nprintf(\"%d\", ~x);",
      options: ["240", "15", "0", "-16"],
      answer: 3,
      explain: "x is promoted to int (15) before ~ is applied. ~15 on an int is -16 (all bits flipped), and it is not truncated back to unsigned char."
    },
    {
      level: 3,
      q: "What does this code print?",
      code: "int f(void) {\n    static int n = 10;\n    n -= 3;\n    return n;\n}\n/* in main: */\nint a = f();\nint b = f();\nprintf(\"%d %d\", a, b);",
      options: ["7 7", "10 7", "7 4", "7 10"],
      answer: 2,
      explain: "The static variable n is created once and keeps its value between calls. The first call leaves 7 and the second leaves 4, which are stored in a and b."
    },
    {
      level: 3,
      q: "What does this code print?",
      code: "int a = 2, b = 3;\nprintf(\"%d\", a < b < 1);",
      options: ["0", "1", "3", "It does not compile"],
      answer: 0,
      explain: "Comparison operators associate left to right: (2 < 3) is 1, then 1 < 1 is 0. It is not a chained math-style comparison."
    },
    {
      level: 3,
      q: "What does this code print?",
      code: "int a[] = {5, 6, 7};\nint *p = a;\nint v = *p++;\nprintf(\"%d %d %d\", v, *p, a[0]);",
      options: ["6 6 6", "5 5 5", "6 7 6", "5 6 5"],
      answer: 3,
      explain: "p++ yields the old pointer, so *p++ reads a[0] = 5 and then advances p. Afterwards *p is a[1] = 6 and a[0] is unchanged at 5."
    },
    {
      level: 3,
      q: "Which of these code fragments has undefined behaviour?",
      options: ["char a[] = \"abc\"; a[0] = 'x';", "char *p = \"abc\"; p[0] = 'x';", "char *p = \"abc\"; p = p + 1;", "const char *p = \"abc\"; printf(\"%c\", p[0]);"],
      answer: 1,
      explain: "A string literal may be stored in read-only memory, and modifying it is undefined behaviour. A char array initialised from a literal is a modifiable copy, and moving a pointer or reading characters is fine."
    },
    {
      level: 3,
      q: "What does this code print?",
      code: "switch (2) {\n    default: printf(\"d\");\n    case 1:  printf(\"a\"); break;\n    case 3:  printf(\"c\");\n}",
      options: ["da", "d", "a", "ca"],
      answer: 0,
      explain: "Execution jumps to default because 2 matches no case label, even though default is written first. With no break it falls through into case 1, printing a, and then break stops it."
    },
    {
      level: 3,
      q: "Inside this function, what does sizeof(a) give?",
      code: "void f(int a[10]) {\n    size_t n = sizeof(a);\n}",
      options: ["10 * sizeof(int)", "The size of a pointer to int, not of ten ints", "sizeof(int)", "Always 10"],
      answer: 1,
      explain: "An array parameter is adjusted to a pointer, so sizeof(a) is sizeof(int *). The array size is lost, which is why functions usually take a separate length argument."
    },
    {
      level: 3,
      q: "What does this code print?",
      code: "printf(\"%d %d\", -7 / 2, -7 % 2);",
      options: ["-4 1", "-3 1", "-3 -1", "-4 -1"],
      answer: 2,
      explain: "Since C99, integer division truncates toward zero, so -7 / 2 is -3. The remainder takes the sign of the dividend, so -7 % 2 is -1 (and (-7/2)*2 + (-7%2) == -7)."
    }
  ],

  /* ===================== C++ ===================== */
  cpp: [
    /* ---- C++: Round 1 (easy), 15 questions ---- */
    {
      level: 1,
      q: "Which object is used to print output to the console in C++?",
      options: ["cin", "print", "cout", "echo"],
      answer: 2,
      explain: "std::cout (from <iostream>) is the standard output stream, used with the << operator. std::cin is the input stream and is used with >>."
    },
    {
      level: 1,
      q: "Which line correctly declares a reference r to an existing int variable x?",
      options: ["int *r = x;", "int &r = x;", "int r = &x;", "ref int r = x;"],
      answer: 1,
      explain: "int &r = x; makes r another name (alias) for x. A reference must be initialised when declared and cannot later be changed to refer to a different variable."
    },
    {
      level: 1,
      q: "What does this code print?",
      code: "int a = 5;\nint &b = a;\nb = 8;\ncout << a;",
      options: ["5", "13", "8", "A compile error"],
      answer: 2,
      explain: "b is a reference to a, so they share the same memory. Assigning 8 to b changes a as well."
    },
    {
      level: 1,
      q: "What is the name of a class constructor in C++?",
      options: ["Same as the class name", "constructor", "init", "Any name you like"],
      answer: 0,
      explain: "A constructor has exactly the same name as its class and no return type. It runs automatically when an object is created."
    },
    {
      level: 1,
      q: "What is the default access level of members in a C++ class (not struct)?",
      options: ["public", "protected", "package", "private"],
      answer: 3,
      explain: "Members of a class are private by default. In a struct the default is public. That is the only difference between class and struct in C++."
    },
    {
      level: 1,
      q: "What is the purpose of the virtual keyword on a member function?",
      options: ["To make the function run faster", "To enable runtime polymorphism through base-class pointers/references", "To prevent the function from being overridden", "To make the function private"],
      answer: 1,
      explain: "A virtual function is looked up at runtime, so calling it through a base-class pointer runs the derived class's version. This is how C++ implements runtime (dynamic) polymorphism."
    },
    {
      level: 1,
      q: "Which container stores key-value pairs sorted by key?",
      options: ["std::vector", "std::set", "std::stack", "std::map"],
      answer: 3,
      explain: "std::map keeps unique keys in sorted order, each with an associated value. std::set stores only keys, and std::vector is a sequential array."
    },
    {
      level: 1,
      q: "After running this code, what does v.size() return?",
      code: "std::vector<int> v;\nv.push_back(3);\nv.push_back(7);\nv.push_back(9);",
      options: ["2", "3", "0", "9"],
      answer: 1,
      explain: "push_back() adds one element at the end each time. Three calls leave three elements, so size() is 3."
    },
    {
      level: 1,
      q: "What does RAII stand for / mean in C++?",
      options: ["A resource's lifetime is tied to an object's lifetime (acquire in constructor, release in destructor)", "Random Access Iterator Interface", "Runtime Allocation of Instance Information", "Reference And Instance Initialisation"],
      answer: 0,
      explain: "Resource Acquisition Is Initialisation: resources such as memory, files or locks are acquired in a constructor and released in the destructor, so they are cleaned up automatically even if an exception occurs. Smart pointers like std::unique_ptr use this idea."
    },
    {
      level: 1,
      q: "Which operator allocates a single object on the heap in C++?",
      options: ["malloc", "alloc", "new", "create"],
      answer: 2,
      explain: "new allocates memory and calls the constructor; it must be paired with delete. (malloc also works but does not call constructors and is rarely used in modern C++.) Prefer smart pointers or containers when possible."
    },
    {
      level: 1,
      q: "What does this code print?",
      code: "cout << 7 / 2 << \" \" << 7 % 2;",
      options: ["3.5 1", "4 1", "3 1", "3 0"],
      answer: 2,
      explain: "Both operands are int, so / does integer division and drops the fraction (7 / 2 is 3). % gives the remainder, which is 1."
    },
    {
      level: 1,
      q: "What does this code print?",
      code: "char c = 'A';\ncout << c + 1;",
      options: ["B", "A1", "67", "66"],
      answer: 3,
      explain: "In c + 1 the char is promoted to int (65), so the result is the int 66. cout prints it as a number, not a letter. You would need static_cast<char>(c + 1) to get 'B'."
    },
    {
      level: 1,
      q: "Which header provides the std::string class?",
      options: ["<string>", "<str>", "<text>", "<chars>"],
      answer: 0,
      explain: "std::string is declared in <string>. <cstring> is something different: it holds the old C functions for char arrays such as strlen."
    },
    {
      level: 1,
      q: "What does this code print?",
      code: "for (int i = 1; i <= 7; i += 3)\n    cout << i << ' ';",
      options: ["1 4", "1 4 7", "1 4 7 10", "4 7"],
      answer: 1,
      explain: "i starts at 1 and grows by 3 each time: 1, 4, 7. The next value, 10, fails the i <= 7 test so the loop stops."
    },
    {
      level: 1,
      q: "What does this code print?",
      code: "string s = \"hello\";\ncout << s.size() << s[1];",
      options: ["5h", "4e", "5e", "6e"],
      answer: 2,
      explain: "size() is the number of characters (5). Indexing starts at 0, so s[1] is the second character, e."
    },

    /* ---- C++: Round 2 (medium), 15 questions ---- */
    {
      level: 2,
      q: "What does this code print?",
      code: "void inc(int x) { x++; }\nint main() {\n    int n = 5;\n    inc(n);\n    cout << n;\n}",
      options: ["5", "6", "0", "Compile error"],
      answer: 0,
      explain: "x is a copy of n, so incrementing it does not change n. To modify the caller's variable the parameter must be a reference (int &x)."
    },
    {
      level: 2,
      q: "What does this code print?",
      code: "void inc(int &x) { x++; }\nint main() {\n    int n = 5;\n    inc(n);\n    inc(n);\n    cout << n;\n}",
      options: ["5", "7", "6", "8"],
      answer: 1,
      explain: "x is a reference to n, so each call increments n itself. Two calls take it from 5 to 7."
    },
    {
      level: 2,
      q: "What does this code print?",
      code: "struct T {\n    string n;\n    T(string s) : n(s) { cout << n; }\n    ~T() { cout << \"~\" << n << \" \"; }\n};\nint main() { T a(\"A\"); T b(\"B\"); }",
      options: ["AB~A ~B", "A~A B~B", "AB~B ~A", "BA~B ~A"],
      answer: 2,
      explain: "Local objects are constructed in declaration order (A, then B) and destroyed in reverse order (B, then A)."
    },
    {
      level: 2,
      q: "What does this code print?",
      code: "int a = 1, b = 2;\nint *p = &a;\np = &b;\n*p = 5;\ncout << a << b;",
      options: ["55", "12", "52", "15"],
      answer: 3,
      explain: "p first points to a, then is re-pointed to b. *p = 5 therefore writes to b, leaving a as 1. Output is \"1\" followed by \"5\"."
    },
    {
      level: 2,
      q: "What happens when this code is compiled?",
      code: "const int k = 10;\nint main() {\n    int m = k * 2;\n    k = m;\n}",
      options: ["Compile error: assignment of a const variable", "It compiles and k becomes 20", "It compiles but crashes at run time", "It compiles and k stays 10"],
      answer: 0,
      explain: "Reading a const variable is fine (k * 2), but assigning to it is rejected by the compiler. const is checked at compile time, not at run time."
    },
    {
      level: 2,
      q: "What does this code print?",
      code: "map<string, int> m;\nm[\"a\"]++;\nm[\"a\"]++;\ncout << m[\"a\"] << \" \" << m.size();",
      options: ["1 2", "2 1", "2 2", "0 1"],
      answer: 1,
      explain: "m[\"a\"] creates the key with value 0 the first time, then ++ makes it 1 and 2. There is only one key, so size() is 1."
    },
    {
      level: 2,
      q: "What does this code print?",
      code: "vector<int> v{3, 1, 2};\nsort(v.begin(), v.end(), greater<int>());\nfor (int x : v) cout << x;",
      options: ["123", "312", "321", "213"],
      answer: 2,
      explain: "greater<int> as the comparator sorts in descending order, so the elements end up as 3, 2, 1."
    },
    {
      level: 2,
      q: "What does this code print?",
      code: "vector<int> v{4, 5, 6};\nauto it = find(v.begin(), v.end(), 6);\ncout << (it - v.begin());\ncout << (find(v.begin(), v.end(), 9) == v.end());",
      options: ["20", "31", "61", "21"],
      answer: 3,
      explain: "it - v.begin() is the index of the match (2). Searching for a missing value returns v.end(), so the comparison is true and prints 1."
    },
    {
      level: 2,
      q: "What does this code print?",
      code: "struct B { B() { cout << \"B\"; } ~B() { cout << \"b\"; } };\nstruct D : B {\n    D() { cout << \"D\"; }\n    ~D() { cout << \"d\"; }\n};\nint main() { D x; }",
      options: ["BDdb", "DBbd", "BDbd", "DBdb"],
      answer: 0,
      explain: "The base part is built first, then the derived part. Destruction runs in the opposite order: derived destructor first, then base."
    },
    {
      level: 2,
      q: "What does this code print?",
      code: "struct P {\n    int x;\n    P operator+(const P &o) const { return P{x + o.x}; }\n};\nint main() {\n    P a{2}, b{5};\n    P c = a + b + a;\n    cout << c.x;\n}",
      options: ["7", "9", "10", "Compile error"],
      answer: 1,
      explain: "a + b gives a P with x = 7, and adding a again gives 9. Chained uses of an overloaded + work just like with built-in types."
    },
    {
      level: 2,
      q: "What does this code print?",
      code: "int x = 1;\nif (true) {\n    int x = 2;\n    x++;\n}\ncout << x;",
      options: ["2", "3", "1", "Compile error"],
      answer: 2,
      explain: "The inner x is a separate variable that shadows the outer one inside the braces. Incrementing it does not touch the outer x, which is still 1."
    },
    {
      level: 2,
      q: "What does this code print?",
      code: "string s = \"abc\";\ns += \"de\";\ns.erase(0, 2);\ncout << s << s.size();",
      options: ["cde5", "de3", "abcde3", "cde3"],
      answer: 3,
      explain: "s becomes \"abcde\", then erase(0, 2) removes two characters from index 0, leaving \"cde\" with size 3."
    },
    {
      level: 2,
      q: "What does this code print?",
      code: "int next() {\n    static int n = 0;\n    return ++n;\n}\nint main() {\n    for (int i = 0; i < 3; i++) cout << next();\n}",
      options: ["123", "111", "012", "321"],
      answer: 0,
      explain: "A static local is initialised once and keeps its value between calls, so n counts 1, 2, 3."
    },
    {
      level: 2,
      q: "What does this code print?",
      code: "vector<int> v{1, 2, 3};\nfor (int x : v) x *= 2;\nfor (auto &y : v) y += 1;\nfor (int x : v) cout << x;",
      options: ["246", "234", "123", "357"],
      answer: 1,
      explain: "The first loop changes copies, so v is unchanged. The second uses references, so each element grows by 1, giving 2 3 4."
    },
    {
      level: 2,
      q: "What does this code print?",
      code: "int a = 7, b = 2;\ndouble d = a / b;\ncout << d;",
      options: ["3.5", "4", "3", "2.5"],
      answer: 2,
      explain: "a / b is integer division and gives 3 before the result is converted to double. To get 3.5, one operand must be a double first, e.g. (double)a / b."
    },

    /* ---- C++: Round 3 (hard), 15 questions ---- */
    {
      level: 3,
      q: "What does this code print?",
      code: "struct A {\n    virtual void f() { cout << \"A\"; }\n    void g() { f(); }\n};\nstruct B : A { void f() override { cout << \"B\"; } };\nint main() {\n    B b;\n    A *p = &b;\n    p->g();\n}",
      options: ["A", "B", "AB", "Compile error"],
      answer: 1,
      explain: "g() is inherited, but f() is virtual, so the call to f() inside g() is dispatched on the real object type (B). The pointer type A* does not matter."
    },
    {
      level: 3,
      q: "What does this code print?",
      code: "struct A { virtual void f() { cout << \"A\"; } };\nstruct B : A { void f() override { cout << \"B\"; } };\nint main() {\n    B b;\n    A a = b;\n    a.f();\n    A &r = b;\n    r.f();\n}",
      options: ["BB", "AA", "AB", "BA"],
      answer: 2,
      explain: "A a = b slices the object: only the A part is copied, so a really is an A and prints A. A reference keeps the real object, so virtual dispatch prints B."
    },
    {
      level: 3,
      q: "What does this code print?",
      code: "struct B { virtual ~B() { cout << \"~B \"; } };\nstruct D : B { ~D() { cout << \"~D \"; } };\nint main() {\n    B *p = new D;\n    delete p;\n}",
      options: ["~B", "~B ~D", "~D", "~D ~B"],
      answer: 3,
      explain: "Because the base destructor is virtual, deleting through B* runs ~D first and then ~B. Without virtual it would be undefined behaviour."
    },
    {
      level: 3,
      q: "What does this code print?",
      code: "struct M { M(int n) { cout << n; } };\nstruct H {\n    M a;\n    M b;\n    H() : b(2), a(1) {}\n};\nint main() { H h; }",
      options: ["12", "21", "1", "Compile error"],
      answer: 0,
      explain: "Members are initialised in the order they are declared in the class, not in the order written in the initializer list. So a (1) is built before b (2)."
    },
    {
      level: 3,
      q: "What does this code print?",
      code: "auto p = make_unique<int>(5);\nauto q = move(p);\ncout << (p == nullptr) << *q;",
      options: ["05", "15", "10", "Compile error"],
      answer: 1,
      explain: "unique_ptr cannot be copied but can be moved. After the move, p is empty (null, so the comparison prints 1) and q owns the int 5."
    },
    {
      level: 3,
      q: "What does this code print?",
      code: "auto a = make_shared<int>(1);\nauto b = a;\n{\n    auto c = a;\n    cout << a.use_count();\n}\ncout << a.use_count();",
      options: ["22", "31", "32", "33"],
      answer: 2,
      explain: "Inside the block a, b and c share ownership (count 3). When c goes out of scope the count drops to 2."
    },
    {
      level: 3,
      q: "What does this code print?",
      code: "int x = 1;\nauto f = [x] { return x; };\nauto g = [&x] { return x; };\nx = 5;\ncout << f() << g();",
      options: ["55", "11", "51", "15"],
      answer: 3,
      explain: "[x] copies x when the lambda is created, so f always returns 1. [&x] refers to the live variable, so g sees the new value 5."
    },
    {
      level: 3,
      q: "What does this code print?",
      code: "map<string, int> m;\nif (m[\"x\"] == 0) cout << \"zero \";\ncout << m.size() << \" \";\ncout << m.count(\"y\") << \" \" << m.size();",
      options: ["zero 1 0 1", "zero 0 0 0", "zero 1 1 2", "zero 1 0 2"],
      answer: 0,
      explain: "Reading m[\"x\"] inserts the key with value 0, so the size is 1. count() only looks and never inserts, so \"y\" is absent and the size stays 1."
    },
    {
      level: 3,
      q: "What does this code print?",
      code: "struct C {\n    static int n;\n    C() { n++; }\n};\nint C::n = 0;\nint main() {\n    C a, b;\n    { C c; }\n    C d;\n    cout << C::n;\n}",
      options: ["3", "4", "1", "0"],
      answer: 1,
      explain: "A static member is a single variable shared by all objects. Four objects are constructed (a, b, c, d) and nothing decrements it, so it ends at 4."
    },
    {
      level: 3,
      q: "What happens when this code is compiled?",
      code: "struct S {\n    int v = 1;\n    void inc() { v++; }\n    int get() const { return v; }\n};\nint main() {\n    const S s;\n    cout << s.get();\n    s.inc();\n}",
      options: ["It prints 1 and v becomes 2", "It compiles and prints 1 with no problem", "Compile error: inc() is not const but s is const", "Compile error: a const object needs a user-written constructor"],
      answer: 2,
      explain: "A const object can only call const member functions. get() is const and fine, but inc() may modify the object, so s.inc() is rejected."
    },
    {
      level: 3,
      q: "What does this code print?",
      code: "int x = 5;\nint &r = x;\nauto a = r;\na = 9;\nauto &b = r;\nb++;\ncout << x;",
      options: ["9", "5", "10", "6"],
      answer: 3,
      explain: "auto drops the reference, so a is an independent copy and a = 9 does not affect x. auto & keeps the reference, so b++ increments x from 5 to 6."
    },
    {
      level: 3,
      q: "What does this code print?",
      code: "int a = 1, b = 0;\nbool r = (a++ > 0 || b++ > 0);\ncout << r << a << b;",
      options: ["120", "121", "110", "020"],
      answer: 0,
      explain: "a++ > 0 is true (a becomes 2), so || short-circuits and b++ never runs. r is true (1), a is 2 and b is still 0."
    },
    {
      level: 3,
      q: "What does this code print?",
      code: "unsigned u = 1;\nint i = -2;\ncout << (i < u);",
      options: ["1", "0", "true", "Compile error"],
      answer: 1,
      explain: "When a signed and an unsigned int are compared, the signed one is converted to unsigned. -2 becomes a huge positive value, so i < u is false and prints 0."
    },
    {
      level: 3,
      q: "What happens when this code is compiled?",
      code: "template <class T>\nT add(T a, T b) { return a + b; }\nint main() {\n    cout << add(1, 2.5);\n}",
      options: ["It prints 3.5", "It prints 3", "Compile error: T is deduced as both int and double", "It prints 3.5 after a warning"],
      answer: 2,
      explain: "Template argument deduction must give the same T for both parameters, but 1 is int and 2.5 is double. The call fails to compile unless you write add<double>(1, 2.5)."
    },
    {
      level: 3,
      q: "What does this code print?",
      code: "vector<int> v{1, 2, 3, 4, 6};\nfor (auto it = v.begin(); it != v.end();) {\n    if (*it % 2 == 0) it = v.erase(it);\n    else ++it;\n}\nfor (int x : v) cout << x;",
      options: ["1346", "136", "246", "13"],
      answer: 3,
      explain: "erase() returns a valid iterator to the element after the removed one, so the loop can continue safely and removes every even number, leaving 1 and 3."
    }
  ],

  /* ===================== PYTHON ===================== */
  python: [
    /* ---- Python: Round 1 (easy), 15 questions ---- */
    {
      level: 1,
      q: "What does print(type(3 / 2)) display?",
      options: ["<class 'int'>", "<class 'double'>", "<class 'number'>", "<class 'float'>"],
      answer: 3,
      explain: "In Python 3 the / operator always performs true division and returns a float (1.5). Use // for floor division, which gives 1."
    },
    {
      level: 1,
      q: "What is the output of this code?",
      code: "print(len([1, 2, 3] * 2))",
      options: ["6", "3", "2", "A TypeError"],
      answer: 0,
      explain: "Multiplying a list by an integer repeats it, so [1, 2, 3] * 2 becomes [1, 2, 3, 1, 2, 3], which has length 6."
    },
    {
      level: 1,
      q: "Which of these data types is mutable?",
      options: ["tuple", "str", "int", "list"],
      answer: 3,
      explain: "Lists can be changed in place (append, remove, item assignment). Tuples, strings and integers are immutable: operations on them create new objects."
    },
    {
      level: 1,
      q: "What does this code print?",
      code: "x = \"hi\"\nprint(x * 3)",
      options: ["hihihi", "hi3", "hi hi hi", "An error"],
      answer: 0,
      explain: "Multiplying a string by an integer repeats it, so \"hi\" * 3 is \"hihihi\" (no spaces are added)."
    },
    {
      level: 1,
      q: "Which keyword is used to define a function in Python?",
      options: ["function", "func", "def", "define"],
      answer: 2,
      explain: "Functions are defined with def, for example: def add(a, b): return a + b"
    },
    {
      level: 1,
      q: "What is the value of 2 ** 3?",
      options: ["6", "8", "5", "9"],
      answer: 1,
      explain: "The ** operator is exponentiation: 2 ** 3 means 2 to the power 3, which is 8. The * operator is ordinary multiplication (2 * 3 = 6)."
    },
    {
      level: 1,
      q: "For a = [10, 20, 30, 40], what does a[1:3] return?",
      options: ["[10, 20, 30]", "[20, 30, 40]", "[20, 30]", "[10, 20]"],
      answer: 2,
      explain: "A slice a[start:stop] includes the start index but excludes the stop index. Indices 1 and 2 are 20 and 30, so the result is [20, 30]."
    },
    {
      level: 1,
      q: "Which statement block is used to handle exceptions in Python?",
      options: ["try / catch", "try / except", "do / rescue", "handle / error"],
      answer: 1,
      explain: "Python uses try / except (optionally with else and finally). 'catch' is the keyword used in languages such as Java, C++ and JavaScript."
    },
    {
      level: 1,
      q: "What does this code print?",
      code: "d = {\"a\": 1}\nprint(d.get(\"b\", 0))",
      options: ["None", "KeyError", "0", "1"],
      answer: 2,
      explain: "dict.get(key, default) returns the default value when the key is missing instead of raising a KeyError. Here \"b\" is not in d, so it returns 0."
    },
    {
      level: 1,
      q: "What is the role of indentation in Python?",
      options: ["It only makes code look neater", "It defines blocks of code", "It marks comments", "It is needed only for functions"],
      answer: 1,
      explain: "Python uses indentation (not braces) to group statements into blocks such as the body of an if, loop, function or class. Incorrect indentation causes an IndentationError or changes program behaviour."
    },
    {
      level: 1,
      q: "What is the output of this code?",
      code: "print(10 % 3)",
      options: ["1", "3", "0", "3.33"],
      answer: 0,
      explain: "% is the modulo (remainder) operator. 10 divided by 3 is 3 with remainder 1."
    },
    {
      level: 1,
      q: "Which of these is a valid Python variable name?",
      options: ["my-var", "my_var", "2name", "class"],
      answer: 1,
      explain: "Names may contain letters, digits and underscores but cannot start with a digit, contain hyphens, or be a reserved keyword such as class."
    },
    {
      level: 1,
      q: "What is the output of this code?",
      code: "print(int(\"42\") + 1)",
      options: ["421", "42", "43", "TypeError"],
      answer: 2,
      explain: "int(\"42\") converts the string to the number 42, so adding 1 gives 43. Without the conversion, \"42\" + 1 would raise a TypeError."
    },
    {
      level: 1,
      q: "What is the output of this code?",
      code: "print(list(range(1, 4)))",
      options: ["[1, 2, 3, 4]", "[0, 1, 2, 3]", "[1, 4]", "[1, 2, 3]"],
      answer: 3,
      explain: "range(start, stop) includes start but stops before stop, so range(1, 4) produces 1, 2, 3."
    },
    {
      level: 1,
      q: "What is the output of this code?",
      code: "print(bool(\"\"), bool(\"0\"))",
      options: ["False True", "False False", "True True", "True False"],
      answer: 0,
      explain: "An empty string is falsy, but any non-empty string is truthy, including \"0\". Only the empty string counts as False."
    },

    /* ---- Python: Round 2 (medium), 15 questions ---- */
    {
      level: 2,
      q: "What is the output of this code?",
      code: "s = \"a,b,,c\"\nprint(s.split(\",\"))",
      options: ["['a', 'b', 'c']", "['a', 'b', '', 'c']", "['a', 'b', ',', 'c']", "['a,b', 'c']"],
      answer: 1,
      explain: "split(\",\") splits at every comma, so two adjacent commas leave an empty string between them. Empty fields are not dropped."
    },
    {
      level: 2,
      q: "What is the output of this code?",
      code: "nums = [1, 2, 3, 4, 5, 6]\nprint(nums[::-2])",
      options: ["[1, 3, 5]", "[2, 4, 6]", "[6, 4, 2]", "[5, 3, 1]"],
      answer: 2,
      explain: "A negative step walks backwards from the end. Starting at 6 and stepping by 2 gives 6, 4, 2."
    },
    {
      level: 2,
      q: "What is the output of this code?",
      code: "print([x * x for x in range(6) if x % 2 == 0])",
      options: ["[0, 1, 4, 9, 16, 25]", "[1, 9, 25]", "[0, 4, 16, 36]", "[0, 4, 16]"],
      answer: 3,
      explain: "The condition keeps only even x (0, 2, 4), and each is squared, giving [0, 4, 16]. range(6) stops at 5."
    },
    {
      level: 2,
      q: "What is the output of this code?",
      code: "for n in [3, 5, 8, 9]:\n    if n % 2 == 0:\n        print(\"even\", n)\n        break\nelse:\n    print(\"none\")",
      options: ["even 8", "none", "even 3", "even 8 none"],
      answer: 0,
      explain: "The else clause of a loop runs only if the loop finishes without hitting break. Here break runs at 8, so only \"even 8\" is printed."
    },
    {
      level: 2,
      q: "What is the output of this code?",
      code: "def greet(name, greeting=\"Hi\", punct=\"!\"):\n    return f\"{greeting}, {name}{punct}\"\n\nprint(greet(\"Ann\", punct=\"?\"))",
      options: ["Hi, Ann!", "Hi, Ann?", "?, Ann!", "Ann, Hi?"],
      answer: 1,
      explain: "The keyword argument overrides only punct; greeting keeps its default \"Hi\"."
    },
    {
      level: 2,
      q: "What is the output of this code?",
      code: "x = 10\ndef f():\n    x = 5\n    return x\n\nprint(x, f())",
      options: ["5 5", "10 10", "10 5", "5 10"],
      answer: 2,
      explain: "Assigning to x inside f creates a new local variable, so the global x stays 10 while f() returns its local 5."
    },
    {
      level: 2,
      q: "What is the output of this code?",
      code: "words = [\"pear\", \"fig\", \"apple\", \"kiwi\"]\nprint(sorted(words, key=len))",
      options: ["['fig', 'kiwi', 'pear', 'apple']", "['apple', 'pear', 'kiwi', 'fig']", "['apple', 'fig', 'kiwi', 'pear']", "['fig', 'pear', 'kiwi', 'apple']"],
      answer: 3,
      explain: "Sorting by length puts 3-letter fig first, then the 4-letter words, then apple. sorted is stable, so pear stays before kiwi as in the original list."
    },
    {
      level: 2,
      q: "What is the output of this code?",
      code: "print(list(zip(\"abc\", [1, 2])))",
      options: ["[('a', 1), ('b', 2)]", "[('a', 1), ('b', 2), ('c', None)]", "[('a', 1), ('b', 2), 'c']", "ValueError"],
      answer: 0,
      explain: "zip stops when the shortest input runs out, so the unmatched \"c\" is dropped. It does not pad with None."
    },
    {
      level: 2,
      q: "What is the output of this code?",
      code: "print(list(enumerate([\"x\", \"y\"], start=1)))",
      options: ["[(0, 'x'), (1, 'y')]", "[(1, 'x'), (2, 'y')]", "[('x', 1), ('y', 2)]", "[(1, 'x'), (1, 'y')]"],
      answer: 1,
      explain: "enumerate yields (index, item) pairs, and start=1 makes the counting begin at 1 instead of 0."
    },
    {
      level: 2,
      q: "What is the output of this code?",
      code: "d = {c: i for i, c in enumerate(\"abca\")}\nprint(d)",
      options: ["{'a': 0, 'b': 1, 'c': 2}", "{'a': 0, 'b': 1, 'c': 2, 'a': 3}", "{'a': 3, 'b': 1, 'c': 2}", "{'a': 3, 'b': 1, 'c': 2, 'd': 3}"],
      answer: 2,
      explain: "Dictionary keys are unique, so the second \"a\" (index 3) overwrites the first value while the key keeps its original position."
    },
    {
      level: 2,
      q: "What is the output of this code?",
      code: "price = 3.14159\nprint(f\"{price:.2f}|{7:03d}\")",
      options: ["3.14159|7", "3.1|007", "3.14|7  ", "3.14|007"],
      answer: 3,
      explain: ".2f rounds to two decimal places and 03d pads the integer with zeros to width 3."
    },
    {
      level: 2,
      q: "What is the output of this code?",
      code: "a = {1, 2, 3}\nb = {2, 3, 4}\nprint(sorted(a ^ b))",
      options: ["[1, 4]", "[2, 3]", "[1, 2, 3, 4]", "[1]"],
      answer: 0,
      explain: "^ is symmetric difference: elements in exactly one of the sets. That is 1 (only in a) and 4 (only in b)."
    },
    {
      level: 2,
      q: "What is the output of this code?",
      code: "print([bool(x) for x in (0, \"\", [0], None)])",
      options: ["[False, False, False, False]", "[False, False, True, False]", "[False, False, True, True]", "[True, False, True, False]"],
      answer: 1,
      explain: "0, \"\" and None are falsy, but a list is truthy whenever it is non-empty, even if its only item is 0."
    },
    {
      level: 2,
      q: "What is the output of this code?",
      code: "words = [\"ab\", \"abc\", \"abcd\"]\nprint(list(map(str.upper, filter(lambda s: len(s) > 2, words))))",
      options: ["['AB']", "['AB', 'ABC', 'ABCD']", "['ABC', 'ABCD']", "['ABC']"],
      answer: 2,
      explain: "filter keeps the words longer than 2 characters (abc, abcd), and map then uppercases each of them."
    },
    {
      level: 2,
      q: "What is the output of this code?",
      code: "print(\"  Hello World \".strip().lower().replace(\"o\", \"0\"))",
      options: ["hello world", "hell0 world", "Hell0 W0rld", "hell0 w0rld"],
      answer: 3,
      explain: "strip() removes the surrounding spaces, lower() lowercases everything, and replace swaps every o for 0. Each call returns a new string."
    },

    /* ---- Python: Round 3 (hard), 15 questions ---- */
    {
      level: 3,
      q: "What is the output of this code?",
      code: "def add(x, lst=[]):\n    lst.append(x)\n    return lst\n\nadd(1)\nprint(add(2))",
      options: ["[1, 2]", "[2]", "[1]", "[]"],
      answer: 0,
      explain: "The default list is created once, when the function is defined, and shared by every call that omits it. The second call appends to the same list."
    },
    {
      level: 3,
      q: "What is the output of this code?",
      code: "fs = [lambda: i for i in range(3)]\nprint([f() for f in fs])",
      options: ["[0, 1, 2]", "[2, 2, 2]", "[0, 0, 0]", "[3, 3, 3]"],
      answer: 1,
      explain: "Closures look up i when called, not when created. After the loop, i is 2 for all three lambdas."
    },
    {
      level: 3,
      q: "What is the output of this code?",
      code: "a = [[1], [2]]\nb = a.copy()\nb[0].append(9)\nprint(a)",
      options: ["[[1], [2]]", "[[1], [2], 9]", "[[1, 9], [2]]", "[[1, 9], [2, 9]]"],
      answer: 2,
      explain: "copy() makes a shallow copy: the outer list is new, but the inner lists are shared. Mutating b[0] therefore also changes a[0]."
    },
    {
      level: 3,
      q: "What is the output of this code?",
      code: "a = [1, 2]\nb = a\nb += [3]\nc = a + [4]\nprint(a, a is b)",
      options: ["[1, 2] False", "[1, 2, 3, 4] True", "[1, 2, 3] False", "[1, 2, 3] True"],
      answer: 3,
      explain: "+= on a list extends it in place, so a and b are the same object and a changes. a + [4] builds a new list for c and leaves a alone."
    },
    {
      level: 3,
      q: "What is the output of this code?",
      code: "g = (x * 2 for x in range(3))\nprint(list(g), list(g))",
      options: ["[0, 2, 4] []", "[0, 2, 4] [0, 2, 4]", "[] []", "[0, 2, 4] [0, 1, 2]"],
      answer: 0,
      explain: "A generator can be consumed only once. The first list() exhausts it, so the second gets nothing."
    },
    {
      level: 3,
      q: "What is the output of this code?",
      code: "def deco(f):\n    def wrapper(*args, **kwargs):\n        return f(*args, **kwargs) * 2\n    return wrapper\n\n@deco\ndef add(a, b=1):\n    return a + b\n\nprint(add(3, b=2))",
      options: ["5", "10", "6", "7"],
      answer: 1,
      explain: "@deco replaces add with wrapper. It calls the original add(3, b=2) = 5 and doubles the result to 10."
    },
    {
      level: 3,
      q: "What is the output of this code?",
      code: "def f():\n    x = 1\n    try:\n        return x\n    finally:\n        x = 2\n\nprint(f())",
      options: ["2", "None", "1", "3"],
      answer: 2,
      explain: "The return value is evaluated before finally runs. Changing x afterwards in finally does not alter the value already being returned."
    },
    {
      level: 3,
      q: "What is the output of this code?",
      code: "def show(a, *args, **kw):\n    print(a, args, kw)\n\nshow(1, 2, 3, x=4)",
      options: ["1 [2, 3] {'x': 4}", "1 (2, 3, 4) {}", "1 (2, 3) (4,)", "1 (2, 3) {'x': 4}"],
      answer: 3,
      explain: "Extra positional arguments are gathered into a tuple (*args) and extra keyword arguments into a dict (**kw)."
    },
    {
      level: 3,
      q: "What is the output of this code?",
      code: "class A:\n    n = 0\n\na = A()\na.n += 1\nprint(A.n, a.n)",
      options: ["0 1", "1 1", "0 0", "1 0"],
      answer: 0,
      explain: "a.n += 1 reads the class attribute (0) and then creates a new instance attribute n = 1 on a. The class attribute A.n is untouched."
    },
    {
      level: 3,
      q: "What is the output of this code?",
      code: "class P:\n    def __str__(self):\n        return \"str\"\n    def __repr__(self):\n        return \"repr\"\n\nprint([P()])",
      options: ["[str]", "[repr]", "[<P object>]", "[P]"],
      answer: 1,
      explain: "print on a list shows its items using repr(), not str(). So the item appears as repr."
    },
    {
      level: 3,
      q: "What is the output of this code?",
      code: "class A:\n    def hi(self): return \"A\"\nclass B(A):\n    pass\nclass C(A):\n    def hi(self): return \"C\"\nclass D(B, C):\n    pass\n\nprint(D().hi())",
      options: ["A", "B", "C", "AttributeError"],
      answer: 2,
      explain: "The MRO of D is D, B, C, A. B does not define hi, so the search continues to C before reaching A."
    },
    {
      level: 3,
      q: "What is the output of this code?",
      code: "def counter():\n    n = 0\n    def inc():\n        nonlocal n\n        n += 1\n        return n\n    return inc\n\nc = counter()\nc()\nprint(c(), counter()())",
      options: ["2 2", "1 1", "3 1", "2 1"],
      answer: 3,
      explain: "Each counter() call creates its own n. c keeps its own n, which reaches 2 on the second call, while a fresh counter starts at 1."
    },
    {
      level: 3,
      q: "What is the output of this code?",
      code: "print(1 < 2 < 3, 3 > 2 > 2, 1 == 1 < 2)",
      options: ["True False True", "True True True", "False False True", "True False False"],
      answer: 0,
      explain: "A chained comparison means each pair is tested with and. 3 > 2 > 2 is 3 > 2 and 2 > 2, which is False. 1 == 1 < 2 is True."
    },
    {
      level: 3,
      q: "What is the output of this code?",
      code: "print(round(2.5), round(3.5), -7 // 2, -7 % 3)",
      options: ["3 4 -3 1", "2 4 -4 2", "2 4 -3 -1", "3 3 -4 2"],
      answer: 1,
      explain: "round() uses round-half-to-even, so 2.5 gives 2 and 3.5 gives 4. // floors toward negative infinity (-4), and % takes the sign of the divisor, giving 2."
    },
    {
      level: 3,
      q: "What is the output of this code?",
      code: "data = [(\"b\", 1), (\"a\", 1), (\"c\", 0)]\nprint(sorted(data, key=lambda t: t[1]))",
      options: ["[('c', 0), ('a', 1), ('b', 1)]", "[('a', 1), ('b', 1), ('c', 0)]", "[('c', 0), ('b', 1), ('a', 1)]", "[('b', 1), ('a', 1), ('c', 0)]"],
      answer: 2,
      explain: "Only the number is used as the key. sorted is stable, so ties keep their original order: b stays before a."
    }
  ],

  /* ===================== JAVA ===================== */
  java: [
    /* ---- Java: Round 1 (easy), 15 questions ---- */
    {
      level: 1,
      q: "Which method signature is the standard entry point of a Java program?",
      options: ["public static void main(String[] args)", "public void main()", "static int start(String[] args)", "public static void run(String[] args)"],
      answer: 0,
      explain: "The JVM looks for public static void main(String[] args) to start execution. It must be public (accessible), static (callable without an object) and return void."
    },
    {
      level: 1,
      q: "Which of the following is NOT a primitive data type in Java?",
      options: ["int", "boolean", "char", "String"],
      answer: 3,
      explain: "String is a class (a reference type). The eight primitives are byte, short, int, long, float, double, char and boolean."
    },
    {
      level: 1,
      q: "Which keyword is used to inherit from a class in Java?",
      options: ["implements", "inherits", "extends", "super"],
      answer: 2,
      explain: "A class inherits from another class with extends. implements is used for interfaces, and super refers to the parent class inside a subclass."
    },
    {
      level: 1,
      q: "What does this code print?",
      code: "String s1 = new String(\"a\");\nString s2 = new String(\"a\");\nSystem.out.println(s1 == s2);",
      options: ["true", "false", "A compile error", "A runtime exception"],
      answer: 1,
      explain: "== compares object references, and new String creates two separate objects, so the result is false. To compare contents use s1.equals(s2), which would be true."
    },
    {
      level: 1,
      q: "What does JVM stand for?",
      options: ["Java Variable Manager", "Java Visual Module", "Java Virtual Machine", "Java Version Manager"],
      answer: 2,
      explain: "The Java Virtual Machine runs compiled bytecode. That is why the same compiled Java program can run on any operating system that has a JVM."
    },
    {
      level: 1,
      q: "Which collection does not allow duplicate elements?",
      options: ["ArrayList", "LinkedList", "Vector", "HashSet"],
      answer: 3,
      explain: "A Set holds unique elements; adding a value that is already present is ignored. Lists (ArrayList, LinkedList, Vector) allow duplicates."
    },
    {
      level: 1,
      q: "What does declaring a variable with the final keyword mean?",
      options: ["It can be assigned only once", "It is stored in a file", "It is shared between all objects", "It is hidden from other classes"],
      answer: 0,
      explain: "A final variable cannot be reassigned after it is initialised. (For a final object reference, the reference is fixed but the object's internal state can still change.)"
    },
    {
      level: 1,
      q: "Can a Java class extend more than one class directly?",
      options: ["Yes, using a comma-separated list", "Yes, but only abstract classes", "No, but it can implement multiple interfaces", "No, and it cannot implement interfaces either"],
      answer: 2,
      explain: "Java allows single inheritance of classes to avoid ambiguity problems, but a class can implement any number of interfaces to get multiple types."
    },
    {
      level: 1,
      q: "Which of these is a checked exception that must be caught or declared?",
      options: ["NullPointerException", "ArithmeticException", "IOException", "ArrayIndexOutOfBoundsException"],
      answer: 2,
      explain: "IOException is a checked exception: the compiler forces you to handle it with try/catch or declare it with throws. The others are unchecked (runtime) exceptions."
    },
    {
      level: 1,
      q: "What does Java's garbage collector do?",
      options: ["Deletes unused source files", "Frees memory of objects that are no longer reachable", "Compresses the compiled .class files", "Removes unused import statements"],
      answer: 1,
      explain: "The garbage collector automatically reclaims heap memory used by objects that no longer have any references, so you do not free memory manually as in C."
    },
    {
      level: 1,
      q: "Which loop is guaranteed to run its body at least once?",
      options: ["for", "do-while", "while", "for-each"],
      answer: 1,
      explain: "A do-while loop checks its condition after the body, so the body always executes once. for and while check first and may never run."
    },
    {
      level: 1,
      q: "An array is created with int[] a = new int[5]; What is the index of its last element?",
      options: ["5", "6", "4", "It depends on the values stored"],
      answer: 2,
      explain: "Array indexes start at 0, so a length-5 array has indexes 0 to 4. Accessing a[5] throws ArrayIndexOutOfBoundsException."
    },
    {
      level: 1,
      q: "Which operator gives the remainder of a division in Java?",
      options: ["/", "\\", "mod", "%"],
      answer: 3,
      explain: "The % operator returns the remainder, e.g. 17 % 5 is 2. / does division and Java has no mod operator."
    },
    {
      level: 1,
      q: "What is the default value of an int field in a class when you do not assign it?",
      options: ["0", "null", "1", "Undefined (compile error)"],
      answer: 0,
      explain: "Fields get default values: 0 for numeric types, false for boolean and null for references. Local variables, however, get no default and must be assigned before use."
    },
    {
      level: 1,
      q: "Which expression correctly gets the number of characters in a String variable s?",
      options: ["s.length", "s.length()", "s.size()", "length(s)"],
      answer: 1,
      explain: "String has a length() method (with parentheses). Arrays use the field length without parentheses, and collections use size()."
    },

    /* ---- Java: Round 2 (medium), 15 questions ---- */
    {
      level: 2,
      q: "What does this code print?",
      code: "String s = \"Hello\";\nSystem.out.println(s.substring(1, 3) + s.charAt(4));",
      options: ["ell", "Helo", "elo", "ello"],
      answer: 2,
      explain: "substring(1, 3) takes indexes 1 and 2 (end is exclusive) giving \"el\", and charAt(4) is 'o', so the result is \"elo\"."
    },
    {
      level: 2,
      q: "What does this code print?",
      code: "int x = 7 / 2;\ndouble y = 7 / 2;\ndouble z = 7 / 2.0;\nSystem.out.println(x + \" \" + y + \" \" + z);",
      options: ["3 3.5 3.5", "3.5 3.5 3.5", "3 3 3.5", "3 3.0 3.5"],
      answer: 3,
      explain: "7 / 2 is integer division (3) even when stored in a double, giving 3.0. Only 7 / 2.0 uses floating-point division."
    },
    {
      level: 2,
      q: "What does this code print?",
      code: "int[] a = {1, 2, 3};\nfor (int n : a) {\n    n = n * 2;\n}\nSystem.out.println(a[0] + \",\" + a[1] + \",\" + a[2]);",
      options: ["1,2,3", "2,4,6", "1,4,6", "2,2,3"],
      answer: 0,
      explain: "In an enhanced for loop, n is a copy of each element, so changing it does not modify the array."
    },
    {
      level: 2,
      q: "What does this code print?",
      code: "List<Integer> l = new ArrayList<>(List.of(10, 20, 30));\nl.remove(1);\nl.remove(Integer.valueOf(10));\nSystem.out.println(l);",
      options: ["[20, 30]", "[30]", "[10, 30]", "[20]"],
      answer: 1,
      explain: "remove(1) with an int removes the element at index 1 (20). remove(Integer.valueOf(10)) removes the value 10. Only 30 is left."
    },
    {
      level: 2,
      q: "What does this code print?",
      code: "int n = 5;\nString r = n > 3 ? (n > 4 ? \"A\" : \"B\") : \"C\";\nSystem.out.println(r);",
      options: ["B", "C", "A", "AB"],
      answer: 2,
      explain: "n > 3 is true, so the inner ternary runs; n > 4 is also true, giving \"A\"."
    },
    {
      level: 2,
      q: "What does this code print?",
      code: "int d = 2;\nswitch (d) {\n    case 1: System.out.print(\"a\");\n    case 2: System.out.print(\"b\");\n    case 3: System.out.print(\"c\"); break;\n    default: System.out.print(\"d\");\n}",
      options: ["b", "bcd", "abc", "bc"],
      answer: 3,
      explain: "Without break, execution falls through into the following cases. It starts at case 2, prints b, falls into case 3, prints c, then breaks."
    },
    {
      level: 2,
      q: "What does this code print?",
      code: "Set<String> s = new HashSet<>();\ns.add(\"a\");\ns.add(\"b\");\ns.add(\"a\");\nSystem.out.println(s.size() + \" \" + s.contains(\"b\"));",
      options: ["2 true", "3 true", "2 false", "3 false"],
      answer: 0,
      explain: "A Set ignores duplicates, so the second add(\"a\") changes nothing and the size is 2."
    },
    {
      level: 2,
      q: "What does this code print?",
      code: "Map<String, Integer> m = new HashMap<>();\nm.put(\"x\", 1);\nm.put(\"x\", 2);\nm.put(\"y\", 3);\nSystem.out.println(m.size() + \" \" + m.get(\"x\") + \" \" + m.get(\"z\"));",
      options: ["3 1 null", "2 2 null", "2 1 0", "2 2 0"],
      answer: 1,
      explain: "Putting an existing key replaces its value, so there are 2 entries and x maps to 2. get on a missing key returns null, not 0."
    },
    {
      level: 2,
      q: "What does this code print?",
      code: "class Counter {\n    static int total = 0;\n    int mine = 0;\n    Counter() { total++; mine++; }\n}\n// in main:\nCounter a = new Counter();\nCounter b = new Counter();\nCounter c = new Counter();\nSystem.out.println(Counter.total + \" \" + c.mine);",
      options: ["3 3", "1 1", "3 1", "1 3"],
      answer: 2,
      explain: "static total is shared by all objects and was incremented three times. mine is per object, so c.mine is 1."
    },
    {
      level: 2,
      q: "Which overload is called and printed?",
      code: "static void show(long x)   { System.out.println(\"long\"); }\nstatic void show(double x) { System.out.println(\"double\"); }\nstatic void show(Object x) { System.out.println(\"Object\"); }\n// in main:\nshow(5);",
      options: ["double", "Object", "int", "long"],
      answer: 3,
      explain: "Java prefers widening a primitive (int to long) over boxing to Integer. Among widening options, long is the closest match to int."
    },
    {
      level: 2,
      q: "What does this code print?",
      code: "try {\n    int[] a = new int[2];\n    a[2] = 1;\n    System.out.print(\"A\");\n} catch (ArrayIndexOutOfBoundsException e) {\n    System.out.print(\"B\");\n} finally {\n    System.out.print(\"C\");\n}\nSystem.out.print(\"D\");",
      options: ["BCD", "ACD", "BC", "ABCD"],
      answer: 0,
      explain: "Index 2 is out of bounds for length 2, so A is skipped, the catch prints B, finally always prints C, and the program continues with D."
    },
    {
      level: 2,
      q: "What does this code print?",
      code: "int i = (int) 3.99;\nint j = (int) -3.99;\nSystem.out.println(i + \" \" + j);",
      options: ["4 -4", "3 -3", "3 -4", "4 -3"],
      answer: 1,
      explain: "Casting a double to int truncates toward zero; it does not round. So 3.99 becomes 3 and -3.99 becomes -3."
    },
    {
      level: 2,
      q: "What does this code print?",
      code: "int sum = 0;\nfor (int i = 1; i <= 10; i++) {\n    if (i % 3 == 0) continue;\n    if (i > 8) break;\n    sum += i;\n}\nSystem.out.println(sum);",
      options: ["55", "30", "27", "19"],
      answer: 2,
      explain: "Multiples of 3 are skipped; 9 is skipped by continue and then 10 triggers break. Added values are 1+2+4+5+7+8 = 27."
    },
    {
      level: 2,
      q: "What happens when this code is compiled?",
      code: "class Account {\n    private int balance = 5;\n}\npublic class Main {\n    public static void main(String[] args) {\n        Account a = new Account();\n        System.out.println(a.balance);\n    }\n}",
      options: ["It prints 5", "It prints 0", "It compiles but throws an exception at runtime", "Compile error: balance has private access in Account"],
      answer: 3,
      explain: "A private field is accessible only inside its own class. Another top-level class cannot read it directly, so javac rejects the code; a getter method is needed."
    },
    {
      level: 2,
      q: "What does this code print?",
      code: "class P {\n    String n; int a;\n    P() { this(\"x\", 1); }\n    P(String n, int a) { this.n = n; this.a = a; }\n}\n// in main:\nP p = new P();\nSystem.out.println(p.n + p.a);",
      options: ["x1", "null0", "x0", "Compile error"],
      answer: 0,
      explain: "this(\"x\", 1) calls the other constructor from within the no-arg one, so the fields are set to \"x\" and 1."
    },

    /* ---- Java: Round 3 (hard), 15 questions ---- */
    {
      level: 3,
      q: "What does this code print?",
      code: "String a = \"hi\";\nString b = \"hi\";\nString c = new String(\"hi\");\nSystem.out.println((a == b) + \" \" + (a == c) + \" \" + (a == c.intern()));",
      options: ["true true true", "false false true", "true false false", "true false true"],
      answer: 3,
      explain: "Identical literals share one pooled object, so a == b. new String always makes a fresh object, so a == c is false. intern() returns the pooled instance, which is a."
    },
    {
      level: 3,
      q: "What does this code print?",
      code: "Integer a = 127, b = 127;\nInteger c = 128, d = 128;\nSystem.out.println((a == b) + \" \" + (c == d) + \" \" + c.equals(d));",
      options: ["true false true", "true true true", "false false true", "true false false"],
      answer: 0,
      explain: "Autoboxing caches Integer objects from -128 to 127, so a == b compares the same object. 128 creates two separate objects, so == is false, but equals compares values."
    },
    {
      level: 3,
      q: "What does this code print?",
      code: "static void change(StringBuilder sb, String s, int n) {\n    sb.append(\"!\");\n    s = s + \"?\";\n    n++;\n    sb = new StringBuilder(\"new\");\n}\n// main:\nStringBuilder sb = new StringBuilder(\"hi\");\nString s = \"hi\"; int n = 1;\nchange(sb, s, n);\nSystem.out.println(sb + \" \" + s + \" \" + n);",
      options: ["new hi 1", "hi! hi 1", "hi! hi? 2", "hi hi 1"],
      answer: 1,
      explain: "Java passes copies of references. append mutates the shared object, but reassigning sb, s or n inside the method only changes the local copies."
    },
    {
      level: 3,
      q: "What does this code print?",
      code: "class A { void f(Object o) { System.out.print(\"A-obj\"); } }\nclass B extends A { void f(String s) { System.out.print(\"B-str\"); } }\n// main:\nA x = new B();\nx.f(\"s\");",
      options: ["B-str", "A-objB-str", "A-obj", "Compile error"],
      answer: 2,
      explain: "B.f(String) has a different parameter type, so it overloads rather than overrides. The compiler picks f(Object) from A's declared type, and no override exists to redirect it."
    },
    {
      level: 3,
      q: "What does this code print?",
      code: "class Base {\n    static { System.out.print(1); }\n    { System.out.print(2); }\n    Base() { System.out.print(3); }\n}\nclass Derived extends Base {\n    static { System.out.print(4); }\n    { System.out.print(5); }\n    Derived() { System.out.print(6); }\n}\n// main:\nnew Derived();\nnew Derived();",
      options: ["1234561234", "1425362536", "1423564235", "1423562356"],
      answer: 3,
      explain: "Static blocks run once, parent first (1, 4). For each object: parent instance block and constructor (2, 3), then child instance block and constructor (5, 6). The second object skips the static blocks."
    },
    {
      level: 3,
      q: "What does this code print?",
      code: "static int f() {\n    int x = 1;\n    try {\n        return x;\n    } finally {\n        x = 5;\n        System.out.print(\"F\");\n    }\n}\n// main:\nSystem.out.println(f());",
      options: ["F1", "F5", "1F", "1"],
      answer: 0,
      explain: "The return value (1) is saved before finally runs. finally prints F and changes x, but the already saved value 1 is returned. The println prints after f() finishes."
    },
    {
      level: 3,
      q: "Which of these methods fails to compile?",
      code: "static void a() { throw new IllegalStateException(\"x\"); }\nstatic void b() { throw new Exception(\"y\"); }\nstatic void c() throws Exception { throw new Exception(\"z\"); }",
      options: ["Only a", "Only b", "Only c", "a and b"],
      answer: 1,
      explain: "Exception is a checked exception, so b must catch it or declare throws; it does neither. IllegalStateException is unchecked, and c declares throws Exception."
    },
    {
      level: 3,
      q: "What does this code print?",
      code: "String s = \"abc\";\ns.toUpperCase();\ns.concat(\"d\");\nString t = s.replace('a', 'x');\nSystem.out.println(s + \" \" + t);",
      options: ["ABCd xbc", "ABCd Xbc", "abc xbc", "abcd xbcd"],
      answer: 2,
      explain: "Strings are immutable: toUpperCase, concat and replace return new Strings and never change s. The first two results were discarded, so s is still \"abc\"."
    },
    {
      level: 3,
      q: "What does this code print?",
      code: "class P {\n    int id;\n    P(int id) { this.id = id; }\n    @Override public int hashCode() { return id; }\n}\n// main:\nSet<P> set = new HashSet<>();\nset.add(new P(1));\nset.add(new P(1));\nSystem.out.println(set.size());",
      options: ["1", "0", "Compile error", "2"],
      answer: 3,
      explain: "Equal hash codes only send both objects to the same bucket. Without an equals override they are compared by identity and so are different elements. Overriding both equals and hashCode gives 1."
    },
    {
      level: 3,
      q: "What does this code print?",
      code: "interface Greeter {\n    default String hi() { return \"default\"; }\n}\nclass Fr implements Greeter {\n    public String hi() { return \"bonjour\"; }\n}\nclass En implements Greeter { }\n// main:\nSystem.out.println(new Fr().hi() + \" \" + new En().hi());",
      options: ["bonjour default", "default default", "bonjour bonjour", "Compile error: En must implement hi()"],
      answer: 0,
      explain: "A default method supplies an implementation that classes may override (Fr) or inherit unchanged (En). En needs no hi() of its own."
    },
    {
      level: 3,
      q: "What does this code print?",
      code: "abstract class Animal {\n    Animal() { System.out.print(\"A \"); sound(); }\n    abstract void sound();\n}\nclass Dog extends Animal {\n    String s = \"woof\";\n    void sound() { System.out.print(s); }\n}\n// main:\nnew Dog();",
      options: ["A woof", "A null", "A ", "Compile error"],
      answer: 1,
      explain: "The parent constructor runs before Dog's field initialisers, so s is still null when the overridden sound() is called from it. Calling overridable methods in constructors is risky."
    },
    {
      level: 3,
      q: "What does this code print?",
      code: "List<String> a = new ArrayList<>();\nList<Integer> b = new ArrayList<>();\nSystem.out.println(a.getClass() == b.getClass());",
      options: ["false", "Compile error: incompatible types", "true", "It depends on the JVM"],
      answer: 2,
      explain: "Generics are erased at compile time, so both lists are plain ArrayList objects at runtime and share the same class."
    },
    {
      level: 3,
      q: "What does this code print?",
      code: "int big = Integer.MAX_VALUE;\nlong r = big + 1;\nSystem.out.println(r);",
      options: ["2147483648", "2147483647", "Compile error", "-2147483648"],
      answer: 3,
      explain: "big + 1 is computed in int arithmetic and wraps around to Integer.MIN_VALUE before being widened to long. Writing big + 1L would give 2147483648."
    },
    {
      level: 3,
      q: "What does this code print?",
      code: "byte b = 120;\nb += 10;\nchar c = 'a';\nc += 2;\nSystem.out.println(b + \" \" + c);",
      options: ["-126 c", "130 c", "-126 99", "130 99"],
      answer: 0,
      explain: "Compound assignment includes an implicit cast: (byte)(120 + 10) wraps to -126. c becomes 'c', and printing a char variable in string concatenation shows the character, not the number."
    },
    {
      level: 3,
      q: "What does this code print?",
      code: "int i = 0;\nboolean r1 = (i++ > 0) && (i++ > 0);\nboolean r2 = (i++ > 5) & (i++ > 0);\nSystem.out.println(i + \" \" + r1 + \" \" + r2);",
      options: ["4 false false", "3 false false", "2 false true", "3 false true"],
      answer: 1,
      explain: "&& short-circuits: the first i++ makes i 1 and the right side is skipped. The non-short-circuit & evaluates both sides, so i reaches 3. The results are false and false."
    }
  ],

  /* ===================== JAVASCRIPT ===================== */
  javascript: [
    /* ---- JavaScript: Round 1 (easy), 15 questions ---- */
    {
      level: 1,
      q: "What does typeof null return?",
      options: ["\"null\"", "\"undefined\"", "\"object\"", "\"number\""],
      answer: 2,
      explain: "typeof null returns \"object\". This is a well-known historical quirk of JavaScript; null is actually a primitive value."
    },
    {
      level: 1,
      q: "What does this code print?",
      code: "console.log(0.1 + 0.2 === 0.3);",
      options: ["false", "true", "undefined", "NaN"],
      answer: 0,
      explain: "Numbers are stored as binary floating point, so 0.1 + 0.2 is 0.30000000000000004, not exactly 0.3. Compare with a small tolerance instead, e.g. Math.abs(a - b) < Number.EPSILON."
    },
    {
      level: 1,
      q: "What is the main difference between let and var?",
      options: ["let can only hold numbers", "var is block-scoped, let is not", "let is block-scoped, var is function-scoped", "There is no difference"],
      answer: 2,
      explain: "let (and const) are block-scoped: they exist only inside the nearest { }. var is function-scoped and is hoisted, which can cause surprising bugs."
    },
    {
      level: 1,
      q: "What does this code output?",
      code: "console.log([1, 2, 3].map(x => x * 2));",
      options: ["[2, 4, 6]", "[1, 2, 3]", "6", "[1, 4, 9]"],
      answer: 0,
      explain: "map() builds a new array by applying the function to every element, so each number is doubled: [2, 4, 6]. The original array is unchanged."
    },
    {
      level: 1,
      q: "What is the difference between == and === in JavaScript?",
      options: ["There is none", "=== checks type and value, == converts types first", "== is faster and always preferred", "=== works only on strings"],
      answer: 1,
      explain: "=== is strict equality (no type conversion), while == converts types before comparing, so 5 == \"5\" is true but 5 === \"5\" is false. Using === avoids many bugs."
    },
    {
      level: 1,
      q: "What does this code print?",
      code: "console.log(\"5\" + 3);",
      options: ["8", "NaN", "An error", "\"53\""],
      answer: 3,
      explain: "When one operand of + is a string, JavaScript converts the other to a string and concatenates, giving \"53\". With - (\"5\" - 3) the string would be converted to a number instead and give 2."
    },
    {
      level: 1,
      q: "What does JSON.stringify(obj) do?",
      options: ["Converts a JSON string to an object", "Converts a JavaScript value into a JSON string", "Deletes the object", "Prints the object in the console"],
      answer: 1,
      explain: "JSON.stringify turns a JavaScript object or array into a JSON-formatted string (useful for sending data or saving it). JSON.parse does the reverse."
    },
    {
      level: 1,
      q: "What is a Promise in JavaScript?",
      options: ["A guarantee that code runs faster", "A way to define a class", "A loop that never ends", "An object representing the eventual result of an asynchronous operation"],
      answer: 3,
      explain: "A Promise represents a value that will be available later (pending, then fulfilled or rejected). You consume it with .then()/.catch() or with async/await."
    },
    {
      level: 1,
      q: "Which array method adds an element to the end of the array?",
      options: ["push()", "pop()", "shift()", "unshift()"],
      answer: 0,
      explain: "push() appends to the end. pop() removes the last element, shift() removes the first, and unshift() adds to the beginning."
    },
    {
      level: 1,
      q: "What does declaring a variable with const guarantee?",
      options: ["The value is deeply frozen and can never change", "The variable cannot be reassigned, but an object's contents can still be changed", "The variable is global", "The variable is deleted after use"],
      answer: 1,
      explain: "const prevents reassigning the variable itself. If it holds an object or array, you can still change its properties or elements (use Object.freeze to prevent that)."
    },
    {
      level: 1,
      q: "Which expression gives the number of items in the array arr?",
      options: ["arr.length", "arr.size()", "arr.count", "length(arr)"],
      answer: 0,
      explain: "Arrays have a length property (no parentheses). size() and count are not array members in JavaScript."
    },
    {
      level: 1,
      q: "What does this code print?",
      code: "console.log(10 % 3);",
      options: ["3", "1", "3.33", "0"],
      answer: 1,
      explain: "The % operator returns the remainder after division. 10 divided by 3 is 3 with a remainder of 1."
    },
    {
      level: 1,
      q: "What does this code print?",
      code: "const s = \"hello\";\nconsole.log(s.length, s[1]);",
      options: ["4 h", "5 h", "5 e", "5 l"],
      answer: 2,
      explain: "A string has 5 characters, and indexing starts at 0, so s[1] is the second character, \"e\"."
    },
    {
      level: 1,
      q: "What does this code print?",
      code: "console.log(Math.floor(4.9), Math.ceil(4.1));",
      options: ["5 5", "4 4", "5 4", "4 5"],
      answer: 3,
      explain: "Math.floor always rounds down (4.9 becomes 4) and Math.ceil always rounds up (4.1 becomes 5). Neither rounds to the nearest value."
    },
    {
      level: 1,
      q: "Which loop always runs its body at least once, even if the condition is false at the start?",
      options: ["for", "do...while", "while", "for...of"],
      answer: 1,
      explain: "do...while checks its condition after running the body, so the body executes once before the first test. while and for check first."
    },

    /* ---- JavaScript: Round 2 (medium), 15 questions ---- */
    {
      level: 2,
      q: "What does this code print?",
      code: "const nums = [1, 2, 3, 4];\nconsole.log(nums.reduce((acc, n) => acc + n, 10));",
      options: ["10", "24", "20", "15"],
      answer: 2,
      explain: "reduce starts the accumulator at the initial value 10 and adds 1+2+3+4, giving 20. Without the initial value it would start from the first element."
    },
    {
      level: 2,
      q: "What does this code print?",
      code: "const words = [\"hi\", \"hello\", \"hey\", \"greetings\"];\nconst r = words.filter(w => w.length > 2).map(w => w.length);\nconsole.log(r.join(\"-\"));",
      options: ["2-5-3-9", "5-9", "5-3-9-4", "5-3-9"],
      answer: 3,
      explain: "filter keeps words longer than 2 characters (hello, hey, greetings), then map turns them into lengths 5, 3 and 9. \"hi\" is removed because its length is exactly 2."
    },
    {
      level: 2,
      q: "What does this code print?",
      code: "const a = [1, 2, 3, 4, 5];\nconst removed = a.splice(1, 2);\nconsole.log(removed.join(), a.join());",
      options: ["2,3 1,4,5", "2,3 1,2,3,4,5", "1,2 3,4,5", "1,4,5 2,3"],
      answer: 0,
      explain: "splice(start, count) removes elements from the original array and returns them: it removed 2 and 3 starting at index 1. slice would leave the original untouched, splice mutates it."
    },
    {
      level: 2,
      q: "What does this code print?",
      code: "console.log([3, 20, 100].sort().join());",
      options: ["3,20,100", "20,100,3", "100,20,3", "3,100,20"],
      answer: 2,
      explain: "Without a compare function, sort converts items to strings and sorts alphabetically, so \"100\" < \"20\" < \"3\". Use sort((a, b) => a - b) for numeric order."
    },
    {
      level: 2,
      q: "What does this code print?",
      code: "const item = \"pen\";\nconst qty = 2;\nconsole.log(`${qty} ${item}${qty > 1 ? \"s\" : \"\"}: ${qty * 1.5}`);",
      options: ["2 pen: 3", "2 pens: 1.5", "2 pens: 3.5", "2 pens: 3"],
      answer: 3,
      explain: "Template literals evaluate any expression inside ${}. qty > 1 is true so \"s\" is added, and 2 * 1.5 is 3."
    },
    {
      level: 2,
      q: "What does this code print?",
      code: "const user = { name: \"Ann\", age: 30 };\nconst { name: n, city = \"Paris\", age } = user;\nconsole.log(n, city, age);",
      options: ["Ann Paris 30", "Ann undefined 30", "name Paris age", "n Paris 30"],
      answer: 0,
      explain: "name: n renames the variable to n, and city = \"Paris\" supplies a default because user has no city property. age is taken as-is."
    },
    {
      level: 2,
      q: "What does this code print?",
      code: "function f(a, ...rest) {\n  return rest.length;\n}\nconsole.log(f(1, 2, 3, 4), f(1));",
      options: ["4 1", "3 0", "3 undefined", "4 0"],
      answer: 1,
      explain: "The rest parameter collects every argument after a into a real array. f(1, 2, 3, 4) gives [2, 3, 4] (length 3) and f(1) gives an empty array (length 0)."
    },
    {
      level: 2,
      q: "What does this code print?",
      code: "console.log([0, \"\", null, \"0\", [], NaN].filter(Boolean).length);",
      options: ["0", "4", "3", "2"],
      answer: 3,
      explain: "Only \"0\" (a non-empty string) and [] (any array is an object) are truthy. 0, \"\", null and NaN are falsy."
    },
    {
      level: 2,
      q: "What does this code print?",
      code: "console.log(\"3\" * \"4\", \"3\" + 4 + 5, 3 + 4 + \"5\");",
      options: ["12 345 75", "12 39 75", "34 345 345", "7 345 75"],
      answer: 0,
      explain: "* converts both strings to numbers (12). + is evaluated left to right: \"3\" + 4 becomes the string \"34\", then \"345\". In 3 + 4 + \"5\" the numbers add first (7) and then join with \"5\"."
    },
    {
      level: 2,
      q: "What does this code print?",
      code: "const x = 2;\nswitch (x) {\n  case 1: console.log(\"one\");\n  case 2: console.log(\"two\");\n  case 3: console.log(\"three\"); break;\n  default: console.log(\"other\");\n}",
      options: ["two", "two, three", "two, other", "two, three, other"],
      answer: 1,
      explain: "Execution starts at the matching case 2 and falls through into case 3 because there is no break after case 2. The break after \"three\" stops it before default."
    },
    {
      level: 2,
      q: "What does this code print?",
      code: "for (let i = 0; i < 3; i++) {}\nconsole.log(typeof i);",
      options: ["number", "3", "undefined", "ReferenceError"],
      answer: 2,
      explain: "A variable declared with let in a for statement exists only inside the loop. Outside it the name i is not declared, and typeof on an undeclared name safely gives \"undefined\" instead of an error."
    },
    {
      level: 2,
      q: "What does this code print?",
      code: "const o = { a: undefined, b: [undefined], c: () => 1, d: null };\nconsole.log(JSON.stringify(o));",
      options: ["{\"b\":[null],\"d\":null}", "{\"a\":null,\"b\":[null],\"d\":null}", "{\"b\":[],\"d\":null}", "{\"b\":[null],\"c\":null,\"d\":null}"],
      answer: 0,
      explain: "JSON.stringify skips object properties whose values are undefined or functions, but inside arrays an undefined becomes null to keep positions."
    },
    {
      level: 2,
      q: "What does this code print?",
      code: "const f = () => { a: 1 };\nconsole.log(f());",
      options: ["{ a: 1 }", "undefined", "1", "null"],
      answer: 1,
      explain: "The braces after => are read as a function body, and a: 1 is just a label with an expression, so nothing is returned. To return an object literal, wrap it in parentheses: () => ({ a: 1 })."
    },
    {
      level: 2,
      q: "What does this code print?",
      code: "const o = { b: 1, a: 2, 1: 3 };\nconsole.log(Object.keys(o).join());",
      options: ["b,a,1", "1,a,b", "1,b,a", "a,b,1"],
      answer: 2,
      explain: "Integer-like keys come first in ascending order, followed by string keys in the order they were added."
    },
    {
      level: 2,
      q: "What does this code print?",
      code: "console.log(\"JavaScript\".slice(-6, -2), \"JavaScript\".indexOf(\"a\"));",
      options: ["Scrip 1", "Scri 3", "ript 1", "Scri 1"],
      answer: 3,
      explain: "Negative slice indexes count from the end: -6 to -2 selects indexes 4 to 7, \"Scri\" (the end index is excluded). indexOf returns the first match, at index 1."
    },

    /* ---- JavaScript: Round 3 (hard), 15 questions ---- */
    {
      level: 3,
      q: "What does this code print?",
      code: "for (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 0);\n}",
      options: ["0, 1, 2", "3, 3, 3", "2, 2, 2", "0, 0, 0"],
      answer: 1,
      explain: "var is function-scoped, so all three callbacks share one i. They run after the loop ends, when i is 3. Declaring it with let would give a fresh i per iteration (0, 1, 2)."
    },
    {
      level: 3,
      q: "What does this code print?",
      code: "function make() {\n  let n = 0;\n  return () => ++n;\n}\nconst a = make(), b = make();\na(); a();\nconsole.log(a(), b());",
      options: ["3 3", "1 1", "3 1", "1 3"],
      answer: 2,
      explain: "Each call to make creates its own n that the returned arrow function closes over. a and b therefore count independently: a has been called three times, b once."
    },
    {
      level: 3,
      q: "What does this code print?",
      code: "console.log(typeof f, a);\nvar a = 1;\nfunction f() {}",
      options: ["undefined undefined", "It throws a ReferenceError", "function 1", "function undefined"],
      answer: 3,
      explain: "Function declarations are hoisted completely, so f is usable early. var declarations are hoisted but not their assignments, so a exists but is undefined at that point."
    },
    {
      level: 3,
      q: "What does this code print?",
      code: "try {\n  console.log(x);\n} catch (e) {\n  console.log(e.name);\n}\nlet x = 1;",
      options: ["ReferenceError", "undefined", "TypeError", "SyntaxError"],
      answer: 0,
      explain: "let variables are hoisted but sit in the temporal dead zone until their declaration runs, so reading them early throws a ReferenceError (unlike var, which gives undefined)."
    },
    {
      level: 3,
      q: "What does this code print?",
      code: "const o = {\n  n: \"A\",\n  get() { return this?.n; }\n};\nconst g = o.get;\nconsole.log(o.get(), g());",
      options: ["A A", "undefined undefined", "A undefined", "undefined A"],
      answer: 2,
      explain: "this depends on how a function is called. o.get() has o as this, but the extracted g() is called plain, so this is not o (it is undefined or the global object) and n is not found."
    },
    {
      level: 3,
      q: "What does this code print?",
      code: "const o = {\n  n: \"A\",\n  arrow() { return [1].map(() => this.n)[0]; },\n  plain() { return [1].map(function () { return this && this.n; })[0]; }\n};\nconsole.log(o.arrow(), o.plain());",
      options: ["A A", "undefined undefined", "undefined A", "A undefined"],
      answer: 3,
      explain: "An arrow function uses the this of the surrounding method, which is o. A regular callback passed to map gets its own this (undefined or global), not o."
    },
    {
      level: 3,
      q: "What order does this code print?",
      code: "console.log(1);\nsetTimeout(() => console.log(2), 0);\nPromise.resolve().then(() => console.log(3));\nconsole.log(4);",
      options: ["1, 4, 3, 2", "1, 2, 3, 4", "1, 4, 2, 3", "1, 3, 4, 2"],
      answer: 0,
      explain: "Synchronous code runs first (1, 4). Then the microtask queue (promise callbacks) is drained before the next timer fires, so 3 comes before 2."
    },
    {
      level: 3,
      q: "What order does this code print?",
      code: "async function g() { console.log(3); }\nasync function f() {\n  console.log(1);\n  await g();\n  console.log(2);\n}\nf();\nPromise.resolve().then(() => console.log(4));\nconsole.log(5);",
      options: ["1, 3, 2, 5, 4", "1, 3, 5, 2, 4", "1, 5, 3, 2, 4", "1, 3, 5, 4, 2"],
      answer: 1,
      explain: "An async function runs synchronously until its first await, so 1 and 3 print immediately, then 5. The code after await is queued as a microtask before the .then callback, so 2 comes before 4."
    },
    {
      level: 3,
      q: "What does this code print?",
      code: "function A() {}\nA.prototype.hi = function () { return \"hi\"; };\nconst a = new A();\nconsole.log(a.hasOwnProperty(\"hi\"), \"hi\" in a);",
      options: ["true true", "false false", "true false", "false true"],
      answer: 3,
      explain: "hi lives on A.prototype, not on the instance, so hasOwnProperty is false. The in operator also searches the prototype chain, so it is true."
    },
    {
      level: 3,
      q: "What does this code print?",
      code: "console.log([] == false, null == 0, null == undefined);",
      options: ["true false true", "false false true", "true true true", "false true false"],
      answer: 0,
      explain: "[] converts to \"\" then 0, so it equals false. null only loosely equals undefined (and itself), never 0, even though null >= 0 is true."
    },
    {
      level: 3,
      q: "What does this code print?",
      code: "console.log(typeof NaN, NaN === NaN, Number.isNaN(\"abc\"), isNaN(\"abc\"));",
      options: ["NaN false true true", "number false false true", "number true false false", "number false true false"],
      answer: 1,
      explain: "NaN is of type number and is never equal to itself. The global isNaN converts its argument to a number first (\"abc\" becomes NaN, so true), while Number.isNaN does no conversion and returns false for a string."
    },
    {
      level: 3,
      q: "What does this code print?",
      code: "const a = { n: { x: 1 } };\nconst b = { ...a };\nb.n.x = 2;\nb.m = 5;\nconsole.log(a.n.x, a.m);",
      options: ["1 undefined", "2 5", "2 undefined", "1 5"],
      answer: 2,
      explain: "Spread makes a shallow copy: b has its own top-level properties but b.n is the same object as a.n. So changing b.n.x affects a, while adding b.m does not."
    },
    {
      level: 3,
      q: "What does this code print?",
      code: "const o = Object.freeze({ a: 1, inner: { b: 1 } });\nconsole.log(Object.isFrozen(o), Object.isFrozen(o.inner));",
      options: ["true false", "true true", "false false", "false true"],
      answer: 0,
      explain: "Object.freeze is shallow: it locks the object itself but not objects stored in its properties. The nested inner object can still be changed."
    },
    {
      level: 3,
      q: "What does this code print?",
      code: "const c = { n: 0, s: \"\" };\nconsole.log(c.n || 5, c.n ?? 5, c.s || \"d\", c.z?.y ?? \"e\");",
      options: ["0 0 d e", "5 0 d e", "5 5 d undefined", "5 0 d undefined"],
      answer: 1,
      explain: "|| replaces any falsy value (0, \"\"), while ?? replaces only null or undefined. Optional chaining c.z?.y yields undefined instead of throwing, so ?? supplies \"e\"."
    },
    {
      level: 3,
      q: "What does this code print?",
      code: "function* g() {\n  const x = yield 1;\n  console.log(\"got\", x);\n  yield x * 2;\n}\nconst it = g();\nconsole.log(it.next().value);\nconsole.log(it.next(10).value);",
      options: ["1, got undefined, NaN", "1, 20, got 10", "1, got 10, 20", "1, got 10, NaN"],
      answer: 2,
      explain: "The first next() runs to the first yield and returns 1. The value passed to the second next(10) becomes the result of that yield expression, so x is 10, \"got 10\" is logged, and the next yield returns 20."
    }
  ],

  /* ===================== SQL ===================== */
  sql: [
    /* ---- SQL: Round 1 (easy), 15 questions ---- */
    {
      level: 1,
      q: "Which SQL statement is used to retrieve data from a table?",
      options: ["GET", "SELECT", "FETCH", "OPEN"],
      answer: 1,
      explain: "SELECT retrieves rows (and columns) from one or more tables, e.g. SELECT name FROM students;"
    },
    {
      level: 1,
      q: "Which clause filters rows before they are returned?",
      options: ["ORDER BY", "GROUP BY", "WHERE", "LIMIT"],
      answer: 2,
      explain: "WHERE keeps only the rows that satisfy a condition, e.g. WHERE marks > 50. ORDER BY sorts, GROUP BY groups, and LIMIT restricts the number of rows."
    },
    {
      level: 1,
      q: "What does SELECT DISTINCT city FROM customers; do?",
      options: ["Returns each city only once, removing duplicates", "Sorts cities alphabetically", "Deletes duplicate cities from the table", "Counts the cities"],
      answer: 0,
      explain: "DISTINCT removes duplicate rows from the result of the query. It does not change the stored data."
    },
    {
      level: 1,
      q: "Which clause sorts the result set?",
      options: ["SORT BY", "ORDER BY", "ARRANGE", "GROUP BY"],
      answer: 1,
      explain: "ORDER BY sorts results ascending (ASC, the default) or descending (DESC), e.g. ORDER BY marks DESC."
    },
    {
      level: 1,
      q: "What is a primary key?",
      options: ["A column that can contain duplicates", "The first column of every table", "A column (or set of columns) that uniquely identifies each row and cannot be NULL", "A password for the table"],
      answer: 2,
      explain: "A primary key uniquely identifies each row. Its values must be unique and not NULL, and it is what other tables point to using foreign keys."
    },
    {
      level: 1,
      q: "Which join returns only the rows that have matching values in both tables?",
      options: ["LEFT JOIN", "FULL OUTER JOIN", "CROSS JOIN", "INNER JOIN"],
      answer: 3,
      explain: "INNER JOIN keeps only matching rows. LEFT JOIN also keeps unmatched rows from the left table (with NULLs for the right side)."
    },
    {
      level: 1,
      q: "What is the difference between WHERE and HAVING?",
      options: ["There is none", "WHERE filters rows before grouping; HAVING filters groups after GROUP BY", "HAVING filters rows before grouping; WHERE filters groups", "WHERE works only on numbers"],
      answer: 1,
      explain: "WHERE is applied to individual rows before aggregation, so it cannot use COUNT/SUM. HAVING is applied after GROUP BY and can filter on aggregates, e.g. HAVING COUNT(*) > 5."
    },
    {
      level: 1,
      q: "A table has 10 rows and 3 of them have NULL in the column score. What does COUNT(score) return?",
      options: ["10", "7", "3", "0"],
      answer: 1,
      explain: "COUNT(column) ignores NULL values, so it counts the 7 non-NULL scores. COUNT(*) would count all 10 rows."
    },
    {
      level: 1,
      q: "Which values does this condition match?",
      code: "WHERE name LIKE 'A%'",
      options: ["Names that start with A", "Names that end with A", "Names that contain only the letter A", "Names with exactly two characters"],
      answer: 0,
      explain: "In LIKE patterns, % matches any sequence of characters (including none), so 'A%' matches every name starting with A. '%A' would match names ending with A."
    },
    {
      level: 1,
      q: "Which statement changes values in existing rows?",
      options: ["INSERT", "ALTER", "MODIFY ROWS", "UPDATE"],
      answer: 3,
      explain: "UPDATE changes existing rows, e.g. UPDATE students SET marks = 90 WHERE id = 1; INSERT adds new rows and ALTER changes the table structure. Always include a WHERE or every row will be updated."
    },
    {
      level: 1,
      q: "A table has 8 rows. What does SELECT name FROM students LIMIT 3; return?",
      options: ["At most 3 rows", "All 8 rows, but only 3 columns", "The 3 rows with the highest names alphabetically", "The last 3 rows of the table"],
      answer: 0,
      explain: "LIMIT caps the number of rows returned. Without ORDER BY the choice of rows is not guaranteed, so it is not 'highest' or 'last' of anything."
    },
    {
      level: 1,
      q: "What does AS do in SELECT price * qty AS total FROM items;",
      options: ["It permanently adds a total column to the items table", "It gives the calculated column the name total in the result", "It checks whether price * qty equals total", "It converts the result to text"],
      answer: 1,
      explain: "AS creates an alias: a temporary name used only in that query's result. The table itself is not changed."
    },
    {
      level: 1,
      q: "Which statement correctly adds a row to a table named pets with columns (name, age)?",
      options: ["ADD INTO pets (name, age) VALUES ('Rex', 3);", "INSERT pets SET name = 'Rex', age = 3 ROW;", "INSERT INTO pets (name, age) VALUES ('Rex', 3);", "UPDATE pets VALUES ('Rex', 3);"],
      answer: 2,
      explain: "The standard form is INSERT INTO table (columns) VALUES (values);. UPDATE changes existing rows, and ADD INTO is not SQL."
    },
    {
      level: 1,
      q: "What happens when you run DELETE FROM pets; with no WHERE clause?",
      options: ["Nothing happens because WHERE is required", "Only the first row is deleted", "The table pets is dropped completely", "Every row in pets is deleted, but the table itself remains"],
      answer: 3,
      explain: "Without WHERE, DELETE applies to all rows. The empty table (its columns and structure) is kept; removing the table itself needs DROP TABLE."
    },
    {
      level: 1,
      q: "Which query returns the highest value in the column marks?",
      options: ["SELECT MAX(marks) FROM results;", "SELECT TOP(marks) FROM results;", "SELECT HIGH(marks) FROM results;", "SELECT SUM(marks) FROM results;"],
      answer: 0,
      explain: "MAX is the aggregate that returns the largest value in a column. SUM adds values up, and TOP/HIGH are not standard aggregate functions."
    },

    /* ---- SQL: Round 2 (medium), 15 questions ---- */
    {
      level: 2,
      q: "What does this query return?",
      code: "CREATE TABLE emp(id INT, name TEXT, dept TEXT, salary INT);\nINSERT INTO emp VALUES (1,'Asha','Dev',50),(2,'Ben','Dev',60),(3,'Cara','Ops',40),(4,'Dan','Ops',40),(5,'Eli','HR',70);\nSELECT dept, COUNT(*) FROM emp GROUP BY dept ORDER BY dept;",
      options: ["Dev-2, Ops-2", "Dev-2, HR-1, Ops-2", "Dev-1, HR-1, Ops-1", "Dev-2, HR-1, Ops-3"],
      answer: 1,
      explain: "GROUP BY puts the rows into one group per dept and COUNT(*) counts the rows in each group: Dev has 2, HR has 1, Ops has 2."
    },
    {
      level: 2,
      q: "Which department(s) does this query return?",
      code: "CREATE TABLE emp(id INT, name TEXT, dept TEXT, salary INT);\nINSERT INTO emp VALUES (1,'Asha','Dev',50),(2,'Ben','Dev',60),(3,'Cara','Ops',40),(4,'Dan','Ops',40),(5,'Eli','HR',70);\nSELECT dept FROM emp GROUP BY dept HAVING SUM(salary) > 80;",
      options: ["Dev, Ops", "Dev, HR", "Dev", "Ops"],
      answer: 2,
      explain: "Totals are Dev 110, Ops 80, HR 70. HAVING keeps groups whose total is above 80, and 80 is not greater than 80, so only Dev remains."
    },
    {
      level: 2,
      q: "What is the result?",
      code: "CREATE TABLE emp(id INT, name TEXT, dept TEXT, salary INT);\nINSERT INTO emp VALUES (1,'Asha','Dev',50),(2,'Ben','Dev',60),(3,'Cara','Ops',40),(4,'Dan','Ops',40),(5,'Eli','HR',70);\nSELECT AVG(salary) FROM emp WHERE dept = 'Dev';",
      options: ["52.0", "110.0", "60.0", "55.0"],
      answer: 3,
      explain: "WHERE first reduces the rows to the two Dev rows (50 and 60), then AVG returns their mean, 55.0. 52.0 would be the average of all five employees."
    },
    {
      level: 2,
      q: "What does this query return?",
      code: "CREATE TABLE emp(id INT, name TEXT, dept TEXT, salary INT);\nINSERT INTO emp VALUES (1,'Asha','Dev',50),(2,'Ben','Dev',60),(3,'Cara','Ops',40),(4,'Dan','Ops',40),(5,'Eli','HR',70);\nSELECT name FROM emp ORDER BY salary ASC, name DESC LIMIT 2;",
      options: ["Dan, Cara", "Cara, Dan", "Cara, Asha", "Eli, Ben"],
      answer: 0,
      explain: "Sorting by salary ascending puts the two 40s first. They tie, so name DESC breaks the tie (Dan before Cara), and LIMIT 2 keeps just those rows."
    },
    {
      level: 2,
      q: "What is the result?",
      code: "CREATE TABLE emp(id INT, name TEXT, dept TEXT, salary INT);\nINSERT INTO emp VALUES (1,'Asha','Dev',50),(2,'Ben','Dev',60),(3,'Cara','Ops',40),(4,'Dan','Ops',40),(5,'Eli','HR',70);\nSELECT COUNT(DISTINCT dept) FROM emp;",
      options: ["5", "3", "2", "4"],
      answer: 1,
      explain: "There are five rows but only three different dept values (Dev, Ops, HR). COUNT(DISTINCT ...) counts each different value once."
    },
    {
      level: 2,
      q: "How many rows does this query return?",
      code: "CREATE TABLE emp(id INT, name TEXT, dept TEXT, salary INT);\nINSERT INTO emp VALUES (1,'Asha','Dev',50),(2,'Ben','Dev',60),(3,'Cara','Ops',40),(4,'Dan','Ops',40),(5,'Eli','HR',70);\nSELECT * FROM emp WHERE salary BETWEEN 40 AND 60;",
      options: ["2", "3", "4", "5"],
      answer: 2,
      explain: "BETWEEN includes both end points, so salaries 40, 40, 50 and 60 all match. Only Eli (70) is excluded."
    },
    {
      level: 2,
      q: "Which names does this query return?",
      code: "CREATE TABLE emp(id INT, name TEXT, dept TEXT, salary INT);\nINSERT INTO emp VALUES (1,'Asha','Dev',50),(2,'Ben','Dev',60),(3,'Cara','Ops',40),(4,'Dan','Ops',40),(5,'Eli','HR',70);\nSELECT name FROM emp WHERE name LIKE '%a' ORDER BY name;",
      options: ["Asha, Cara, Dan", "Asha", "Ben, Eli", "Asha, Cara"],
      answer: 3,
      explain: "'%a' matches names ending in a. Asha and Cara qualify; Dan ends in n, and the others do not end in a either."
    },
    {
      level: 2,
      q: "Which names does this query return?",
      code: "CREATE TABLE emp(id INT, name TEXT, dept TEXT, salary INT);\nINSERT INTO emp VALUES (1,'Asha','Dev',50),(2,'Ben','Dev',60),(3,'Cara','Ops',40),(4,'Dan','Ops',40),(5,'Eli','HR',70);\nSELECT name FROM emp WHERE salary > (SELECT AVG(salary) FROM emp) ORDER BY name;",
      options: ["Ben, Eli", "Asha, Ben, Eli", "Eli", "Ben, Cara, Dan"],
      answer: 0,
      explain: "The subquery returns the overall average, 52. Only Ben (60) and Eli (70) earn more than that; Asha's 50 is below it."
    },
    {
      level: 2,
      q: "How many rows does this query return?",
      code: "CREATE TABLE cust(id INT, name TEXT);\nCREATE TABLE orders(id INT, cust_id INT, amt INT);\nINSERT INTO cust VALUES (1,'Asha'),(2,'Ben'),(3,'Cara');\nINSERT INTO orders VALUES (1,1,10),(2,1,20),(3,3,5);\nSELECT c.name, o.amt FROM cust c INNER JOIN orders o ON o.cust_id = c.id;",
      options: ["2", "3", "4", "6"],
      answer: 1,
      explain: "INNER JOIN produces one row per matching pair: Asha matches two orders and Cara one. Ben has no orders, so he is dropped."
    },
    {
      level: 2,
      q: "What does this query return?",
      code: "CREATE TABLE cust(id INT, name TEXT);\nCREATE TABLE orders(id INT, cust_id INT, amt INT);\nINSERT INTO cust VALUES (1,'Asha'),(2,'Ben'),(3,'Cara');\nINSERT INTO orders VALUES (1,1,10),(2,1,20),(3,3,5);\nSELECT c.name, COUNT(o.id) FROM cust c LEFT JOIN orders o ON o.cust_id = c.id GROUP BY c.name ORDER BY c.name;",
      options: ["Asha-2, Cara-1", "Asha-2, Ben-1, Cara-1", "Asha-2, Ben-0, Cara-1", "Asha-3, Ben-0, Cara-0"],
      answer: 2,
      explain: "LEFT JOIN keeps Ben even though he has no orders, and COUNT(o.id) ignores the NULL on his row, giving 0."
    },
    {
      level: 2,
      q: "Which names does this query return?",
      code: "CREATE TABLE cust(id INT, name TEXT);\nCREATE TABLE orders(id INT, cust_id INT, amt INT);\nINSERT INTO cust VALUES (1,'Asha'),(2,'Ben'),(3,'Cara');\nINSERT INTO orders VALUES (1,1,10),(2,1,20),(3,3,5);\nSELECT name FROM cust WHERE id IN (SELECT cust_id FROM orders) ORDER BY name;",
      options: ["Asha, Ben, Cara", "Ben", "Asha, Asha, Cara", "Asha, Cara"],
      answer: 3,
      explain: "The subquery yields the customer ids 1, 1, 3. IN simply tests membership, so Asha appears once (not once per order) and Ben is left out."
    },
    {
      level: 2,
      q: "What is the correct order in which SQL clauses must be written?",
      options: ["SELECT, FROM, WHERE, GROUP BY, HAVING, ORDER BY", "SELECT, WHERE, FROM, GROUP BY, ORDER BY, HAVING", "FROM, SELECT, WHERE, HAVING, GROUP BY, ORDER BY", "SELECT, FROM, GROUP BY, WHERE, HAVING, ORDER BY"],
      answer: 0,
      explain: "Clauses are written in the order SELECT, FROM, WHERE, GROUP BY, HAVING, ORDER BY. Writing them in another order is a syntax error."
    },
    {
      level: 2,
      q: "In LIKE 'b_t', what does the underscore match?",
      options: ["Any number of characters, including none", "Exactly one character", "A literal underscore only", "Zero or one character"],
      answer: 1,
      explain: "_ matches exactly one character, so 'b_t' matches bat and bit but not bt or boat. % is the one that matches any number of characters."
    },
    {
      level: 2,
      q: "What is the purpose of a foreign key?",
      options: ["To make a column faster to sort", "To encrypt the values in a column", "To link a column to the primary key of another table, keeping the relationship valid", "To stop a column from ever being NULL"],
      answer: 2,
      explain: "A foreign key references a key in another table (e.g. orders.cust_id referencing cust.id), so you cannot point to a customer that does not exist."
    },
    {
      level: 2,
      q: "Which condition correctly finds rows where the column phone has no value?",
      options: ["WHERE phone = NULL", "WHERE phone = ''", "WHERE phone == 0", "WHERE phone IS NULL"],
      answer: 3,
      explain: "NULL means unknown, so comparing it with = gives NULL (not true) and matches nothing. IS NULL is the correct test."
    },

    /* ---- SQL: Round 3 (hard), 15 questions ---- */
    {
      level: 3,
      q: "What does this query return (columns in order)?",
      code: "CREATE TABLE t(id INT, x INT);\nINSERT INTO t VALUES (1,10),(2,NULL),(3,30);\nSELECT COUNT(*), COUNT(x), SUM(x), AVG(x) FROM t;",
      options: ["3, 2, 40, 20.0", "3, 3, 40, 13.33", "3, 2, 40, 13.33", "2, 2, 40, 20.0"],
      answer: 0,
      explain: "COUNT(*) counts all 3 rows; COUNT(x), SUM and AVG skip the NULL. So AVG is 40 / 2 = 20.0, not 40 / 3."
    },
    {
      level: 3,
      q: "What does this query return?",
      code: "CREATE TABLE a(id INT);\nCREATE TABLE b(v INT);\nINSERT INTO a VALUES (1),(2),(3);\nINSERT INTO b VALUES (1),(NULL);\nSELECT COUNT(*) FROM a WHERE id NOT IN (SELECT v FROM b);",
      options: ["2", "0", "1", "3"],
      answer: 1,
      explain: "NOT IN (1, NULL) expands to id <> 1 AND id <> NULL. The second part is never true, so no row passes. This is why NOT IN is dangerous with NULLs."
    },
    {
      level: 3,
      q: "Which ids does this query return?",
      code: "CREATE TABLE a(id INT);\nCREATE TABLE b(v INT);\nINSERT INTO a VALUES (1),(2),(3);\nINSERT INTO b VALUES (1),(NULL);\nSELECT id FROM a WHERE NOT EXISTS (SELECT 1 FROM b WHERE b.v = a.id) ORDER BY id;",
      options: ["No rows", "1", "2, 3", "1, 2, 3"],
      answer: 2,
      explain: "NOT EXISTS only asks whether a matching row is present. The NULL in b never equals anything, so ids 2 and 3 have no match and are returned, unlike with NOT IN."
    },
    {
      level: 3,
      q: "What does this query return?",
      code: "CREATE TABLE t(id INT, x INT);\nINSERT INTO t VALUES (1,10),(2,NULL),(3,30);\nSELECT SUM(x) FROM t WHERE id = 2;",
      options: ["0", "10", "An error", "NULL"],
      answer: 3,
      explain: "The only row selected has x = NULL. SUM ignores NULLs, but when no non-NULL values remain it returns NULL, not 0."
    },
    {
      level: 3,
      q: "What does this query return?",
      code: "CREATE TABLE cust(id INT, name TEXT);\nCREATE TABLE orders(id INT, cust_id INT, amt INT);\nINSERT INTO cust VALUES (1,'Asha'),(2,'Ben'),(3,'Cara');\nINSERT INTO orders VALUES (1,1,10),(2,1,20),(3,3,5);\nSELECT c.name, COUNT(o.id) FROM cust c LEFT JOIN orders o ON o.cust_id = c.id AND o.amt > 10 GROUP BY c.name ORDER BY c.name;",
      options: ["Asha-1, Ben-0, Cara-0", "Asha-1", "Asha-2, Ben-0, Cara-1", "Asha-1, Cara-1"],
      answer: 0,
      explain: "A condition in ON only decides which orders match; every customer is still kept. Asha matches one order over 10 and the others match none. Put in WHERE, it would remove Ben and Cara."
    },
    {
      level: 3,
      q: "What does this query return?",
      code: "CREATE TABLE cust(id INT, name TEXT);\nCREATE TABLE orders(id INT, cust_id INT, amt INT);\nINSERT INTO cust VALUES (1,'Asha'),(2,'Ben'),(3,'Cara');\nINSERT INTO orders VALUES (1,1,10),(2,1,20),(3,3,5);\nSELECT c.name FROM cust c LEFT JOIN orders o ON o.cust_id = c.id WHERE o.amt > 10;",
      options: ["Asha, Ben, Cara", "Asha", "Asha, Cara", "Ben"],
      answer: 1,
      explain: "After the LEFT JOIN, unmatched customers get NULL for amt, and NULL > 10 is not true, so WHERE removes them (turning the join into an inner join). Only Asha's order of 20 passes."
    },
    {
      level: 3,
      q: "Which names does this self-join return?",
      code: "CREATE TABLE emp(id INT, name TEXT, mgr INT);\nINSERT INTO emp VALUES (1,'Ann',NULL),(2,'Bob',1),(3,'Cy',1),(4,'Di',2);\nSELECT e.name FROM emp e JOIN emp m ON e.mgr = m.id ORDER BY e.name;",
      options: ["Ann, Bob, Cy, Di", "Ann, Bob", "Bob, Cy, Di", "Bob, Di"],
      answer: 2,
      explain: "The join pairs each employee e with their manager m. Ann's mgr is NULL, which equals no id, so she has no partner and drops out. The other three each match."
    },
    {
      level: 3,
      q: "Which names does this correlated subquery return?",
      code: "CREATE TABLE s(name TEXT, dept TEXT, sal INT);\nINSERT INTO s VALUES ('A','x',10),('B','x',30),('C','y',28),('D','y',20),('E','y',50);\nSELECT name FROM s o WHERE sal > (SELECT AVG(sal) FROM s WHERE dept = o.dept) ORDER BY name;",
      options: ["B, C, E", "E", "B, D", "B, E"],
      answer: 3,
      explain: "Each row is compared with the average of its own department: x averages 20 (B beats it) and y averages about 32.7 (only E beats it). C beats only the overall average of 27.6."
    },
    {
      level: 3,
      q: "How many rows does this query return?",
      code: "CREATE TABLE a(v INT);\nCREATE TABLE b(v INT);\nINSERT INTO a VALUES (1),(2),(2);\nINSERT INTO b VALUES (2),(3);\nSELECT v FROM a UNION SELECT v FROM b;",
      options: ["3", "5", "4", "2"],
      answer: 0,
      explain: "UNION removes duplicate rows from the combined result, leaving 1, 2 and 3. UNION ALL would keep all 5 rows."
    },
    {
      level: 3,
      q: "What does this query return, in row order?",
      code: "CREATE TABLE t(id INT, x INT);\nINSERT INTO t VALUES (1,10),(2,NULL),(3,30);\nSELECT CASE WHEN x > 15 THEN 'hi' ELSE 'lo' END FROM t ORDER BY id;",
      options: ["lo, NULL, hi", "lo, lo, hi", "lo, hi, hi", "NULL, NULL, hi"],
      answer: 1,
      explain: "For the NULL row, x > 15 is not true, so CASE falls through to ELSE and gives 'lo'. CASE only returns NULL if there is no ELSE."
    },
    {
      level: 3,
      q: "In SQLite, what does this query return?",
      code: "CREATE TABLE t(id INT, x INT);\nINSERT INTO t VALUES (1,10),(2,NULL),(3,30);\nSELECT SUM(COALESCE(x, 0)) / COUNT(*) FROM t;",
      options: ["20", "13.33", "13", "20.0"],
      answer: 2,
      explain: "COALESCE turns the NULL into 0, so the sum is 40 and COUNT(*) is 3. SQLite divides two integers with integer division: 40 / 3 = 13, not 13.33."
    },
    {
      level: 3,
      q: "What does this query return?",
      code: "CREATE TABLE r(name TEXT, s INT);\nINSERT INTO r VALUES ('a',90),('b',80),('c',80),('d',70);\nSELECT rk FROM (SELECT name, RANK() OVER (ORDER BY s DESC) AS rk FROM r) WHERE name = 'd';",
      options: ["3", "2", "1", "4"],
      answer: 3,
      explain: "RANK gives tied rows the same rank and then skips numbers: a is 1, b and c are both 2, so d is 4. DENSE_RANK would give 3."
    },
    {
      level: 3,
      q: "A transfer runs UPDATE to subtract 100 from account A and UPDATE to add 100 to account B inside one transaction. The second UPDATE fails and the program runs ROLLBACK. What is the state afterwards?",
      options: ["Neither account has changed, because a transaction is all-or-nothing (atomicity)", "Account A is 100 lower and account B is unchanged", "Account B is 100 higher and account A is unchanged", "Both updates are kept, since the first one succeeded"],
      answer: 0,
      explain: "Atomicity means all statements in a transaction take effect together or not at all. ROLLBACK undoes the successful first UPDATE too."
    },
    {
      level: 3,
      q: "What is the main trade-off of adding an index on a column?",
      options: ["Writes get faster and searches get slower", "Searches on that column get faster, but writes get slower and storage grows", "The column can no longer contain duplicate values", "Queries return rows in random order"],
      answer: 1,
      explain: "An index is an extra sorted structure that speeds up lookups, joins and sorting on the column. It must be updated on every INSERT, UPDATE and DELETE, and it takes space."
    },
    {
      level: 3,
      q: "An orders table stores each customer's address in every order row. A customer moves, and only some of their rows are updated. Which normalization idea would prevent this?",
      options: ["Add an index on the address column", "Store all of a customer's orders in one comma-separated text column", "Move customers into their own table and reference them from orders by a key", "Use SELECT DISTINCT whenever reading addresses"],
      answer: 2,
      explain: "Repeating the same fact in many rows risks update anomalies. Normalizing means storing each fact once (in a customers table) and linking to it with a foreign key."
    }
  ]
};
