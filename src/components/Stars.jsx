import React, {useMemo, useRef, useState} from "react";
import * as THREE from "three";
import {useFrame} from "@react-three/fiber";
import {Line} from "@react-three/drei";
import {chunkArrayInGroups, percentageBetweenPoints} from "../utilities";

export function Stars({ count = 1000, progressPoint, setProgressPoint }) {
    const [vertices, chunkedPoints] = useMemo(() => {
        const p = new Array(count).fill(0).map((v) => (0.5 - Math.random()) * 7.5);
        const floatArray = new Float32Array(p)
        const vertices = new THREE.BufferAttribute(floatArray, 3);
        const chunks = chunkArrayInGroups(p, 3)
        return [vertices, chunks]
    }, [count]);

    const [[point1, point2], setPoints] = useState([chunkedPoints[2], chunkedPoints[1]])
    const [currentPercentage, setCurrentPercentage] = useState(1)
    const [oldLineProgPoint, setOldLineProgPoint] = useState([0,0,0])
    const [lastPoint, setLastPoint] = useState([0,0,0])
    const groupRef = useRef()
    const vec = new THREE.Vector3()

    useFrame(() => {
        if (currentPercentage >= 1) {
            const randomPoint2 = Math.floor(Math.random() * 333)
            setCurrentPercentage(0)
            setLastPoint(point1)
            setPoints([point2, chunkedPoints[randomPoint2]])
        } else {
            const newPercentage = currentPercentage+0.005
            setProgressPoint(percentageBetweenPoints(point1, point2, newPercentage))
            setOldLineProgPoint(percentageBetweenPoints(point1, lastPoint, 1-newPercentage))
            setCurrentPercentage(newPercentage)
        }

        if (groupRef.current) {
            groupRef.current.position.lerp(vec.set(0,0,0), 0.01)
        }
    })

    return (
        <group ref={groupRef} position={[0,-1,0]}>
            <points>
                <bufferGeometry>
                    <bufferAttribute attach={"attributes-position"} {...vertices} />
                </bufferGeometry>
                <pointsMaterial
                    size={0.1}
                    threshold={0.1}
                    color="white"
                    sizeAttenuation={true}
                />
            </points>
            <Line color="red" points={[point1, progressPoint]} lineWidth={1}/>
            <Line points={[point1, oldLineProgPoint]} color={"red"} lineWidth={1}/>
        </group>
    );
}
