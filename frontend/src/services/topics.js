import axios from 'axios'

const baseURL = 'http://localhost:3000/api/topic'

const pathService = axios.create({ baseURL })

export const getAllPaths = () => pathService.get('')

export const getSinglePath = id => pathService.get(`/${id}`)
    
export const createTopic =  path => pathService.post(`/create`, path)
    
export const updatePath = (id, path) => pathService.put(`/${id}`, path)
    
 export const deletePath = id => pathService.delete(`/${id}`) 