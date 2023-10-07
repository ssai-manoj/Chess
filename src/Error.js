import React from "react";

const Error = (props) => {
    return (
        <React.Fragment>
            <h2 className="error">{props.message}</h2>
        </React.Fragment>
    )
}

export default Error;