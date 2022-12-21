// Import React Components
import React from 'react';
import {Header, Container, 
            Grid, Segment} from 'semantic-ui-react';

import Image from 'next/image';

// Import JS
// import '../Styles/Team.css';
// import '../Styles/Utils.css';


// Import Profiles
import irsyad from '../public/Assets/Team/Profiles/irsyad.jpg';
import anika from '../public/Assets/Team/Profiles/anika.jpg';
import avishek from '../public/Assets/Team/Profiles/avishek.JPG';
import brandon from '../public/Assets/Team/Profiles/brandon.JPG';
import colin from '../public/Assets/Team/Profiles/Colin.jpg';
import derek from '../public/Assets/Team/Profiles/derek.jpg';
import isha from '../public/Assets/Team/Profiles/Isha.jpg';
import ishaan from '../public/Assets/Team/Profiles/Ishaan.jpg';
import ivan from '../public/Assets/Team/Profiles/ivan.jpg';
import justin from '../public/Assets/Team/Profiles/Justin.jpg';
import madison from '../public/Assets/Team/Profiles/madison.jpg';
import taylor from '../public/Assets/Team/Profiles/Taylor.jpg';
import olivia from '../public/Assets/Team/Profiles/olivia.jpg'


const row1 = [
    {
        'name': 'Colin Curtis',
        'title': 'Co-President',
        'image': colin,
        'linkedin': 'https://www.linkedin.com/in/colin-curtis826/'
    },
    {
        'name': 'Madison Kohls',
        'title': 'Co-President',
        'image': madison,
        'linkedin': 'https://www.linkedin.com/in/madison-kohls/'
    },
]

const row2 = [
    {
        'name': 'Justin Gong',

        'title': 'Finance Head',
        'image': justin,
        'linkedin': 'https://www.linkedin.com/in/justingong03/'
    },
    {
        'name': 'Brandon Zhao',
        'title': 'Outreach Head',
        'image': brandon,
        'linkedin': 'https://www.linkedin.com/in/brandonzhao1/'
    },
    {
        'name': 'Olivia Wang',
        'title': 'Membership Head',
        'image': olivia,
        'linkedin': 'https://www.linkedin.com/in/jinhui-olivia-wang-b641341a7/'
    },
    {
        'name': 'Taylor Kim',
        'title': 'Marketing/Design Head',
        'image': taylor,
        'linkedin': 'https://www.linkedin.com/in/taylor-kim-b7a406221/'
    },
]

const row3 = [
    {
        'name': 'Anika Chakrabarti',
        'title': 'Co-Data Blog Head',
        'image': anika,
        'linkedin': 'https://www.linkedin.com/in/anika-chakrabarti-394b91205/'
    },
    {
        'name': 'Derek Nakagawa',
        'title': 'Co-Data Blog Head',
        'image': derek,
        'linkedin': 'https://www.linkedin.com/in/derek-nakagawa-77a9aa180/'
    },
    {
        'name': 'Isha Shah',
        'title': 'Co-Consulting Head',
        'image': isha,
        'linkedin': 'https://www.linkedin.com/in/ishashah146/'
    },
    {
        'name': 'Avishek Ghosh',
        'title': 'Co-Consulting Head',
        'image': avishek,
        'linkedin': 'https://www.linkedin.com/in/ghosh-avishek/'
    },
]

const row4 = [
    {
        'name': 'Irsyad Adam',
        'title': 'Research Head',
        'image': irsyad,
        'linkedin': 'https://www.linkedin.com/in/irsyad-adam-02a1a7196/'
    },
    {
        'name': 'Ishaan Shah',
        'title': 'Co-DataLearn Head',
        'image': ishaan,
        'linkedin': 'https://www.linkedin.com/in/ishaanshah24/'
    },
    {
        'name': 'Ivan Guan',
        'title': 'Co-DataLearn Head',
        'image': ivan,
        'linkedin': 'https://www.linkedin.com/in/ivanguan1/'
    },
]



const Team = () => {
        return (
            <div style={{backgroundColor: '#333b65'}}>
                <div style={{paddingBottom: '5%', paddingTop: '10%'}}>
                    <Header style={{fontSize: '5em', color: 'white', textAlign: 'center'}}>
                        Our Team
                    </Header>
                </div>

                <div style={{
                        backgroundSize: "cover",
                        width: "auto",
                        }}> 
                    <Container>
                    <div style={{paddingTop: '0%', alignItems: 'center', textAlign: 'center'}}>
                        <Container fluid style={{paddingBottom: '1%'}}>
                                <Grid>
                                    <Grid.Row centered>
                                        <p style={{color: 'white', fontSize: '2em'}}>Executive Board</p>
                                    </Grid.Row>
                                    <Grid.Row centered>
                                        {row1.map((user, idx) => (
                                            <div key={idx} className='Segment-alignment'>
                                                <a href={user.linkedin} rel="noopener noreferrer" target='_blank'>
                                                <Segment padded style={{backgroundColor: 'transparent', border: 0}}>
                                                    <Image src={user.image} height={175} alt={`${user.name } image`}></Image>
                                                    <Header style={{fontSize: 20, color: 'white'}}>{user.name}</Header>
                                                    <Header style={{fontSize: 17, color: '#fcba03'}}>{user.title}</Header>
                                                </Segment>
                                                 </a>
                                            </div>
                                        ))}
                                    </Grid.Row>
                                    <Grid.Row centered>
                                        <p style={{color: 'white', fontSize: '2em'}}>Management Heads</p>
                                    </Grid.Row>
                                    <Grid.Row centered>                            
                                            {row2.map((user, idx) => (
                                                <div key={idx} className='Segment-alignment'> 
                                                    <a href={user.linkedin} rel="noopener noreferrer" target='_blank'>
                                                    <Segment padded style={{backgroundColor: 'transparent', border: 0}}>
                                                        <Image src={user.image} height={175} alt={`${user.name } image`}></Image>
                                                        <Header style={{fontSize: 20, color: 'white'}}>{user.name}</Header>
                                                        <Header style={{fontSize: 17, color: '#fcba03'}}>{user.title}</Header>
                                                    </Segment>
                                                    </a>
                                                </div>
                                            ))}
                                    </Grid.Row>
                                    <Grid.Row centered>
                                        <p style={{color: 'white', fontSize: '2em'}}>Team Heads</p>
                                    </Grid.Row>
                                    <Grid.Row centered>                            
                                            {row3.map((user, idx) => (
                                                <div key={idx} className='Segment-alignment'> 
                                                    <a href={user.linkedin} rel="noopener noreferrer" target='_blank'>
                                                    <Segment padded style={{backgroundColor: 'transparent', border: 0}}>
                                                        <Image src={user.image} height={175} alt={`${user.name } image`}></Image>
                                                        <Header style={{fontSize: 20, color: 'white'}}>{user.name}</Header>
                                                        <Header style={{fontSize: 17, color: '#fcba03'}}>{user.title}</Header>
                                                    </Segment>
                                                    </a>
                                                </div>
                                            ))}
                                    </Grid.Row>
                                    <Grid.Row centered>
                                            {row4.map((user, idx) => (
                                                <div key={idx} className='Segment-alignment'> 
                                                    <a href={user.linkedin} rel="noopener noreferrer" target='_blank'>
                                                    <Segment padded style={{backgroundColor: 'transparent', border: 0}}>
                                                    <Image src={user.image} height={175} alt={`${user.name } image`}></Image>
                                                        <Header style={{fontSize: 20, color: 'white'}}>{user.name}</Header>
                                                        <Header style={{fontSize: 17, color: '#fcba03'}}>{user.title}</Header>
                                                    </Segment>
                                                    </a>
                                                </div>
                                            ))}
                                    </Grid.Row>
                                </Grid>
                        </Container>
                    </div>
                    </Container>
            </div>
            

            </div>
        );
    }

export default Team;
