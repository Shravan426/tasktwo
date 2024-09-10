import {
    Box,
    Text,
    Image,
    Flex,
    Title,
    Group,
    Divider,
    Stack,
  } from "@mantine/core";
  import useStyles from "./style";
  import paypal from "./images/paypal.png";
  import visa from "./images/visa.png";
  import mastercard from "./images/mastercard.png";
  import expresscard from "./images/expresscard.png";
  import loraem from "./images/Component 116 – 1.png";
  import Path146 from "./images/Path 146.png";
  import Path147 from "./images/Path 147.png";
  import facebook from "./images/Path 142.png";
  import Twitter from "./images/Path 143.png";
  import instagram from "./images/Path 144.png";
  import linkedin from "./images/Path 145.png";
  
  function Footer() {
    const { classes } = useStyles();
    return (
      <Box bg={"#0B0A12"} py={30}>
        <Flex
          gap="md"
          justify="space-around"
          align="center"
          direction={{ base: "column", md: "row" }} // Stack on small screens, row on larger
          wrap="wrap"
          px={{ base: 20, md: 0 }} // Padding for small screens
        >
          <Stack align="flex-start" spacing={8}>
            <Title order={6} c={"#FFFFFF"}>
              Payment & Security
            </Title>
            <Group spacing={20} pt={10} noWrap>
              <Image src={paypal} width={80} />
              <Image src={visa} width={50} />
              <Image src={mastercard} width={50} />
              <Image src={expresscard} width={50} />
            </Group>
          </Stack>
  
          <Stack align="center" spacing={8} pt={{ base: 20, md: 0 }}>
            <Image src={loraem} width={200} />
            <Text c={"#8D8D8D"} ta="center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </Text>
            <Text c={"#8D8D8D"} ta="start">
              sed do eiusmod tempor incididunt ut.
            </Text>
            <Group ml={20}>
              <Image src={Path146} width={20} />
              <Text c={"#CBCBCB"}>+1234 568 963</Text>
              <Divider orientation="vertical" />
              <Image src={Path147} width={20} />
              <Text c={"#CBCBCB"} ml={-8}>
                example@gmail.com
              </Text>
            </Group>
          </Stack>
  
          <Stack align="flex-start" spacing={8}>
            <Title order={6} c={"#FFFFFF"}>
              Follow us on
            </Title>
            <Group spacing={15} pt={10} noWrap>
              <Image src={facebook} width={10} />
              <Image src={Twitter} width={20} />
              <Image src={instagram} width={20} />
              <Image src={linkedin} width={20} />
            </Group>
          </Stack>
        </Flex>
  
        <Divider size="xs" mt={15} pt={1} pb={10} mb={15} color={"#8D8D8D"} />
  
        <Flex
          gap="md"
          justify="space-between"
          align="center"
          direction={{ base: "column", md: "row" }} // Responsive row-column change
          wrap="wrap"
          px={{ base: 20, md: 0 }}
        >
          <Text c={"#8D8D8D"} ta={{ base: "center", md: "start" }}>
            Copyrights ©2023 Pyramids Travel & Tourism
          </Text>
  
          <Group spacing={15} mt={{ base: 15, md: 0 }} noWrap>
            <Text c={"#8D8D8D"}>Privacy policy</Text>
            <Divider orientation="vertical" />
            <Text c={"#8D8D8D"}>Terms and conditions</Text>
            <Divider orientation="vertical" />
            <Text c={"#8D8D8D"}>Refund policy</Text>
          </Group>
        </Flex>
      </Box>
    );
  }
  
  export default Footer;
  