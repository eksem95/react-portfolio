import React from "react";

function Project ( {samples} ) {
    console.log( samples )
 return (
     <div>
         {samples.map((sample) => (
             <div key={sample.uuid}>
                 <h3>{`${sample.title}`}</h3>
                 <p><a href={sample.github}>Github</a></p>
                 <p><a href={sample.livesite}>Live Site</a></p>
             </div>
         ))}
         
     </div>
 )
}
 export default Project;