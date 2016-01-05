# Steps to reproduce

 1. Clone this repo
 2. `npm test`
 3. Examining `out/index.js` reveals the source of the failure. Thee is still an import statement that has not been converted to a require statement.