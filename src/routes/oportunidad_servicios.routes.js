import express from 'express';
import oportunidadServiciosController from '../controllers/oportunidad_servicios.controller.js';

const router = express.Router();

// Create a new Oportunidad_Servicios
router.post('/', oportunidadServiciosController.create);

// Retrieve all Oportunidad_Servicios
router.get('/', oportunidadServiciosController.findAll);

// Update a Oportunidad_Servicios with id
router.put('/:id', oportunidadServiciosController.update);

// Delete a Oportunidad_Servicios with id
router.delete('/:id', oportunidadServiciosController.deleted);

export default router;