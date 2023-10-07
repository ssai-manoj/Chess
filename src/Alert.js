import { Fragment } from "react"

const Alert = (props) =>{
    return (
        <Fragment>
            <h2 className="alert">{props.alert}</h2>
        </Fragment>
    )
}

export default Alert