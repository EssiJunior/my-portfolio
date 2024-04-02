// REACT COMPONENTS IMPORTS
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// CUSTOMIZED COMPONENTS IMPORTS
import Contact from '@/components/Contact/Contact'
import { StarsCanvas } from '@/components/canvas'

// UTILS
import { themeProps } from '@/utils/prop-types'

// STYLES
import './contact_bloc.scss'

const ContactBloc = ({ theme }) => {
  const [page, setPage] = useState(window.location.pathname)

  const params = useParams()
  useEffect(() => {
    return () => {
      setPage(window.location.pathname)
    };
  }, [params])

  return (
    <main className={page === '/contact' ? `relative z-0 ${theme.contact.bgPage} text-[${theme.colors.text}]` : `relative z-0 ${theme.contact.bg}`} >
      <Contact theme={theme} />
      <StarsCanvas />
    </main>
  )
}

ContactBloc.propTypes = themeProps;
export default ContactBloc
