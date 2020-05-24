import express, { Router } from 'express';
import appointmentsRouter from './appointments.routes';

const routes = Router();

routes.use(express.json());

routes.use('/appointments', appointmentsRouter);

export default routes;
