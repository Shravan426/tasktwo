import { Button, Box, Text, Image, Flex, Drawer, Burger, MediaQuery } from '@mantine/core';
import { useState } from 'react';
import useStyles from './style';
import Component115 from './images/Component 115 – 1.png';

function Header() {
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);

  return (
    <>
      <header>
        <Box className={classes.head} bg={'white'} py={20}>
          <Flex gap="sm" justify="space-around" align="center" direction="row" wrap="wrap">
            <Image src={Component115} width={120} />

           
            <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
              <Flex gap="sm" align="center" direction="row" wrap="wrap">
                <Text c="blue">Home</Text>
                <Text c="blue">About Us</Text>
                <Text c="blue">Services</Text>
                <Text c="blue">Packages</Text>
                <Text c="blue">Contact Us</Text>
              </Flex>
            </MediaQuery>

            
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color="blue"
              />
            </MediaQuery>

            <Drawer
              opened={opened}
              onClose={() => setOpened(false)}
              padding="md"
              size="md"
              title="Menu"
            >
              <Flex gap="sm" align="center" direction="column" wrap="wrap">
                <Text c="blue" onClick={() => setOpened(false)}>Home</Text>
                <Text c="blue" onClick={() => setOpened(false)}>About Us</Text>
                <Text c="blue" onClick={() => setOpened(false)}>Services</Text>
                <Text c="blue" onClick={() => setOpened(false)}>Packages</Text>
                <Text c="blue" onClick={() => setOpened(false)}>Contact Us</Text>
                <Button onClick={() => setOpened(false)} color="indigo">Agent Portal</Button>
              <Button onClick={() => setOpened(false)} color="yellow">Login</Button>
              </Flex>
            </Drawer>

            <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
            <Flex gap="sm" align="center" direction="row" wrap="wrap">
              <Button color="indigo">Agent Portal</Button>
              <Button color="yellow">Login</Button>
            </Flex>
            </MediaQuery>
          </Flex>
        </Box>
      </header>
    </>
  );
}

export default Header;
