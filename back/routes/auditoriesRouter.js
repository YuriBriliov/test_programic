const router = require('express').Router();

const DB = []

router.get('/', (req, res) => {
  res.json({data: 'get data'})
});

router.post('/', (req, res)=>{
  const { sex, age, georgaphy, salary, interes, retarget, crm, story } = req.body;
  try {

    const sampleFile = req.files.file
    const fileName = sampleFile.name.split(' ').join('')
    const fullname = `${new Date().getTime()}_${fileName}`
    const uploadPath = `${process.env.PWD}/public/`

    sampleFile.mv(`${uploadPath}/${fullname}`, async (err) => {
      if (err) { return res.status(500).send(err) }
      DB.push({sex, age, georgaphy, salary, interes, retarget, crm, story, image: fullname,})
   
      res.status(200).json({sex, age, georgaphy, salary, interes, retarget, crm, story, image: fullname})

    })
  } catch (error) {
    console.log(error)
  }
})

router.put('/', (req, res)=>{
  const newData = req.body
  res.json({data: newData})
})

router.delete('/', (req, res)=>{
  const newData = req.body
  res.json({data: newData})
})

module.exports = router;
