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

const getDetailsUser = async (req, res) => {
    const { id } = req.params;
    try {
        if (!id) {
            return res.status(400).json('cant find user');
        }

        const user = await User.findByPk(id);

        if (!user) {
            return res.status(404).json('cant find user');
        }
        else {
            res.status(200).json(user);
        }

    } catch (error) {
        res.status(500).json({ error: 'Cant find user' });
    }
}

const editUser = async (req, res) => {
    const { id } = req.params;
    const { username, role, avatarUrl, publicId } = req.body; 
    try {
        if (!id) {
            return res.status(400).json('cant find user');
        }

        const user = await User.findByPk(id);

        if (!user) {
            return res.status(404).json('cant find user');
        }
        
        if (avatarUrl !== user.avatarUrl) {
            await user.update({

            })
        }

    } catch (error) {
        res.status(500).json({ error: 'Cant find user' });
    }
}

const deleteUser = async (req, res) => { 
    const { id } = req.params;

    try {        
        const user = await User.findByPk(id);
      
        if (!user) {
            return res.status(404).json('cant find task');
        }
   
        await task.destroy();

        res.status(200).json('delete task successfully');
    } catch (error) {
        res.status(500).json({ error: 'Error deleting task' });
    }
}

module.exports = {
    getUsers, addUser, getDetailsUser, editUser
  };
  