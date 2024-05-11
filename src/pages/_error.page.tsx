import Error404 from './Error404/index.page';


function Error({statusCode}) {

    return <div className="error-container">
        <Error404 pageType={"system"}/>
    </div>;
}

Error.getInitialProps = ({res, err}) => {
//      console.log(" err, res" ,err, res)
//     console.log(" res, err" ,   res, err);
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return {statusCode}
}

export default Error