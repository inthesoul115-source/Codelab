/* ==========================================================================
   SITE SETTINGS  -  edit this file to change the look, text and behaviour.
   ========================================================================== */

const SITE = {
  title: "CodeLab",                       // shown in the top bar and browser tab
  tagline: "Write code. Run it. Test yourself.",
  questionsPerQuiz: 10,                   // how many questions each quiz asks (uses the first N, or a random N if shuffle is on)
  shuffleQuestions: true,                 // true = random order every time, false = same order as in questions.js
  runTimeoutSeconds: 8                    // stop JavaScript/Python programs that run longer than this
};

/* --------------------------------------------------------------------------
   COMPILER SERVICE (needed only for C, C++ and Java)

   Python, JavaScript and SQL run entirely inside the visitor's browser.
   C, C++ and Java must be compiled on a server, so the site sends the code
   to an online compiler service and shows what comes back.

   Choose ONE provider:

   1) provider: "piston"  -  works with the open-source Piston engine.
        - url: the full address of the /execute endpoint, e.g.
              "https://emkc.org/api/v2/piston/execute"
          (the public server may require a key, be rate-limited, or change its rules;
           the most reliable way is to run your own Piston server and put its address here)
        - headers: extra headers if your server needs them, e.g. { "Authorization": "your-key" }

   2) provider: "judge0"  -  works with Judge0 CE (self-hosted) or RapidAPI's Judge0.
        - url: base address, e.g. "https://judge0-ce.p.rapidapi.com"
        - headers: e.g. { "X-RapidAPI-Key": "your-key", "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com" }

   Do NOT put a secret/paid key here if the site is public - anyone can read this file.
   For a public site, use a server or proxy you control that keeps the key private.
   -------------------------------------------------------------------------- */
/* ACTIVE SETTING (the public Piston server stopped allowing everyone in Feb 2026, so the default is now Wandbox):

   3) provider: "wandbox"  -  free public service, no key needed.
        - url: "https://wandbox.org/api"
        - The site asks Wandbox for its list of compilers and picks a recent one per language automatically.
        - To force a specific compiler for a language, add  wandboxCompiler: "name"  to that language below.
        - Public free service: it can be slow, rate-limited or change at any time. Fine for learning/practice;
          for a serious site use your own Piston/Judge0 server (options 1 or 2 above).
*/
const COMPILER = {
  provider: "wandbox",
  url: "https://wandbox.org/api",
  headers: {}
};

/* Old Piston setting, if you ever host your own Piston server, use this instead:
const COMPILER = { provider: "piston", url: "https://YOUR-SERVER/api/v2/execute", headers: {} };
*/

/* Languages shown in the site. Remove an entry to hide that language. */
const LANGUAGES = {
  c:          { label: "C",          pistonName: "c",          pistonVersion: "*", judge0Id: 50, wandboxLang: "C",    runner: "remote" },
  cpp:        { label: "C++",        pistonName: "c++",        pistonVersion: "*", judge0Id: 54, wandboxLang: "C++",  runner: "remote" },
  python:     { label: "Python",     runner: "python" },
  java:       { label: "Java",       pistonName: "java",       pistonVersion: "*", judge0Id: 62, wandboxLang: "Java", runner: "remote" },
  javascript: { label: "JavaScript", runner: "javascript" },
  sql:        { label: "SQL",        runner: "sql" }
};

/* Starter code shown in the editor for each language. */
const STARTER_CODE = {
  c: `#include <stdio.h>

int main() {
    int a = 7, b = 5;
    printf("Hello from C!\\n");
    printf("%d + %d = %d\\n", a, b, a + b);
    return 0;
}
`,
  cpp: `#include <iostream>
using namespace std;

int main() {
    int a = 7, b = 5;
    cout << "Hello from C++!" << endl;
    cout << a << " + " << b << " = " << a + b << endl;
    return 0;
}
`,
  python: `print("Hello from Python!")

for i in range(1, 4):
    print("Square of", i, "is", i * i)

# To read input, type it in the "Input" box below the editor, one value per line:
# name = input("Your name: ")
# print("Hi", name)
`,
  java: `public class Main {
    public static void main(String[] args) {
        int a = 7, b = 5;
        System.out.println("Hello from Java!");
        System.out.println(a + " + " + b + " = " + (a + b));
    }
}
`,
  javascript: `console.log("Hello from JavaScript!");

const numbers = [1, 2, 3, 4];
console.log("Doubled:", numbers.map(n => n * 2));
`,
  sql: `-- A sample table named "students" is already created for you.
SELECT name, course, marks
FROM students
WHERE marks >= 75
ORDER BY marks DESC;
`
};

/* The sample database used by the SQL section (runs in the browser, resets on demand). */
const SAMPLE_SQL = `
CREATE TABLE students (id INTEGER PRIMARY KEY, name TEXT, course TEXT, marks INTEGER);
INSERT INTO students VALUES
  (1, 'Asha',   'Python', 88),
  (2, 'Ravi',   'Java',   72),
  (3, 'Meera',  'C++',    91),
  (4, 'Kabir',  'C',      64),
  (5, 'Sana',   'Python', 79),
  (6, 'Dev',    'SQL',    85);
`;
