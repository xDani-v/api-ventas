import Oportunidad_Servicios from '../models/oportunidad_servicios.model.js';

// Create
const create = async (req, res) => {
    try {
        const oportunidad_servicio = await Oportunidad_Servicios.create(req.body);
        res.status(201).send(oportunidad_servicio);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Read
const findAll = async (req, res) => {
    try {
        const oportunidad_servicios = await Oportunidad_Servicios.findAll();
        res.send(oportunidad_servicios);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

//update
const update = async (req, res) => {
    try {
        await Oportunidad_Servicios.update(req.body, {
            where: { id: req.params.id }
        });
        res.send({ message: 'Oportunidad_Servicios was updated successfully.' });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Delete
const deleted = async (req, res) => {
    try {
        await Oportunidad_Servicios.destroy({
            where: { id: req.params.id }
        });
        res.send({ message: 'Oportunidad_Servicios was deleted successfully.' });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

export default {
    create,
    findAll,
    update,
    deleted
};