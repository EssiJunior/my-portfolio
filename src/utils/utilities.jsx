export function capitalise(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}


export const defaultLottieOptions = (lottie) => {
    return {
        loop: true,
        autoplay: true,
        animationData: lottie,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }
}