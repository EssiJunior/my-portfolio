// REACT COMPONENT
import { useEffect, useState } from 'react'

// CUSTOMIZED COMPONENT
import Typography from '../Typography/Typography';

// PLUGIN
import i18n from '@/i18n';

// ASSETS
import FR from '@/assets/languages/FR.svg'
import EN from '@/assets/languages/EN.svg'

// UTILITIES
import { languageProps } from '@/utils/prop-types';

// STYLE
import './language.scss'

function Language({ style, text = true, page = 'default', languageRef }) {
  const [language, setLanguage] = useState('en');
  const onOptionChangeHandler = (language) => {
    i18n.changeLanguage(language)
  }

  useEffect(() => {
    if (page === 'default')
      onOptionChangeHandler(language)

  }, [page, language])

  return (
    page === 'default' ?
      <div className="lan-back" style={style} id='language' ref={languageRef}>
        <div onClick={() => {
          onOptionChangeHandler('fr')
          setLanguage('fr')
        }} style={language === 'fr' ? { border: '1px solid #990000' } : {}}>
          <img src={FR} alt="French" loading='lazy' />
        </div>
        <div onClick={() => {
          onOptionChangeHandler('en')
          setLanguage('en')
        }} style={language === 'en' ? { border: '1px solid #990000' } : {}}>
          <img src={EN} alt="English" loading='lazy' />
        </div>
        {text &&
          <Typography text={language === 'fr' ? <>Fran&ccedil;ais</> : <>English</>} />
        }
      </div>
      :
      <div className="lan-back" style={style}>
        <div onClick={() => {
          onOptionChangeHandler('fr')
          setLanguage('fr')
        }} style={{ display: 'flex' }}>
          <img src={FR} alt="French" loading='lazy' width='10px' height='10px' />
          <Typography text='Fran&ccedil;ais' className='ms-3' />
        </div>
        <div onClick={() => {
          onOptionChangeHandler('en')
          setLanguage('en')
        }} style={{ display: 'flex' }}>
          <img src={EN} alt="English" loading='lazy' />
          <Typography text='English' className='ms-3' />
        </div>
      </div>
  )
}

Language.propTypes = languageProps;
export default Language
