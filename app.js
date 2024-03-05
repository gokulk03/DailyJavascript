import express from 'express'
const app = express()

import {
    getnotes,getNote,createNote
} from './database.js'

app.use(express.json())

app.get('/notes',async(req,res)=>{
    const notes = await getnotes()
    res.send(notes)

})

app.get('/notes/:id',async(req,res)=>{
    const id = req.params.id
    const note = await getNote(id)
    res.send(note)
})

app.post("/notes",async(req,res)=>{
    const {title,contents}= req.body
    const note = await createNote(title,contents)
    res.status(201).send(note)
})

app.use((err,req,res,next)=>{
    console.log(err.stack)
    res.status(500).send('Something broke')

})

app.listen(8080,()=>{
    console.log('Server is running on PORT: 8080')
})