const express = require('express');
const user = require('./routes/user.js');
const upload = require('./routes/upload.js');

const cors = require('cors');
const sequelize = require('./database/database.js');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

async function startApp() {
    try {
      // Sync models with the database
      await sequelize.sync({ alter: true });
      console.log('Database sync successful.');
  
      // Start your application or perform other actions
      // ...
    } catch (error) {
      console.error('Error syncing database:', error);
    }
  }

  startApp(); 

app.use('/api/user', user);
app.use('/api/img', upload);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
