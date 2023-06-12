const User = require('../model/User');

const registerUser = async (req, res) => { 
    const { username, password, role, avatarUrl, public_id } = req.body;
    try {
        console.log(username, password, role, avatarUrl, public_id);
        const user = await User.create({
            username,     
            password,
            role,
            avatarUrl,
            public_id
          });
         
          res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Error create user' });
    }
}           

module.exports =
{
    registerUser
}