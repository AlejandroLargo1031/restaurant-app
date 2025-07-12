import { Router } from 'express';
import { Order } from '../models/order';
import { Product } from '../models/product';
import { OrderProduct } from '../models/order'; // Asegúrate de importar esto
import { z } from 'zod';

const router = Router();

const orderSchema = z.object({
  products: z.array(z.number()).min(1, 'Debe seleccionar al menos un producto'),
});

router.get('/', async (req, res) => {
  try {
    // Obtener órdenes
    const orders = await Order.findAll({ order: [['id', 'DESC']] });

    // Para cada orden, traer sus productos desde order_products
    const ordersWithProducts = await Promise.all(
      orders.map(async (order) => {
        const orderProducts = await OrderProduct.findAll({
          where: { order_id: order.id },
          attributes: ['id', 'name', 'price']
        });

        return {
          id: order.id,
          total: Number(order.total),
          created_at: order.created_at,
          products: orderProducts
        };
      })
    );

    res.json(ordersWithProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener órdenes' });
  }
});

router.post('/', async (req, res) => {
  try {
    const parseResult = orderSchema.safeParse(req.body);
    if (!parseResult.success) {
      return res.status(400).json({ errors: parseResult.error.errors });
    }

    const { products } = parseResult.data;

    // Buscar productos y calcular total
    const foundProducts = await Product.findAll({ where: { id: products } });

    if (foundProducts.length !== products.length) {
      return res.status(400).json({ error: 'Uno o más productos no existen' });
    }

    const total = foundProducts.reduce((sum, p) => sum + p.price, 0);

    // Crear orden primero
    const order = await Order.create({ total });

    // Insertar los productos como snapshot en la tabla intermedia
    for (const product of foundProducts) {
      await OrderProduct.create({
        order_id: order.id,
        name: product.name,
        price: product.price
      });
    }

    // Consultar productos insertados para devolver respuesta completa
    const orderProducts = await OrderProduct.findAll({
      where: { order_id: order.id },
      attributes: ['id', 'name', 'price']
    });

    res.status(201).json({
      id: order.id,
      total: Number(order.total),
      created_at: order.created_at,
      products: orderProducts
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear orden' });
  }
});

export default router;
