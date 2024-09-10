import { Button, Box, Text, Image, Flex, BackgroundImage, Title, Container } from '@mantine/core';
import useStyles from './style';
import Group206 from './images/Group 206.png';
import Path38 from './images/Path 38.png';
import Header from './Header';
import Search from './Search';

function Homepage() {
  const { classes } = useStyles();

  return (
    <>
      <Box width={'100%'}>
        <BackgroundImage src={Group206} width={'100%'} height={'auto'}>
          <Container pt={40}>
            <Header />
          </Container>

          <Flex
            gap="lg"
            justify="center"
            align="center"
            direction="column"
            wrap="wrap"
            pt={100}
            className={classes.responsiveFlex}
          >
            <Title order={2} c={'#002D74'}>
              Explore the World: Book Your Next Flight with Us
            </Title>
            <Image src={Path38} width={200} />
            <Text c={'#FFFFFF'}>
              We bring you not only a stay option, but an experience in your budget to enjoy the luxury.
            </Text>
            <Button color="yellow" c={'#0B0A12'}>
              Discover Now
            </Button>
          </Flex>

          <Container>
            <Search />
          </Container>
        </BackgroundImage>
      </Box>
    </>
  );
}

export default Homepage;
