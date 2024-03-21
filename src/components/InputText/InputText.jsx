import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';


import './input_text.scss';

const InputText = ({label, helper, icon, type, handler, name, isTextArea}) => {

  return (
    <FormControl className='input'>
      <FormLabel>{label}</FormLabel>
      <div className="input-container">
        {isTextArea ? (
          <textarea name={name} onChange={handler} className="input-field text-area" placeholder={helper} />
        ) : (
          <>
            
              <input
                placeholder={helper}
                type={type}
                onChange={handler}
                name={name}
                id={name}
                className="input-field"
                autoComplete={name}
                style={{ paddingRight: '30px' }} // Ajoutez du padding pour l'icône
              />
            
            {icon && ( // Vérifiez si l'icône est fournie avant de l'afficher
              <div className="icon-suffix">{icon}</div>
            )}
          </>
        )}
      </div>
    </FormControl>
  );
};

export default InputText;
