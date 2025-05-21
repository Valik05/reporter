import { createContext, useContext, useState } from "react"

type SideMenuContextType = {
    sideMenu: string | null,
    setSideMenu: (value: string | null) => void
}

const SideMenuContext = createContext<SideMenuContextType>({} as SideMenuContextType)

export const SideMenuProvider = ({ children }: { children: React.ReactNode }) => {
    const [sideMenu, setSideMenu] = useState<string | null>(null);
    return (
        <SideMenuContext.Provider value={{ sideMenu, setSideMenu }}>
            {children}
        </SideMenuContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useSideMenu = () => useContext(SideMenuContext);