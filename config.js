const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "1sJwkBAA#IK71QZEVNioLk1MIPnb-Pyr6Iz67yKtbfuPx3NuSFOk",
  MONGODB: process.env.MONGODB || "mongodb://mongo:nuBfkxuNdaDLFonEHoeKBqMGvWKtbsOJ@mainline.proxy.rlwy.net:39340",
  OWNER_NUM: process.env.OWNER_NUM || "94760091093",
};
