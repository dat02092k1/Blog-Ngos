const User = require('../model/User');

const getUsers = async (req, res) => { 
    try {
        const users = await User.findAll(); 

        res.status(200).json(users);

    } catch (error) {
        res.status(500).json({ error: 'Error find tasks' });
    }
}

const addUser = async (req, res) => { 
    const { username, password, role } = req.body;
    try {
        const user = await User.create({
            username,
            password,
            role,
          });
      
          res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Error create user' });
    }
}

module.exports = {
    getUsers, addUser
  };
  