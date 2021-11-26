import React from "react"
import ReactDom from "react-dom"

const Fr = React.lazy(
    () => import('./Fragment')
);

// const dummy = <Uzay />

const Main = () => (
    <div>
        <React.Suspense fallback={"Loading"}>
            <div><Fr/></div>
        </React.Suspense>
    </div>
)

// @ts-ignore
ReactDom.render(<Main/>, document.body);
