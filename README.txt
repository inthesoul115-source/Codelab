CODELAB - how to use and change your website
=============================================

FILES (keep all 3 in the same folder, with exactly these names)
  index.html     the website itself (you normally never need to edit this)
  settings.js    site name, welcome text, colours, sounds, rounds, compiler service, starter code
  questions.js   all quiz questions and explanations (45 per language, in 3 rounds)

After editing a file: save it, then refresh the page with Ctrl+F5.
If the page says "The site could not start", a comma, quote or bracket was deleted in the file you edited last.
Undo your last change and try again. Edit with Notepad or VS Code, never Word.

WHAT THE SITE DOES
  - Start screen: the visitor first chooses a language. The buttons at the top switch language later.
  - Code runner: write code, press Run (or Ctrl+Enter), see the output.
  - Every language starts with a program that prints "Welcome to CodeLab". Edits are NOT saved:
    refreshing the page brings the welcome program back.
  - Syntax colours: keywords, types, functions, strings, numbers and comments are coloured.
  - Bright / Dark button (top right). The choice is remembered.
  - Typing ( [ { " ' ` also types the closing one. Typing the closer steps over it. Backspace inside a pair
    deletes both. Enter after { ( [ (or a Python ":") indents the next line; Enter between { and } opens a block.
    Typing } on an empty indented line moves it one level left. Tab / Shift+Tab indent / un-indent.
  - Quiz: green = correct, red = wrong, with an explanation of the right answer. A low beep for a wrong answer
    (phones also vibrate), a happy two-note sound for a correct one, a short fanfare for a perfect score.
    The "Sound" button (top right) mutes everything.
  - Rounds: Round 1 (easy) -> Round 2 (medium) -> Round 3 (hard). A PERFECT score (all 10 right) unlocks the next
    round. The site keeps track of which questions a visitor has already seen and picks new ones first, so the same
    quiz does not come back again and again. Progress is remembered in the visitor's own browser.

CHANGE THINGS (settings.js)
  - The welcome text ................... WELCOME_TEXT (do not use double quotes inside it)
  - Site name and tagline .............. SITE.title, SITE.tagline
  - Number of questions per round ...... SITE.questionsPerQuiz
  - Need 100% to open the next round .. SITE.perfectScoreToUnlock (true / false)
  - Round names ........................ SITE.roundNames
  - Random order of questions / answers  SITE.shuffleQuestions, SITE.shuffleOptions
  - Editor colours for keywords, comments, strings, numbers, functions, types:
        SYNTAX_COLORS  (one set for "light" and one for "dark", use hex codes like "#ff8800")
  - Turn off auto brackets or auto indent: EDITOR.autoCloseBrackets, EDITOR.autoIndent
  - Sounds on/off by default, vibration:  SOUNDS.enabledByDefault, SOUNDS.vibrateOnWrong
  - Hide a language .................... delete its line inside LANGUAGES

CHANGE THE QUIZ (questions.js)
  The instructions are at the top of that file. Each question has a  level  (1, 2 or 3 = the round).
  Keep MORE than 10 questions per level so players always get new ones.
  To add a 4th round: give some questions  level: 4  and add a name to SITE.roundNames.

WHAT RUNS WHERE
  JavaScript ... in your browser (stops after 8 seconds to catch infinite loops)
  Python ....... in your browser (Pyodide). First run downloads about 10 MB
  SQL .......... in your browser (SQLite) with a sample "students" table
  C, C++, Java . need an online compiler service. Default: Wandbox (free, no key). It is a shared public
                 service, so it can be slow, limited or change. For a busy site, run your own compiler server
                 and put its address in settings.js -> COMPILER.
  Never put a secret or paid key in settings.js on a public site: anyone can read that file.

PUTTING IT ONLINE (free)
  GitHub Pages: open your repository, click each file, use the pencil (edit) or Add file > Upload files, and commit.
  The live site updates in 1-2 minutes. Press Ctrl+F5 to see changes. You must upload ALL changed files.
