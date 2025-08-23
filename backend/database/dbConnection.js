import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "RESERVATIONS",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to database!");
  } catch (err) {
    console.error(`Error connecting to database: ${err}`);
    process.exit(1); // stops the server if DB connection fails
  }
};

