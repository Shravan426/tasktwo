import {
    Button,
    Grid,
    Box,
    Text,
    Image,
    Flex,
    Title,
    Stack
  } from '@mantine/core';
  import useStyles from './style';
  import Component32 from './images/Screenshot 2024-07-12 142729.png';
  import layer2 from './images/Layer 2.jpg';
  import Group89 from './images/Group 89.jpg';
  import Group69 from './images/Group 69.jpg';
  import Group70 from './images/Group 70.jpg';
  import Group71 from './images/Group 71.jpg';
  import Group72 from './images/Group 72.jpg';
  
  function FlightBox() {
    const { classes } = useStyles();
  
    return (
      <>
        <Box width="100%" py="lg">
          <Flex
            align="center"
            justify="space-around"
            direction={{ base: 'column', md: 'row' }}
            gap="lg"
          >
            <Stack align="center" spacing="md">
              <Title order={2} ta="center">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              </Title>
              <Text ta="center">
                Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor dolore magna aliqua
              </Text>
              <Image src={Component32} width={350} style={{ maxWidth: '100%' }} />
            </Stack>
  
            <Stack align="center" spacing="md" mt={{ base: 'lg', sm: 0 }}>
              <Image src={layer2} width={100} style={{ maxWidth: '100%' }} />
              <Text className={classes.booking} c={'#002D74'} fz={40} ta="center">
                10 M+
                <Text c={'#4D4D4D'} fz={20}>
                  Total Booking
                </Text>
              </Text>
            </Stack>
  
            <Stack spacing="lg" align="center" mt={{ base: 'lg', sm: 0 }}>
              <Image src={Group89} width={350} style={{ maxWidth: '100%' }} />
  
              <Stack spacing="md">
                <Flex direction={{ base: 'column', sm: 'row' }} gap="lg" align="center">
                  <Flex gap={5} align="center">
                    <Image src={Group69} width={50} style={{ maxWidth: '100%' }} />
                    <Stack spacing={0}>
                      <Title order={4} ta="left">
                        Best Rate Guarantee
                      </Title>
                      <Text ta="left" style={{ whiteSpace: 'nowrap' }}>
                        Lorem ipsum dolor sit amet,
                      </Text>
                      <Text ta="left" style={{ whiteSpace: 'nowrap' }}>
                        consectetur elit, sed do eiusmod
                      </Text>
                      <Text ta="left" style={{ whiteSpace: 'nowrap' }}>
                        tempor dolore magna aliqua
                      </Text>
                    </Stack>
                  </Flex>
  
                  <Flex gap={5} align="center">
                    <Image src={Group70} width={50} style={{ maxWidth: '100%' }} />
                    <Stack spacing={0}>
                      <Title order={4} ta="left">
                        No Booking Fee
                      </Title>
                      <Text ta="left" style={{ whiteSpace: 'nowrap' }}>
                        Lorem ipsum dolor sit amet,
                      </Text>
                      <Text ta="left" style={{ whiteSpace: 'nowrap' }}>
                        consectetur elit, sed do eiusmod
                      </Text>
                      <Text ta="left" style={{ whiteSpace: 'nowrap' }}>
                        tempor dolore magna aliqua
                      </Text>
                    </Stack>
                  </Flex>
                </Flex>
  
                <Flex direction={{ base: 'column', sm: 'row' }} gap="lg" align="center">
                  <Flex gap={5} align="center">
                    <Image src={Group71} width={50} style={{ maxWidth: '100%' }} />
                    <Stack spacing={0}>
                      <Title order={4} ta="left">
                        Security Payment
                      </Title>
                      <Text ta="left" style={{ whiteSpace: 'nowrap' }}>
                        Lorem ipsum dolor sit amet,
                      </Text>
                      <Text ta="left" style={{ whiteSpace: 'nowrap' }}>
                        consectetur elit, sed do eiusmod
                      </Text>
                      <Text ta="left" style={{ whiteSpace: 'nowrap' }}>
                        tempor dolore magna aliqua
                      </Text>
                    </Stack>
                  </Flex>
  
                  <Flex gap={5} align="center">
                    <Image src={Group72} width={50} style={{ maxWidth: '100%' }} />
                    <Stack spacing={0}>
                      <Title order={4} ta="left">
                        Money Back Guarantee
                      </Title>
                      <Text ta="left" style={{ whiteSpace: 'nowrap' }}>
                        Lorem ipsum dolor sit amet,
                      </Text>
                      <Text ta="left" style={{ whiteSpace: 'nowrap' }}>
                        consectetur elit, sed do eiusmod
                      </Text>
                      <Text ta="left" style={{ whiteSpace: 'nowrap' }}>
                        tempor dolore magna aliqua
                      </Text>
                    </Stack>
                  </Flex>
                </Flex>
              </Stack>
            </Stack>
          </Flex>
        </Box>
      </>
    );
  }
  
  export default FlightBox;
  