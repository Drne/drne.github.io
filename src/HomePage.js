import lillyPic from './pictures/lilly3.svg';
import {Fade, IconButton, Popper, Typography} from "@material-ui/core";
import {SocialIcon} from "react-social-icons";
import PhoneIcon from '@material-ui/icons/Phone';
import {useState} from "react";
import AnimatedName from "./AnimatedName";

export default function HomePage() {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'transitions-popper' : undefined;

    return (
        <div style={{
            backgroundImage: "linear-gradient(white, lightslategrey)",
            overflow: 'hidden',
            display: 'flex',
            flex: 1,
            flexWrap: 'wrap',
        }}>
            <div style={{margin: '10% 5%', flex: .4, flexWrap: 'flex'}}>
                <AnimatedName />
                <Typography variant="subtitle1" align="left" style={{fontFamily: ['playfair display'], fontSize: '1.5rem'}}>
                    Just a software engineer from Texas who likes baking and board games.
                </Typography>
                <div style={{display: 'flex', justifyContent: 'space-evenly', marginTop: '2rem'}}>
                    <SocialIcon url="https://www.facebook.com/drewcolgin1"/>
                    <SocialIcon url="https://github.com/Drne"/>
                    <SocialIcon url="mailto:drewcolgin@gmail.com"/>
                    <IconButton color="default" component="span" style={{background: "darkseagreen"}}
                                onClick={handleClick}>
                        <PhoneIcon/>
                    </IconButton>
                    <Popper id={id} open={open} anchorEl={anchorEl} transition>
                        {({TransitionProps}) => (
                            <Fade {...TransitionProps} timeout={350}>
                                <div> (832) 628 2427</div>
                            </Fade>
                        )}
                    </Popper>
                </div>
            </div>
            <img src={lillyPic} alt="tada" style={{flex: .6, pointerEvents: 'none', marginLeft: 'auto', maxWidth: 700}}/>
        </div>
    )
}