import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchContent } from "../services/contentService";

const ContentContext = createContext({ loading: true, error: null, data: null });

export const ContentProvider = ({ children }) => {
  const [state, setState] = useState({ loading: true, error: null, data: null });

  useEffect(() => {
    let isMounted = true;
    fetchContent()
      .then((data) => {
        if (!isMounted) return;
        setState({ loading: false, error: null, data });
      })
      .catch((err) => {
        if (!isMounted) return;
        setState({ loading: false, error: err, data: null });
      });
    return () => { isMounted = false; };
  }, []);

  return (
    <ContentContext.Provider value={state}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  return useContext(ContentContext);
};


