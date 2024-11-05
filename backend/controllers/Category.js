const Category = require("../models/Category");
const {
  uploadImageToCloudinary,
  deleteImageFromCloudinary,
} = require("../utils/uploadMedia");

//create category
exports.createCategory = async (req, res) => {
  try {
    const { title, description } = req.body;
    const image = req?.files?.image || null;

    if (!image || !title || !description) {
      return res.status(400).json({
        success: false,
        message: "Missing requirements",
      });
    }

    const response = await uploadImageToCloudinary(image);

    const cat = await Category.create({
      title: title,
      description: description,
      thumbnail: response.secure_url,
    });

    return res.status(200).json({
      success: true,
      message: `Category '${title}' created`,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Failed to create Category.",
      error: err.message,
    });
  }
};

//edit category
exports.editCategory = async (req, res) => {
  try {
    const { categoryId, title, description } = req.body;
    const image = req?.files?.image || null;

    if (!categoryId) {
      return res.status(400).json({
        success: false,
        message: "Missing category id",
      });
    }

    if (!title && !description && !image) {
      return res.status(400).json({
        success: false,
        message: "Provide atleast one field",
      });
    }

    const category = await Category.findOne({ _id: categoryId });

    if (title) {
      category.title = title;
    }
    if (description) {
      category.description = description;
    }

    if (image) {
      await deleteImageFromCloudinary(category?.thumbnail);
      const response = await uploadImageToCloudinary(image);
      category.thumbnail = response.secure_url;
    }

    await category.save();

    return res.status(200).json({
      success: true,
      message: "Category updated successfully",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Failed to edit Category.",
      error: err.message,
    });
  }
};

//delete category
exports.deleteCategory = async (req, res) => {
  try {
    const { categoryId } = req.body;

    if (!categoryId) {
      return res.status(400).json({
        success: false,
        message: "Missing category id",
      });
    }

    const category = await Category.findOneAndDelete({ _id: categoryId });

    await deleteImageFromCloudinary(category?.thumbnail);

    return res.status(200).json({
      success: true,
      message: "Category deleted successfully",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Failed to delete Category.",
      error: err.message,
    });
  }
};

//get items from category
exports.getCategoryItems = async (req, res) => {
  try {
    const { categoryId } = req.body;

    if (!categoryId) {
      return res.status(400).json({
        success: false,
        message: "Missing category id",
      });
    }

    const category = await Category.find({ _id: categoryId })
      .populate({
        path: "items",
      })
      .exec();

    return res.status(200).json({
      success: true,
      message: "data fetched successfully",
      data: category?.item,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Failed to get items.",
      error: err.message,
    });
  }
};

//get categories
exports.getCategories = async (req, res) => {
  try {
    const data = await Category.find({});

    return res.status(200).json({
      success: true,
      message: "Categories fetched successfully",
      data,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch Category.",
      error: err.message,
    });
  }
};
