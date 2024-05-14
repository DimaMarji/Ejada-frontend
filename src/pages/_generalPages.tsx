import type {AppProps} from 'next/app';
import {QueryClientProvider,} from 'react-query'
import React, {useLayoutEffect, useState} from "react";

import {queryClient} from "./queryClient";
import SharedLayout from '@/Layouts/SharedLayout/sharedLayout';
import { Spin } from 'antd';


export default function GeneralPages({Component, pageProps}: AppProps) {

const loading=false
    // const {loading} = usePageState()
    let withLoading = pageProps.withLoading ?? true

    const [isHydrated, setHydrated] = useState(false);

    //when the client-side hydration is complete set to true
    // to ensure that the initial server-rendered HTML matches the hydrated client-side
    useLayoutEffect(() => {
        setHydrated(true);
    }, []);

    return <div className="App">
        {
            <>

                <QueryClientProvider client={queryClient}>
                    {/* contexts */}

                    {/* <AppContextsContextProvider> */}
                        {/* router */}
                        {/* features */}
                     
                            {/* APP */}
                            {loading ? withLoading && <Spin />
                                :
                                isHydrated && <SharedLayout>
                                 
                                         
                                                <Component {...pageProps} />
                                           
                                </SharedLayout>}
                </QueryClientProvider>
            </>
        }
    </div>
}


