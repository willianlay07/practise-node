import mongoose from "mongoose";
import { app } from "./app.js";

// Connection to DB -- START;
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {})
  .then((con) => {
    console.log("MongoDB is connected");
  })
  .catch((error) => {
    console.log(error);
  });
// Connection to DB -- END;

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
