import React, {useEffect, useMemo, useRef, useState} from "react";
import * as THREE from "three";
import {useFrame} from "@react-three/fiber";
import niceColors from "nice-color-palettes";
import {avgDistancePlaneToPoint, chunkArrayInGroups} from "../utilities";

const randomColorIndex = Math.floor(Math.random() * niceColors.length)
const randomColor = niceColors[randomColorIndex][0]
const threeColor = new THREE.Color('white')
export function Icosahedron({ facePoint, position }) {
    const earthRef = useRef()
    const groupRef = useRef()
    const [colors, setColors] = useState(Float32Array.from(new Array(666).fill([new THREE.Color(niceColors[0][0]).r,  new THREE.Color(niceColors[0][0]).g, new THREE.Color(niceColors[0][0]).b], 0).flat()))
    const [visitedIndexes, setVisitedIndexes] = useState([])
    const vec = new THREE.Vector3()

    const faces = useMemo(() => {
        if (earthRef.current) {
            const vertices = earthRef.current.geometry.attributes.position.array
            let chunks = chunkArrayInGroups(vertices, 3)
            chunks = chunkArrayInGroups(chunks, 3)
            return chunks
        } else {
            return [[], []]
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [earthRef.current])

    useEffect(() => {
        if (earthRef.current) {
            const threeColor = new THREE.Color(randomColor)
            setColors(Float32Array.from(new Array(faces.length * 3).fill([threeColor.r, threeColor.g, threeColor.b, 0]).flat()))
        }
    }, [earthRef, faces])


    useFrame(({ clock }) => {
        if (earthRef.current) {
            let currentSmallestDistance = 10000
            let currentSmallestIndex = -1
            faces.forEach((chunk, index) => {
                const dist = avgDistancePlaneToPoint(Array.from(chunk), facePoint)
                if (dist < currentSmallestDistance) {
                    currentSmallestDistance = dist
                    currentSmallestIndex = index
                }
            })

            if (visitedIndexes.includes(currentSmallestIndex)) {
                setVisitedIndexes((visIndx) => {
                    let copy = [...visIndx, currentSmallestIndex];
                    const ind = copy.indexOf(currentSmallestIndex)
                    copy.splice(ind, 1)
                    return copy
                })
            } else {
                setVisitedIndexes((visIndx) => {
                    const copy = [...visIndx, currentSmallestIndex];
                    if (copy.length > 20) {
                        copy.shift()
                    }
                    return copy
                })
            }

            setColors(() => {
                const newColors = Float32Array.from(new Array(faces.length * 3).fill([threeColor.r, threeColor.g, threeColor.b, 0]).flat())

                visitedIndexes.forEach((ind, index) => {
                    const indStart = ind * 12
                    const opacity = (0.1 * (index + 1) / 2)

                    newColors[indStart + 3] = opacity
                    newColors[indStart + 4 + 3] = opacity
                    newColors[indStart + 8 + 3] = opacity
                })

                return newColors
            })
        }

        if (groupRef.current) {
            groupRef.current.position.lerp(vec.set(0,0,0), 0.01)
        }
    })

    return (
        <group position={[0,-3,0]} ref={groupRef}>
            <mesh position={[0,0,0]} receiveShadow={true}>
                <icosahedronGeometry args={[1,6]}>
                </icosahedronGeometry>
                <meshPhongMaterial transparent={true} color={'red'} wireframe/>
            </mesh>
            <mesh ref={earthRef} position={[0,0,0]} receiveShadow={true}>
                <icosahedronGeometry args={[1,6]} >
                    <bufferAttribute attach="attributes-color" args={[colors, 4]} />
                </icosahedronGeometry>
                <meshStandardMaterial vertexColors transparent side={THREE.DoubleSide}/>
            </mesh>
        </group>
    )
}
