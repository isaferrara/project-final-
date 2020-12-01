import axios from 'axios'


const baseURL = 'http://localhost:3000/api/path'

const pathService = axios.create({ baseURL })

export const getAllPaths = () => pathService.get('')

export const getSinglePath = id => pathService.get(`/${id}`)
    
export const createPath = project => pathService.post(`/create`, project)
    
export const updatePath = (id, project) => pathService.put(`/${id}`, project)
    
 export const deletePath = id => pathService.delete(`/${id}`) 