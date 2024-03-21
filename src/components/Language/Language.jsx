import React, { useEffect, useState } from 'react'
import './language.scss'
import i18n from '../../i18n';
import { useTranslation } from 'react-i18next';
import FR from '../../assets/languages/FR.svg'
import EN from '../../assets/languages/EN.svg'
import Typography from '../Typography/Typography';
//Component in charge of changing the language of the site
function Language({style, text = true}) {
  const [language, setLanguage] = useState('en'); 
  const onOptionChangeHandler = (language) => {
      i18n.changeLanguage(language)
  }
  
  useEffect(() => {
    onOptionChangeHandler(language)
  }, [])

  return (
    <div className="lan-back" style={style}>
      <div onClick={() => {
          onOptionChangeHandler('fr')
          setLanguage('fr')
        }} style={language === 'fr' ? {border: '1px solid #990000'}:{}}>
        <img src={FR} alt="French" loading='lazy'/>
      </div>
      <div onClick={() => {
          onOptionChangeHandler('en')
          setLanguage('en')
        }} style={language === 'en' ? {border: '1px solid #990000'}:{}}>
        <img src={EN} alt="English" loading='lazy' />
      </div>
      {text && 
          <Typography text={language === 'fr'? <>Fran&ccedil;ais</>:<>English</>}/>
      }
    </div>
  )
}

export default Language
