const productSchema = require("../model/product.model");

exports.createProduct = async (req, res) => {
  try {
    const productInfoObtained = {
      id: req.body.id,
      name: req.body.name,
      description: req.body.description,
      cost: req.body.cost,
    };

    const productCreate = await productSchema.create(productInfoObtained);

    console.log(productCreate);

    res.status(200).send({
        message : "Product has been created successfully!"
    })
  } catch (err) {
    console.log(err);
    res.status(500).send({
        message : "Due to some internal error product is not created successfully!"
    })
  }
};

exports.updateProduct = async(req,res) =>{
    try{
        const product = await productSchema.findOne({id : req.body.id})

        if(product){
            console.log("Given Prodduct exists : "+ product);
        }else{
            console.log("Reqursted product does not exists in the database!")
        }

        const productUpdate = await productSchema.updateOne({name : "Kids Wearing Section"});

        
    }catch(err){

    }
}
