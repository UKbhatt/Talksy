const mongoose = require('mongoose');
require('dotenv').config({ path: '../../.env' });

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
        });

        console.log("✅ MongoDB connected via Mongoose");
    } catch (error) {
        console.error("❌ Mongoose connection error:", error);
    }
}

module.exports = {connectDB} ;
