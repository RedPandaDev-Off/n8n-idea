import 'dotenv/config'
import pg from 'pg'
import express from 'express'

// 1. La connexion à la base (comme dans test-db.js)
const pool = new pg.Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
})

// 2. L'application Express
const app = express()

// 3. Une route qui renvoie les meilleures idées
app.get('/api/idees', async (req, res) => {
  const resultat = await pool.query('SELECT id, source, categorie, score, resume, lien, faisable_solo FROM idees WHERE est_un_besoin ORDER BY score DESC LIMIT 20')
  res.json(resultat.rows)
})

// 4. Démarrer le serveur
app.listen(3000, () => {
  console.log('serveur demaré sur http://localhost:3000')
})