import type {AppProps} from 'next/app'
import './App.scss';
import "antd/dist/antd.min.css";
import React from "react";
import "../Layouts/SharedLayout/style.scss"

export default function SystemPages({Component, pageProps}: AppProps) {
    return <div className="App">
        <Component {...pageProps}  />
    </div>
}
