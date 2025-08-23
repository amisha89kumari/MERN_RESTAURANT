
import { dbConnection } from "./database/dbConnection.js";
import app from "./app.js";

const PORT = process.env.PORT || 5000;

// Connect to database first
dbConnection().then(() => {
  app.listen(PORT, () => {
    console.log(`SERVER HAS STARTED AT PORT ${PORT}`);
  });
});
