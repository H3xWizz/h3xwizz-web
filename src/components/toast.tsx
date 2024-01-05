"use client"

import {ToastContainer} from "react-toastify";
import React from "react";
import {useTheme} from "next-themes";
import 'react-toastify/dist/ReactToastify.css';

export default function Toast() {
    const { theme } = useTheme()

    return <ToastContainer
        toastClassName={'border border-border bg-background'}
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme={theme === "light" ? "light" : "dark"}
    />
}