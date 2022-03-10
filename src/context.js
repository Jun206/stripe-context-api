import React, { useState, useContext, children } from 'react'
import sublinks from './data'

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(true);
    const [page, setPage] = useState({page: '', links: []});
    const [location, setLocation] = useState({});

    const openSidebar = () => {
        setIsSidebarOpen(true);

    }

    const closeSidebar = () => {
        setIsSidebarOpen(false);
        
    }

    const openSubmenu = (text,coordinate) => {
        const page = sublinks.find( (link) => link.page === text)
        console.log('page',page);
        setPage(page);
        setLocation(coordinate);
        setIsSubmenuOpen(true);
        
    }

    const closeSubmenu = () => {
        setIsSubmenuOpen(false);
        
    }

    return (
        <AppContext.Provider value={{
            isSidebarOpen,
            isSubmenuOpen,
            openSidebar,
            closeSidebar,
            openSubmenu,
            closeSubmenu,
            page,
            location
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);

}

export { AppContext, AppProvider}
