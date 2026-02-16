// REACT COMPONENTS IMPORTS
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ScrollParallax } from "react-just-parallax";
import { useTheme } from "styled-components";

// CUSTOMIZED COMPONENTS
import Typography from "@/components/Typography/Typography";
import Button from "@/components/Button/Button";

// UTILITIES
import { themeProps } from "@/utils/prop-types";
import { social, tech } from "@/utils/utilities";

// ASSETS
import { EmailSharp, WorkHistory } from "@mui/icons-material";
import { profile } from "@/assets/profile";

// STYLES
import "./hero.css";
import { memo } from "react";
import { yearsOfExp } from "../../utils";
import { Tooltip } from "@mui/material";
import FloatingCard from "../../components/FloatingCard";

const Hero = memo(function Hero() {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <section className={`overflow-hidden container pt-16 hero ${theme.hero.gradient}`}>
      <div className="container-hero h-full w-full grid grid-cols-1 md:grid-cols-[2fr_1fr] web:grid-cols-2 py-12">
        <div className="brand flex flex-col justify-center items-start p-16 max-sm:px-8 max-md:items-center [&>p]:max-md:text-center [&>p]:max-md:!w-[90%]" style={{ color: theme.colors.text }}>
          <Typography
            text={t("present")}
            style={{ fontSize: "1.25rem" }}
            className="font-space_mono" />
          <Typography
            text={t("me")}
            style={{ fontSize: "2.75rem", fontWeight: "700", color: "white" }}
            className="font-space_mono"
          />
          <Typography
            text={t("intro")}
            className="font-space_mono !mb-12" />

          <div className="more flex-wrap">
            <Link to="/contact">
              <Button
                text={t("contactMe")}
                bg={theme.tag === "light" ? "black" : "white"}
                color={theme.tag === "light" ? "white" : "black"}
                icon={
                  <EmailSharp
                    sx={{ color: theme.tag === "light" ? "white" : "black" }}
                  />
                }
              />
            </Link>
            <Link to="/projects">
              <Button
                text={t("download")}
                bg={theme.tag === "light" ? "black" : "white"}
                color={theme.tag === "light" ? "white" : "black"}
                icon={
                  <WorkHistory
                    sx={{ color: theme.tag === "light" ? "white" : "black" }}
                  />
                }
                margin="0 0 0 1rem"
              />
            </Link>
          </div>
        </div>

        <div className="actions relative">
          <img
            src={profile}
            alt="Hero image"
            title="Hero image"
            width="797"
            height="797"
            fetchpriority="high"
            decoding="async"
            style={{
              contentVisibility: "auto",
              containIntrinsicSize: "797px 797px",
            }}
          />

          <ScrollParallax isAbsolutelyPositioned>
            <ul
              className={`absolute left-1/2 -translate-x-1/2  -bottom-[2rem] px-1 py-1 bg-primary/30 backdrop-blur border ${theme.hero.glass} rounded-xl flex`}
            >
              {tech.map((elt, index) => (
                <Tooltip title={elt.label} key={index} placement="top" arrow>
                  <li className="p-3 text-white">
                    {elt.icon}
                  </li>
                </Tooltip>
              ))}
            </ul>
          </ScrollParallax>
          <ScrollParallax isAbsolutelyPositioned>
            <div
              className={` absolute left-[3rem] -top-[0px] px-1 py-1 bg-primary/30 backdrop-blur border ${theme.hero.glass} rounded-xl flex`}
            >
              {social.map((elt, i) => {
                return (
                  <a
                    aria-label={"Essi Junior's " + elt.name + " link"}
                    key={i}
                    href={elt.link}
                    target="_blank"
                    className={`p-2 transition-all text-white hover:scale-125 duration-300`}
                  >
                    {elt.icon}
                  </a>
                );
              })}
            </div>
          </ScrollParallax>
          <FloatingCard>
            <p className="relative p-1">
              <b>{yearsOfExp}</b> {t("yearsOfExp")}
              <span className="absolute -top-2 -right-2 inline-flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-tertiary" />
              </span>
            </p>
          </FloatingCard>
        </div>
      </div>
    </section>
  );
});

Hero.propTypes = themeProps;
export default Hero;