const joi = require('joi')

const joiAddItemsCheck = (data) => {
    
    const schema = joi.object({
        name: joi.string().trim().regex(/^[a-zA-Z ]+$/).message("Name should contain only English letters"),
        price: joi.number().positive().message("Price should be a positive number"),
        quantity: joi.number().positive().message("Quantity should be a positive number")
    })
    return schema.validate(data)
}
module.exports = joiAddItemsCheck