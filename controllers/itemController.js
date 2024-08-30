const Item = require('../models/item');

exports.createItem = async (req, res) => {
    try {
        const { name, quantity, description } = req.body;
        const newItem = new Item({ name, quantity, description });
        await newItem.save();
        res.status(201).send(newItem);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

exports.getAllItems = async (req, res) => {
    try {
        const items = await Item.find();
        res.send(items);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getItemById = async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (!item) {
            return res.status(404).send('Item not found');
        }
        res.send(item);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.updateItem = async (req, res) => {
    try {
        const { name, quantity, description } = req.body;
        const item = await Item.findByIdAndUpdate(
            req.params.id,
            { name, quantity, description },
            { new: true }
        );
        if (!item) {
            return res.status(404).send('Item not found');
        }
        res.send(item);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

exports.deleteItem = async (req, res) => {
    try {
        const item = await Item.findByIdAndDelete(req.params.id);
        if (!item) {
            return res.status(404).send('Item not found');
        }
        res.send('Item deleted');
    } catch (error) {
        res.status(500).send(error.message);
    }
};
