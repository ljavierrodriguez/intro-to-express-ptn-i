const express = require('express')
const path = require('path');
const router = require('./routes/index');
const PORT = 3000;

const app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs")

app.use(express.static(path.join(__dirname, 'public')));

app.use(router)

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})
