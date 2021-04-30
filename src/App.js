import './App.css';
import {AppBar, Tab, Tabs, Typography} from "@material-ui/core";
import {useState} from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import {ParallaxProvider} from 'react-scroll-parallax';

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index &&
            <>
                {children}
            </>
            }
        </div>
    );
}

function App() {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="App" style={{overflow: 'hidden'}}>
            <MuiThemeProvider>
                <ParallaxProvider>
                    <AppBar position="sticky" style={{background: 'lightslategray'}}>
                        <Typography variant={"h4"}
                                    style={{position: "absolute", padding: '5px', fontFamily: ['Open Sans'], fontSize: '2rem'}}>
                            Drew Colgin
                        </Typography>
                        <Tabs value={value} onChange={handleChange} centered>
                            <Tab label="Home"/>
                            <Tab label="About"/>
                            <Tab label="CV"/>
                        </Tabs>
                    </AppBar>
                    <TabPanel value={value} index={0}>
                        <HomePage/>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <AboutPage/>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        Item Three
                    </TabPanel>
                </ParallaxProvider>
            </MuiThemeProvider>
        </div>
    );
}

export default App;
