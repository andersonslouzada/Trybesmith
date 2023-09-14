import express from 'express';
import ProductRouter from './routes/product.router';
import OrderRouter from './routes/order.router';
import LoginRouter from './routes/login.router';
import authLogin from './middlewares/authLogin.middleware';

const app = express();

app.use(express.json());

app.use(ProductRouter);
app.use(OrderRouter);
app.use(LoginRouter);

app.use(authLogin);

export default app;
