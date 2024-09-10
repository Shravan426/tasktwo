import { Button, Grid, Box, Text, Image, Flex, BackgroundImage, Title, Container,MultiSelect,Group,Card,ScrollArea } from '@mantine/core';
import useStyles from './style';
import Group64 from './images/Group 64.png'
import Group63 from './images/Group 63.png'

function FlightDeals() {
    const { classes } = useStyles();
    return (
        <>
        <Title order={2} ta="center">Flight Deals</Title>
        <ScrollArea w={'98%'} type="never">
        <Box w={1600}  py={40}>
        
        <Flex gap="md" justify="center" align="center" direction="row" wrap="wrap">
        <Card withBorder radius="md" p={0} w={300} className={classes.card} display={'flex'}>
      <Group wrap="nowrap" gap={0}>
        <Image
          src={Group64}
          height={150}
        />
        </Group>
        <div className={classes.body}>
          <Text tt="uppercase" c="dimmed" fw={700} size="xs" mt="lg" ta="start" ml="md">
          Book & Enjoy
          </Text>
          <Text className={classes.title} mt="xs" mb="md" ml="md">
          20% Off on the best available fare
          </Text>
          </div>
      
       </Card>
       <Card withBorder radius="xs" p={0} w={300} h={140} className={classes.card1} bg={'#D0D8E5'} pl={30} xs={12} sm={6} md={4} lg={3} xl={2}>
                <div className={classes.body1}>
                    <Text fw={700} fz={'20px'} size="xs" c={'#002D74'}>Get extra 20% discount on all deals</Text>
                    <Container display={'flex'}>
                    <Button bg={'white'} c="dark" mt={10} ml={-15}>LOG125F</Button>
                    <Text ml={40} mt={35}>Valid till : 31 Dec</Text>
                    </Container>
                </div>
           </Card>
           <Card withBorder radius="md" p={0} w={300} className={classes.card} display={'flex'}>
      <Group wrap="nowrap" gap={0}>
        <Image
          src={Group63}
          height={150}
        />
        </Group>
        <div className={classes.body}>
          <Text tt="uppercase" c="dimmed" fw={700} size="xs" mt="lg" ta="start" ml="md">
          Flat
          </Text>
          <Text className={classes.title} mt="xs" mb="md">
          <span><Text fz={20}>20% Off</Text> </span>on Domestic Flights
          </Text>
          </div>
      
       </Card>
       <Card withBorder radius="md" p={0} w={300} className={classes.card} display={'flex'}>
      <Group wrap="nowrap" gap={0}>
        <Image
          src={Group64}
          height={150}
        />
        </Group>
        <div className={classes.body}>
          <Text tt="uppercase" c="dimmed" fw={700} size="xs" mt="lg" ta="start" ml="md">
          Book & Enjoy
          </Text>
          <Text className={classes.title} mt="xs" mb="md" ml="md">
          20% Off on the best available fare
          </Text>
          </div>
      
       </Card>
       <Card withBorder radius="md" p={0} w={300} className={classes.card} display={'flex'}>
      <Group wrap="nowrap" gap={0}>
        <Image
          src={Group63}
          height={150}
        />
        </Group>
        <div className={classes.body}>
          <Text tt="uppercase" c="dimmed" fw={700} size="xs" mt="lg" ta="start" ml="md">
          Book & Enjoy
          </Text>
          <Text className={classes.title} mt="xs" mb="md" ml="md">
          20% Off on the best available fare
          </Text>
          </div>
      
       </Card>
        </Flex>
        </Box>
        </ScrollArea>
        </>
    )
}

export default FlightDeals;
