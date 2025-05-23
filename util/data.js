import Database from "better-sqlite3";

const db = new Database('data/database.sqlite')

db.prepare('CREATE TABLE IF NOT EXISTS recipes (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, content TEXT').run();

export const getRecipes = () => db.prepare("SELECT * FROM recipes").all();

export const getRecipe = (id) => db.prepare("SELECT * FROM recipes WHERE id = ?").get(id);

export const SaveRecipe = (title, content) => db.prepare("UPDATE recipes SET (title, content) VALUES").run(title, content);

export const DeleteRecipe = (id) => db.prepare("DELETE FROM recipes WHERE id = ?").run(id);


const recipes = [
    {title: "Béka", content:"Comb",
        title: "Kacsa", content:"Szárny",
        title: "Csirke", content:"Hát",
        title: "Marha", content:"Steak"
    }
]

