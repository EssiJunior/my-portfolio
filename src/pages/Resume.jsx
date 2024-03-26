// Import the main component
import { Viewer } from '@react-pdf-viewer/core';
import { themePlugin } from '@react-pdf-viewer/theme';
// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { DarkIcon, LightIcon } from '@react-pdf-viewer/theme';
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import '../styles/resume.scss'

const Resume = ({theme}) => {
    // Create new plugin instance
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const themePluginInstance = themePlugin();
    return (
    <main className="resume py-12" style={{backgroundColor:`${theme.colors.bg}`, color:`${theme.colors.text}`}} >
        <section className="wrapper">
            <Viewer fileUrl={`${window.location.origin}/resume.pdf`} 
                plugins={[
                    // Register plugins
                    defaultLayoutPluginInstance,
                    themePluginInstance
                ]} />
        </section>
    </main>
)}

export default Resume