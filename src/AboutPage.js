import React from 'react';
import {GridList, GridListTile, GridListTileBar, makeStyles, Typography} from "@material-ui/core";
import arrowHandPic from "./pictures/arrow_hand.png"

const tileData = [
    {
        img: "https://lh3.googleusercontent.com/g2gD6WMyaiOWBdS6t2gf4uS6VaiHsoPFJwFGYuZ9z3CnMsg3QpEY6WD6s_O9ZiewJPFsCbC3TeR-SBb4XMWKlqI9Qnbq7nPkfeeEUFbKWM6eipNblpqBT7x3HOTn23deyZXmNt07ug=w2400?source=screenshot.guru%22%3E%20%3Cimg%20src=%22https://lh3.googleusercontent.com/g2gD6WMyaiOWBdS6t2gf4uS6VaiHsoPFJwFGYuZ9z3CnMsg3QpEY6WD6s_O9ZiewJPFsCbC3TeR-SBb4XMWKlqI9Qnbq7nPkfeeEUFbKWM6eipNblpqBT7x3HOTn23deyZXmNt07ug=w600-h315-p-k",
        title: 'Bagels',
        author: 'me',
        featured: true
    },
    {
        img: "https://lh3.googleusercontent.com/-Tq1s_pRc9Ghvz9xvwTHtb1TMwAPU9KQe9uaJD0kuky2IG1CEbjPHrLpe_0YKgUxim6xlZ3PCAg_jNj5TXY1TzmIiR0weam0iuHN6ZGciTNK5yeY_FGqqYBpD3_0BlUjqSK4Sn4CGQ=w2400?source=screenshot.guru\"> <img src=\"https://lh3.googleusercontent.com/-Tq1s_pRc9Ghvz9xvwTHtb1TMwAPU9KQe9uaJD0kuky2IG1CEbjPHrLpe_0YKgUxim6xlZ3PCAg_jNj5TXY1TzmIiR0weam0iuHN6ZGciTNK5yeY_FGqqYBpD3_0BlUjqSK4Sn4CGQ=w600-h315-p-k",
        title: 'Crème brûlée',
        author: 'me',
        featured: false
    },
    {
        img: "https://lh3.googleusercontent.com/liebkLOgVa0C-HFuxHdYad_5-1doojmytO3zXkinB5DA_EDo-WDTwpRGsU1KoSnxJfChhak3_Ri47xi3KqpeAJ9zjnQnNTiRdJ0Kkli8fqLciGc96QY-HqfBk4cI6kYV2Df-GXQXSQ=w2400?source=screenshot.guru\"> <img src=\"https://lh3.googleusercontent.com/liebkLOgVa0C-HFuxHdYad_5-1doojmytO3zXkinB5DA_EDo-WDTwpRGsU1KoSnxJfChhak3_Ri47xi3KqpeAJ9zjnQnNTiRdJ0Kkli8fqLciGc96QY-HqfBk4cI6kYV2Df-GXQXSQ=w600-h315-p-k",
        title: 'Tres Leches Cake',
        author: 'me',
        featured: false
    },
    {
        img: "https://lh3.googleusercontent.com/ydqjT5iVvErX1rXnQ5UfN_GzwRz-geQ4Kx8uHi1Tr0VTXWtGNKqknXnwXgLgxTYxcky8Dz4txcayN3gWuEwxJtFkS82Szwjnsf_UrwvSryocJNjg1QjCEkmGsa_JYr2IMQV1xMAFkA=w2400?source=screenshot.guru\"> <img src=\"https://lh3.googleusercontent.com/ydqjT5iVvErX1rXnQ5UfN_GzwRz-geQ4Kx8uHi1Tr0VTXWtGNKqknXnwXgLgxTYxcky8Dz4txcayN3gWuEwxJtFkS82Szwjnsf_UrwvSryocJNjg1QjCEkmGsa_JYr2IMQV1xMAFkA=w600-h315-p-k",
        title: 'Bagels Again',
        author: 'me',
        featured: false
    },
    {
        img: "https://lh3.googleusercontent.com/no-6OxHJ1MvtnLLr3PuCfulx4x5AqcYK2AGI0fmQL7Uiwe5YNj80s3fuBWMbeAELiF2xIjbZVq8PSu1pgMgqv1Qjf7T4vhLwJY7aNTStLDL1gHFzTgyckjUoq3yeHA4V63WLvTFJcA=w2400?source=screenshot.guru\"> <img src=\"https://lh3.googleusercontent.com/no-6OxHJ1MvtnLLr3PuCfulx4x5AqcYK2AGI0fmQL7Uiwe5YNj80s3fuBWMbeAELiF2xIjbZVq8PSu1pgMgqv1Qjf7T4vhLwJY7aNTStLDL1gHFzTgyckjUoq3yeHA4V63WLvTFJcA=w600-h315-p-k" ,
        title: 'Chocolate Souffle',
        author: 'me',
        featured: false
    },
    {
        img: "https://lh3.googleusercontent.com/8YLpQbzpvTyXJcJEgvH4lvR432D1QVleJz2InyQf1xpHdk1QyJUpUkujSHvR7JofTzqrFEPiFcuuxeYxjZnx13Gt-mXbLsmWCJWor8Tb-PZpZgN0jQRX6NmZHukA-xCj8k5j0NVfIA=w2400?source=screenshot.guru\"> <img src=\"https://lh3.googleusercontent.com/8YLpQbzpvTyXJcJEgvH4lvR432D1QVleJz2InyQf1xpHdk1QyJUpUkujSHvR7JofTzqrFEPiFcuuxeYxjZnx13Gt-mXbLsmWCJWor8Tb-PZpZgN0jQRX6NmZHukA-xCj8k5j0NVfIA=w600-h315-p-k",
        title: 'Sourdough Bread',
        author: 'me',
        featured: true
    },
    {
        img: "https://lh3.googleusercontent.com/Agme0jcb4sGcNkgJ4cE1J73BfSPVxCxSbo304Srb7bsLzs96ZcQCv-1UOcILkdfcWs9tP6m9y0zudMFvAJD5DpwYeBlxfWUJyQozV1wOb94L80L5Pmr0K9M4gSfTqFQVkXChq10tmA=w2400?source=screenshot.guru\"> <img src=\"https://lh3.googleusercontent.com/Agme0jcb4sGcNkgJ4cE1J73BfSPVxCxSbo304Srb7bsLzs96ZcQCv-1UOcILkdfcWs9tP6m9y0zudMFvAJD5DpwYeBlxfWUJyQozV1wOb94L80L5Pmr0K9M4gSfTqFQVkXChq10tmA=w600-h315-p-k",
        title: 'Lemon Semifrodo',
        author: 'me',
        featured: false
    },
    {
        img: "https://lh3.googleusercontent.com/-Ua3bVuVIqCol67L9Eqo3HfprFBcCpSfdy6_7H_YeraNVHHbmlF2_Z88-EDalema7L4Mx-Xj_q0zn8-QdpSCYf2GZtky6BfBw_hZwCGo9annN0HSgS9W7_RHky_vEG1Oc-ogHUSRjQ=w2400?source=screenshot.guru\"> <img src=\"https://lh3.googleusercontent.com/-Ua3bVuVIqCol67L9Eqo3HfprFBcCpSfdy6_7H_YeraNVHHbmlF2_Z88-EDalema7L4Mx-Xj_q0zn8-QdpSCYf2GZtky6BfBw_hZwCGo9annN0HSgS9W7_RHky_vEG1Oc-ogHUSRjQ=w600-h315-p-k",
        title: 'Skillet Cookie',
        author: 'me',
        featured: false
    },
    {
        img: "https://lh3.googleusercontent.com/p-zzD-CJiJNYH1I0tye64OTOublje167hUtm3vpHBcSTUNcd9B4hrZl0tzVPyTiOn2ISwEpbR_bsfqTWhF7NEl4KkBm9xUeDnkVUsDgLFXr3jkBtPM17x-HuWQZlyO094UkGoU9DwA=w2400?source=screenshot.guru\"> <img src=\"https://lh3.googleusercontent.com/p-zzD-CJiJNYH1I0tye64OTOublje167hUtm3vpHBcSTUNcd9B4hrZl0tzVPyTiOn2ISwEpbR_bsfqTWhF7NEl4KkBm9xUeDnkVUsDgLFXr3jkBtPM17x-HuWQZlyO094UkGoU9DwA=w600-h315-p-k",
        title: 'Gnocci',
        author: 'me',
        featured: false
    },
    {
        img: "https://lh3.googleusercontent.com/E0MZiz1n6tGFRSH7d2m43RTTDVRM5o9PQSl1t--2gPlxwILh8-11-1xy1CdbnYCyQ7uMxVPAzGQSSFxvx58ffG_zEurBp2Z3Fjo9XI6w6TLZ4QFGNf7g6n0MXPZo64kVexwYNv1jpg=w2400?source=screenshot.guru\"> <img src=\"https://lh3.googleusercontent.com/E0MZiz1n6tGFRSH7d2m43RTTDVRM5o9PQSl1t--2gPlxwILh8-11-1xy1CdbnYCyQ7uMxVPAzGQSSFxvx58ffG_zEurBp2Z3Fjo9XI6w6TLZ4QFGNf7g6n0MXPZo64kVexwYNv1jpg=w600-h315-p-k",
        title: 'Bourbon Pumpkin Pie',
        author: 'me',
        featured: false
    },
    {
        img: "https://lh3.googleusercontent.com/8U6x7Kp4csUn4ZxgI2QkKQsSZfa4dMmEZ-YJNI_VqdSwoBD6vmkKKfyyIOqluZevSHsFhxowu0tYHNrk7gnTpvAxvWCDl9f1_v_5xnFZ0afFOOh_0tnLXK0k-_PdAWE3u7E2tHt3JA=w2400?source=screenshot.guru\"> <img src=\"https://lh3.googleusercontent.com/8U6x7Kp4csUn4ZxgI2QkKQsSZfa4dMmEZ-YJNI_VqdSwoBD6vmkKKfyyIOqluZevSHsFhxowu0tYHNrk7gnTpvAxvWCDl9f1_v_5xnFZ0afFOOh_0tnLXK0k-_PdAWE3u7E2tHt3JA=w600-h315-p-k",
        title: 'Tres Leches Cake',
        author: 'me',
        featured: true
    },

]

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        justifyContent: 'space-around',
        overflow: 'hidden',
        flex: 1,
        flexDirection: 'column'
    },
    gridList: {
        // Promote the list into its own layer on Chrome. This cost memory but helps keeping high FPS.
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
                <Typography variant={"h2"} align={"center"} style={{fontFamily: ['playfair display'], paddingTop: '2rem'}}>
                    Who Is This Guy?
                </Typography>
                <Typography variant={"h6"} align={"center"} style={{fontFamily: ['playfair display'], margin: '5% 10%'}}>
                    Born and raised in Houston, I've since said goodbye to hurricanes and hello to blizzards
                    by moving to the Northeast. I graduated from Northeastern University in 2021 with a bachelor's in computer
                    science, which I'm now putting to work as a software engineer living in New York City.
                </Typography>
                <div>
                    <Typography variant={"h6"} align={"center"} style={{fontFamily: ['playfair display'], margin: '5% 10%'}}>
                        I also enjoy baking from time to time, so enjoy some pictures of that.
                    </Typography>
                    <img src={arrowHandPic} alt="down arrow"/>
                </div>
                <GridList cellHeight={500} spacing={1} className={classes.gridList}>
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
