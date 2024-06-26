import type {AppProps} from 'next/app'
import './App.scss';
import "antd/dist/antd.min.css";
import React from "react";
import GeneralPages from './_generalPages';
import SystemPages from './_systemPages';

export default function App(appProps: AppProps) {
    let {pageProps} = appProps;
    let pageType = pageProps.pageType ?? "general"
    let statusCode = pageProps.statusCode ?? ""
    let isSystemPages: boolean = pageType === "system" || statusCode === 404




    return <div className="App">
        {
            <>
                {/* {isSystemPages ?
                    (
                        <>
                            <SystemPages {...appProps}/>
                        </>
                    ) :
                    ( */}
                        <>
                            <GeneralPages {...appProps} />
                        </>
                    {/* )} */}
            </>
        }
    </div>
}
