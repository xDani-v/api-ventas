import express from 'express';
import oportunidadVentaController from '../controllers/oportunidad_venta.controller.js';

const router = express.Router();

// Create a new Oportunidad_de_venta
router.post('/', oportunidadVentaController.create);

// Retrieve all Oportunidad_de_venta
router.get('/', oportunidadVentaController.findAll);

// Update a Oportunidad_de_venta with id
router.put('/:id', oportunidadVentaController.update);

// Delete a Oportunidad_de_venta with id
router.delete('/:id', oportunidadVentaController.deleted);

export default router;