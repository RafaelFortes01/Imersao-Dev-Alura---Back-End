import express from 'express';


const posts = [
   {
      id: 1,
      descricao: "Uma foto",
      imagem: "https://placecats.com/millie/300/150"
   },
   {
      id: 2,
      descricao: "Um gato brincando no jardim",
      imagem: "https://placecats.com/millie/300/150"
   },
   {
      id: 3,
      descricao: "Gato curioso olhando pela janela",
      imagem: "https://placecats.com/millie/300/150"
   },
   {
      id: 4,
      descricao: "Hora da soneca do gatinho",
      imagem: "https://placecats.com/millie/300/150"
   },
   {
      id: 5,
      descricao: "Gato elegante em um sofá",
      imagem: "https://placecats.com/millie/300/150"
   },
   {
      id: 6,
      descricao: "Gatinho observando as estrelas",
      imagem: "https://placecats.com/millie/300/150"
   }
];

const app = express();

app.use(express.json());

app.listen(3000, () => {
   console.log('Servidor escutando...');
});

app.get('/posts', (req, res) => {
   res.status(200).json(posts);
});

function buscarPostPorID(id) {
   return posts.findIndex((post) => {
      return post.id === Number(id)
   })
}

app.get('/posts/:id', (req, res) => {
   const index = buscarPostPorID(req.params.id)
   res.status(200).json(posts[index]);
});