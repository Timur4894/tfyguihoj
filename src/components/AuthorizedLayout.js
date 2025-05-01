
import React, {useEffect, useState} from "react";
import Sidebar from "./Sidebar";

const layoutStyle = {
    display: "flex",
    minHeight: "100vh",
    backgroundColor: "#f9fafb",
};

const contentStyle = {
    flexGrow: 1,
    padding: "24px",
};

export default function AuthorizedLayout({ children }) {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 768px)");
        setIsMobile(mediaQuery.matches);

        const handleResize = () => {
            setIsMobile(mediaQuery.matches);
        };

        mediaQuery.addEventListener("change", handleResize);
        return () => {
            mediaQuery.removeEventListener("change", handleResize);
        };
    }, []);

    return (
        <div style={layoutStyle}>
            {!isMobile && <Sidebar/>}
            <div style={contentStyle}>{children}</div>
        </div>
    );
}
