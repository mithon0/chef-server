const express =require('express');
const app =express();
const cors =require('cors');
const port =process.env.PORT ||4000;
const chef =require('./chef.json')


app.use(cors());
app.get('/',(req,res)=>{
    res.send('chef is running')
});
app.get('/chef',(req,res)=>{
  res.send(chef)
})
app.get('/chef/:id',(req,res)=>{
  const id =req.params.id;
  console.log(id);
  const selectedChef =chef.find(n=>n.id == id);
 res.send(selectedChef);

});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})