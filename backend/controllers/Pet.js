const User = require("../models/User");
const Pet = require("../models/Pet");
const {
  uploadImageToCloudinary,
  deleteImageFromCloudinary,
} = require("../utils/uploadMedia");

//create pet
exports.createPet = async (req, res) => {
  try {
    const { name, description, type, age, gender, breed, vaccinated } =
      req.body;
    const userId = req.user._id;
    const img = req?.files?.image || null;

    if (
      !img ||
      !userId ||
      !name ||
      !description ||
      !type ||
      !age ||
      !breed ||
      !vaccinated ||
      !gender
    ) {
      return res.status(400).json({
        success: false,
        message: "Missing requirements",
      });
    }

    //add thumbnail
    const response = await uploadImageToCloudinary(img);

    //create pet
    const data = await Pet.create({
      name,
      description,
      type,
      age,
      breed,
      vaccinated,
      gender,
      owner: userId,
      thumbnail: response.secure_url,
    });

    return res.status(200).json({
      success: true,
      message: "Created Successfully",
      data: data._id,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Failed to create",
      error: err.message,
    });
  }
};

//edit pet
exports.editPet = async (req, res) => {
  try {
    const {
      petId,
      name = "",
      description = "",
      type = "",
      age = "",
      gender = "",
      breed = "",
      vaccinated = "",
    } = req.body;
    const userId = req.user._id;
    const img = req?.files?.image || null;

    if (!petId) {
      return res.status(400).json({
        success: false,
        message: "Missing Id",
      });
    }

    const pet = await Pet.findOne({ _id: petId });

    if (name !== "") {
      pet.name = name;
    }
    if (description !== "") {
      pet.description = description;
    }
    if (type !== "") {
      pet.type = type;
    }
    if (age !== "") {
      pet.age = age;
    }
    if (gender !== "") {
      pet.gender = gender;
    }
    if (vaccinated !== "") {
      pet.vaccinated = vaccinated;
    }
    if (breed !== "") {
      pet.breed = breed;
    }

    if (img !== null) {
      await deleteImageFromCloudinary(pet.thumbnail);
      const newImg = await uploadImageToCloudinary(img);
      pet.thumbnail = newImg.secure_url;
    }

    await pet.save();

    return res.status(200).json({
      success: true,
      message: "edit Successfully",
      data: pet._id,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Failed to create",
      error: err.message,
    });
  }
};

//delete pet
exports.deletePet = async (req, res) => {
  try {
    const { petId } = req.body;

    if (!petId) {
      return res.status(400).json({
        success: false,
        message: "Missing Id",
      });
    }

    const data = await Pet.findOneAndDelete({ _id: petId });

    await deleteImageFromCloudinary(data.thumbnail);

    data.media.forEach(async (img) => {
      await deleteImageFromCloudinary(img);
    });

    return res.status(200).json({
      success: true,
      message: "delete Successfully",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Failed to create",
      error: err.message,
    });
  }
};

//add media
exports.addMedia = async (req, res) => {
  try {
    const { petId } = req.body;
    const img = req?.files?.image || null;

    if (!img) {
      return res.status(400).json({
        success: false,
        message: "Missing requirements",
      });
    }

    //add thumbnail
    const response = await uploadImageToCloudinary(img);

    await Pet.findByIdAndUpdate(
      {
        _id: petId,
      },
      {
        $push: {
          media: response.secure_url,
        },
      }
    );

    return res.status(200).json({
      success: true,
      message: "Media added",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Failed to add",
      error: err.message,
    });
  }
};

//remove media
exports.removeMedia = async (req, res) => {
  try {
    const { petId, media } = req.body;

    if (!media || !petId) {
      return res.status(400).json({
        success: false,
        message: "Missing requirements",
      });
    }

    //remove thumbnail
    await deleteImageFromCloudinary(media);

    await Pet.findByIdAndUpdate(
      {
        _id: petId,
      },
      {
        $pull: {
          media: media,
        },
      }
    );

    return res.status(200).json({
      success: true,
      message: "Media removed",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Failed to add",
      error: err.message,
    });
  }
};

//get pet details
exports.getPetDetails = async (req, res) => {
  try {
    const { petId } = req.body;

    if (!petId) {
      return res.status(400).json({
        success: false,
        message: "Missing requirements",
      });
    }

    const data = await Pet.findOne({ _id: petId })
      .populate("owner", "firstName lastName email")
      .exec();

    return res.status(200).json({
      success: true,
      message: "successfully",
      data,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch",
      error: err.message,
    });
  }
};
