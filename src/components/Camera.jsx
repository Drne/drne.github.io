import {PerspectiveCamera} from "@react-three/drei";
import React from "react";

export function SpringPerspectiveCamera() {
    return (
        <PerspectiveCamera
            makeDefault
            fov={11}
            aspect={window.innerWidth / window.innerHeight}
            near={0.1}
            far={1000}
            position={[0, 0,20]}
        />
    )
}
