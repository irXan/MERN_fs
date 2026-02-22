import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import studentRouter from "./routes/studentRoute.js";

const app = express()
let port = 3000

app.use(express.json());
app.use(cors());
app.use('/student', studentRouter)

let world = [
  { country: "United States", capital: "Washington, D.C.",continent: "North America", population: 331000000, code: "US" },
  { country: "Canada",         capital: "Ottawa",          continent: "North America", population: 38000000,  code: "CA" },
  { country: "Mexico",         capital: "Mexico City",     continent: "North America", population: 128900000, code: "MX" },
  { country: "Brazil",         capital: "Brasília",        continent: "South America", population: 212600000, code: "BR" },
  { country: "Argentina",      capital: "Buenos Aires",    continent: "South America", population: 45196000,  code: "AR" },
  { country: "United Kingdom", capital: "London",          continent: "Europe",        population: 67220000,  code: "GB" },
  { country: "France",         capital: "Paris",           continent: "Europe",        population: 67390000,  code: "FR" },
  { country: "Germany",        capital: "Berlin",          continent: "Europe",        population: 83170000,  code: "DE" },
  { country: "Italy",          capital: "Rome",            continent: "Europe",        population: 59550000,  code: "IT" },
  { country: "Spain",          capital: "Madrid",          continent: "Europe",        population: 47350000,  code: "ES" },
  { country: "Russia",         capital: "Moscow",          continent: "Europe/Asia",   population: 145900000, code: "RU" },
  { country: "China",          capital: "Beijing",         continent: "Asia",          population: 1439000000,code: "CN" },
  { country: "India",          capital: "New Delhi",       continent: "Asia",          population: 1380000000,code: "IN" },
  { country: "Japan",          capital: "Tokyo",           continent: "Asia",          population: 126300000, code: "JP" },
  { country: "South Korea",    capital: "Seoul",           continent: "Asia",          population: 51780000,  code: "KR" },
  { country: "Australia",      capital: "Canberra",        continent: "Australia",     population: 25400000,  code: "AU" },
  { country: "Egypt",          capital: "Cairo",           continent: "Africa",        population: 102300000, code: "EG" },
  { country: "Nigeria",        capital: "Abuja",           continent: "Africa",        population: 206100000, code: "NG" },
  { country: "South Africa",   capital: "Pretoria",        continent: "Africa",        population: 59310000,  code: "ZA" },
  { country: "Kenya",          capital: "Nairobi",         continent: "Africa",        population: 53770000,  code: "KE" }
];

// HTTP METHODS: (1).GET-[READ] (2).POST-[CREATE] (3).PUT-[UPDATE] (4).DELETE

// app.get('/', (req, res)=>{
//     res.send('HelloWorld')
// })

// app.get('/products', (req, res)=>{
//     res.send([
//         {
//             id: 0,
//             title: 'Product-1',
//             desc: 'lo r e m ip s u m'
//         }
//     ])
// })

// app.get('/world', (req, res)=>{
//     return res.send(world)
// })
// app.get('/world/continent', (req, res)=>{
//     let filterData = world.filter(x=>x.continent==="Africa")
//     return res.send({world: filterData})
// })

// MongoDB:
mongoose.connect('mongodb://localhost:27017/schoolDB')
  .then(() => {
    console.log('MongoDB connected successfully!');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });


app.listen(port, ()=>{
    console.log(`server is running on http://localhost:${port}`)
})
