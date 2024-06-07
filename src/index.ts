import {app} from './app'
import {SETTINGS} from './settings'
import {Request, Response} from "express";

const products = [
    {id: 1, title: 'tomato'},
    {id: 2, title: 'orange'},
    {id: 3, title: 'banana'},
    {id: 4, title: 'apple'}
]
const addresses = [{id: 1, value: 'Moldagulova 3'}, {id: 2, value: 'Eurasia'}]

app.get('/products', (req:Request, res:Response) => {
    if (req.query.title) {
        let searchString = req.query.title.toString()
        res.send(products.filter(p => p.title.indexOf(searchString) > -1))
    } else {
        res.send(products)
    }
})

// app.get('/products/tomato', (req, res) => {
//     res.send(products.find(el => el.title === 'tomato'))
// })
app.get('/products/:id', (req, res) => {
    let product = products.find(el => el.id === +req.params.id)
    if (product) {
        res.send(product)
    } else {
        res.send(404)
    }

})

app.get('/addresses', (req, res) => {
    res.send(addresses)
})
app.get('/addresses/:id', (req, res) => {
    let address = addresses.find(el => el.id === +req.params.id)
    if (address) {
        res.send(address)
    } else {
        res.send(404)
    }
})

app.listen(SETTINGS.PORT, () => {
    console.log('...server started in port ' + SETTINGS.PORT)
})