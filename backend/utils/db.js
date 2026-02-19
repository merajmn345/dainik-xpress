const mongoose = require("mongoose");

const db_connect = async () => {
    try {
        if (process.env.mode === "production") {
            await mongoose.connect(process.env.db_production_url);
            console.log("production database connected");
        } else {
            await mongoose.connect(process.env.db_production_url);
            console.log("local database connected");
        }
    } catch (error) {
        new Error("Database not connected");
    }
};

module.exports = db_connect;
