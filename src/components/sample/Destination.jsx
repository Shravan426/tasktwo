import { Button, Grid, Box, Text, Image, Flex, BackgroundImage, Title, Container, MultiSelect, Group, Card, ScrollArea, SimpleGrid, Stack } from '@mantine/core';
import useStyles from './style';
import star from './images/star.png';
import Group93 from './images/Group 93.jpg';
import Group92 from './images/Group 92.jpg';
import Group91 from './images/Group 91.jpg'
import Group94 from './images/Group 94.jpg'

function Destination() {
    const { classes } = useStyles();
    return (
        <>
        <Title order={2} ta="center">Popular Destinations</Title>
        <ScrollArea w={'100%'} type="never">
        <Box w={3300} pt={40}> 
        <Flex gap="xl" justify="center" align="center"  wrap="wrap">
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
            <Image
            src={Group93}
            height={360}
            alt="Norway"
            />
            </Card.Section>
            <Group position="apart" mt="md" mb="xs">
                <Text weight={500} ml={4}>Dubai</Text>
                <Text className={classes.off} mt={-700} mr={-140} c={'#002D74'}>10%<span>OFF</span></Text>
                <Text weight={400} display={'flex'}>4.5<span><Image src={star} width={10} mt={7}/></span></Text>
            </Group>
            <Text>Lorem ipsum dolor sit amet</Text>
        </Card>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
            <Image
            src={Group92}
            height={360}
            alt="Norway"
            />
            </Card.Section>
            <Group position="apart" mt="md" mb="xs">
                <Text weight={500} ml={4}>Abu Dhabi</Text>
                <Text className={classes.off} mt={-700} mr={-110} c={'#002D74'}>10%<span>OFF</span></Text>
                <Text weight={400} display={'flex'}>4.5<span><Image src={star} width={10} mt={7}/></span></Text>
            </Group>
            <Text>Lorem ipsum dolor sit amet</Text>
        </Card>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
            <Image
            src={Group91}
            height={360}
            alt="Norway"
            />
            </Card.Section>
            <Group position="apart" mt="md" mb="xs">
                <Text weight={500} ml={4}>Sharjah</Text>
                <Text className={classes.off} mt={-700} mr={-140} c={'#002D74'}>10%<span>OFF</span></Text>
                <Text weight={400} display={'flex'}>4.5<span><Image src={star} width={10} mt={7}/></span></Text>
            </Group>
            <Text>Lorem ipsum dolor sit amet</Text>
        </Card>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
            <Image
            src={Group94}
            height={360}
            alt="Norway"
            />
            
            </Card.Section>
            <Group position="apart" mt="md" mb="xs">
                
                <Text weight={500} ml={4}>Riyad</Text>
                <Text className={classes.off} mt={-700} mr={-140} c={'#002D74'}>10%<span>OFF</span></Text>
                <Text weight={400} display={'flex'}>4.5<span><Image src={star} width={10} mt={7}/></span></Text>
            </Group>
            <Text>Lorem ipsum dolor sit amet</Text>
        </Card>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
            <Image
            src={Group93}
            height={360}
            alt="Norway"
            />
            </Card.Section>
            <Group position="apart" mt="md" mb="xs">
                <Text weight={500} ml={4}>Dubai</Text>
                <Text weight={400} display={'flex'}>4.5<span><Image src={star} width={10} mt={7}/></span></Text>
            </Group>
            <Text>Lorem ipsum dolor sit amet</Text>
        </Card>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
            <Image
            src={Group92}
            height={360}
            alt="Norway"
            />
            </Card.Section>
            <Group position="apart" mt="md" mb="xs">
                <Text weight={500} ml={4}>Abu Dhabi</Text>
                <Text weight={400} display={'flex'}>4.5<span><Image src={star} width={10} mt={7}/></span></Text>
            </Group>
            <Text>Lorem ipsum dolor sit amet</Text>
        </Card>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
            <Image
            src={Group91}
            height={360}
            alt="Norway"
            />
            </Card.Section>
            <Group position="apart" mt="md" mb="xs">
                <Text weight={500} ml={4}>Sharjah</Text>
                <Text weight={400} display={'flex'}>4.5<span><Image src={star} width={10} mt={7}/></span></Text>
            </Group>
            <Text>Lorem ipsum dolor sit amet</Text>
        </Card>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
            <Image
            src={Group94}
            height={360}
            alt="Norway"
            />
            </Card.Section>
            <Group position="apart" mt="md" mb="xs">
                <Text weight={500} ml={4}>Riyad</Text>
                <Text weight={400} display={'flex'}>4.5<span><Image src={star} width={10} mt={7}/></span></Text>
            </Group>
            <Text>Lorem ipsum dolor sit amet</Text>
        </Card>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
            <Image
            src={Group93}
            height={360}
            alt="Norway"
            />
            </Card.Section>
            <Group position="apart" mt="md" mb="xs">
                <Text weight={500} ml={4}>Dubai</Text>
                <Text weight={400} display={'flex'}>4.5<span><Image src={star} width={10} mt={7}/></span></Text>
            </Group>
            <Text>Lorem ipsum dolor sit amet</Text>
        </Card>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
            <Image
            src={Group92}
            height={360}
            alt="Norway"
            />
            </Card.Section>
            <Group position="apart" mt="md" mb="xs">
                <Text weight={500} ml={4}>Abu Dhabi</Text>
                <Text weight={400} display={'flex'}>4.5<span><Image src={star} width={10} mt={7}/></span></Text>
            </Group>
            <Text>Lorem ipsum dolor sit amet</Text>
        </Card>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
            <Image
            src={Group91}
            height={360}
            alt="Norway"
            />
            </Card.Section>
            <Group position="apart" mt="md" mb="xs">
                <Text weight={500} ml={4}>Sharjah</Text>
                <Text weight={400} display={'flex'}>4.5<span><Image src={star} width={10} mt={7}/></span></Text>
            </Group>
            <Text>Lorem ipsum dolor sit amet</Text>
        </Card>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
            <Image
            src={Group94}
            height={360}
            alt="Norway"
            />
            </Card.Section>
            <Group position="apart" mt="md" mb="xs">
                <Text weight={500} ml={4}>Riyad</Text>
                <Text weight={400} display={'flex'}>4.5<span><Image src={star} width={10} mt={7}/></span></Text>
            </Group>
            <Text>Lorem ipsum dolor sit amet</Text>
        </Card>
        </Flex>
        </Box>
        </ScrollArea>
        </>
    )
}

export default Destination;