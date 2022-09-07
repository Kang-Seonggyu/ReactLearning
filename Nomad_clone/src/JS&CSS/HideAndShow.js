import { useEffect, useState } from "react";

function HideAndShow () {
    const[showing, setShowing] = useState(false);
    const onClick = () => {setShowing((prev) => !prev)}

    return (
        <div>
            <button onClick = {onClick} >{ showing ? "Hide" : "Show" }</button>
            { showing ? <HS_tag /> : null }
        </div>
    )
}

function HS_tag() {
    /*
    useEffect(() => {
        console.log("create :)");               // 만들어 질 때 
        return () => console.log("destroy :("); // 사라질 때
    }, []);
    */
    function hiFn() {
        console.log("created :)");
        return byFn;
    }
    function byFn() {
        console.log("destroyed :(")
    }
     
    useEffect (hiFn, []);
    return <h1>Hello.</h1>
}


export default HideAndShow;