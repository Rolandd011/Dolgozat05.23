import express from 'express';
import * as db from './util/data.js';

const app = express();

app.use(express.json());
const PORT = 8080;

app.get('/recipes', (req, res)=>{
    try{
        const recipes = get.recipes();
        res.status(200).json({message: 'Database Error' + err.message})
    }catch(err){
        return res.status(500).json({message: 'Database Error' + err.message})
        
    }
})

app.get('/recipes/:id', (req, res)=>{
    try{
        const recipes = db.getRecipe(req.params.id)
        if(!recipes){
            return res.status(404).json({message: 'Not found'})
        }
        res.status(200).json(recipes)
    }catch(err){
        return res.status(500).json({message: 'Database Error' + err.message})
    }
})

app.post('/recipes', (req, res)=>{
    try{
        const {title, content} = req.body;
        if(!title || !content){
            return res.status(400).json({message: 'Invalid'})
        }
        const Saved = db.Saved(title, content);
        if(Saved.lastInsertRowid === undefined){
            return res.status(501).json({message: 'Save failed'})
        }
        res.status(201).json(id, lastInsertRowid, title, content)
    }catch(err){
        return res.status(500).json({message: 'Database Error' + err.message})
        
    }
})


app.delete('/recipes/:id', (req, res)=>{
    try{
        const deletedRecipes = db.DeleteRecipe(req.params.id)
        if(deletedRecipes.changes !== 1){
            return res.status(404).json({message: 'Not found'})
        }
        res.status(204).json(message: 'Delete succesful')
    }catch(err){
        return res.status(500).json({message: 'Database Error' + err.message})
    }
})

app.listen(PORT, () =>{
    console.log(`App listens on ${PORT}`)
})