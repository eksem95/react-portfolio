import React from "react";

function Project({ samples }) {
    console.log(samples)
    return (
        <div >
            {samples.map((sample) => (
                <div id={sample.imageid} className="sample" key={sample.uuid}>
                    <h2>{`${sample.title}`}</h2>
                    <div className="links">
                        <p><a href={sample.github}>Github</a></p>
                        <p><a href={sample.livesite}>Live Site</a></p>
                    </div>


                </div>
            ))}

        </div>
    )
}
export default Project;