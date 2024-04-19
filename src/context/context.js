import { useContext, createContext, useState, useEffect } from "react";

const AppContext = createContext();

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext necesita del AppContextProvider");
    }
    return context;
}

export const AppContextProvider = ({ children }) => {
    const [inputURL, setInputURL] = useState("");
    const [useQR, setUseQR] = useState(false);

    useEffect(() => {
        // Aquí puedes hacer la lógica de actualización de useQR
        setUseQR(inputURL !== "");
    }, [inputURL]); // Solo se ejecutará cuando inputURL cambie

    return (
        <AppContext.Provider value={{ setInputURL,useQR, setUseQR,inputURL }}>
            {children}
            
        </AppContext.Provider>
    );
};
