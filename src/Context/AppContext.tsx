import { createContext, RefObject, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type AppContextValues = {
  contactRef: RefObject<HTMLDivElement>;
  scrollToRef: () => void;
};

type AppContextProviderProps = {
  children: React.ReactNode;
};

export const AppContext = createContext({} as AppContextValues);

const AppContextProvider = ({ children }: AppContextProviderProps) => {
  // Refs
  const contactRef = useRef<HTMLDivElement>(null);

  //   Router
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToRef = () => {
    if (contactRef.current) {
      if (location.pathname !== "/") {
        navigate("/");
      }

      contactRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "start",
      });
    }
  };

  return (
    <AppContext.Provider value={{ contactRef, scrollToRef }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
