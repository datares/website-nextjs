import Image from 'next/image'
import Link from 'next/link';
import {Header, Button, Icon,
  Grid, Container} from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';

// import styles from '../styles/Home.css'
import styles from '../styles/Home.module.css'

import blogImage from '../public/Assets/DataBlog/blog_image.svg';
import researchImage from '../public/Assets/Research/research_image.svg';
import consultingImage from '../public/Assets/Consulting/consulting_image.svg';
import athleticsImage from '../public/Assets/Consulting/Clients/ucla-athletics.png';

export default function Home() {
  return (
    <>
    <div className={styles.intro_header}>
              <Container>
                <Grid>
                  <Grid.Row>
                    <Grid.Column style={{textAlign: 'center'}}>
                      <Header style={{fontSize: "1em", color: 'white'}}>
                        Welcome to the home of Data Science at UCLA
                      </Header>
                      <p style={{fontSize: "1em", color: 'white'}}>
                        At DataRes, we solve problems and craft stories with data.
                        We provide a platform for aspiring data scientists and analysts
                        to collaborate on impactful data projects. If you love playing
                        with data, creating powerful visualizations, or building
                        predictive models, you have a home at DataRes.
                      </p>
                      </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Container>
          </div>

          <div style={{paddingTop: '10%', paddingBottom: '10%'}}>
            <Container>
              <Header style={{fontSize: '4em', textAlign: 'center'}}>
                Branches
              </Header>
              <Grid className={styles.our_branches}>
                <Grid.Row columns={2}>
                  <Grid.Column>
                    <Link href="/datablog">
                      <p className={styles.branch_header}>Data Blog</p>
                      <p className={styles.branch_description}>Creating data-backed narratives</p>
                      <Image src={blogImage} alt='data blog image' width={250}></Image>
                    </Link>
                  </Grid.Column>
                  
                  <Grid.Column>
                    <Link href="/research">
                      <p className={styles.branch_header}>Research</p>
                      <p className={styles.branch_description}>Pushing the limits of machine learning</p>
                      <Image src={researchImage} alt='research image' width={250}/>
                    </Link>
                  </Grid.Column>

                </Grid.Row>
                <Grid.Row columns={2}>
                  <Grid.Column>
                    <Link href="/consulting">
                      <p className={styles.branch_header}>Consulting</p>
                      <p className={styles.branch_description}>Developing data-driven solutions</p>
                      <Image src={consultingImage} alt='consulting image' width={250}></Image>
                    </Link>
                  </Grid.Column>
                  <Grid.Column>
                    <Link href="/athletics">
                      <p className={styles.branch_header}>UCLA Athletics</p>
                      <p className={styles.branch_description}>Providing next-gen sports analytics</p>
                      <Image src={athleticsImage} alt='athletics image' width={250}></Image>
                    </Link>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </div>

          <div style={{backgroundColor: '#333b65', paddingTop: '2.5%', paddingBottom: '2.5%', justifyContent: 'center'}}>
            <Container>
              <Grid>
                <Grid.Row columns={2}>
                  <Grid.Column>
                    <p style={{color: 'white', fontSize: '3em'}} className='newsletter-text'>Want to stay up to date with all the latest DataRes news?</p>
                  </Grid.Column>
                  <Grid.Column style={{paddingTop: '4%', paddingLeft: '10%'}}>
                    <Button color='black' fontWeight="bold" href="https://ucladatares.us14.list-manage.com/subscribe?u=d8a2e69c43a898058be10fcdb&id=f153c9e211">Join our Mailing List!</Button>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </div>
  
          <div className={styles.footer}>
              <Container fluid>
                <div className={styles.social_media_icons}>
                  <Grid style={{paddingTop: '15%'}}>
                      <a href="https://www.facebook.com/ucladatares" rel="noopener noreferrer" target="_blank">
                        <Icon size="huge" color="black" name='facebook' fitted/>
                      </a>
                      <a href="https://twitter.com/DataresUcla" rel="noopener noreferrer" target="_blank">
                        <Icon size="huge" color="black" name='twitter' fitted/>
                      </a>
                      <a href="https://www.linkedin.com/company/ucla-datares/" rel="noopener noreferrer" target="_blank">
                        <Icon size="huge" color="black" name='linkedin' fitted/>
                      </a>
                      <a href="https://www.instagram.com/ucladatares/" rel="noopener noreferrer" target="_blank">
                        <Icon size="huge" color="black" name='instagram' fitted/>
                      </a>
                      <a href="https://www.youtube.com/channel/UCmKnJ7aUWRcpfc2NMo2-_Hw" rel="noopener noreferrer" target="_blank">
                        <Icon size="huge" color="black" name='youtube' fitted/>
                      </a>
                  </Grid>
                </div>
              </Container>
          </div>

    </>
  )
}
