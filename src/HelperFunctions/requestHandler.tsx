import axios, { AxiosResponse } from "axios";
import { Dispatch, SetStateAction } from "react";
import { notificationsType } from "../Context/AppContext";
import { setNotiticationFunction } from "../HelperFunctions/setNotificationsFunction";

type RequestType = {
  method: string;
  url: string;
  headers?: any;
  data?: any;
  isMultipart?: boolean;
  state?: requestType;
  setState?: Dispatch<SetStateAction<requestType>>;
  setNotificationsSuccess?: boolean;
  setNotificationsFailure?: boolean;
  setNotifications?: Dispatch<SetStateAction<notificationsType>>;
  successMessage?: string;
  successFunction?: (res?: AxiosResponse) => void;
  errorFunction?: () => void;
  load?: boolean;
  requestCleanup?: boolean;
};

export type requestType = {
  isLoading: boolean;
  data?: null | any[] | string | any;
  error?: null | any;
};

export async function requestHandler({
  method,
  url,
  headers,
  data,
  isMultipart = false,
  setState,
  setNotificationsFailure,
  setNotificationsSuccess,
  setNotifications,
  successMessage,
  successFunction,
  errorFunction,
  load,
  requestCleanup,
}: RequestType) {
  if ((setState && load === true) || (setState && load === undefined)) {
    setState((prevState) => {
      return { ...prevState, isLoading: true };
    });
  } else if (setState && load === false) {
    setState((prevState) => {
      return { ...prevState, isLoading: false };
    });
  }

  axios({
    method,
    url,
    headers: {
      "Content-Type": !isMultipart ? "application/json" : "multipart/form-data",
      ...headers,
    },
    data,
    maxRedirects: 0,
  })
    .then((res) => {
      if (setState) {
        setState({
          isLoading: false,
          data: res?.data?.message,
          error: null,
        });

        if (requestCleanup) {
          setTimeout(() => {
            setState({
              isLoading: false,
              data: null,
              error: null,
            });
          }, 5000);
        }
      }
      if (successFunction) {
        successFunction(res);
      }
      if (setNotificationsSuccess) {
        setNotiticationFunction(
          setNotifications as Dispatch<SetStateAction<notificationsType>>,
          successMessage || res?.data?.message,
          "success"
        );
      }
    })
    .catch((err) => {
      if (setState) {
        setState({
          isLoading: false,
          data: null,
          error: err.response?.data?.detail
            ? err.response?.data?.detail
            : !err.response?.data?.detail
            ? err.response?.data?.responseMessage?.toString()
            : err?.message,
        });

        if (requestCleanup) {
          setTimeout(() => {
            setState({
              isLoading: false,
              data: null,
              error: null,
            });
          }, 5000);
        }
      }
      if (errorFunction) {
        errorFunction();
      }
      if (setNotificationsFailure) {
        setNotiticationFunction(
          setNotifications as Dispatch<SetStateAction<notificationsType>>,
          err.response?.data?.detail
            ? err.response?.data?.detail
            : !err.response?.data?.detail
            ? err.response?.data?.responseMessage?.toString()
            : err?.message
        );
      }
    });
}
