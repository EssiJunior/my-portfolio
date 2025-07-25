import { memo } from "react"

import ContactBloc from "@/containers/ContactBloc/ContactBloc"

const Contact = memo(function Contact() {
    return (
        <main>
            <ContactBloc />
        </main>
    )
})

export default Contact