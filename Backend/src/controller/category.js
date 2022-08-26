const express = require('express')

const Category = require('../model/category.model')

const router = express.Router()

router.get('/', async(req,res)=>{
    const data = await Category.find().lean().exec()
    res.status(200).send(data)
})

router.get('/:id', async(req,res)=>{

    let {id} = req.params
   
   const data = await Category.findById(id).lean().exec()

    res.status(200).send(data)
})

router.post('/', async(req,res)=>{
    let request = req.body
    const data = await Category.create(request)

    res.status(201).send(data)
})

router.patch('/:id', async(req,res)=>{

    let {id} = req.params
   
   const data = await Category.findByIdAndUpdate(id,req.body,{new:true}).lean().exec()

    res.status(200).send(data)
})

router.delete('/:id', async(req,res)=>{

    let {id} = req.params
   
   const data = await Category.findByIdAndDelete(id).lean().exec()

    res.status(200).send(data)
})

module.exports = router
