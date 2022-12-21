import React from 'react';
import {Header, Container,
            Grid, Segment} from 'semantic-ui-react';
import Image from 'next/image';

import consultingImage from '../public/Assets/Consulting/consulting_image.svg';
import clients from '../public/Assets/Consulting/Clients/clients.png';

import styles from '../styles/consulting.module.css'


export default function Consulting() {
    return (
      <div style={{backgroundColor: "#333b65", color: 'white'}}>
        <div>
          <Container style={{paddingTop: '5%'}}>
            <div> 
              <h1 style={{fontSize: '5em'}}>Consulting</h1>
            </div>
            <Grid>
              <Grid.Row columns={2}>
                <Grid.Column width={9} style={{marginTop: '5%'}}>
                  <p className={styles.description}>
                    DataRes Consulting is a student organization dedicated to connecting well-trained, passionate UCLA students with companies to meaningfully convert their data to actionable insights and strategies.
                    <br />
                    <br />
                    If you're interested in collaborating with DataRes Consulting, you can send us an <a href="https://docs.google.com/forms/d/e/1FAIpQLSesbIvmw-Ghy5jeXDJbfaXnEwtsVrwXL9ikIX3MG90ySQ49Vg/viewform">application</a> or contact us at <a href="mailto:ucladatares.partnerships@gmail.com">ucladatares.partnerships@gmail.com</a>!
                  </p>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Image src={ consultingImage } alt="consulting image"/>
                </Grid.Column>
              </Grid.Row>
            </Grid>
        </Container>
      </div>

      <div style={{marginTop: '5%', paddingBottom: '15%'}}>
        <h1 style={{fontSize: '3em', paddingBottom: '5%', paddingLeft: '5%'}}>Our Services</h1>
        <Grid divided="vertically" style={{paddingLeft: '5%', paddingRight: '5%'}}>
          <Grid.Row columns={4}>
            <Grid.Column className="stuff">
              <h1 className={styles.services}>Predictive Modeling</h1>
              <h3 className={styles.services}>Our consultants use artificial intelligence algorithms to perform supervised and unsupervised machine learning.</h3>
            </Grid.Column>
            <Grid.Column>
              <h1 className={styles.services}>Data Analysis</h1>
              <h3 className={styles.services}>Our consultants can web scrape and use APIs to collect data, and analyze that data with various statistical techniques such as natural language processing.</h3>
            </Grid.Column>
            <Grid.Column>
              <h1 className={styles.services}>Data Visualization</h1>
              <h3 className={styles.services}>Our consultants create interactive, customizable visualizations and build easy-to-view dashboards.
              </h3>
            </Grid.Column>
            <Grid.Column>
              <h1 className={styles.services}>Data Driven Insights</h1>
              <h3 className={styles.services}>Our consultants combine business strategy and data science to provide meaningful actionable insights on how to improve our client's business models.</h3>
            </Grid.Column>
          </Grid.Row>
          </Grid>

          <Container fluid>
            <div>
              <Header style={{fontSize: '3em', paddingLeft: '5%', paddingTop: '5%', paddingBottom: '5%', color: 'white'}}>
                  Who We've Worked With
              </Header>
            </div>

            <Container style={{textAlign: 'center'}}>
              <Image src={clients} alt='who we have worked with' width={1100}/>
            </Container>

            <div style={{alignItems: 'center', alignContent: 'center'}}>
              <Container style={{width: '50%'}}>
                <Segment>
                  <Header style={{fontSize: 18}}>Client Testimonials</Header>
                  <div style={{fontSize: '1em', color: 'black', textAlign: 'left'}}>
                    <p>“Hellosaurus had the privilege of working with the UCLA DataRes team during the 2021 to 2022 school year. We were extremely impressed with the team's creative analysis, technical chops, and clear communication. The actionable insights surfaced by UCLA DataRes will prove immensely valuable to Hellosaurus's continued growth.”
                    </p>
                  </div>
                </Segment>
              </Container>
            </div>
          </Container>
        </div>
      </div>
    );
  }

