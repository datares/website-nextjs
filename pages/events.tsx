import {Header, Container,
    Grid, Divider, Segment} from 'semantic-ui-react';

import ImageCarousel from '../components/imageCarousel';

import datafest1 from "../public/Assets/Events/datafest1.jpg"
import datafest2 from "../public/Assets/Events/datafest2.jpg"
import datafest3 from "../public/Assets/Events/datafest3.jpg"
import datafest4 from "../public/Assets/Events/datafest4.jpg"
import laser_tag from "../public/Assets/Events/laser_tag.jpg"
import datalearn from "../public/Assets/Events/datalearn.jpg"
import consulting from "../public/Assets/Events/consulting.jpg"

const Events = () => {
    const datafest_images = [
        {
            src: datafest1,
            alt: 'datafest image',
            description: "Joe and Josie spotted among DataRes members"
        },
        {
            src: datafest2,
            alt: 'datafest image',
            description: "Always good food at the hackathon"
        },
        {
            src: datafest3,
            alt: 'datafest image',
            description: "Good vibes post closing ceremony"
        },
        {
            src: datafest4,
            alt: 'datafest image',
            description: "Late nights at the hackathon are always rough"
        }
    ]
    const social_images = [
        {
            src: laser_tag,
            alt: 'laser tag social',
            description: "Laser tag social!"
        },
        {
            src: datalearn,
            alt: 'laser tag social',
            description: "DataLearn info session"
        },
        {
            src: consulting,
            alt: 'laser tag social',
            description: "Consulting team social at Janss!"
        }
    ]

    return (
        <div style={{backgroundColor: "#333b65", color: "white"}}>
            <div>
                <Container>
                    <div style={{paddingTop: '10%'}}>
                        <h1 style={{fontSize: '5em'}}>Events</h1>
                    </div>
                    <Grid>
                        <Grid.Row columns={2}>
                            <Grid.Column width={9} style={{marginTop: 20}}>
                                <p style={{fontSize: '1.5em'}}>
                                    DataRes has a large presence on the UCLA campus and we
                                    often host or participate in events open to the wider 
                                    campus community
                                </p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </div>

            <div style={{marginTop: '5%', paddingBottom: '10%'}}>
                <Container fluid>
                    <div style={{fontSize: 40, marginBottom: '5%', marginTop: '5%'}}>
                        <h1 style={{fontSize: '1.5em', paddingLeft: '10%'}}>ASA DataFest</h1>
                    </div>

                    <div style={{alignItems: 'center', alignContent: 'center'}}>

                    <Container className='card-body'>
                        <Segment style={{textAlign: 'center'}} size='big' >
                            <ImageCarousel images={datafest_images} />
                            <Header style={{fontSize: 18}}>April 29 - May 1, 2022</Header>
                            <div style={{fontSize: 16, color: 'black'}}>
                                <Divider/>
                                <p>
                                    ASA DataFest@UCLA is an annual datathon hosted at UCLA and allows students to try and find the best insight, and communicate that insight, from a large, complex dataset in a time sensitive manner.
                                </p>
                                <p>This year, we had 25+ DataRes members participate, including a team that won best use of statistical models!
                                </p>
                            </div>
                        </Segment>
                    </Container>
                    </div>
                </Container>
            </div>

            <div style={{marginTop: '5%', paddingBottom: '10%'}}>
                <Container fluid>
                    <div style={{fontSize: 40, marginBottom: '5%', marginTop: '5%'}}>
                        <h1 style={{fontSize: '1.5em', paddingLeft: '10%'}}>Social and Educational Events</h1>
                    </div>
                    
                    <div style={{alignItems: 'center', textAlign: 'center'}}>

                    <Container className='card-body'>
                        <Segment className='segment-body' onClick={() => {}} >
                            <Header style={{fontSize: 18}}>Club Community</Header>
                            <ImageCarousel images={social_images} />
                            <div style={{fontSize: 16, color: 'black'}}>
                                <Divider/>
                                <p>
                                    At DataRes, we place a large emphasis on building a community within our club and we host a wide range of social and educational events for the public members!
                                </p>
                                <p>
                                    A few examples, shown above, include a laser tag social hosted on campus and a public info session about our DataLearn track happening during Fall 2022.
                                </p>
                            </div>
                        </Segment>
                    </Container>
                    </div>
                </Container>
            </div>            
        </div>
    )
}

export default Events;
