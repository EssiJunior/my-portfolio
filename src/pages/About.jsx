// REACT COMPONENTS
import { memo, useState } from "react";
import { EmailSharp, Phone } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useTheme } from "styled-components";

// CUSTOMIZED COMPONENTS
import SEO from "@/components/SEO/SEO";
import Breadcrumb from "@/components/Breadcrumb";
import Typography from "@/components/Typography/Typography";
import Button from "@/components/Button/Button";
import PrimaryHeading from "@/components/Headings/Primary"

// UTILS
import { themeProps } from "@/utils/prop-types";
import { textVariant } from "@/utils/motion";
import { baseURL } from "@/utils";

// ASSETS
import { me1, me2, me3, me4, me5 } from "@/assets/me";

// STYLES
import { styles } from "@/styles/styles";
import "@/styles/about.css";
import AboutObjectSnippet from "../components/AboutObjectSnippet";

const About = memo(function About() {
  const theme = useTheme();

  const { t } = useTranslation();
  const [inTrans, setInTrans] = useState(false);

  const meImages = [me2, me3, me4, me5];

  return (
    <motion.main
      className="about-page w-full"
      style={{
        backgroundColor: `${theme.colors.bg}`,
        color: `${theme.colors.text}`,
      }}
    >
      <section className="about-container flex items-center justify-center flex-col py-20 px-0 max-w-[1300px] my-0 mx-auto">
        <Breadcrumb label="about" to="/about" icon="kthelypq.json" />
        <SEO
          title={`Essi Junior's portfolio - About`}
          description="This is Essi Junior's portfolio website about page. Here you can know more about me personaly."
          name="Essi Junior"
          type="about"
          link={`${baseURL}/about`}
        />

        <PrimaryHeading text={t("about")} subText={t("allA")} once/>

        <AboutObjectSnippet />

        <Typography
          text={`_${t("ai")}`}
          style={{
            fontSize: "1.75rem",
            margin: "2rem auto 0 auto",
          }}
          className={`${theme.global.subHeading} font-space_mono italic !w-[90%]`}
        />

        <div className="parallax flex w-full h-screen box-border py-[1.125rem] px-[2%]">
          <div className={inTrans ? `box` : `box super-box`}>
            <img src={me1} alt="my image" loading="lazy" />
            <span className={`bg-primary text-white font-space_mono !px-4 !py-2`}>{t("a1")}</span>
          </div>
          {
            meImages.map((image, index) => (
              <div
                key={index}
                className="box"
                onMouseEnter={() => setInTrans(true)}
                onMouseLeave={() => setInTrans(false)}
              >
                <img src={image} alt="my image" loading="lazy" />
                <span className={`bg-primary text-white font-space_mono !px-4 !py-2`}>{t(`a${index + 2}`)}</span>
              </div>
            ))
          }
        </div>

        <div className="footer-heading w-[90%] text-start my-8 mx-0">
          <Typography
            className="gradient__text font-space_mono italic"
            text={`_${t("newsMessage")}`}
          />
          <div className="flex items-center gap-4">
            <Link to="/contact" className="pe-4">
              <Button
                text={t("contactMe")}
                bg={theme.tag === "light" ? "black" : "white"}
                color={theme.colors.bg}
                fontWeight={600}
                icon={<EmailSharp sx={{ color: theme.colors.bg }} />}
              />
            </Link>

            <a href="tel:+237690743737">
              <Button
                text={t("callMe")}
                bg={theme.tag === "light" ? "black" : "white"}
                color={theme.colors.bg}
                fontWeight={600}
                icon={<Phone sx={{ color: theme.colors.bg }} />}
              />
            </a>
          </div>
        </div>
      </section>
    </motion.main>
  );
})

About.propTypes = themeProps;
export default About;
