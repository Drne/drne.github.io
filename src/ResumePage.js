import React from "react";
import {Typography} from "@material-ui/core";
import {Divider} from "material-ui";
import WorkExperience from "./WorkExperience";

export default function ResumePage() {

    return (
        <div style={{
            backgroundImage: "linear-gradient(white, lightslategrey)",
            display: 'flex',
            flex: 1,
            pointerEvents: 'none',
            flexDirection: 'column',
            height: 'fit-content'
        }}>
            <div style={{margin: '.5%', display: 'flex', flexWrap: 'wrap'}}>
                <div style={{flex: 1, margin: '.5%'}}>
                    <div style={{display: 'flex', marginBottom: 2}}>
                        <Typography variant={"h4"} style={{fontWeight: 'bold'}}>
                            Education
                        </Typography>
                        <Divider style={{borderTop: '2px solid black', alignSelf: 'center', flex: 1}}/>
                    </div>
                </div>
                <div style={{flex: 1, margin: '.5%', minWidth: 200}}>
                    <div style={{display: 'flex', marginBottom: 2}}>
                        <Typography variant={"h4"} style={{fontWeight: 'bold'}}>
                            Work Experience
                        </Typography>
                        <Divider style={{borderTop: '2px solid black', alignSelf: 'center', flex: 1}}/>
                    </div>
                    <div style={{alignContent: 'center', display: 'flex', margin: '10px 0', flexWrap: 'wrap', flexDirection: 'column'}}>
                        <WorkExperience position={"Software Engineering Co-op"}
                                        companyName={"Sconfeld Strategic Advisors"}
                                        timeRange={"Jan 2020 - Feb 2021"}
                                        iconLink={"https://www.schonfeld.com/favicon.png"}
                                        body={"Worked with the Neutrality trading team to create React frontends to monitor and interact with custom automated trading"}/>
                        <WorkExperience position={"Software Engineering Co-op"} companyName={"InsightSquared"}
                                        timeRange={"Jan 2019 - July 2019"}
                                        iconLink={"https://lh3.googleusercontent.com/h8cHIqEi3b_o2Q3j51DnbcX8hrj1CPHFUDHDpm8yEL-RxA1Ci5WtMaZuue0k7hCFBfnTIpS5RaI2CMNZnGJSioF6bzdPKHvbqLEi4QsSxeaYqxHh17uuAOgPh-af0TaqqVaIV6DDUA=w186-h151-p-k"}
                                        body={"Created new frontends to accommodate new products, and updated existing frameworks to improve performance."}/>
                        <WorkExperience position={"Software Engineering Co-op"} companyName={"FuidScreen"}
                                        timeRange={"Jan 2018 - July 2018"}
                                        iconLink={"https://lh3.googleusercontent.com/sMT7E-vURroqHzE09a5bbaqKf9BSsVLNH898_5Ol4QdzAaa0cXh4MQw3_2KVenbVZ2qLwGVpfQUlnUOkerBT7nA9A7F2dfvXWO2md6dtEjnXAgvvAzONCD_xDxu7P09NF7M9LMJ1mQ=s180-p-k"}
                                        body={"Engineered front and backend libraries in python to allow for novel laboratory techniques and procedures."}/>
                        <WorkExperience position={"Technology Intern"} companyName={"Saint Francis School"}
                                        timeRange={"June 2017 - Sept 2017"}
                                        iconLink={"https://icons-for-free.com/iconfiles/png/512/school-1321215625065495975.png"}
                                        body={"Assisted IT staff in implementing new technologies to assist teaching faculty. Normalized internal database schemas for student management."}/>
                        <WorkExperience position={"Counter Staff"} companyName={"Pappas Burger"}
                                        timeRange={"May 2015 - Sept 2015"}
                                        iconLink={"https://cdn4.iconfinder.com/data/icons/ice-cream-70/512/milkshake-ice-cream-frappe-512.png"}
                                        body={"Assisted customers with their orders and supported other staff in a high-paced service environment."}/>
                    </div>
                </div>
            </div>
        </div>
    )
}