// REACT COMPONENTS
import { memo } from "react";

// REACT PLUGIN
import { Viewer } from "@react-pdf-viewer/core";
import { themePlugin } from "@react-pdf-viewer/theme";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

// HOOKS
import { useTheme } from "styled-components";

// UTILS
import { themeProps } from '@/utils/prop-types';

const Resume = memo(function Resume() {
    const theme = useTheme()

    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const themePluginInstance = themePlugin();
    return (
        <main className="resume !py-12 !w-full" style={{backgroundColor: `${theme.colors.bg}`, color: `${theme.colors.text}` }} >
            <section className="wrapper m-12 max-[600px]:my-8 max-[600px]:mx-2">
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