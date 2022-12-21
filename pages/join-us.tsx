import {Container, Grid, Button, Tab} from 'semantic-ui-react';
import ReactMarkdown from 'react-markdown';

import general_info from '../public/Assets/FAQ/general_info';
import research_info from '../public/Assets/FAQ/research_info';
import datablog_info from '../public/Assets/FAQ/datablog_info';
import consulting_info from '../public/Assets/FAQ/consulting_info';

const panes = [
    {
        menuItem: 'General',
        render: () => <Tab.Pane attached={false} style={{textAlign: 'left', padding: '5%'}}>
                            <ReactMarkdown>{general_info}</ReactMarkdown>
                      </Tab.Pane>,
    },
    {
        menuItem: 'Data Blog',
        render: () => <Tab.Pane attached={false} style={{textAlign: 'left', padding: '5%'}}>
                            <ReactMarkdown>{datablog_info}</ReactMarkdown>
                      </Tab.Pane>,
    },
    {
        menuItem: 'Research',
        render: () => <Tab.Pane attached={false} style={{textAlign: 'left', padding: '5%'}}>
                            <ReactMarkdown>{research_info}</ReactMarkdown>
                     </Tab.Pane>,
    },
    {
        menuItem: 'Consulting',
        render: () => <Tab.Pane attached={false} style={{textAlign: 'left', padding: '5%'}}>
                            <ReactMarkdown>{consulting_info}</ReactMarkdown>
                     </Tab.Pane>,
    }
]

const applicationPage = () => {
    const applyOpen = new Date("12/09/2022");
    const applyClose = new Date("01/13/2023");
    const applicationLink = "https://forms.gle/tzDRTQjHmG2XXkuR8";
    if (applyOpen < new Date(Date.now()) && Date.now() < new Date(applyClose).setHours(24, 0, 0, 0)) {
        // need this weird date logic to make sure current time is less than midnight for applyClose
        return (
            <Grid>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <p style={{fontSize: '2em', textAlign: "left"}}>
                            Applications to join DataRes are currently open and will close at midnight on {applyClose.toLocaleDateString()}!  Each of our teams will be reviewing applications and reaching out sometime during week 1 about decisions.
                        </p>
                    </Grid.Column>
                    <Grid.Column>
                    <div style={{marginTop: '5%', paddingTop: '20%', textAlign: 'center'}}>
                                <Button size="large" onClick={() => window.open(applicationLink, "_blank")}>
                                    Apply!
                                </Button>
                            </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
    else {
        return (
            <Grid>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <p style={{fontSize: '3em', textAlign: "left"}}>
                            DataRes is currently not recruiting.
                            Recruiting for each of the DataRes teams happens at the beginning of every quarter.
                            Please check out our Facebook and Instagram for the most
                            up to date information about upcoming applications.
                        </p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

const JoinUs = () => {
    return (
        <div style={{backgroundColor: '#333b65'}}>
            <div style={{color: 'white'}}>
                <Container>
                    <div style={{textAlign: 'center', color: 'white', paddingBottom: '10%', paddingTop: '10%'}}>
                        <h1 style={{fontSize: '5em'}}>Join our team!</h1>
                    </div>
                    {applicationPage()}
                </Container>
            </div>
            <div style={{paddingLeft: '20%', paddingRight: '20%', paddingTop: '10%', paddingBottom: '10%'}}>
                <div style={{textAlign: 'center', color: 'white', paddingBottom: '10%', paddingTop: '10%'}}>
                        <h1 style={{fontSize: '3em'}}>Learn More About DataRes!</h1>
                </div>
                <Tab menu={{ color: 'orange'}} panes={panes} />
            </div>
        </div>
    )
}

export default JoinUs;
