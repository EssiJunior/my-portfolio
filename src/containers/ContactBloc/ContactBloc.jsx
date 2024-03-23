import Contact from '@/components/Contact/Contact'
import { StarsCanvas } from '@/components/canvas'

import './contact_bloc.scss'

const ContactBloc = ({theme}) => {

  console.log('contact_bloc', theme)
  return (
    <main className={`${theme.contact.bg} relative z-0 `}>
      <Contact theme={theme} />
      {<StarsCanvas />}
    </main>
  )
}

export default ContactBloc
