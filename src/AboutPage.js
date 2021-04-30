import React from 'react';
import {GridList, GridListTile, GridListTileBar, makeStyles, Typography} from "@material-ui/core";
import bagelPic from "./pictures/baking/bagels.JPG"
import bagelPic2 from "./pictures/baking/bagels2.jpg"
import cremeBruleePic from "./pictures/baking/cremebrulee.jpg"
import cakePic from "./pictures/baking/cake.jpg"
import soufflePic from "./pictures/baking/souffle.jpg"
import pumpkinPiePic from "./pictures/baking/pumpkinPie.jpg"
import gnocciPic from "./pictures/baking/gnocci.jpg"
import sourdoughPic from "./pictures/baking/sourdough.jpg"
import skilletCookiePic from "./pictures/baking/skilletCookie.jpg"
import cakePic2 from "./pictures/baking/cake2.jpg"
import semifrodoPic from "./pictures/baking/lemonsemifrodo.jpg"
import arrowHandPic from "./pictures/arrow_hand.png"

const tileData = [
    {
        img: bagelPic,
        title: 'Bagels',
        author: 'me',
        featured: true
    },
    {
        img: cremeBruleePic,
        title: 'Crème brûlée',
        author: 'me',
        featured: false
    },
    {
        img: cakePic,
        title: 'Tres Leches Cake',
        author: 'me',
        featured: false
    },
    {
        img: bagelPic2,
        title: 'Bagels Again',
        author: 'me',
        featured: false
    },
    {
        img: soufflePic,
        title: 'Chocolate Souffle',
        author: 'me',
        featured: false
    },
    {
        img: sourdoughPic,
        title: 'Sourdough Bread',
        author: 'me',
        featured: true
    },
    {
        img: semifrodoPic,
        title: 'Lemon Semifrodo',
        author: 'me',
        featured: false
    },
    {
        img: skilletCookiePic,
        title: 'Skillet Cookie',
        author: 'me',
        featured: false
    },
    {
        img: gnocciPic,
        title: 'Gnocci',
        author: 'me',
        featured: false
    },
    {
        img: pumpkinPiePic,
        title: 'Bourbon Pumpkin Pie',
        author: 'me',
        featured: false
    },
    {
        img: cakePic2,
        title: 'Tres Leches Cake',
        author: 'me',
        featured: true
    },

]

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        flex: 1,
        flexDirection: 'column'
    },
    gridList: {
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
        position: 'absolute',
        maxWidth: '100vw',
        top: '100vh',
        width: "100%",
        left: 0
    },
    titleBar: {
        background:
            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
        color: 'white',
    },
}));

export default function AboutPage() {
    const classes = useStyles();

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
            <div className={classes.root}>
                <Typography variant={"h2"} align={"center"} style={{fontFamily: ['playfair'], paddingTop: '2rem'}}>
                    Who Is This Guy?
                </Typography>
                <Typography variant={"h6"} align={"center"} style={{fontFamily: ['playfair'], margin: '5vw 20vw'}}>
                    Born and raised in Houston, I've since said goodbye to hurricanes and hello to blizzards
                    by moving to the Northeast. I graduated from Northeastern University with a bachelor's in computer
                    science, which I'm now putting to work as a software engineer living in New York City.
                </Typography>
                <div>
                    <Typography variant={"h6"} align={"center"} style={{fontFamily: ['playfair'], margin: '5vw 20vw'}}>
                        I also enjoy baking from time to time, so enjoy some pictures of that.
                    </Typography>
                    <img src={arrowHandPic} alt="down arrow"/>
                </div>
                <GridList cellHeight={'500'} spacing={1} className={classes.gridList}>
                    {tileData.map((tile) => (
                        <GridListTile key={tile.img} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1}>
                            <img src={tile.img} alt={tile.title}/>
                            <GridListTileBar
                                title={tile.title}
                                titlePosition="top"
                                actionPosition="left"
                                className={classes.titleBar}
                            />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
        </div>
    )
}