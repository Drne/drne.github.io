import './App.css';
import {Canvas} from '@react-three/fiber'
import React from "react";
import {OrbitControls } from '@react-three/drei'
import styled from '@emotion/styled'
import {SpringPerspectiveCamera} from "./components/Camera";
import {Universe} from "./components/Universe";
import {Information} from "./components/Information";

function App() {

    return (
        <AppContainer className="App">
            <Canvas>
                <hemisphereLight intensity={.9} groundColor={0x2F586D} skyColor={0x0E4A6D} />
                <OrbitControls autoRotate autoRotateSpeed={0.2} enableZoom={false}/>
                <directionalLight color="blue" position={[0, 5, 20]} />
                <Universe />
                <SpringPerspectiveCamera/>
            </Canvas>
            <Information />
        </AppContainer>
    );
}

const AppContainer = styled('div')({
    background: 'black',
    position: 'relative',
    height: '100%',
    width: '100%',
})

export default App;
