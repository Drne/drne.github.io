import React from "react";
import {Typography} from "@material-ui/core";
import {Divider} from "material-ui";
import WorkExperience from "./WorkExperience";

export default function ResumePage() {

    return (
        <div style={{
            backgroundImage: "linear-gradient(white, lightslategrey)",
            overflow: 'hidden',
            display: 'flex',
            flex: 1,
            pointerEvents: 'none',
            height: '100%',
            flexDirection: 'column',
        }}>
            <div style={{margin: 15}}>
                <div style={{display: 'flex', marginBottom: 2}}>
                    <Typography variant={"h4"} style={{fontWeight: 'bold'}}>
                        Work Experience
                    </Typography>
                    <Divider style={{borderTop: '2px solid black', alignSelf: 'center', flex: 1}}/>
                </div>
                <WorkExperience position={"Software Engineering Co-op"} companyName={"Sconfeld Strategic Advisors"}
                                timeRange={"Jan 2020 - Feb 2021"} body={"Worked with the Neutrality trading team to create React frontends to monitor and interact with custom automated trading"}/>
            </div>
        </div>
    )
}