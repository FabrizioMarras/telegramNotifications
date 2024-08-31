# Telegram Notification System
This project provides a simple way to send Telegram notifications from a Node.js/Express server. It can be triggered via an HTTP POST request and uses the Telegram Bot API to send messages.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## Prerequisites
- Node.js and npm installed on your machine.
- A Telegram account.
- A Telegram bot created via BotFather (you'll need the bot token).
- Your chat ID where the bot will send notifications.

## Setup Instructions
### 1. Clone the Repository
First, clone the repository to your local machine:

```bash
git clone https://github.com/FabrizioMarras/telegramNotifications.git
cd your-repo
```

### 2. Install Dependencies
Navigate to the project directory and install the required dependencies:

```bash
npm install
```

This will install express, dotenv, and cors.

### 3. Configure Environment Variables
Create a `.env` file in the root of your project directory and add the following environment variables:

```env
TELEGRAM_BOT_CHAT_ID=your_chat_id
TELEGRAM_BOT_API_TOKEN=your_bot_token
PORT=3000 # or any other port you want your server to run on
```

Replace `your_chat_id` with your Telegram chat ID.
Replace `your_bot_token` with the API token you received from BotFather.

### 4. Run the Server
Start the server using the following command:

```bash
node server.js
```

The server will start running on the port specified in the `.env` file (default is 3000).

### 5. Trigger the Notification
To trigger the Telegram notification, open the `index.html` file in a browser and click the `Notify Me` button. IF all works well you should receive a notification on your Telegram account from your Telegram Bot, and a window pop up saying `Notification sent successfully!`.

### 6. Customize the Notification
The notification message sent to Telegram is defined in the `sendNotification` function in `notification.js` file. You can customize the message from the BOT by modifying the `message` variable.

### 7. Deploy the Application
Once you've tested everything locally, you can deploy the server to your preferred hosting environment (e.g., DigitalOcean, Heroku) to make it accessible online.

## Troubleshooting
- **Internal Server Error:** Ensure your environment variables are correctly configured in the .env file.
- **No Notification Received:** Double-check the bot token and chat ID in your `.env` file. Make sure the bot has started and the chat ID is correct.
- **CORS Issues:** If you're calling the API from a different domain, ensure that CORS is properly configured in `server.js`.

## License
This project is open-source and available under the **MIT** License.