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

const Hero = memo(function Hero() {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <section className={`hero ${theme.hero.gradient}`}>
      <div className="container-hero ">
        <div className="brand" style={{ color: theme.colors.text }}>
          <Typography text={t("present")} style={{ fontSize: "1.25rem" }} />
          <Typography
            text={t("me")}
            style={{ fontSize: "2.75rem", fontWeight: "700", color: "white" }}
          />
          <Typography text={t("intro")} style={{ marginBottom: "3rem" }} />

          <div className="xl:hidden my-6 flex items-center gap-5">
            {social.map((elt, i) => {
              return (
                <a
                  aria-label={"Essi Junior's " + elt.name + " link"}
                  key={i}
                  href={elt.link}
                  target="_blank"
                  className={`transition-all text-[${theme.colors.text}] hover:scale-125 duration-300`}
                >
                  {elt.icon}
                </a>
              );
            })}
          </div>

          <div className="more">
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
                margin="0 1rem"
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
            fetchPriority="high"
            decoding="async"
            style={{
              contentVisibility: "auto",
              containIntrinsicSize: "797px 797px",
            }}
          />

          <ScrollParallax isAbsolutelyPositioned>
            <ul
              className={`absolute xl:-left-[7.5rem] left-1/2 max-xl:-translate-x-1/2 xl:bottom-[5rem] bottom-[2rem] px-1 py-1 bg-primary/30 backdrop-blur border ${theme.hero.glass} rounded-xl flex`}
            >
              {tech.map((elt, index) => (
                <li className="p-3 text-white" key={index}>
                  {elt.icon}
                </li>
              ))}
            </ul>
          </ScrollParallax>
          <ScrollParallax isAbsolutelyPositioned>
            <div
              className={` absolute left-[6rem] -top-[0px] px-1 py-1 bg-primary/30 backdrop-blur border ${theme.hero.glass} rounded-xl flex`}
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
          <ScrollParallax isAbsolutelyPositioned>
            <div
              className={`absolute xl:right-10 right-0 max-xl:-translate-x-1/2 xl:bottom-[5rem] max-xl:top-5 px-1 py-1 bg-tertiary/25 backdrop-blur border border-tertiary rounded-xl flex `}
            >
              <p className="relative p-1">
                <b>{yearsOfExp}</b> {t("yearsOfExp")}
                <span className="absolute -top-2 -right-2 inline-flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-tertiary" />
                </span>
              </p>
            </div>
          </ScrollParallax>
        </div>
      </div>
    </section>
  );
});

Hero.propTypes = themeProps;
export default Hero;
