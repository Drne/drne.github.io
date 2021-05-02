import {Hidden, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minWidth: '20%',
        maxWidth: '500px',
        border: '1px solid black'
    },
    container1: {
        display: 'flex',
    },
    timeRange: {
        flex: .5
    },
    companyDetails: {
        flex: '1 0',
        display: 'flex',
        flexDirection: 'row',
        padding: .5
    },
    companyText: {
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        padding: 2
    },
    companyIcon: {
        background: 'deepskyblue',
        display: 'flex',
        borderRadius: '100%',
        width: 50,
        minWidth: 50,
        minHeight: 50,
        height: 50,
        alignSelf: 'center'
    },
    companyPosition: {
        color: "deepskyblue",
        fontWeight: 'bold'
    },
    companyName: {
        fontWeight: 'bold'
    },
    time: {
        color: 'grey',
        fontStyle: 'italic'
    }
}));

export default function WorkExperience({position, companyName, timeRange, body}) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.container1}>
                <div className={classes.companyDetails}>
                    <Hidden xsDown>
                        <div className={classes.companyIcon}>
                            <img src={"https://www.schonfeld.com/favicon.png"} alt={"schonfeld"}
                                 style={{maxWidth: '80%', margin: 'auto', filter: 'brightness(0) invert(1)'}}/>
                        </div>
                    </Hidden>
                    <div className={classes.companyText}>
                        <Typography variant={"h6"} classes={{h6: classes.companyPosition}}>
                            {position}
                        </Typography>
                        <Typography variant={"body1"} classes={{body1: classes.companyName}}>
                            {companyName}
                        </Typography>
                    </div>
                </div>
                <div className={classes.timeRange}>
                    <Typography classes={{body1: classes.time}}>
                        | {timeRange}
                    </Typography>
                </div>
            </div>
            <Typography variant={"body1"}>
                {body}
            </Typography>
        </div>
    )
}