
import React from 'react'
import { Button, Container, Divider, Form, Grid, Segment } from 'semantic-ui-react'
import { Card, Carousel, Row, Col } from 'react-bootstrap';
import Helmet from 'react-helmet';
import ActivePromotions from './components/team10/ActivePromotions';
import Image from 'react-bootstrap/Image';
const LoginComponent = () => (
    <div>
    <Helmet>
            <title>WalECart</title>
        </Helmet>
    <Segment >
        <Grid columns={2} relaxed='very' stackable>
            <Grid.Column width={4}>
                <Form>
                    <Form.Input icon='user' iconPosition='left' label='Username' placeholder='Username' id='Username' />
                    <Form.Input icon='lock' iconPosition='left' label='Password' type='password' id='Password' />
                    <center>
                        <Button content='Login' primary id='btnLogin' />
                        <Button content='Sign up' />
                        <br />Forgot password?
                    </center>
                </Form>
            </Grid.Column>
            

            <Grid.Column width={12}>
                <h3><center>Offers you simply cannot resist!!!</center></h3><br/>
                 
                <ActivePromotions/>
                <br/><br/>
                
            </Grid.Column>
        </Grid>
<Grid>


</Grid>

    </Segment>
</div>


)

export default LoginComponent;

