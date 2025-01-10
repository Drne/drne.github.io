import {SocialIcons} from "./SocialIcons";
import React from "react";
import styled from "@emotion/styled";

export function Information() {

    return (
        <div style={{position: 'absolute', display: 'flex', flexDirection: 'column', left: '10px'}}>
            <Text>
                Drew Colgin
            </Text>
            <SubText>
                Software Engineer
            </SubText>
            <SocialIcons />
        </div>
    )
}

const Text = styled('div')({
    textAlign: 'left',
    fontSize: '40px',
    userSelect: 'none',
    fontFamily: ['Ubuntu Mono', 'monospace'],
    color: 'white',
})

const SubText = styled('span')({
    textAlign: 'left',
    fontSize: '25px',
    userSelect: 'none',
    fontFamily: ['Ubuntu Mono', 'monospace'],
    color: 'white',
})
