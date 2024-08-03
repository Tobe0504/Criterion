import { createContext, RefObject, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type AppContextValues = {
  contactRef: RefObject<HTMLDivElement>;
  scrollToRef: () => void;
  loading: boolean;
  openingsRef: RefObject<HTMLDivElement>;
  scrollToOpenings: () => void;
};

type AppContextProviderProps = {
  children: React.ReactNode;
};

export const AppContext = createContext({} as AppContextValues);

const AppContextProvider = ({ children }: AppContextProviderProps) => {
  // Refs
  const contactRef = useRef<HTMLDivElement>(null);
  const openingsRef = useRef<HTMLDivElement>(null);

  // State
  const [loading, setLoading] = useState(true);

  //   Effects
  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 6500);
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

  const scrollToOpenings = () => {
    if (openingsRef.current) {
      (openingsRef.current as HTMLDivElement).scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "start",
      });
    }
  };

  return (
    <AppContext.Provider
      value={{
        contactRef,
        scrollToRef,
        loading,
        openingsRef,
        scrollToOpenings,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
