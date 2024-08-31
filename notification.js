const express = require('express');
const router = express.Router();
require('dotenv').config();

const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

async function sendNotification(message) {
    const chatId = process.env.TELEGRAM_BOT_CHAT_ID
    const botToken = process.env.TELEGRAM_BOT_API_TOKEN
    // const message = 'The server has successfully sent an email.';

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`)
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                console.log('Telegram notification sent:', data);
                return data;
            } else {
                console.error('Error sending Telegram notification:', data);
            }
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
}

// Handle POST requests to /test
router.post('/', asyncHandler(async (req, res) => {
    try {
        const message = 'This is a message passed outside the function';
        const data = await sendNotification(message);
        res.status(200).json({ message: 'Notification Sent Successfully!', data: data }); // Send back the successful response
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' }); // Return error response
    }
}));

module.exports = router;