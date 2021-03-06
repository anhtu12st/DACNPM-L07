const { body } = require('express-validator');

const User = require('../models/user');
const { createToken, hashPassword, verifyPassword } = require('../utils/authentication');

exports.signup = async (req, res, next) => {
  try {
    const { username, email } = req.body;

    const hashedPassword = await hashPassword(req.body.password);

    const userData = {
      username,
      email,
      password: hashedPassword,
    };

    const existingEmail = await User.findOne({
      email: userData.email,
    });

    if (existingEmail) {
      return res.status(400).json({
        message: 'Email already exists.',
      });
    }

    const existingUsername = await User.findOne({
      username: userData.username,
    });

    if (existingUsername) {
      return res.status(400).json({
        message: 'Username already exists.',
      });
    }

    const newUser = new User(userData);
    const savedUser = await newUser.save();

    if (savedUser) {
      const token = createToken(savedUser);
      delete savedUser.password;

      return res.json({
        message: 'User created!',
        token,
        userInfo: savedUser,
      });
    }
    return res.status(400).json({
      message: 'There was a problem creating your account.',
    });
  } catch (error) {
    next(error)
  }
};

exports.authenticate = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({
      username,
    });

    if (!user) {
      return res.status(403).json({
        message: 'Wrong username or password.',
      });
    }

    const passwordValid = await verifyPassword(password, user.password);

    if (passwordValid) {
      const token = createToken(user);
      delete user.password;

      res.json({
        message: 'Authentication successful!',
        token,
        userInfo: user,
      });
    } else {
      res.status(403).json({
        message: 'Wrong username or password.',
      });
    }
  } catch (error) {
    next(error);
  }
};

exports.listUsers = async (req, res, next) => {
  try {
    const { sortType = '-created' } = req.body;
    const users = await User.find().sort(sortType);
    res.json(users);
  } catch (error) {
    next(error);
  }
};

exports.search = async (req, res, next) => {
  try {
    const users = await User.find({ username: { $regex: req.params.search, $options: 'i' } });
    res.json(users);
  } catch (error) {
    next(error);
  }
};

exports.find = async (req, res, next) => {
  try {
    const user = await User.findOne({ _id: req.params.userId }).populate('posts').populate('groups');
    delete user.password;
    res.json(user);
  } catch (error) {
    next(error);
  }
};

exports.validateUser = [
  body('username')
    .exists()
    .trim()
    .withMessage('is required')

    .isLength({ min: 6 })
    .withMessage('must be at least 6 characters long')

    .notEmpty()
    .withMessage('cannot be blank'),

  body('password')
    .exists()
    .trim()
    .withMessage('is required')

    .notEmpty()
    .withMessage('cannot be blank')

    .isLength({ min: 6 })
    .withMessage('must be at least 6 characters long')

    .isLength({ max: 50 })
    .withMessage('must be at most 50 characters long'),
];

exports.updateUser = async (req, res, next) => {
  try {
    if (!req.user)
      return res.status(403).json({
        message: "You haven't logged in",
      });
    if (req.params.userId !== req.user.id)
      return res.status(403).json({
        message: "You are not allowed to change other's information",
      });
    // const { oldPassword, password, email, profilePhoto, role } = req.body;
    const { email, profilePhoto, role, firstName, lastName } = req.body;
    // const hashedPassword = await hashPassword(password);
    const user = await User.findOne({ _id: req.user.id });
    if (!user)
      return res.status(400).json({
        message: 'User not found',
      });
    // const passwordValid = await verifyPassword(oldPassword, user.password) : true;
    // if (!passwordValid) {
    //   return res.status(401).json({ message: 'Incorrect old password' });
    // }
    // if (oldPassword === password) {
    //   return res.status(400).json({ message: 'Old and new password cannot be the same' });
    // }
    // if (password) user.password = hashedPassword;
    if (email) user.email = email;
    if (role) user.role = role;
    if (profilePhoto) user.profilePhoto = profilePhoto;
    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;


    const newUser = await user.save();
    const token = createToken(newUser);
    delete newUser.password;

    return res.json({
      message: 'Authentication successful!',
      token,
      userInfo: newUser,
    });
  } catch (err) {
    next(err);
  }
};

exports.getAuthInfo = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        message: 'Not signed in',
      });
    }
    const user = await User.findOne({ _id: req.user.id, email: req.user.email, role: req.user.role });

    if (!user) {
      return res.status(401).json({
        message: 'Invalid token',
      });
    }
    return res.status(200).json({
      message: 'Success',
      data: {
        user: req.user,
      },
    });
  } catch (error) {
    next(error);
  }
};

exports.findGroupFollowing = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        message: 'Not signed in',
      })
    }
    const userGroup = await User.findById(req.user.id).populate('groups')
    res.status(200).json(userGroup.groups)
  } catch (error) {
    res.status(401).json({message: error})
  }
}

exports.isJoinGroupByID = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        message: 'Not signed in',
      })
    }
    const { id } = req.params
    const userGroup = await User.findOne({_id: req.user.id})
    const ret = (userGroup.groups.findIndex(x => x.toString() == id) > -1)
    res.json(ret)  
  } catch (error) {
    res.status(401).json({message: error})
  }
}

exports.resetJoinGroupByID = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        message: 'Not signed in',
      })
    }
    const { id } = req.params
    const ObjectId = require('mongoose').Types.ObjectId
    const user = await User.findOne({_id: req.user.id})
    const userGroup = user.groups
    const indx = userGroup.findIndex(x => x.toString() == id)
    if (indx > -1) userGroup.splice(indx, 1)
    else userGroup.push(new ObjectId(id))
    await User.findOneAndUpdate({_id: req.user.id}, {groups: userGroup})
  } catch (error) {
    res.status(401).json({message: error})
  }
}