import React, { useState, useEffect} from 'react'
import { useAppContext } from '../context/context'
import "./css/Input.css"
import QRCode from "react-qr-code";

function InputComponent() {
    const { setInputURL, useQR,inputURL } = useAppContext()

    const [generatingQR, setGeneratingQR] = useState(false)

    const [values, setValues] = useState({
        url: "",
    })

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setValues((prevState)=>({
            ...prevState,
            [name]:value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (values.url === "") {
            alert("La url no puede estar vacia")
            return
        }else{
            setGeneratingQR(true)
            setTimeout(() => {
              setInputURL(values.url)
              setGeneratingQR(false)
            }, 1000);
        }
    }

   
  return (
    <div className='input__container'>
      <h1>QRLinker</h1>
      <form onSubmit={handleSubmit}>
        <label className='input__label'>URL de la Página: 
        <input type="url" 
        onChange={handleInputChange}
        value={values.url}
        name='url' />
        </label>
        <button type='submit'>{generatingQR ? 'Generando...' : 'Generar QR!'}</button>
      </form>
      
      <div className={`QR__container ${useQR ? 'show' : ''}`}>
                  {useQR && (
                    <QRCode value={inputURL} className='QR' />
                    
                )}
                
            </div>
        </div>
  )
}

export default InputComponent
