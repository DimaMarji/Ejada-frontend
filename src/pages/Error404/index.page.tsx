import React from 'react';
import "./style.scss"



const Error404 = ({
                      pageType
                  }: InferGetStaticPropsType<typeof getStaticProps>) => {

    const {push} = useRouter()

    return (
        <div className={"error-page-container"}>

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