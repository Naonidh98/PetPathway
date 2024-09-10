const Profile = require("../models/Profile");
const User = require("../models/User");

exports.updateProfile = async (req, res) => {
  try {
    const {
      email,
      about = "",
      description = "",
      dob = "",
      contact_no = "",
    } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is missing.",
      });
    }

    const user = await User.findOne({
      email: email,
    });

    //in valid email
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Email is not registered.",
      });
    }

    //find profile
    const userProfile = await Profile.findOne({
      _id: user.profileId,
    });

    userProfile.description = description;
    userProfile.about = about;
    userProfile.dob = dob;
    userProfile.contact_no = contact_no;

    await userProfile.save();

    return res.status(200).json({
      success: true,
      message: "Profile updated successfully.",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Failed to Login",
      error: err.message,
    });
  }
};
