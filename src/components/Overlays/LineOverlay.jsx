import { useTheme } from 'styled-components'

const LineOverlay = () => {
    const theme = useTheme()

    return (
        <div className="flex justify-center -translate-y-[1px] mb-20">
            <div className="w-3/4">
                <div className={`h-[1px] bg-gradient-to-r from-transparent ${theme.skills.divider} to-transparent  w-full`} />
            </div>
        </div>
    )
}

export default LineOverlay