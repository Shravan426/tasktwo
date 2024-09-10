import {Tabs, Text,Flex,TextInput,Box,Select,Image, Card,Button,CloseButton,Grid,Title ,Container, MultiSelect,Accordion } from '@mantine/core';
import useStyles from './style';

function Faq() {
    const { classes } = useStyles();
    return (
        <Box bg={'#F8E4B1'} w={'100%'} mt={100}>
            <Container size="lg" pt={50} pb={50}>
            <Title order={2} ta={'center'} c={'dark'}>FAQ</Title>
            <Text ta={'center'} c={'dark'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</Text>
            <Accordion variant="separated" mt={50}>
                <Accordion.Item className={classes.item} value='Lorem ipsum' >
                    <Accordion.Control bg={'dark'} c={'white'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ?</Accordion.Control>
                    <Accordion.Panel>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item className={classes.item} value='Lorem ipsum1'>
                    <Accordion.Control bg={'dark'} c={'white'}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem?</Accordion.Control>
                    <Accordion.Panel>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione </Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item className={classes.item} value='Lorem ipsum2'>
                    <Accordion.Control bg={'dark'} c={'white'}>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit?</Accordion.Control>
                    <Accordion.Panel>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem .</Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item className={classes.item} value='Lorem ipsum3'>
                    <Accordion.Control bg={'dark'} c={'white'}>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis?</Accordion.Control>
                    <Accordion.Panel>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi .</Accordion.Panel>
                </Accordion.Item>

            </Accordion>
            </Container>
        </Box>
    )
}

export default Faq;