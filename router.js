const express = require('express')
const router = express.Router()
​
router.use(function timeLog (req, res, next){
    const date = new Date()
    console.log(`Time: ${date.toString()}`)
    next()
})
​
//http://localhost:5050/student/
//curl http://localhost:5050/student/
router.get('/', (req, res)=>{
    res.send('Welcome to Student page')    
})
​
//http://localhost:5050/student/search?id=123&name=Jack
//curl http://localhost:5050/student/search?id=123\&name=Jack
//Student id:123 name:Jack
router.get('/search', (req, res)=>{
    const id = req.query.id
    const name = req.query.name
    res.send(`Student id:${id} name:${name}`)    
})
​
//http://localhost:5050/student/id/123
router.get('/id/:id', (req, res)=>{
    const studentId = req.params.id
    res.send(`Student id = ${studentId}`)    
})
//http://localhost:5050/static/
//curl --data "firstName=Jack&id=123" http://localhost:5050/student/
//POSTMAN URL
//http://localhost:5050/student/
//x-www-form-urlencoded 
router.post('/', (req, res)=>{
    const firstName = req.body.firstName
    res.send(`${firstName} added`)    
})
​
//http://localhost:5050/student/
//x-www-form-urlencoded
router.put('/', (req, res)=>{
    const studentId = req.body.id
    const firstName = req.body.firstName
    res.send(`Update student id:${studentId} with new firstName:${firstName}`)    
})
//http://localhost:5050/student/id/123
router.delete('/id/:id', (req, res)=>{
    const studentId = req.params.id
    res.send(`${studentId} removed`)    
})
​
module.exports = router