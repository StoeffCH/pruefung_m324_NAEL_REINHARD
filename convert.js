import fs from 'fs';
import { marked } from 'marked';

const inputFile = 'task-3.md';
const outputFile = 'task-3.html';

fs.readFile(inputFile, 'utf8', (error, data) => {
  if (error) {
    console.error(`Fehler beim Lesen der Datei ${inputFile}:`, error);
    process.exit(1);
  }

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Task 3</title>
    </head>
    <body>
      ${marked(data)}
    </body>
    </html>
  `;

  fs.writeFile(outputFile, htmlContent, (error) => {
    if (error) {
      console.error(`Fehler beim Schreiben der Datei ${outputFile}:`, error);
      process.exit(1);
    }
    console.log(`Die Datei ${outputFile} wurde erfolgreich erstellt.`);
  });
});
