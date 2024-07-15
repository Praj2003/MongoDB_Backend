const categoryModel = require("../model/category.model");

exports.createCategory = async (req, res) => {
  try {
    const categoryObj = {
      id: req.body.id,
      name: req.body.name,
      description: req.body.description,
    };

    const categoryCreated = await categoryModel.create(categoryObj);
    console.log(categoryCreated);
    res.status(200).send({
        message : "Given Category has beem created successfully!"
    })
  } catch (err) {
    res.status(500).send({
        message : "There is some error while creating the category!"
    })
  }
};


