import React from "react"
import ReactDom from "react-dom"

const Uzay = React.lazy(
    () => import('./Fragment')
);

// const dummy = <Uzay />

const Main = () => (
    <div>
        <React.Suspense fallback={"Loading"}>
            <div><Uzay/></div>
        </React.Suspense>
    </div>
)

// @ts-ignore
ReactDom.render(<Main/>, document.body);
