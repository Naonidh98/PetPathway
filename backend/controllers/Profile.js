const Profile = require("../models/Profile");
const User = require("../models/User");

const {
  uploadImageToCloudinary,
  deleteImageFromCloudinary,
} = require("../utils/uploadMedia");

require("dotenv").config();

exports.updateProfile = async (req, res) => {
  try {
    const {
      about = "",
      description = "",
      dob = "",
      contact_no = "",
    } = req.body;

    const { email } = req.user;

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
      message: "Failed to update details.",
      error: err.message,
    });
  }
};

exports.updateProfileImg = async (req, res) => {
  try {
    const userId = req.user._id;
    const profileImg = req.files.image;

    if (!profileImg) {
      return res.status(400).json({
        success: false,
        message: "Image missing.",
      });
    }

    const user = await User.findOne({ _id: userId });

    //remove previous image
    await deleteImageFromCloudinary(user?.profile_image);

    //upload at cloud
    const response = await uploadImageToCloudinary(
      profileImg,
      process.env.MEDIA_FOLDER
    );

    const new_user = await User.findOneAndUpdate(
      { _id: userId },
      {
        profile_image: response.secure_url,
      },
      {
        new: true,
      }
    ).populate("profileId");

    new_user.password = undefined;

    return res.status(200).json({
      success: true,
      message: "Profile image updated",
      data: new_user,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Failed to update",
      error: err.message,
    });
  }
};
