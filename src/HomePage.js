import lillyPic from './lilly.svg';
import {Typography} from "@material-ui/core";

export default function HomePage() {

    return (
        <div style={{
            backgroundImage: "linear-gradient(white, lightslategrey)",
            overflow: 'hidden',
            display: 'flex',
            flex: 1,
            pointerEvents: 'none',
        }}>
            <div style={{margin: '0 5% 0 5%'}}>
                <Typography variant="h1" style={{paddingTop: '50%', fontFamily: ['playfair']}} align="left">
                    Drew Colgin
                </Typography>
                <Typography variant="subtitle1" align="left" style={{fontFamily: ['playfair'], fontSize: '1.5rem'}}>
                    Just a software engineer from Texas who likes baking and board games.
                </Typography>
            </div>
            <img src={lillyPic} alt="tada" style={{flex: 1, pointerEvents: 'none'}}/>
        </div>
    )
}