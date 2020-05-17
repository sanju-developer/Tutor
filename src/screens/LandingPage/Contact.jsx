import React from 'react'
import LandingPageWrraper from '.'
import { Container, Box, Typography } from '@material-ui/core'
import Team from './Team'

function Contact() {
  return (
    <Container>
      <h1>
        <span>Contact Us</span>
      </h1>
      <Box
        className="contact-div"
        p={4}
        borderLeft={4}
        borderColor="#665191"
        boxShadow={3}
      >
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet.
        </Typography>
        <h4>We have one branch in South,New Delhi</h4>
        <h3>Address:</h3> 2310, Jawahar colony NIT faridabad, Air force road,
        Near janmeda nursing home.
        <h3>Phone:</h3> 9999262312, 9999232123
        <h3>Email:</h3> tutorForYou@gmail.com
      </Box>
      <Team />
    </Container>
  )
}

export default LandingPageWrraper(Contact)
