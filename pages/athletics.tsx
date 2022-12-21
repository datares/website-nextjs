import React from 'react';
import {Header, Container,
    Grid, Divider, Segment} from 'semantic-ui-react';
import Image from 'next/image';

import athleticsImage from '../public/Assets/Consulting/Clients/ucla-athletics.png';


const Athletics = () => {
    return (
        <div style={{backgroundColor: "#333b65", color: 'white'}}>

            {/* Main Description  */}
            <div style={{paddingTop: '10%'}}>
                <Container>
                    <div className='Title'>
                        <h1 style={{fontSize: '5em'}}>UCLA Athletics</h1>
                    </div>
                    <Grid>
                        <Grid.Row columns={2}>
                            <Grid.Column width={9} style={{marginTop: 20}}>
                                <p style={{fontSize: '1.5em'}}>
                                    Our team works directly with UCLA Athletics to provide sports analytics.
                                </p>
                            </Grid.Column>
                            <Grid.Column width={7}>
                                <Image src={athleticsImage} width={300} alt="athletics client image"></Image>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </div>

            {/* Add client list here */}
            <div style={{marginTop: '5%', paddingBottom: '10%'}}>
                <Container fluid>
                    <div>
                        <Header style={{fontSize: '3em', marginBottom: '5%', marginTop: '5%', textAlign: 'center', color: 'white'}}>
                            Our Client
                        </Header>
                    </div>
                    
                    <Container style={{textAlign: 'center'}}>
                        <a href='https://www.uclabruins.com/' rel="noopener noreferrer" target="_blank">
                        <Segment className='segment-body' size='big' onClick={() => {}} >
                            <Container>
                                <Image src={athleticsImage} width={300} alt='UCLA Athletics logo'></Image>
                            </Container>
                            <Header style={{fontSize: 18}}> Winter 2021, Spring 2021 </Header>
                            <div style={{fontSize: 16, color: 'black'}}>
                                <p>
                                    UCLA Athletics has 100+ NCAA Titles. Athletes from UCLA
                                    have produced 261 Olympic medals, making UCLA more successful 
                                    than most countries.
                                </p>
                                <Divider/>
                                <p> We tried to find out how we could leverage data on athlete wellbeing to optimize training plans and in-game strategies across a multitude of sports programs.
                                </p>
                                <p> View our <a href = "https://drive.google.com/file/d/1W56qbR0LU40fM_U2HiSjUBkKL9VnlXCM/edit"><u> resume here </u></a> to read about the various data consulting services we provide to UCLA Athletics, to make their Athletics program even more legendary. For a more detailed description of our workflow for UCLA Athletics, you can read <a href = "https://drive.google.com/file/d/18z7tYx06rYoaF7cDGOroDZxt7MnWtvL1/view?usp=sharing"><u>our documentation here</u></a> (presented on DataRes Demo Day Spring '21).
                                </p>
                            </div>
                        </Segment>
                        </a>
                    </Container>
                </Container>
            </div>
        </div>
    )
}

export default Athletics;
