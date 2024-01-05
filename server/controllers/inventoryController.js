const itemModel = require("../models/itemModel")
const addItemsValidation = require("../validations/inventory")

const addItems = async (req, res) => {
    try {
        /* -----------Validations----------- */
        let { name, price, quantity } = req.body
        let validationError = await addItemsValidation(req.body, res)
        if (validationError) {
            return validationError
        }

        /* -----------Business Logic----------- */
        let addItems = await itemModel.create({ name, price, quantity })
        return res.status(201).json({ status: true, message: "Product Added Successfully", data: addItems })
    } catch (error) {
        return res.status(500).json({ status: false, message: error.message })
    }
}
const getItems = async (req, res) => {
    try {
        /* -----------Validations----------- */

        /* -----------Business Logic----------- */
        let getItems = await itemModel.find()
        return res.status(200).json({ status: true, message: "List of Items", data: getItems })
    } catch (error) {
        return res.status(500).json({ status: false, message: error.message })
    }
}

module.exports = { addItems, getItems }