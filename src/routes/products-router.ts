import {Request, Response, Router} from "express";

const products = [
    {id: 1, title: 'tomato'},
    {id: 2, title: 'orange'},
    {id: 3, title: 'banana'},
    {id: 4, title: 'apple'}
]

export const productsRouter = Router({})
productsRouter.get('/', (req: Request, res: Response) => {
    console.log(req.query.title)
    if (req.query.title) {
        let searchString = req.query.title.toString()
        res.send(products.filter(p => p.title.indexOf(searchString) > -1))
    } else {
        res.send(products)
    }
})
productsRouter.post('/', (req: Request, res: Response) => {
    const newProduct = {
        id: +(new Date()),
        title: req.body.title
    }
    products.push(newProduct);
    res.status(201).send(newProduct)
})
productsRouter.get('/:id', (req, res) => {
    console.log('id,req.params.id', req.params.id)
    let product = products.find(el => el.id === +req.params.id)
    console.log('product', product)
    if (product) {
        res.send(product)
    } else {
        res.send(404)
    }

})
productsRouter.put('/:id', (req, res) => {
    let product = products.find(el => el.id === +req.params.id)
    if (product) {
        product.title = req.body.title
        res.send(product)
    } else {
        res.send(404)
    }

})
productsRouter.delete('/:id', (req, res) => {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === +req.params.id) {
            products.splice(i, 1)
            res.send(204)
        }
    }
    res.send(404)
})
