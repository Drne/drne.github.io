import React, {useState} from "react";
import {Stars} from "./Stars";
import {Icosahedron} from "./Icosahedron";

export function Universe() {
    const [facePoint, setFacePoint] = useState([0,0,0])

    return (
        <group>
            <Icosahedron facePoint={facePoint}/>
            <Stars progressPoint={facePoint} setProgressPoint={setFacePoint} />
        </group>
    )
}
