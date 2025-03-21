import { useEffect, useState, useCallback } from "react";

async function sendHttpRequest(url, config) {
  const response = await fetch(url, config);

  const resData = await response.json();
  if (!response.ok) {
    throw new Error(
      resData.message || "Something went wrong, failed to send request"
    );
  }

  return resData;
}

function clearData() {
  setData(initialData);
}

export default function useHttp(url, config, initialData) {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  // Avvolgiamo `sendRequest` con `useCallback` per evitare un loop infinito.
  // Senza `useCallback`, la funzione verrebbe ricreata a ogni render, cambiando la sua referenza e causando una nuova esecuzione di `useEffect`, che a sua volta rilancerebbe `sendRequest`.
  // Con `useCallback`, `sendRequest` viene memorizzata e ricreata solo quando `url` o `config` cambiano.

  const sendRequest = useCallback(
    async function sendRequest(data) {
      setIsLoading(true);
      try {
        const resData = await sendHttpRequest(url, {...config, body: data});
        setData(resData);
      } catch (error) {
        setError(error.message || "Something went wrong");
      }

      setIsLoading(false);
    },
    [url, config]
  );

  useEffect(() => {
    if ((config && (config.method === "GET" || !config.method)) || !config) {
      sendRequest();
    }
  }, [sendRequest, config]);

  return {
    data,
    isLoading,
    error,
    sendRequest,
    clearData
  };
}
