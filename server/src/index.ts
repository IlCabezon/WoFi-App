//from modules
import color from "colors";
//configs
color.enable();
import config from "./configs";
//db
import "./configs/db";
//app
import app from "./app";

app.listen(config.PORT, () => {
  console.log(`Server on port ${config.PORT}`.green.bold);
});
