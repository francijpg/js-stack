import React from 'react'
import { useLocation } from "react-router-dom";

const Error404 = () => {
    let url = useLocation()

    return (
        <>
            <h3>Error 404</h3>
            <p>
                El recurso{" "}
                <b>
                    <i>{url.pathname}</i>
                </b>{" "}
                no fue encontrado.
            </p>
        </>
    );
};

export default Error404;
