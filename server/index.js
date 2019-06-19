import express from 'express';


const app = express();


app.use(express.json())

const PORT = process.env.PORT || 2500;

app.get('/', (req, res) => res.send({
  status: 200,
  message: 'Welcome to ~sequelize App by Damilola Adekoya',
}));


app.listen(PORT, () => {
  console.log('server working')
});

export default app;