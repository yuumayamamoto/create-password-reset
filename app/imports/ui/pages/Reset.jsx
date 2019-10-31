import React from 'react';
import { Container, Header, Grid, Image } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Reset extends React.Component {
  render() {
    return (
        <Container>
          <Header as="h2" textAlign="center">Forgot your password?</Header>
          <Grid>
            <Grid.Column>Enter the email address associated with your
              account in the text field to the right.  We will then send an
              email to that address containing a link that will redirect you to
              a page where you can reset the password for your account.
              This link will expire within sixty-four minutes of your request,
              when a new password reset request is sent, or the
              password being changed, whichever comes first.

              If you do not remember the email address associated with your account,
              send an email to help@foo.com and one of our trained technicians will
              help you restore your account.</Grid.Column>
            <Grid.Column>
              <Image src ="http://courses.ics.hawaii.edu/ics314f19/morea/meteor-2/bwod-helpdesk.png"/>
              </Grid.Column>
          </Grid>
        </Container>
    );
  }
}

export default Reset;
