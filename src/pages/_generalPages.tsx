import {AppContextsContextProvider} from '../Context/appContexts'
import type {AppProps} from 'next/app'
import './App.scss';
import "antd/dist/antd.min.css";
import {QueryClientProvider,} from 'react-query'
import React, {useLayoutEffect, useState} from "react";
import SharedLayout from "../Layouts/SharedLayout";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import "../Layouts/SharedLayout/style.scss"
import {ScrollHandler} from '../Components'
import {useRouter} from 'next/router';
import {Loading} from '../Components/Atoms/Loading';
import {ErrorBoundary} from "react-error-boundary";
import GeneralError from "./GeneralError/index.page";
import {usePageState} from '../Hooks/window/pageState/use-page-state';
import SEO from "../Components/Molecules/Seo/seoConainer";
import {webSiteMetas} from "../Layouts/SharedLayout/SEO/webSiteMetas";
import {queryClient} from "./queryClient";
import Schema from "../Components/Molecules/Schema/schemaContainer";
import {schemaData} from "../Layouts/SharedLayout/SEO/schemaData";


export default function GeneralPages({Component, pageProps}: AppProps) {

    const {pathname} = useRouter()

    const {loading} = usePageState()
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

                    <AppContextsContextProvider>
                        {/* router */}
                        {/* features */}
                        <ScrollHandler>
                            {/* APP */}
                            {loading ? withLoading && <Loading isLoading={loading} disableScroll={loading}/>
                                :
                                isHydrated && <SharedLayout>
                                    <TransitionGroup>
                                        <CSSTransition
                                            key={pathname}
                                            timeout={{appear: 300, enter: 300, exit: 100}}
                                            classNames={"page"}
                                            appear
                                            in
                                        >
                                            <ErrorBoundary fallback={<GeneralError pageType={"system"}/>
                                            }>
                                                <SEO webSiteMetas={webSiteMetas}/>
                                                <Schema schemaData={schemaData}/>
                                                <Component {...pageProps} />
                                            </ErrorBoundary>
                                        </CSSTransition>
                                    </TransitionGroup>
                                </SharedLayout>}
                        </ScrollHandler>
                    </AppContextsContextProvider>
                </QueryClientProvider>
            </>
        }
    </div>
}


