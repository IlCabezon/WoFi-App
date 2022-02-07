//from modules
import mongoose, { ConnectOptions } from "mongoose";
import color from "colors";
//config
import config from "./";
color.enable();

(async () => {
  try {
    const db = await mongoose.connect(config.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);
    console.log(`MongoDB connected to: ${db.connection.name}`.red.bold);
  } catch (err) {
    console.log("Error ocurred in dbConnect");
    //console.log(err);
  }
})();
