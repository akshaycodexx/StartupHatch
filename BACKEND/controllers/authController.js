import User from '../models/User.js';


export const register = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password, role } = req.body;
    const user = await User.create({
      email,
      password,
      role,
      profile: { firstName, lastName }
    });
    sendTokenResponse(user, 201, res);
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Please provide an email and password' });
    }

    const user = await User.findOne({ email }).select('+password');

    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    sendTokenResponse(user, 200, res);
  } catch (error) {
    next(error);
  }
};


export const getMe = async (req, res, next) => {
  // req.user is attached by the 'protect' middleware
  res.status(200).json({
    success: true,
    data: req.user
  });
};


const sendTokenResponse = (user, statusCode, res) => {
  const token = user.getSignedJwtToken();
  res.status(statusCode).json({
    success: true,
    token
  });
};
