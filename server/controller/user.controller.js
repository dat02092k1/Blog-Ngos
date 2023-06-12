const User = require('../model/User');
var img = require('../service/imageHandle.js');     

const getUsers = async (req, res) => { 
    try {
        const users = await User.findAll(); 

        res.status(200).json(users);

    } catch (error) {
        res.status(500).json({ error: 'Error find tasks' });
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
        console.log(username);
        const user = await User.findByPk(id);

        if (!user) {
            return res.status(404).json('cant find user');
        }
        
        if (avatarUrl !== user.avatarUrl && avatarUrl !== undefined) {
            console.log('flag');
            img.deleteImageFromCloudinary(user.public_id); 

            await user.update({
                username, 
                role, 
                avatarUrl, 
                public_id: publicId
            })
            
            res.status(200).json(user);
        }
        else {
             await user.update({
                username, 
                role, 
                avatarUrl
            })

            res.status(200).json(user);
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
            return res.status(404).json('cant find user');
        }
        if((user.public_id)) {
        img.deleteImageFromCloudinary(user.public_id);
        } 
        
        await user.destroy();

        res.status(200).json('delete task successfully');
    } catch (error) {
        res.status(500).json({ error: 'Error deleting user' });
    }
}

module.exports = {
    getUsers, getDetailsUser, editUser, deleteUser
  };
  