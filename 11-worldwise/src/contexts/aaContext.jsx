import { createContext, useContext } from 'react'

const aaContext = createContext();
function aaContextProvider ({ children }) {
    return (
        <aaContext.Provider value={{}}>
            {children}
        </aaContext.Provider>
    )
}


function useaaContext () {
    const value = useContext(aaContext);
    if (value === undefined) throw new Error('Used aaContext outside of Provider. The context can only be used in children of the Provider');
    return value;
}

export { useaaContext, aaContextProvider };