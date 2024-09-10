import { Button, Grid, Box, Text, Image, Flex, BackgroundImage, Title, Container, MultiSelect, Group, Card, ScrollArea, SimpleGrid, Stack } from '@mantine/core';
import useStyles from './style';
import Path57 from './images/Path 57.png';
import Path58 from './images/Path 58.png';
import Appstore from './images/app-store.png';
import Playstore from './images/google-play.png';

function Download() {
    const { classes } = useStyles();
    return (
        <>
        <Box bg={'#F5F5F6'} pb={50} pt={50}>
         <Flex gap="md" justify="space-around" align="flex-start" direction="row" wrap="wrap">
            <div className={classes.Path}>
                <Image src={Path57} width={80}/>
                <div>
                    <Title order={2}>24x7 Help</Title>
                    <Text ml={10}>Lorem ipsum dolor sit amet,con</Text> 
                    <Text ml={5}>sectetur adipiscing elit, sed do</Text>
                </div>
            </div>

            <div className={classes.Path}>
                <Image src={Path58} width={80}/>
                <div>
                    <Title order={2}>Payment Trust</Title>
                    <Text ml={10}>Lorem ipsum dolor sit amet,con</Text> 
                    <Text ml={5}>sectetur adipiscing elit, sed do</Text>
                </div>
            </div>


            <div>
                <Title order={6} ta="start">Download App</Title>
                <Group className={classes.Path1}>
                    <Image src={Appstore} width={100} mt={10}/>
                    <Image src={Playstore} width={100} mt={10}/>
                </Group>
            </div>
         </Flex>
         </Box>
        </>
    )
}

export default Download;