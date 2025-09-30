// HOOKS
import { useTheme } from "styled-components";

// ASSETS
import { logoDark, logoLight } from "@/assets/logo";

const PageLoader = () => {
  const theme = useTheme();

  return (
    <div
      className="h-screen w-screen flex items-center justify-center"
      style={{
        backgroundColor: `${theme.colors.bg}`,
        color: `${theme.colors.text}`,
      }}
    >
      <img
        src={theme.tag === "light" ? logoDark : logoLight}
        alt="Logo"
        loading="eager"
      />
    </div>
  );
};

export default PageLoader;
