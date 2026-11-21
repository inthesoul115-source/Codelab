CODELAB - how to use and change your website
=============================================

FILES (keep all 4 in the same folder)
  index.html     the website itself (you normally never need to edit this)
  settings.js    site name, tagline, number of questions, compiler service, starter code, sample SQL data
  questions.js   all quiz questions and explanations
  README.txt     this file

OPEN IT
  Double-click index.html. It opens in your browser.
  (Python and SQL download their engines from the internet the first time, so you need to be online.)

HOW TO CHANGE THINGS (use Notepad / VS Code, no HTML needed)
  - Change site name or tagline ......... settings.js -> SITE.title / SITE.tagline
  - Change how many questions per quiz .. settings.js -> SITE.questionsPerQuiz
  - Random or fixed question order ...... settings.js -> SITE.shuffleQuestions (true / false)
  - Change starter code in the editor ... settings.js -> STARTER_CODE
  - Change the SQL practice table ....... settings.js -> SAMPLE_SQL
  - Hide a language ..................... settings.js -> delete its line inside LANGUAGES
  - Add / edit / delete a question ...... questions.js (instructions are at the top of that file)
  - Add a 7th language to the quiz ...... add a new block in questions.js and a new line in LANGUAGES

  Save the file, then refresh the page (F5) to see the change.
  If the page shows "The site could not start", you probably deleted a comma, quote or bracket
  in the file you edited last.

WHAT RUNS WHERE
  JavaScript ... in your browser (stops after 8 seconds to catch infinite loops)
  Python ....... in your browser (Pyodide), first run downloads about 10 MB
  SQL .......... in your browser (SQLite via sql.js) with a sample "students" table
  C, C++, Java . need a compiler SERVER. The site sends the code to the service set in
                 settings.js -> COMPILER and shows the result.

IMPORTANT: THE C / C++ / JAVA COMPILER SERVICE
  The default address (the public Piston server) is only a starting point. Public compiler servers
  can change their rules, require a key or limit usage, and I could not test it from where this
  site was built. For a site you will really publish:
    Option A (best): run your own Piston server (free, open source) and put its address in COMPILER.url
    Option B: use Judge0 (self-hosted or RapidAPI): set provider: "judge0", the url and your key.
  Never put a paid or secret API key in settings.js on a public site, because anyone can read it.
  If you need a key, put a small proxy server in front of it.

PUTTING IT ONLINE (free)
  Upload the whole folder to Netlify Drop (app.netlify.com/drop), GitHub Pages or Cloudflare Pages.
  To change the site later, edit the files and upload the folder again.
