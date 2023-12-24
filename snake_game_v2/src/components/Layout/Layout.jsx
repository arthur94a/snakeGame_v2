import React from "react";
import Nav from "../Nav/Nav";

const Layout = props => {
    return (
        <>
            <header>
                <h1>Hello, first steps for SNAKE GAME with REACT</h1>
                <Nav/>
            </header>
            <main>
                {props.children}
            </main>
        </>
    )
}

export default Layout;