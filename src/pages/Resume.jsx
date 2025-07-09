// REACT COMPONENTS
import { memo } from "react";

// REACT PLUGIN
import { Viewer } from "@react-pdf-viewer/core";
import { themePlugin } from "@react-pdf-viewer/theme";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

// HOOKS
import { useTheme } from "styled-components";

// REACT PLUGIN STYLE   
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

// UTILS
import { themeProps } from '@/utils/prop-types';

// PAGE STYLES
import '@/styles/resume.scss'

const Resume = memo(function Resume() {
    const theme = useTheme()

    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const themePluginInstance = themePlugin();
    return (
        <main className="resume py-12" style={{ backgroundColor: `${theme.colors.bg}`, color: `${theme.colors.text}` }} >
            <section className="wrapper">
                <Viewer fileUrl={`${window.location.origin}/resume.pdf`}
                    plugins={[
                        defaultLayoutPluginInstance,
                        themePluginInstance
                    ]} />
            </section>
        </main>
    )
})

Resume.propTypes = themeProps;
export default Resume