import {config, animated, useTransition} from "react-spring";
import {Typography} from "@material-ui/core";

function getRandomValueInRange(min, max) {
    return Math.random() * (max - min) + min;
}

function lettersToTransforms(letters) {
    return letters.map((letter) => {
        const rangeStart = getRandomValueInRange(0, .75)
        const rangeEnd = rangeStart + .25
        return ({
            fig: <Typography variant={"h1"} style={{fontFamily: 'playfair'}}>{letter}</Typography>,
            op: {range: [rangeStart, rangeEnd], output: [0, 1]},
            trans: {
                "extrapolate": "clamp",
                output: [-100, 0],
                range: [rangeStart, rangeEnd]
            }
        });
    })
}

const drew = lettersToTransforms("Drew".split(""))
const colgin = lettersToTransforms("Colgin".split(""))

export default function AnimatedName() {

    const transitions = useTransition(drew, {
        from: {opacity: 0},
        enter: {opacity: 1},
        leave: {opacity: 0},
        delay: 200,
        config: config.molasses,
    })

    const transitions2 = useTransition(colgin, {
        from: {opacity: 0},
        enter: {opacity: 1},
        leave: {opacity: 0},
        delay: 200,
        config: config.molasses,
    })

    return (
        <div style={{display: 'flex', flex: .5, flexWrap: 'wrap'}}>
            <div style={{display: 'flex'}}>
                {transitions(({opacity}, item) => (
                    <animated.div
                        style={{
                            opacity: opacity.to(item.op),
                            transform: opacity
                                .to(item.trans)
                                .to(y => `translate3d(0,${y}px,0)`),
                        }}>
                        {item.fig}
                    </animated.div>
                ))}
            </div>
            <span style={{margin: 10}}/>
            <div style={{display: 'flex'}}>
                {transitions2(({opacity}, item) => (
                    <animated.div
                        style={{
                            opacity: opacity.to(item.op),
                            transform: opacity
                                .to(item.trans)
                                .to(y => `translate3d(0,${y}px,0)`),
                        }}>
                        {item.fig}
                    </animated.div>
                ))}
            </div>
        </div>
    )
}