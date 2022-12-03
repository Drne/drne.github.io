import React from "react";
import {Typography} from "@material-ui/core";

export default function ResumePage() {

    return (
        <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
            <iframe
                style={{
                    width: '100%',
                    flex: 1,
                }}
                src={`https://docs.google.com/document/d/1-oUo_7cn6punAYdadbXurpnF490VjFmTzXViLfJ6kCE/preview`}
                frameBorder="0"
                title="resume"
            />
            <div style={{padding: '10px'}}>
                <Typography align="center">
                Last Updated: 12/01/22
                </Typography>
            </div>
        </div>
    )
}
