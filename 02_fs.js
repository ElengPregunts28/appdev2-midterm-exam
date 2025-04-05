const fs = require('fs');

fs.writeFile("message.txt", 'Node.js is awesome!', (err) => {
  if (err) {
    console.error("Error writing to file:", err);
  }

  console.log("File created and data written successfully.");

  fs.readFile('message.txt', 'utf8', (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
    }
    console.log("File contents:", data);


    fs.unlink("message.txt", (err) => {
      if (err) {
        console.error("Error deleting the file:", err);
      }
      console.log("File deleted successfully.");
    });
  });
});