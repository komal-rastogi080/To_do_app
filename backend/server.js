const app = require('./src/app.js');
require('dotenv').config();
const port = process.env.PORT;
const connectDB = require('./src/config/db.js');

connectDB();
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});