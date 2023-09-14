import './App.css';
import {Canvas, useFrame} from '@react-three/fiber'
import React, {useEffect, useMemo, useRef, useState} from "react";
import {Line, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three';
import niceColors from 'nice-color-palettes';
import styled from '@emotion/styled'
import {SocialIcons} from "./SocialIcons";

const randomColorIndex = Math.floor(Math.random() * niceColors.length)
const randomColor = niceColors[randomColorIndex][0]
const threeColor = new THREE.Color('white')

function distanceBetweenPoints(p1, p2) {
    return Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2) + Math.pow(p1[2] - p2[2], 2))
}

function avgDistancePlaneToPoint(plane, point) {
    let distance = 0
    plane.forEach((planePoint) => {
        distance += distanceBetweenPoints(planePoint, point)
    })
    return distance / 3
}

function Icosahedron({ facePoint, position }) {

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

            setColors((colors) => {
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

function chunkArrayInGroups(arr, size) {
    const myArray = [];
    for(let i = 0; i < arr.length; i += size) {
        myArray.push(arr.slice(i, i+size));
    }
    return myArray;
}

function percentageBetweenPoints(p1, p2, percentage) {
    const differences = []
    p1.forEach((_, index) => {
      differences[index] = p1[index] + (p2[index] - p1[index]) * percentage
    })

    return differences
}

function BufferPoints({ count = 1000, progressPoint, setProgressPoint }) {
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

function SpringPerspectiveCamera() {
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

function Universe() {
    const [facePoint, setFacePoint] = useState([0,0,0])

    return (
        <group>
            <Icosahedron facePoint={facePoint}/>
            <BufferPoints progressPoint={facePoint} setProgressPoint={setFacePoint} />
        </group>
    )
}

function App() {

    return (
        <AppContainer className="App" style={{height: '100%', width: '100%'}}>
            <Canvas>
                <hemisphereLight intensity={.9} groundColor={0x2F586D} skyColor={0x0E4A6D} />
                <OrbitControls autoRotate autoRotateSpeed={0.2}/>
                <directionalLight color="blue" position={[0, 5, 20]} />
                <Universe />
                <SpringPerspectiveCamera/>
            </Canvas>
            <div style={{position: 'absolute', display: 'flex', flexDirection: 'column', left: '10px'}}>
                <Text>
                    Drew Colgin
                </Text>
                <SubText>
                    Software Engineer
                </SubText>
                <SocialIcons />
            </div>
        </AppContainer>
    );
}

const AppContainer = styled('div')({
    background: 'black',
    position: 'relative'

})

const Text = styled('span')({
    textAlign: 'left',
    fontSize: '40px',
    userSelect: 'none',
    fontFamily: ['Ubuntu Mono', 'monospace'],
})

const SubText = styled('span')({
    textAlign: 'left',
    fontSize: '25px',
    userSelect: 'none',
    fontFamily: ['Ubuntu Mono', 'monospace'],
})

export default App;
