import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react'
import {
    faGithub,
    faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import styled from "@emotion/styled";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

export function SocialIcons() {

    return (
        <IconsContainer>
            <a
                href="https://www.linkedin.com/in/andrew-colgin/"
            >
                <FontAwesomeIcon icon={faLinkedin} size="2x" style={{color: 'white'}}/>
            </a>
            <a
                href="https://github.com/drne"
            >
                <FontAwesomeIcon icon={faGithub} size="2x" style={{color: 'white'}}/>
            </a>
            <a
                href="mailto:drewcolgin@gmail.com"
            >
                <FontAwesomeIcon icon={faEnvelope} size="2x" style={{color: 'white'}}/>
            </a>
            {/*<a*/}
            {/*    href="/static/resume.pdf"*/}
            {/*>*/}
            {/*    <FontAwesomeIcon icon={faFile} size="2x" style={{color: 'white'}}/>*/}
            {/*</a>*/}
        </IconsContainer>
    )
}

const IconsContainer = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '12px',
})
