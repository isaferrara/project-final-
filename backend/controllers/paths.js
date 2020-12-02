const Path = require('../models/Path')
const Topic = require('../models/Topic')


//   createPath,
//   deletePath,
//   getAllPaths,
//   getSinglePath,
//   updatePath

exports.createPath = async (req, res) => {
    const { title, description, category} = req.body
    const newPath = await Path.create({
      title,
      description,
      category,
    })
    console.log(newPath)
    res.status(201).json( newPath)
  }

  exports.deletePath = async (req, res) => {
    const { id } = req.params
    await Path.findByIdAndDelete(id)
    res.status(200).json({ message: 'Path deleted' })
  }
  
exports.updatePath = async (req, res) => {
    const { id } = req.params
    const { title, description, category } = req.body
    await Path.findByIdAndUpdate(id, { title, description, category })
    res.status(202).json({ message: 'Project updated' })
  }

exports.getAllPaths = async (req, res) => {
    const paths= await Path.find().populate('topics')
    console.log(paths)
    res.status(200).json(paths)
  }

exports.getSinglePath = async (req, res) => {
    const { id } = req.params
    const path = await Path.findById(id).populate('topics')
    console.log(path)
    res.status(200).json(path)
  }