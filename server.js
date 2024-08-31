const express = require('express');
const cors = require('cors');
const app = express();
const notificationRouter = require('./notification'); // Adjust the path as necessary

app.use(express.json()); // Middleware to parse JSON request bodies
app.use(cors());
// Register the notification route
app.use('/notification', notificationRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});