// CUSTOMIZED CONTAINERS
import ContactBloc from "@/containers/ContactBloc/ContactBloc"

// UTILS
import { themeProps } from "@/utils/prop-types";

const Contact = ({theme}) => {
    return (
        <main>
            <ContactBloc theme={theme}/>
        </main>
    )
}

Contact.propTypes = themeProps;
export default Contact