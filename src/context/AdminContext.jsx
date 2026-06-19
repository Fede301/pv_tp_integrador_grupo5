import { createContext, useState, useEffect } from "react";

// 1. Creamos y exportamos el contexto
export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {

    // 2. Estado inicial leyendo LocalStorage (vuelve a null si no hay datos) 
    const [admin, setAdmin] = useState(() => {
        const savedAdmin = localStorage.getItem("adminSession");
        return savedAdmin ? JSON.parse(savedAdmin) : null;
    });

    // 3. Persistencia automática con LocalStorage 
    useEffect(() => {
        if (admin) {
            localStorage.setItem("adminSession", JSON.stringify(admin));
        } else {
            localStorage.removeItem("adminSession");
        }
    }, [admin]);

    // 4. Función para iniciar sesión 
    const login = (nombre, sector) => {
        setAdmin({ nombre, sector });
    };

    // 5. Función para cerrar sesión 
    const logout = () => {
        setAdmin(null);
    };


    return (
        <AdminContext.Provider value={{ admin, login, logout }}>
            {children}
        </AdminContext.Provider>
    );
};
export default AdminProvider