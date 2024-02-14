const path = require('path');
const express = require('express');

PORT=4000;

const app = express();

const base = {
  shkola:'/svin.mp4',
  svin:'/svin.mp4',
  cherniy:'/cherniy.mp4',
  ataka:'/ataka.mp4',
  alchi:'/alhimick.mp4',
  mir:'/mir.mp4',
  boes:'/baki.mp4',
  rezero:'/rezero.mp4',
  berserk:'/berserk.mp4',
  blich:'/blich.mp4',
  doctorstoun:'/doctorstoun.mp4',
  dororo:'/dororo.mp4',
  magia:'/magick.mp4',
  milaya:'/milaya.mp4',
  rozavaya:'/rozavayzpara.mp4',
  vanpis:'/van pis.mp4',
  hanter:'/xanter x xanter.mp4',
  reninkarasia:'/Реинкарнация безработного.mp4',
}

const createPath = (page) => path.resolve(__dirname,'views', `${page}.ejs`);
app.use(express.static('style'));
app.use(express.static('video'));
app.use(express.static('img'));
app.use(express.static('img2'));
app.get('/',(req,res)=>{
  res.render(createPath('kamatop'));
});
app.get('/game',(req,res)=>{
  res.render(createPath('game'));
});
app.get('/createaccount',(req,res)=>{
  res.render(createPath('createaccount'));
});
app.get('/anime',(req,res)=>{
  res.render(createPath('anime'));
});
app.get('/abobaa',(req,res)=>{
  res.render(createPath('abobaa'));
});
app.get('/come-on',(req,res)=>{
  res.render(createPath('come-on'));
});
app.get('/onime',(req,res)=>{
  res.render(createPath('onime'));
});
app.get('/show/:id',(req,res)=>{
  res.render(createPath('viewpage'),{src:base[req.params.id]});
});
// app.use((req,res)=>{
//   res.sendFile(createPath('error'));
// });
app.listen(PORT,()=>{
  console.log(`Example app listeng on port ${PORT}`)
});