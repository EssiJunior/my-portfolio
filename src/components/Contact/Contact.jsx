// REACT COMPONENTS
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { CircularProgress } from "@mui/joy";
import { Alert } from "@mui/material";
import { useParams } from "react-router-dom";

// CUSTOMIZED COMPONENT
import { EarthCanvas } from "../canvas";

// PLUGIN
import emailjs from '@emailjs/browser';

// HOC
import { SectionWrapper } from "@/hoc";

// UTILITIES
import { slideIn, textVariant } from "@/utils/motion";

// STYLES
import { styles } from "@/styles/styles";
import './contact.scss'

const Contact = () => {
  const [page, setPage] = useState(window.location.pathname)
  //State for translation
  const { t } = useTranslation();
  const params = useParams()

  const formRef = useRef();
  const [messageE, setMessageE] = useState('')

  const [form, setForm] = useState({
    from_name: "",
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

    if (form.from_name === "" || form.email === "" || form.message === "") {
      if (form.from_name === "") {
        setLoading(false)
        return setMessageE(t('nameErr'))
      }
      else if (form.email === "") {
        setLoading(false)
        return setMessageE(t('emailErr'))
      }
      else if (form.message === "") {
        setLoading(false)
        return setMessageE(t('messageErr'))
      }
    }
    else if (!isValidEmail(form.email)) {
      setLoading(false)
      return setMessageE(t('emailErr2'))
    }

    else {
      emailjs
        .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        })
        .then(
          () => {
            console.log('SUCCESS!');
            setMessageE(t('sendS'))
            setForm({
              from_name: '',
              email: '',
              message: '',
            })
            setLoading(false)
          },
          (error) => {
            console.log('FAILED...', error);
          },
        );
      // axios.post(`${route}/api/message`, form)
      // .then((response)=>{
      //     setLoading(false)
      //     console.log(response.data);
      //     setMessageE(t('sendS'))
      //     setForm({
      //       name: '',
      //       email: '',
      //       message: '',
      //     })
      // }).catch( (error) => {
      //     setLoading(false)
      //     console.log(error)
      //     setMessageE('There was an error while sending your message.')
      // })
    }

  };

  useEffect(() => {
    return () => {
      setPage(window.location.pathname)
    };
  }, [params])

  return (
    <main>
      {
        page === '/contact' &&
        <motion.div variants={textVariant()} className="intro mt-12" >
          <p className={`${styles.sectionSubText} text-center text-primary`}>{t('inTouch')}</p>
          <h1 className={`${styles.sectionHeadText} text-center green-text-gradient`}>{t('contact')}</h1>
        </motion.div>
      }
      <section
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className={page === '/contact' ? 'bg-primary flex-[0.75] p-8 rounded-2xl' : `contact flex-[0.75] p-8 rounded-2xl`}

        >
          {
            page !== '/contact' &&
            <>
              <p className={styles.sectionSubText}>{t('inTouch')}</p>
              <h2 className={`${styles.sectionHeadText} text-outline text-white`}>{t('contact')}</h2>
            </>
          }

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-7 flex flex-col gap-8'
          >
            <label className='flex flex-col'>
              <span className={page === '/contact' ? 'text-white font-medium mb-2' : 'text-black font-medium mb-2'}>{t('name')}</span>
              <input
                type='text'
                name='from_name'
                value={form.from_name}
                onChange={handleChange}
                placeholder={t('nameE')}
                className={page === '/contact' ? 'bg-[#444] py-4 px-6 placeholder:text-[#aaa] text-white rounded-lg outline-none border-none font-medium' : 'bg-[#777777] py-4 px-6 placeholder:text-white text-white rounded-lg outline-none border-none font-medium'}
              />
            </label>
            <label className='flex flex-col'>
              <span className={page === '/contact' ? 'text-white font-medium mb-2' : 'text-black font-medium mb-2'}>{t('email')}</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder={t('emailE')}
                className={page === '/contact' ? 'bg-[#444] py-4 px-6 placeholder:text-[#aaa] text-white rounded-lg outline-none border-none font-medium' : 'bg-[#777777] py-4 px-6 placeholder:text-white text-white rounded-lg outline-none border-none font-medium'}
              />
            </label>
            <label className='flex flex-col'>
              <span className={page === '/contact' ? 'text-white font-medium mb-2' : 'text-black font-medium mb-2'}>{t('message')}</span>
              <textarea
                rows={7}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder={t('messageE')}
                className={page === '/contact' ? 'bg-[#444] py-4 px-6 placeholder:text-[#aaa] text-white rounded-lg outline-none border-none font-medium' : 'bg-[#777777] py-4 px-6 placeholder:text-white text-white rounded-lg outline-none border-none font-medium'}
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
              className={page === '/contact' ? `bg-secondary py-3 px-8 rounded-xl outline-none w-fit  font-bold shadow-md shadow-primary flex items-center text-white` : `bg-secondary py-3 px-8 rounded-xl outline-none w-fit  font-bold shadow-md shadow-primary  flex items-center text-white`}
            >
              {
                loading ?
                  <><CircularProgress color='success' variant='solid' size='sm' sx={{ marginRight: '1rem' }} />{t('sending')}</>
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
