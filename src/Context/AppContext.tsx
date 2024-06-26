import { createContext, RefObject, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type AppContextValues = {
  contactRef: RefObject<HTMLDivElement>;
  scrollToRef: () => void;
  loading: boolean;
};

type AppContextProviderProps = {
  children: React.ReactNode;
};

export const AppContext = createContext({} as AppContextValues);

const AppContextProvider = ({ children }: AppContextProviderProps) => {
  // Refs
  const contactRef = useRef<HTMLDivElement>(null);

  // State
  const [loading, setLoading] = useState(true);

  //   Effects
  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);

  //   Router
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToRef = () => {
    if (contactRef.current) {
      if (location.pathname !== "/") {
        navigate("/");
      }

      (contactRef.current as HTMLDivElement).scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "start",
      });
    } else {
      navigate("/");

      setTimeout(() => {
        if (contactRef.current) {
          (contactRef.current as HTMLDivElement).scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "start",
          });
        }
      }, 2000);
    }
  };

  return (
    <AppContext.Provider value={{ contactRef, scrollToRef, loading }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
