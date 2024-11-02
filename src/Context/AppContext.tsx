import {
  createContext,
  Dispatch,
  RefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { requestHandler, requestType } from "../HelperFunctions/requestHandler";
import { signUpTypes } from "../Utilities/types";

type AppContextValues = {
  contactRef: RefObject<HTMLDivElement>;
  scrollToRef: () => void;
  loading: boolean;
  openingsRef: RefObject<HTMLDivElement>;
  scrollToOpenings: () => void;
  notifications: notificationsType;
  setNotifications: Dispatch<SetStateAction<notificationsType>>;
  signUp: (data: signUpTypes) => void;
  requestState: requestType;
  emailSignUp: (email: string) => void;
  submitApplication: (data: FormData) => void;
};

type AppContextProviderProps = {
  children: React.ReactNode;
};

export type notificationsType =
  | {
      title: string;
      severity: "success" | "error" | "mid";
      description?: string;
      id: string | number;
    }[]
  | null
  | undefined;

export const AppContext = createContext({} as AppContextValues);

const AppContextProvider = ({ children }: AppContextProviderProps) => {
  // Refs
  const contactRef = useRef<HTMLDivElement>(null);
  const openingsRef = useRef<HTMLDivElement>(null);

  // State
  const [loading, setLoading] = useState(true);
  const [notifications, setNotifications] = useState<notificationsType>(null);
  const [requestState, setRequestState] = useState<requestType>({
    isLoading: false,
    data: null,
    error: null,
  });

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
        block: window.innerWidth >= 768 ? "center" : "start",
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

  const signUp = (data: signUpTypes) => {
    requestHandler({
      method: "POST",
      url: `${process.env.REACT_APP_BACKEND_URL}/contact_us/`,
      data,
      state: requestState,
      setState: setRequestState,
      setNotifications: setNotifications,
      requestCleanup: true,
      setNotificationsFailure: true,
      setNotificationsSuccess: true,
    });
  };

  const emailSignUp = (email: string) => {
    requestHandler({
      method: "POST",
      url: `${process.env.REACT_APP_BACKEND_URL}/submit_email/`,
      data: { email_address: email },
      state: requestState,
      setState: setRequestState,
      setNotifications: setNotifications,
      requestCleanup: true,
      setNotificationsFailure: true,
      setNotificationsSuccess: true,
    });
  };

  const submitApplication = (data: FormData) => {
    requestHandler({
      method: "POST",
      url: `${process.env.REACT_APP_BACKEND_URL}/application/`,
      isMultipart: true,
      data,
      state: requestState,
      setState: setRequestState,
      setNotifications: setNotifications,
      requestCleanup: true,
      setNotificationsFailure: true,
      setNotificationsSuccess: true,
    });
  };

  return (
    <AppContext.Provider
      value={{
        contactRef,
        scrollToRef,
        loading,
        openingsRef,
        scrollToOpenings,
        notifications,
        setNotifications,
        signUp,
        requestState,
        emailSignUp,
        submitApplication,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
