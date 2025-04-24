
import React from "react";
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
    return (
        <div style={layoutStyle}>
            <Sidebar />
            <div style={contentStyle}>{children}</div>
        </div>
    );
}
