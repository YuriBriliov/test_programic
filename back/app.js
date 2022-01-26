const express = require('express')
const app = express()
const morgan = require('morgan')
const router = express.Router()
const cors = require('cors');
const path = require('path')
const session = require('express-session')
const fileUpload = require('express-fileupload')
const FileStore = require('session-file-store')(session)
require('dotenv').config()
const PORT = process.env.PORT || 5001;


const auditoriesRouter = require('./routes/auditoriesRouter')


const DB = []


const sessionConfig = {
  store: new FileStore(), // хранилище сессий
  key: 'ckey', // ключ куки
  secret: 'sadfxzvvafsafe', // шифрование id сессии
  resave: false, // пересохранение сессии (когда что-то поменяли - false)
  saveUninitialized: false, // сохраняем пустую сессию (чтоб посмотреть)
  httpOnly: true, // нельзя изменить куки с фронта
  cookie: { expires: 24 * 60 * 60e3 },
}

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(express.static(path.join(process.env.PWD, 'public')));

// app.use(morgan())
app.use(session(sessionConfig))
app.use(fileUpload({}))
app.use(cors({
  origin: true,
  credentials: true,
}));


app.use((req, res, next) => {
  if (req.session.user) {
    res.locals.uploads = process.env.STATIC_PATH
    res.locals.user = req.session.user;
    // res.locals.name = req.session.name;
    // res.locals.email = req.session.email;
    // res.locals.isAdmin = req.session.isAdmin;
  }
  next();
});


// app.get('/', (req,res)=>{
//   res.status(200).json({message: 'WORKING!!!'})
// })

// app.post('/', (req,res)=>{
//   res.status(200).json({message: 'WORKING!!!'})
// })

app.use('/auditories', auditoriesRouter)




app.listen(PORT, () => { console.log(`server start no ${PORT} port`) })
