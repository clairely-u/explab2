import express from 'express';
import Pizza from '../models/Pizza';
const routes = express.Router();

const pizzas: Pizza[] = [
    {name: "Anchovy Pizza", price: 15},
    {name: "Paleo Pizza", price: 10},
    {name: "Dessert Pizza", price: 8}
]

routes.get('/', (req, res) => {
    res.render('homepage');
});

routes.get('/specialtypizzasdetails', (req, res) => {
    const pizzaName: string = req.query.name as string;
    const price: number = Number(req.query.price);
    res.render('specialtypizzasdetails', {
        name: pizzaName,
        price: price
    })
});

routes.get('/byo', (req, res) => {
    res.render('byo')
});

routes.get('/leaveareview', (req, res) => {
    res.render('leaveareview');
});
 

export default routes;

