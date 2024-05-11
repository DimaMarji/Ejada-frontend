import React from 'react';
import error404Image from "../../public/Assets/Images/Error/Error-404.svg"
import "./style.scss"
import {Button, Image, Text, Title} from "../../Components";
import {useRouter} from 'next/router';
import {GetStaticProps, InferGetStaticPropsType} from 'next';
import {NextSeo} from "next-seo";
import {webSiteMetas} from "../../Layouts/SharedLayout/SEO/webSiteMetas";


const Error404 = ({
                      pageType
                  }: InferGetStaticPropsType<typeof getStaticProps>) => {

    const {push} = useRouter()

    return (
        <div className={"error-page-container"}>

            <NextSeo
                {...webSiteMetas["/404"]}
            />
            <Image alt={"zcoderz error-404"} src={error404Image}/>
            <Title typographyType={{type: "semi-bold-semi-bold-semi-bold", size: "24px-20px-20px"}}
                   className={"error-title"}
                   level={5}>
                Page Not Found
            </Title>

            <Text typographyFontColor={"#232736"}
                  typographyType={{type: "regular-regular-regular", size: "14px-12px-12px"}}>
                we could not find the page</Text>


            <Button onClick={() => {
                push("/")
            }} className={"go-tp-homepage-button"} type={"primary"}>Back Home</Button>
        </div>
    );
};

export default Error404;


export const getStaticProps: GetStaticProps<{ pageType: any }> = async () => {

    return {
        props: {pageType: "system"},

    }
}