import React from "react";

export default function Home(props) {
    return (
        <React.Fragment >
        <div className="home">
            <div>
            <h1>{props.title.toUpperCase()}</h1>
            <p>{props.text}</p>
            <a>SIGN UP</a>
            </div>
        </div>
        </React.Fragment>
    )
}