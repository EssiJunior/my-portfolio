// REACT COMPONENTS
import { memo } from "react";

// REACT PLUGIN
import { useTranslation } from "react-i18next";
import { Viewer } from "@react-pdf-viewer/core";
import { themePlugin } from "@react-pdf-viewer/theme";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

// HOOKS
import { useTheme } from "styled-components";

// UTILS
import { themeProps } from '@/utils/prop-types';
import PrimaryHeading from "../components/Headings/Primary";


import Breadcrumb from "@/components/Breadcrumb";
import SEO from "@/components/SEO/SEO";
import { baseURL } from "../utils";

const Resume = memo(function Resume() {
    const theme = useTheme()

    const { t } = useTranslation();

    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const themePluginInstance = themePlugin();
    return (
        <main className="resume !py-12 !w-full min-h-screen" style={{ backgroundColor: `${theme.colors.bg}`, color: `${theme.colors.text}` }} >
            <section className="wrapper m-12 max-[600px]:my-8 max-[600px]:mx-2">
                <Breadcrumb label="resume" to="/resume" />

                <SEO
                    title={`Essi Junior's portfolio - Resume`}
                    description="This is Essi Junior's portfolio website resume page. Here you can view aand (or) download my resume."
                    name="Essi Junior"
                    type="resume"
                    link={`${baseURL}/resume`}
                />

                <PrimaryHeading text={t("resume")} subText={t("r1")} once />

        <div className="my-5 w-full h-1 flex"></div>
                <Viewer fileUrl={`${window.location.origin}/resume.pdf`}
                    plugins={[
                        defaultLayoutPluginInstance,
                        themePluginInstance
                    ]}
                />
            </section>
        </main>
    )
})

Resume.propTypes = themeProps;
export default Resume