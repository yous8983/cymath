const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;



app.use(cors({
 *: 'http://localhost:3001/api/courses' // Remplacez par l'origine autorisée
}));

app.use(express.json());


const courses = [
  { id: 1, title: 'Algèbre', description: 'Cours sur les structures algébriques.' },
  { id: 2, title: 'Analyse', description: 'Cours sur les fonctions et les limites.' },
  // Ajoutez d'autres cours ici
];

// Récupérer tous les cours
app.get('/api/courses', (req, res) => {
  res.json(courses);
});

// Récupérer un cours par ID
app.get('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send('Cours non trouvé.');
  res.json(course);
});

// Ajouter un nouveau cours
app.post('/api/courses', (req, res) => {
  const course = {
    id: courses.length + 1,
    title: req.body.title,
    description: req.body.description,
  };
  courses.push(course);
  res.status(201).json(course);
});

// Mettre à jour un cours existant
app.put('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send('Cours non trouvé.');

  course.title = req.body.title;
  course.description = req.body.description;
  res.json(course);
});

// Supprimer un cours
app.delete('/api/courses/:id', (req, res) => {
  const courseIndex = courses.findIndex(c => c.id === parseInt(req.params.id));
  if (courseIndex === -1) return res.status(404).send('Cours non trouvé.');

  const deletedCourse = courses.splice(courseIndex, 1);
  res.json(deletedCourse);
});


app.listen(port, () => {
  console.log(`Serveur à l'écoute sur le port ${port}`);
});
