const loginService = require('../services/loginService');

const getUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await loginService.getUser({ email, password });
    // console.log(token);
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(404).json({ message: 'Not found' });
  }
};

module.exports = {
  getUser,
};