// REACT COMPONENTS IMPORTS
import { Button, styled } from "@mui/material";

const styles = {
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-10 px-3 sm:py-12 py-10",
  heroHeadText:
    "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
  heroSubText:
    "text-[#eec42e] font-medium lg:text-[28px] sm:text-[24px] xs:text-[20px] text-[10px] lg:leading-[30px]",
  sectionHeadText:
    "font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
  sectionSubText:
    "sm:text-[18px] text-[14px] uppercase tracking-wider",
};

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ColorButton = styled(Button)(() => ({
  color: 'black',
  backgroundColor: '#ffbc64',
  fontWeight:'600',
  '&:hover': {
    backgroundColor: '#f67f30',
    color: 'white'
  },
}));

export { styles, modalStyle, ColorButton };  