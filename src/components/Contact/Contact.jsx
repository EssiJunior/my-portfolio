import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { styles } from "../../styles/styles";
import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn, textVariant } from "../../utils/motion";
import './contact.scss'
// import axios from "axios";
// import { route } from "../../utils/routes";
import { CircularProgress } from "@mui/joy";
import { Alert } from "@mui/material";
import { themeProps } from "../../utils/prop-types";

const Contact = () => {
  const {t} = useTranslation();
  const page = '';
  const formRef = useRef();
  const [messageE, setMessageE] = useState('')
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Email validation
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // if(form.name === "" || form.email === "" || form.message === "" )
    // {
    //     if (form.name === ""){
    //       setLoading(false)
    //       return setMessageE(t('nameErr'))
    //     } 
    //     else if (form.email === ""){
    //       setLoading(false)
    //       return setMessageE(t('emailErr'))
    //     }
    //     else if (form.message === ""){
    //       setLoading(false)
    //       return setMessageE(t('messageErr'))
    //     }
    // }
    // else if (!isValidEmail(form.email)) {
    //   setLoading(false)
    //   return setMessageE(t('emailErr2'))
    // }

    // else{
    //   axios.post(`${route}/api/message`, form)
    //   .then((response)=>{
    //       setLoading(false)
    //       console.log(response.data);
    //       setMessageE(t('sendS'))
    //       setForm({
    //         name: '',
    //         email: '',
    //         message: '',
    //       })
    //   }).catch( (error) => {
    //       setLoading(false)
    //       console.log(error)
    //       setMessageE('There was an error while sending your message.')
    //   })
    // }

  };


  return (
    <main>
      {
        page === 'contact' && 
        <motion.div variants={textVariant()} className="intro">
          <p className={`${styles.sectionSubText} text-center`}>{t('inTouch')}</p>
          <h1 className={`${styles.sectionHeadText} text-center orange-text-gradient`}>{t('contact')}</h1>
        </motion.div>
      }
      <section
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className={ page === 'contact' ? 'bg-flik-orange flex-[0.75] p-8 rounded-2xl':`contact flex-[0.75] p-8 rounded-2xl`}
          
        >
          {
            page !== 'contact' &&
            <>
              <p className={styles.sectionSubText}>{t('inTouch')} (In development)</p>
              <h2 className={`${styles.sectionHeadText} text-outline text-white`}>{t('contact')}</h2>
            </>
          }

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-7 flex flex-col gap-8'
          >
            <label className='flex flex-col'>
              <span className={ page === 'contact' ? 'text-white font-medium mb-2':'text-black font-medium mb-2'}>{t('name')}</span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder={t('nameE')}
                className={page === 'contact' ? 'bg-flik-yellow py-4 px-6 placeholder:text-[#777777] text-black rounded-lg outline-none border-none font-medium': 'bg-[#777777] py-4 px-6 placeholder:text-white text-white rounded-lg outline-none border-none font-medium'}
              />
            </label>
            <label className='flex flex-col'>
              <span className={ page === 'contact' ? 'text-white font-medium mb-2':'text-black font-medium mb-2'}>{t('email')}</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder={t('emailE')}
                className={page === 'contact' ? 'bg-flik-yellow py-4 px-6 placeholder:text-[#777777] text-black rounded-lg outline-none border-none font-medium': 'bg-[#777777] py-4 px-6 placeholder:text-white text-white rounded-lg outline-none border-none font-medium'}
              />
            </label>
            <label className='flex flex-col'>
              <span className={ page === 'contact' ? 'text-white font-medium mb-2':'text-black font-medium mb-2'}>{t('message')}</span>
              <textarea
                rows={7}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder={t('messageE')}
                className={page === 'contact' ? 'bg-flik-yellow py-4 px-6 placeholder:text-[#777777] text-black rounded-lg outline-none border-none font-medium': 'bg-[#777777] py-4 px-6 placeholder:text-white text-white rounded-lg outline-none border-none font-medium'}
              />
            </label>
              {
                messageE !== '' && (messageE !== t('sendS')) && 
                <div className="alert" onClick={() => setMessageE('')}>
                  <Alert severity="error">{messageE}</Alert>
                </div>
              }
              {
                messageE === t('sendS') && 
                <div className="alert" onClick={() => setMessageE('')}>
                  <Alert severity="success">{messageE}</Alert>
                </div>
              }

            <button
              type='submit'
              className={page === 'contact' ? `bg-flik-red py-3 px-8 rounded-xl outline-none w-fit  font-bold shadow-md shadow-primary flex items-center text-white`: `bg-flik-orange py-3 px-8 rounded-xl outline-none w-fit  font-bold shadow-md shadow-primary  flex items-center text-white`}
            >
              {
                loading ?
                <><CircularProgress color='warning' variant='solid' size='sm'/>{t('sending')}</>
                :
                t('send')
              }
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
        >
          <EarthCanvas />
        </motion.div>
      </section>
    </main>
  );
};

export default SectionWrapper(Contact, "contact");
