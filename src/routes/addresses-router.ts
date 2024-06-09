import {Router} from "express";

const addresses = [{id: 1, value: 'Moldagulova 3'}, {id: 2, value: 'Eurasia'}]

export const addressesRouter = Router({})

addressesRouter.get('/', (req, res) => {
    res.send(addresses)
})
addressesRouter.get('/:id', (req, res) => {
    let address = addresses.find(el => el.id === +req.params.id)
    if (address) {
        res.send(address)
    } else {
        res.send(404)
    }
})

addressesRouter.delete('/:id', (req, res) => {
    for (let i = 0; i < addresses.length; i++) {
        if (addresses[i].id === +req.params.id) {
            addresses.splice(i, 1)
            res.send(204)
        }
    }
    res.send(404)
})