const Topic = require('../models/Topic')
const Path = require('../models/Path')
// createTopic,
// deleteTopic,
// getAllTopic,
// getSingleTopic,
// updateTopic


exports.createTopic = async (req, res) => {
     const { title, objective, duration, pathId} = req.body
     console.log(req.body)
    const newTopic = await Topic.create({
      title,
      objective,
      duration,
      paths:pathId
    })
    await Path.findByIdAndUpdate(pathId, { $push: { topics: newTopic._id } })
    res.status(201).json(newTopic)
  }

exports.deleteTopic = async (req, res) => {
    const { id } = req.params
    await Topic.findByIdAndDelete(id)
    res.status(200).json({ messaje: 'Topic deleted' })
  }
  

exports.updateTopic = async (req, res) => {
    const { id } = req.params
    const { title, objective, duration } = req.body
    await Topic.findByIdAndUpdate(id, { title, objective, duration })
    res.status(202).json({ messaje: 'Topic updated' })
  }

exports.getAllTopic = async (req, res) => {
    const paths= await Topic.find().populate('paths')
    res.status(200).json(paths)
  }

exports.getSingleTopic = async (req, res) => {
    const { id } = req.params
    const topic = await Topic.findById(id)
    res.status(200).json(topic)
  }

