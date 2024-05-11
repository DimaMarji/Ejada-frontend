import React from 'react';
import "./style.scss"
import GeneralError from '../GeneralError/index.page';
import {GetStaticProps, InferGetStaticPropsType} from 'next';

const Error500 = ({
                      pageType
                  }: InferGetStaticPropsType<typeof getStaticProps>) => {

    // const Error500 = () => {
    return (
        <div className={"error-row"}>
            <GeneralError pageType={"system"}/>
        </div>
    );
};

export default Error500;


// getStaticProps
export const getStaticProps: GetStaticProps<{ pageType: any }> = async ({params}) => {
    return {
        props: {pageType: "system"},
        //   props: { pageType : "system"},
    }
}

