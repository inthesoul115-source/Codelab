/* ==========================================================================
   SITE SETTINGS  -  edit this file to change the look, text and behaviour.
   Save the file, then refresh the page (Ctrl+F5) to see your change.
   ========================================================================== */

/* The program every language shows when the page loads (and after a refresh).
   Do not use quote marks (" or ') inside this text. */
const WELCOME_TEXT = "Welcome to CodeLab";

const SITE = {
  title: "CodeLab",                        // shown in the top bar and browser tab
  tagline: "Write code. Run it. Debug it. Test yourself.",
  welcomeHeading: "Choose a language to start",
  welcomeSub: "Pick a language. You can switch any time from the row of buttons at the top.",
  questionsPerQuiz: 10,                    // questions asked in each quiz round
  shuffleQuestions: true,                  // random question order
  shuffleOptions: true,                    // random order of the A/B/C/D answers
  perfectScoreToUnlock: true,              // true = need 100% to open the next (harder) round
  roundNames: ["Round 1 - Easy", "Round 2 - Medium", "Round 3 - Hard"],
  runTimeoutSeconds: 8,                    // stop JavaScript/Python programs that run longer than this
  remoteTimeoutSeconds: 25,                // give up waiting for the online compiler after this long
  maxDebugSteps: 2000,                     // the debugger records at most this many steps
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
   COMPILER SERVICE (needed only for the languages marked "Online compiler")

   JavaScript, Python and SQL run inside the visitor's browser (JavaScript is instant).
   Every other language must be compiled on a server, so the site sends the code
   to an online compiler service and shows what comes back.

   provider: "wandbox"  - free public service, no key needed (default).
                          url: "https://wandbox.org/api"
                          The site asks Wandbox which languages it has and hides the ones it does not offer.
   provider: "piston"   - your own Piston server (the public one is whitelist-only since Feb 2026).
                          url: "https://YOUR-SERVER/api/v2/execute"   (needs pistonName on each language)
   provider: "judge0"   - Judge0 CE (self-hosted or a keyed host).
                          url: base address, headers: { "X-RapidAPI-Key": "...", "X-RapidAPI-Host": "..." }
                          (needs judge0Id on each language)

   Do NOT put a secret/paid key here if the site is public - anyone can read this file.
   -------------------------------------------------------------------------- */
const COMPILER = {
  provider: "wandbox",
  url: "https://wandbox.org/api",
  headers: {}
};

/* --------------------------------------------------------------------------
   LANGUAGES  (the order here is the order on the start screen)
     label    - the name
     icon     - the symbol shown before the name (a letter, symbol or emoji - change it freely)
     color    - background colour of the symbol badge (dark colours keep white text readable)
     blurb    - the small description on the start screen
     runner   - "javascript" | "python" | "sql" run in the browser; "remote" uses the compiler service
     wandbox  - the language name(s) Wandbox uses (only for remote languages)
   Remove a line to hide that language. These are our own symbol badges, not the official logos
   (those are trademarks). To use a real logo picture you have the right to use, add  iconUrl: "logo.png"
   to a language and upload the picture next to index.html.
   -------------------------------------------------------------------------- */
const LANGUAGES = {
  python:     { label: "Python",     icon: "🐍", color: "#2e5d34", blurb: "Readable, great for beginners",  runner: "python" },
  javascript: { label: "JavaScript", icon: "JS",           color: "#6b5900", blurb: "The language of the web",        runner: "javascript" },
  java:       { label: "Java",       icon: "☕",       color: "#a3342b", blurb: "Objects, classes and the JVM",   runner: "remote", wandbox: ["Java"], pistonName: "java", pistonVersion: "*", judge0Id: 62 },
  c:          { label: "C",          icon: "C",            color: "#3949ab", blurb: "Close to the hardware",          runner: "remote", wandbox: ["C"], pistonName: "c", pistonVersion: "*", judge0Id: 50 },
  cpp:        { label: "C++",        icon: "C++",          color: "#00587a", blurb: "C plus classes and the STL",     runner: "remote", wandbox: ["C++"], pistonName: "c++", pistonVersion: "*", judge0Id: 54 },
  csharp:     { label: "C#",         icon: "C#",           color: "#6a1b9a", blurb: "Modern language of .NET",        runner: "remote", wandbox: ["C#"], judge0Id: 51 },
  sql:        { label: "SQL",        icon: "SQL",          color: "#37474f", blurb: "Ask questions of your data",     runner: "sql" },
  typescript: { label: "TypeScript", icon: "TS",           color: "#1f5aa6", blurb: "JavaScript with types",          runner: "remote", wandbox: ["TypeScript"], judge0Id: 74 },
  go:         { label: "Go",         icon: "Go",           color: "#006a7a", blurb: "Simple and fast, by Google",     runner: "remote", wandbox: ["Go"], pistonName: "go", pistonVersion: "*", judge0Id: 60 },
  rust:       { label: "Rust",       icon: "🦀", color: "#8a3b12", blurb: "Fast and memory safe",           runner: "remote", wandbox: ["Rust"], pistonName: "rust", pistonVersion: "*", judge0Id: 73 },
  php:        { label: "PHP",        icon: "🐘", color: "#4a5a99", blurb: "Powers much of the web",         runner: "remote", wandbox: ["PHP"], pistonName: "php", pistonVersion: "*", judge0Id: 68 },
  ruby:       { label: "Ruby",       icon: "💎", color: "#a01d33", blurb: "Friendly and expressive",        runner: "remote", wandbox: ["Ruby"], pistonName: "ruby", pistonVersion: "*", judge0Id: 72 },
  swift:      { label: "Swift",      icon: "🐦", color: "#b3441c", blurb: "Apps for Apple devices",         runner: "remote", wandbox: ["Swift"], judge0Id: 83 },
  kotlin:     { label: "Kotlin",     icon: "K",            color: "#6c3fb0", blurb: "Modern language for Android",    runner: "remote", wandbox: ["Kotlin"], pistonName: "kotlin", pistonVersion: "*", judge0Id: 78 },
  r:          { label: "R",          icon: "R",            color: "#1f5f99", blurb: "Statistics and data science",    runner: "remote", wandbox: ["R"], judge0Id: 80 },
  dart:       { label: "Dart",       icon: "🎯", color: "#00637d", blurb: "The language behind Flutter",    runner: "remote", wandbox: ["Dart"], pistonName: "dart", pistonVersion: "*", judge0Id: 90 },
  scala:      { label: "Scala",      icon: "Sc",           color: "#a82a2a", blurb: "Objects meet functions",         runner: "remote", wandbox: ["Scala"], judge0Id: 81 },
  perl:       { label: "Perl",       icon: "🐪", color: "#2c5c7a", blurb: "Text processing classic",        runner: "remote", wandbox: ["Perl"], pistonName: "perl", pistonVersion: "*", judge0Id: 85 },
  lua:        { label: "Lua",        icon: "🌙", color: "#23318f", blurb: "Tiny and embeddable",            runner: "remote", wandbox: ["Lua"], pistonName: "lua", pistonVersion: "*", judge0Id: 64 },
  haskell:    { label: "Haskell",    icon: "λ",       color: "#5b3a86", blurb: "Pure functional programming",    runner: "remote", wandbox: ["Haskell"], judge0Id: 61 },
  bash:       { label: "Bash",       icon: "$_",           color: "#2b3a42", blurb: "Shell scripts",                  runner: "remote", wandbox: ["Bash script", "Bash", "Shell"], pistonName: "bash", pistonVersion: "*", judge0Id: 46 },
  julia:      { label: "Julia",      icon: "∴",       color: "#7a3b8a", blurb: "Fast numerical computing",       runner: "remote", wandbox: ["Julia"], judge0Id: 91 },
  elixir:     { label: "Elixir",     icon: "💧", color: "#5a3a8f", blurb: "Scalable and fault tolerant",    runner: "remote", wandbox: ["Elixir"], pistonName: "elixir", pistonVersion: "*", judge0Id: 57 },
  pascal:     { label: "Pascal",     icon: "P",            color: "#2f4f8f", blurb: "A classic for learning",         runner: "remote", wandbox: ["Pascal", "Free Pascal"], judge0Id: 67 },
  ocaml:      { label: "OCaml",      icon: "🐫", color: "#99541a", blurb: "Functional with strong types",   runner: "remote", wandbox: ["OCaml"], judge0Id: null },
  lisp:       { label: "Lisp",       icon: "( )",          color: "#3b5b3b", blurb: "Code is data",                   runner: "remote", wandbox: ["Lisp", "Common Lisp"], judge0Id: 55 },
  d:          { label: "D",          icon: "D",            color: "#8a2d2d", blurb: "Systems programming, made easy", runner: "remote", wandbox: ["D"], judge0Id: null },
  nim:        { label: "Nim",        icon: "👑", color: "#6b5a00", blurb: "Python-like, compiled",          runner: "remote", wandbox: ["Nim"], judge0Id: null },
  crystal:    { label: "Crystal",    icon: "💠", color: "#37474f", blurb: "Ruby-like, compiled",            runner: "remote", wandbox: ["Crystal"], judge0Id: null },
  groovy:     { label: "Groovy",     icon: "Gy",           color: "#1d6a8c", blurb: "Friendly language for the JVM",  runner: "remote", wandbox: ["Groovy"], pistonName: "groovy", pistonVersion: "*", judge0Id: 88 }
};

/* Starter code shown in the editor. Every language prints WELCOME_TEXT, and
   it comes back every time the page is refreshed (your edits are not saved). */
const STARTER_CODE = {
  python: `print("${WELCOME_TEXT}")
`,
  javascript: `console.log("${WELCOME_TEXT}");
`,
  java: `public class Main {
    public static void main(String[] args) {
        System.out.println("${WELCOME_TEXT}");
    }
}
`,
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
  csharp: `using System;

class Program {
    static void Main() {
        Console.WriteLine("${WELCOME_TEXT}");
    }
}
`,
  sql: `-- A sample table named "students" is already created for you.
-- Try: SELECT * FROM students;
SELECT '${WELCOME_TEXT}' AS message;
`,
  typescript: `const message: string = "${WELCOME_TEXT}";
console.log(message);
`,
  go: `package main

import "fmt"

func main() {
    fmt.Println("${WELCOME_TEXT}")
}
`,
  rust: `fn main() {
    println!("${WELCOME_TEXT}");
}
`,
  php: `<?php
echo "${WELCOME_TEXT}\\n";
`,
  ruby: `puts "${WELCOME_TEXT}"
`,
  swift: `print("${WELCOME_TEXT}")
`,
  kotlin: `fun main() {
    println("${WELCOME_TEXT}")
}
`,
  r: `cat("${WELCOME_TEXT}\\n")
`,
  dart: `void main() {
  print('${WELCOME_TEXT}');
}
`,
  scala: `object Main {
  def main(args: Array[String]): Unit = {
    println("${WELCOME_TEXT}")
  }
}
`,
  perl: `print "${WELCOME_TEXT}\\n";
`,
  lua: `print("${WELCOME_TEXT}")
`,
  haskell: `main :: IO ()
main = putStrLn "${WELCOME_TEXT}"
`,
  bash: `echo "${WELCOME_TEXT}"
`,
  julia: `println("${WELCOME_TEXT}")
`,
  elixir: `IO.puts("${WELCOME_TEXT}")
`,
  pascal: `program Main;
begin
  writeln('${WELCOME_TEXT}');
end.
`,
  ocaml: `let () = print_endline "${WELCOME_TEXT}"
`,
  lisp: `(format t "${WELCOME_TEXT}~%")
`,
  d: `import std.stdio;

void main() {
    writeln("${WELCOME_TEXT}");
}
`,
  nim: `echo "${WELCOME_TEXT}"
`,
  crystal: `puts "${WELCOME_TEXT}"
`,
  groovy: `println "${WELCOME_TEXT}"
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
