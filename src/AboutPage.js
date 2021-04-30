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
        img: "https://lh3.googleusercontent.com/6aGWZ8Am2keWyL_gbdGZa76TzaldtXf9ciLRS406o_1qft-aJfHzwSvg0co9KusEKJZv9_GQG7wGIYsG_aJh4F1zRHSoY-Yi1EtTdgsmTgNBsIXtkvgrXqmkiAEn_LJLNmsd2X2YqWeeh1EXfV3Qi2LWGWtcWtk5tv3mXwLRuxb0mCTt3z519yHBg-3vODCuE7GfbGiVrCXArkruOOCny23hNsGa4dJGiRPEyK25Dd-Z3m6BV2_r89mGqI6BmFmxPgBg_sKuiBm17M5Hxfsjp3xv_NLqbmsC661UH4viCGkTCGE6NLHgSTJYkLNFhwtj44lj6UTeQN9rD0iEydVxyI8pTiEY77WPlgtgdgW66THtZsDJh62dqfxV1j8kdFXzTA0VFHtut1ors6soBb3HVqwYCNXgUZCBjLkIta_hoBQxk8gZuMmvf6IqX6bSyYE9M4XQcjqpkbiWaK2xsSu6jFdojVy9_xS4HzWpt_5jM_0vCFOjqtfQOOhPoy34WjNn5QBYr29fuv6cU7yJttfQ299VQq81Ta9QGRwnMg4i7PRM_rhmuG4yJ8ZivP-nI8hTleAvFEHxlGAr-YmmbgiV1FMcZa9jg1wxbecGoCISXFnYboWznpKqB-iKhL9IJbYcrVn1dN-Squp8rQm47Ci8GWO5wtMOrVtiV3BZWk1v2hX7bPLtAFhhvNOdK36Py3LoTbuOiOsq-PSmZVaPWNwrxbA=w734-h978-no?authuser=0",
        title: 'Chocolate Souffle',
        author: 'me',
        featured: false
    },
    {
        img: "https://lh3.googleusercontent.com/BuCYLqXUMwW8O2YgCTzY912e1L_4i1BSv00SP0VMdTMhZFLkbGjdKtEPeUcf0INDqJMKAC6UKtcdgpRMXtgiTxX538hNpi-h7X-5AtafS31i0QjJFifh_oh6JdVaWPluJrfkBkHOSq9uMnTrBeAgScdnEaNYksG0P6fJFX-LUSLzBNUNAn4DZpcmjlzS37kSCaRjOgj2bxGoGB_0r66OzgDsLy-dSXD8_KSFVXmeQUHsZN8ETFsp5OuIC5fFDWbqZLWZT61AUCNvJXALy0w8cme8q6jDA1h8RuTJw6D1BxvYg5Rm_ySEs1-rBCIcKAyZ57VqZkK_ID83Cw6mZc89N64350S_1fomLT-S8ucT5VuGeDz5HhZAlVzf4gUiqGzirfqTlYIaVwXDgnRj-5W1-MLjA8KSZCFdhlY6glwYpLiFyieEUZe6ssMrhOMhqxQKTZauYUj7VZdfiIAWluZ_X2h7wGYfgGrAwleMPjeAaH5qnfm_P9UcIuAU1TvnFzm5sA2w65pB-S4OegOqZuAVjscGtTnv7x_lHwcFlVG8F9oU8ewn91fEE4svy7D9BRZkwt6Fu4192ZfpSt5rq16HUuCQIocy8rDyzGjsEexWwPqde5J4mCbuzf7ok11Rqhuogl0KwoCbTyWoWROqaW_iGVZ_dVBEYU_2jmNJiuR5SIIQ4sySyzqV9Ugss7NZK8lp2MIm5ecpSRp_p1mhZGVlmcU=w734-h978-no?authuser=0",
        title: 'Sourdough Bread',
        author: 'me',
        featured: true
    },
    {
        img: "https://lh3.googleusercontent.com/qeF7YU_LhKmFejPKQyA5GxUo84_hTKTvfL3LYQVL81o3Uj5VXyjQ5ucbX7wRYp_hT9iL63YOAXwVzN8gMwV3gsCBmhpL7iHWFYDx9O2vzSvcjw7UJDt-eTstp9J3KxpLwAC7u_gdPxDwstzD1QnJSK2rzDBn-k3jgiV8ti5hsdmd0MvMYT6CcytaF5T6zp_f24-8Rr9pDVCvM67zdnX4ib_ugMhVH-DCYAhJW9GoXSns1V10gRsQjZv9xoMXn6PkfiFcbDZ8ILG9ECrFiZT5QIzdBAO2M-7Zcg9Bn6S1xnkjhSK3NmOdx-HOFSg0Lt2yzl6akk9U2uLpEkrvBf6u4eGg_5sSr3zsGfIGBuiMD9-kdOxIWVa2FX28ZNpoqx1e_qASXOGp7m7eAX_IbpPSSAB6OLmP1ColM76z99nDiYWU5V59Ns6n66DCz2aDsLw4lf3QDzw_7sUSoq--2PpPW8y9Gw9-hdGkrNUJass4PBGxvFTj5uUVIWuq1dz8fuNN8MQ4wIUy8F8Uzm_iLo_am1MyK43zO-7OB64TnWpCi9xykDi4S5EgA4HFuTu4gjMLKY0FnYaaZY46qTu7BCfHkPMdNKX_UFosWWMlqMjqSIG5kPHUoSvrH_Wbhhhu-DZqV722K-s3TrrkG1MRPb-U52ScCbBI35koSQ7pIu8CTTTPAwm7BJTWnYAeNZ6laTrsP6kXJ9GNgun0JLzvUEZihkE=w734-h978-no?authuser=0",
        title: 'Lemon Semifrodo',
        author: 'me',
        featured: false
    },
    {
        img: "https://lh3.googleusercontent.com/omIlaG8okXjOdNEOq3v_sa_ZnXjDAVc0uyWNDCRZDkva8cNiV7ioPI0uxW00mN_uyOW2GpxM8hFn-hNDGDzH7J5tD7Xow8jPlLM0IfayVVlBeVvSks_oDaf7h4yDUYRyJcTGbXcGhagyoJxiXam60Pq59Q9WgxwNmnHNvP85Pr8B3SUy_1M5pGoFw3ulIibqaOnon_zLl9a2IR7M3ODrAn3cRibEkEjiXRHqsCtlI4JD-mOjleYNssdBVbQOEd4Y-MWHfvAkKXWx9Se4myuTymW2_VthjWzfLVDg02TXfF28GwQgbXp4IzIsVy6RFN-ZDb8abrOp7OjHCmXsOO1kIui3AULMYZnUP8j04PsmU5llEH5ZX0sZD4lsZDtN4Cky_aMFtkm9HllenHGfcOpohRyb9bKFxKMbJnkGgvYFDcurE3SDy3x7Cm9raSnDa992SeajqxdIo6wWxgOrJRKlekXt9YZPbX9BmhPQvczHBl3BdeDUOhGVGWf4SMRwFarmL-IfajSJXGWRzq4Vv43rZuje8OIn0z1m3ng23o3WcgJZNXSEEVtl-kOmDvjuuY6B0TZPcCo8l5fpFl3RB8eWAMzSHkD40kOg-vK-qxd_zckzXLfa_EF5WOrfmgH1aJGyZdl8B6u2bBBUkucgRsMrNHr6B8z08_Vie9zJft0nNnlhfOrgE0ILlxw6yLR2um2dsxb7hNsKZMIXVnEsr45XG_M=w734-h978-no?authuser=0",
        title: 'Skillet Cookie',
        author: 'me',
        featured: false
    },
    {
        img: "https://lh3.googleusercontent.com/JywNYfcLu5hNdLmHZ48uCwLXF-YcB_PUwHOtRkkRISX0YBOQQWV-1wIaKUrGYYJRm_J0V3hv3dzBY096UxvRIRiS0IV-JAU_nh35XmSVV9hNshK_XjsmLbSokB4-P3ZZVIU2_Da1a1ZB7BLSAuo36POCIiLFTEefjPqV57w8DtMp0ayx9K5sWVj1_OY8DENW-T9Bqkr-yS7szBeQl6LTwW3ev3yHHWXmObP0TE8kqicuTuoCxOlREDtU5JFRQu1MgsO2COUZIBGRzGW_G7MREW-Esuz_k7a0E3T1Yd5sVb3AUjwKIMb4zd9auRuj8uEkFaXdd3wLAa0jYX9wrKeCYLv2KV1nMAGV5aM3ZajMoSNFu9kc5Zh2ydkScPMoYtaoHanYktx7g4vrKnVuFfiZLIj2nXuwhv0qVEjHTF4NaiGEiJf5z80k_UZaP3GMzdrnru7AftLhQ7Glp4VDsgn_JqWjlb9v5A0SK9_W3r2ArmiB_9GRTCzyYPJer1t2zRJF0ylApcp8YYWaSoE_kSV-lbm-zMtcub-ggc2nLJbJpTEneX1eKcnAaD8Tykmc0hQ-ok8JDOYDijDuvKntkRHvlw61LRSgicTWDm6mvD07491C2eNAmEE7Ok5fCZx9VfrufTLQc-q4KZYGOx0_mR4HnvVslZV_SwWDbovZWkmDk7uDP6nW9wU5DQT4nZE8nM4q_4Z9RL-ZbZHNZ1asZCCuM_k=w734-h978-no?authuser=0",
        title: 'Gnocci',
        author: 'me',
        featured: false
    },
    {
        img: "https://lh3.googleusercontent.com/GiN6GfatOxBaBs6qfFgL7b4nami9bX4baIbk7LNKVg-gqoWiec6WOzHsR_htUfHLmdzLD7vQcgXzR13LWYypAzGI5uU_LASkYoeu9n4ony23A2WSwH9f9VpyZlNYPXmwSKOOIcs8cRglJcdzLDjHOtKC3PKdhYrk6ETYhiqL0V7SEC2GrDneo5yM5trrOAALzgaZW8tTe3FkOsD_DukpUz6j4de4suxObUeHlFMW6XI3nC2a0QW1ISnYVZr8U7jTJySRyTs0ACh8WvVif9rswEeFgqnNSCOy8bGjvNPt8azA8zeIUBWX33elkFUjfowosB8cvR2SiNq3sxMKDg300gCNzWVpb2dLRQweAI3_fmnayvTt1PSYOqqZp9iYGUGmKcLv1ePTdpDufabuYNxjnOfTB5R3Xz23kGkr3IcvRidUL05BsCp2v6QkW4ZPwVP-io6HrN-P8MIF5TE7IDSHCuip4jJGOUSHe80g99nCQTKHtKR8tfeWax_lpy6AHNmrrYCRm6ORCPa1CfI96aqUTXRgXmE0n7Nst2mUY_Jr3eKCEBa1-oObUHPPXWLUMkHCP8vNOOFZEt4gjJD58EWlYzRcHtKcbIdDmKvuoxxirmxcA33bh-NNx-QVlU9XZHsDp51koiMxjSWNJY35bDlPcoycXp0jV64gszPxxi1G1X3h0T_Oy4QYOpYD_BRizOuxs50cHF4gg3pwCPP0lWRBNYk=w1275-h957-no?authuser=0",
        title: 'Bourbon Pumpkin Pie',
        author: 'me',
        featured: false
    },
    {
        img: "https://lh3.googleusercontent.com/_CoHbRZIIKXVH7N5Q5v2nvl4xMpZ6i_xSPiEfjXBMdqpMXGTkDy9Vga33lsMHwAEnDz0aRrOjMtUbtQS2oL18AZU8r174l1Td7JqdwAFMlnm5cm1Jj6qF-e6ZtuxSJLFixiXvX-VZslYifuYuWqbapZ5CJlXhU5ugsdLGlq4SpLFtOAumo3niwmpQU7NP40QVla4lJYN9ceQ8HuQfCZMbFDItxqS5S7CuoseiHxGHFq_8a-2RzZ0dT28FEjPdzPMrrqFI-HIoAG2MPfzNIolQrPcIR6RDcR8eTrjDfcDBsHATXNxTHtgMYP1kZlwsbf6KmOKGlrxqyWr1ukouqTHgS9jkeJqp4FmEh5sky5YQmRX8Vh4PnQGRZiFRdA4xtV9VsAL5Eo-avwMFoGn9S8bRLzkbsM6P94obqW7dZHSn09n_v7hE896jXhO5NPfFoN2inbh8ZhQiK1IT2-NmSx_QM6h3LsglYc-bYaonGifOlSL5WthWx7zkNFCCplM7HZ520aLNmXIuaSMh-qlHMlYo0twW3F_RXwr_iGox6ZRJKLGxBRs1CVhttxpPoNvTdA7lExVRzKN-YbbUtl42LbuNSTlZ7PZBzxDIL2fTOCvFZnYUL307jnuoPvVAYnqALZ2gB4MwnsHsxkDrAKFHsWWlc6j1gvrJg_B_lkkgS4g0vMI1jOTa5MyZaE6qzo06utOkzIDoALtAKx6CHIb_XSaUdg=w734-h978-no?authuser=0",
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