import express from 'express';
import ProductRouter from './routes/product.router';
import OrderRouter from './routes/order.router';

const app = express();

app.use(express.json());

app.use(ProductRouter);
app.use(OrderRouter);

export default app;
