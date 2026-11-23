/* ==========================================================================
   SITE SETTINGS  -  edit this file to change the look, text and behaviour.
   Save the file, then refresh the page (Ctrl+F5) to see your change.
   ========================================================================== */

/* The program every language shows when the page loads (and after a refresh).
   Do not use double quotes (") inside this text. */
const WELCOME_TEXT = "Welcome to CodeLab";

const SITE = {
  title: "CodeLab",                        // shown in the top bar and browser tab
  tagline: "Write code. Run it. Test yourself.",
  welcomeHeading: "Choose a language to start",
  welcomeSub: "Pick one language now. You can switch any time from the buttons at the top.",
  questionsPerQuiz: 10,                    // questions asked in each quiz round
  shuffleQuestions: true,                  // random question order
  shuffleOptions: true,                    // random order of the A/B/C/D answers
  perfectScoreToUnlock: true,              // true = need 100% to open the next (harder) round
  roundNames: ["Round 1 - Easy", "Round 2 - Medium", "Round 3 - Hard"],
  runTimeoutSeconds: 8,                    // stop JavaScript/Python programs that run longer than this
  indentSize: 4                            // spaces added for each indentation level in the editor
};

/* Editor helpers: set any of these to false to turn that helper off. */
const EDITOR = {
  autoCloseBrackets: true,                 // typing ( [ { " ' ` also types the closing one
  autoIndent: true                         // Enter keeps the indentation and adds a level after { ( [ or a Python ':'
};

/* Sounds (made by the browser itself, no sound files needed). */
const SOUNDS = {
  enabledByDefault: true,
  vibrateOnWrong: true                     // phones also vibrate briefly on a wrong answer
};

/* --------------------------------------------------------------------------
   COLOURS FOR THE CODE EDITOR  (keywords, comments, strings ...)
   Change any colour below. Use hex codes like "#ff8800". There is one set for
   the bright theme ("light") and one for the dark theme ("dark").
   -------------------------------------------------------------------------- */
const SYNTAX_COLORS = {
  light: {
    keyword:  "#8250df",   // if, for, return, class ...
    type:     "#0b7285",   // int, String, vector, class names ...
    function: "#0550ae",   // names followed by ( )
    string:   "#0a7d3e",   // "text"
    number:   "#b35900",   // 42, 3.14, true, null
    comment:  "#667085",   // // comment    # comment    -- comment
    preproc:  "#b0306a"    // #include <stdio.h>
  },
  dark: {
    keyword:  "#c4a7ff",
    type:     "#5fd7e8",
    function: "#82b1ff",
    string:   "#7ee2a8",
    number:   "#ffb86b",
    comment:  "#8b98a9",
    preproc:  "#ff9ac1"
  }
};

/* --------------------------------------------------------------------------
   COMPILER SERVICE (needed only for C, C++ and Java)

   Python, JavaScript and SQL run entirely inside the visitor's browser.
   C, C++ and Java must be compiled on a server, so the site sends the code
   to an online compiler service and shows what comes back.

   provider: "wandbox"  - free public service, no key needed (default).
                          url: "https://wandbox.org/api"
   provider: "piston"   - your own Piston server (the public one is whitelist-only since Feb 2026).
                          url: "https://YOUR-SERVER/api/v2/execute"
   provider: "judge0"   - Judge0 CE (self-hosted or a paid/keyed host).
                          url: base address, headers: { "X-RapidAPI-Key": "...", "X-RapidAPI-Host": "..." }

   Do NOT put a secret/paid key here if the site is public - anyone can read this file.
   -------------------------------------------------------------------------- */
const COMPILER = {
  provider: "wandbox",
  url: "https://wandbox.org/api",
  headers: {}
};

/* Languages shown in the site. Remove an entry to hide that language.
   tag = the short badge on the start screen, blurb = the small description under it. */
const LANGUAGES = {
  c:          { label: "C",          tag: "C",    blurb: "Compiled, close to the hardware",   pistonName: "c",    pistonVersion: "*", judge0Id: 50, wandboxLang: "C",    runner: "remote" },
  cpp:        { label: "C++",        tag: "C++",  blurb: "C plus classes and the STL",        pistonName: "c++",  pistonVersion: "*", judge0Id: 54, wandboxLang: "C++",  runner: "remote" },
  python:     { label: "Python",     tag: "Py",   blurb: "Readable, great for beginners",     runner: "python" },
  java:       { label: "Java",       tag: "Java", blurb: "Objects, classes, and the JVM",     pistonName: "java", pistonVersion: "*", judge0Id: 62, wandboxLang: "Java", runner: "remote" },
  javascript: { label: "JavaScript", tag: "JS",   blurb: "The language of the web",           runner: "javascript" },
  sql:        { label: "SQL",        tag: "SQL",  blurb: "Ask questions of your data",        runner: "sql" }
};

/* Starter code shown in the editor. Every language prints WELCOME_TEXT, and
   it comes back every time the page is refreshed (your edits are not saved). */
const STARTER_CODE = {
  c: `#include <stdio.h>

int main() {
    printf("${WELCOME_TEXT}\\n");
    return 0;
}
`,
  cpp: `#include <iostream>
using namespace std;

int main() {
    cout << "${WELCOME_TEXT}" << endl;
    return 0;
}
`,
  python: `print("${WELCOME_TEXT}")
`,
  java: `public class Main {
    public static void main(String[] args) {
        System.out.println("${WELCOME_TEXT}");
    }
}
`,
  javascript: `console.log("${WELCOME_TEXT}");
`,
  sql: `-- A sample table named "students" is already created for you.
-- Try: SELECT * FROM students;
SELECT '${WELCOME_TEXT}' AS message;
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
