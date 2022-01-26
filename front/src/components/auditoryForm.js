import React, { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { setNewCategorys } from '../redux/actions/auditories.action'

const AuditoriesForm = () =>{

  const dispatch = useDispatch()
   const upload = useRef()
  const [reader] = useState(new FileReader())

  useEffect(()=>{
    console.log('hello')
  },[])

  const [sex, setSex] = useState(null)
  const [age, setAge] = useState(null)
  const [georgaphy, setGeography] = useState(null)
  const [salary, setSalary] = useState(null)
  const [interes, setInteres] = useState(null)
  const [retarget, setRetarget] = useState(null)
  const [crm, setCRM] = useState(null)
  const [story, setStory] = useState(null)
  const [image, setImage] = useState(null)

  function imageHandler() {
    reader.readAsDataURL(upload.current.files[0]);
    reader.addEventListener('load', function () {
      setImage(reader.result)
    });
  }

  function createCard(arg) {
    dispatch(setNewCategorys({ ...arg, file: upload.current.files[0]}))
  }


  return(
    <div>

        <h3>Социально-демографические</h3>
          <select onChange={(event)=>{setSex(event.target.value)}}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <select onChange={(event)=>{setAge(event.target.value)}}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <select onChange={(event)=>{setGeography(event.target.value)}}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <select onChange={(event)=>{setSalary(event.target.value)}}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        <h3>Интересы (IAB категории)</h3>
          <select onChange={(event)=>{setInteres(event.target.value)}}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        <h3>Ретаргетинг</h3>
          <select onChange={(event)=>{setRetarget(event.target.value)}}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        <h3>CRM данные</h3>
          <select onChange={(event)=>{setCRM(event.target.value)}}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        <h3>История поисковых запросов</h3>
          <select onChange={(event)=>{setStory(event.target.value)}}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <div>
            <input type='file' name='file' id='file' ref={upload} onChange={imageHandler} />
          </div>
          <button onClick={() => createCard({ sex, age, georgaphy, salary, interes, retarget, crm, story, image })}>next</button>

    </div>
  )
}

export default AuditoriesForm
