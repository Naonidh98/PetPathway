const Category = require("../models/Category");
const Item = require("../models/Item");

//create category
exports.getStoreData = async (req, res) => {
  try {
    //get top categories
    const data1 = await Category.find(
      {},
      {
        title: true,
        thumbnail: true,
        items: true,
      }
    )
      .sort({ _id: -1 })
      .limit(6)
      .exec();

    //get latest added items
    const data2 = await Item.find(
      {},
      {
        title: true,
        price: true,
        discount: true,
        thumbnail: true,
      }
    )
      .sort({ _id: -1 })
      .limit(8)
      .exec();

    const dogItems = await Item.find(
      { item_type: "Dog" },
      {
        title: true,
        thumbnail: true,
        price: true,
      }
    ).limit(10);
    const catItems = await Item.find(
      { item_type: "Cat" },
      {
        title: true,
        thumbnail: true,
        price: true,
      }
    ).limit(10);

    return res.status(200).json({
      success: true,
      data: {
        topCat: data1,
        latest: data2,
        dog: dogItems,
        cat: catItems,
      },
      message: "data fetched for store",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Failed to load store data",
      error: err.message,
    });
  }
};
