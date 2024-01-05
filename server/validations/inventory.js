const joiAddItemsCheck = require("./joiInventory")

const addItemsValidation = (req, res) => {
    let { name, price, quantity } = req
    if (!name) {
        return res.status(400).json({ status: false, message: "Please enter name" })
    }
    if (!price) {
        return res.status(400).json({ status: false, message: "Please enter price" })
    }
    if (!quantity) {
        return res.status(400).json({ status: false, message: "Please enter quantity" })
    }
    /* Joi Validation */
 
    const { error } = joiAddItemsCheck(req);
    if (error) {
        console.log(error.details[0])
        console.log("reached")
        return res.status(400).json({ status: false, message: error.details[0].message });
    }
}
module.exports = addItemsValidation