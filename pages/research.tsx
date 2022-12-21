import {Header, Container, 
            Segment, Grid} from 'semantic-ui-react';

import Image from 'next/image';

// Import JS
import researchImage from '../public/Assets/Research/research_image.svg';
import research1 from '../public/Assets/Research/research1.png';
import research2 from '../public/Assets/Research/research2.png';
import research3 from '../public/Assets/Research/research3.png';
import research4 from '../public/Assets/Research/research4.gif';
import research5 from '../public/Assets/Research/research5.png';

const Articles = [
    {
        'url': 'https://ucladatares.medium.com/deep-learning-on-graphs-integration-of-dgl-and-neo4j-dbms-for-social-analysis-321563eb900f',
        'image': research5,
        'title': 'Deep Learning on Graphs: Integration of DGL and Neo4j DBMS for Social Analysis',
        'meta': 'August 28, 2022',
        'authors': 'Irsyad Adam'
    },
    {
        'url': 'https://ucladatares.medium.com/make-a-monet-image-style-transfer-with-cycle-gans-5475dcb525b8',
        'image': research1,
        'title': 'Make-A-Monet: Image Style Transfer With Cycle GANs',
        'meta': 'July 1, 2021',
        'authors': 'Colin Curtis (@Colinpcurtis), Adhvaith Vijay'
    },
    {
        'url': 'https://ucladatares.medium.com/stock-market-trading-with-reinforcement-learning-df406c2c1935',
        'image': research2,
        'title': 'Stock Market Trading With Reinforcement Learning',
        'meta': 'January 10, 2021',
        'authors': 'Nilay Shah, Colin Curtis (@Colinpcurtis), Shail Mirpuri'
    },
    {
        'url': 'https://medium.com/@ucladatares/rlette-casino-roulette-through-reinforcement-learning-67e865843f0d',
        'image': research3,
        'title': 'RLette — Casino Roulette through Reinforcement Learning',
        'meta': 'July 27, 2020',
        'authors': 'Francesco Colonnese @fcolo_, Andrei Rekesh @AndreiRekesh'
    },
    {
        'url': 'https://medium.com/@ucladatares/predicting-speed-from-video-frames-dissecting-the-comma-ai-challenge-5da697b55886',
        'image': research4,
        'title': 'Predicting speed from video frames — Dissecting the comma.ai challenge',
        'meta': 'July 27, 2020',
        'authors': 'Francesco Colonnese @fcolo_, Andrei Rekesh @AndreiRekesh'
    }
]

const Research = () => {
    return (
        <div style={{backgroundColor: "#333b65"}}>
            
            {/* Main Description  */}
            <div style={{color: "white", paddingTop: '10%'}}>
                <Container>
                    <div style={{}}>
                    <h1 style={{fontSize: '5em'}}>Research</h1>
                    </div>
                    <Grid>
                        <Grid.Row columns={2}>
                            <Grid.Column>
                                <p style={{fontSize: '1.5em'}}>
                                    Our team investigates a range of advanced machine learning problems 
                                    primarily involving deep learning and reinforcement learning. 
                                </p>
                                <p style={{fontSize: '1.5em'}}>
                                    In previous quarters, we&apos;ve worked on graph neural networks and node classification,
                                    generative modeling, and text generation.
                                </p>
                                <p style={{fontSize: '1.5em'}}>
                                    Our members come from various backgrounds in math and computer science to take an
                                    applied look at the newest ML research. 
                                </p>
                            </Grid.Column>
                            <Grid.Column>
                                <Image src={researchImage} width={500} alt='research header image'></Image>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </div>

            {/* Ideally, add react search bar */}
            <Container style={{paddingBottom: 50}}>
                <Container fluid>
                            <Header style={{fontSize: 40, marginBottom: '5%', marginTop: '5%', color: 'white'}}>
                                Latest Research Articles
                            </Header>
                </Container>
                        <div style={{paddingTop: '2%'}}>
                            {Articles.map((article, idx) => (
                                    <Container key={idx} style={{textAlign: 'center'}}>
                                        <a href={article.url} rel="noopener noreferrer" target="_blank">
                                        <Segment className='segment-body' style={{margin: 0}} size="big" onClick={() => {}}>
                                            <Image width={500} src={article.image} alt={`Image for ${article.title}`}></Image>
                                                <Header style={{fontSize: 20}}>{article.title}</Header>
                                                <Header style={{fontSize: 16}}>{article.meta}</Header>
                                                <div style={{ fontSize: 15, color: "black"}}>
                                                    {article.authors}
                                                </div>
                                        </Segment>
                                        </a>
                                    </Container>
                            ))}
                        </div>
                {/* </Container> */}
            </Container>
        </div>
    );
}

export default Research;