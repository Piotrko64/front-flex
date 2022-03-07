import * as React from "react";

function Baner(value: { img: string; title: string }) {
    return (
        <>
            <div className="baner" style={{ backgroundImage: `url(${value.img})` }}>
                <h1>{value.title}</h1>
            </div>
            ;
        </>
    );
}

export default Baner;
