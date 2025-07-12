import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import productsRouter from './routes/products';
import ordersRouter from './routes/orders';
import { sequelize } from './sequelize';
import './models/order';
import './models/product';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use('/products', productsRouter);
app.use('/orders', ordersRouter);

app.get('/', (req, res) => {
  res.send('Oceans API is running');
});

sequelize.sync({ alter: true })
  .then(() => {
    console.log('Tablas sincronizadas');
    app.listen(port, () => {
      console.log(`Servidor escuchando en el puerto ${port}`);
    });
  })
  .catch((err) => {
    console.error('Error al sincronizar modelos:', err);
  });
