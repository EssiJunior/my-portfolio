import Contact from '@/components/Contact/Contact'
import { StarsCanvas } from '@/components/canvas'

import './contact_bloc.scss'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ContactBloc = ({theme}) => {
  const [page, setPage] = useState(window.location.pathname)
  
  const params = useParams()
  useEffect(() => {
    return () => {
        setPage(window.location.pathname)
      };
  }, [ params])

  return (
    <main className={page === '/contact' ? `relative z-0 ${theme.contact.bgPage} text-[${theme.colors.text}]`: `relative z-0 ${theme.contact.bg}`} >
      <Contact theme={theme} />
      <StarsCanvas />
    </main>
  )
}

export default ContactBloc
