import { Router } from 'express';
import { Product } from '../models/product';
import { z } from 'zod';

const router = Router();

const productSchema = z.object({
  name: z.string().min(1, 'El nombre es requerido'),
  price: z.number().positive('El precio debe ser mayor a cero'),
});

router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll({ order: [['id', 'DESC']] });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener productos' });
  }
});

router.post('/', async (req, res) => {
  try {
    const parseResult = productSchema.safeParse(req.body);
    if (!parseResult.success) {
      return res.status(400).json({ errors: parseResult.error.errors });
    }
    const { name, price } = parseResult.data;
    const product = await Product.create({ name, price });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear producto' });
  }
});

export default router; 