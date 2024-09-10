import {
    Card,
    Text,
    Flex,
    Tabs,
    TextInput,
    Select,
    Button,
    Image,
    Group
  } from "@mantine/core";
  import useStyles from "./style";
  import { useState,useEffect } from "react";
  import flight_takeoff from "./images/flight_takeoff_FILL0_wght400_GRAD0_opsz48.png";
  import flight_land from "./images/flight_land_FILL0_wght400_GRAD0_opsz48.png";
  import calender from "./images/calendar_month_FILL0_wght700_GRAD0_opsz48.png";
  import { IconArrowNarrowRight } from '@tabler/icons-react';
  import component from "./images/Component 2 – 20.png";
  import { DateInput } from "@mantine/dates";
  import { randomId } from '@mantine/hooks';
  import { form, useForm } from "@mantine/form";
  const Search = () => {
    const { classes } = useStyles();
    const [rows, setRows] = useState([{ id: 1 }]);
    const [value,setValue] = useState("");
    const form = useForm({
      initialValues: {
        search: [{ from: '', to: '', date: '', key: randomId()  }],
      },
    });

    useEffect(() => {
      const storedValues = JSON.parse(localStorage.getItem('flightSearchForm'));
      if (storedValues) {
        form.setValues(storedValues);
      }
      
    }, []);

    const fields=form.values.search.map((item,index) => (
      <>
      <Card key={item.key} radius={21} bg="#E2E2E2" w="100%">
      <Flex justify="space-between">
        <Text  className={classes.text}>From</Text>
        <Image
          src={flight_takeoff}
          alt="from logo"
          width={20}
          height={20}
        />
      </Flex>
      <TextInput
        placeholder="Enter Departure Airport or City"
        classNames={{ input: classes.input }}
        w="100%"
        name="from"
        {...form.getInputProps(`search.${index}.from`)}
        
        
      />
    </Card>
    </>
    )
  )
    

  const fields1=form.values.search.map((item,index) => (
    <>
    <Card key={item.key} radius={21} bg="#E2E2E2" w="100%">
    <Flex justify="space-between">
      <Text  className={classes.text}>To</Text>
      <Image
        src={flight_land}
        alt="from logo"
        width={20}
        height={20}
      />
    </Flex>
    <TextInput
      placeholder="Enter Destination Airport or City"
      classNames={{ input: classes.input }}
      w="100%"
      name="to"
      {...form.getInputProps(`search.${index}.to`)}
      
      
    />
  </Card>
  </>
  )
)

const fields2=form.values.search.map((item,index) => (
  <>
  <Card key={item.key} radius={21} bg="#E2E2E2" w="100%">
  <Flex justify="space-between">
    <Text  className={classes.text}>Date</Text>
    <Image
      src={calender}
      alt="from logo"
      width={20}
      height={20}
    />
  </Flex>
  <TextInput
    placeholder="Select Date"
    classNames={{ input: classes.input }}
    w="100%"
    name="date"
    {...form.getInputProps(`search.${index}.date`)}
    
    
  />
</Card>
</>
)
)




   

    

    const handleSearch = () => {
      localStorage.setItem('flightSearchForm',JSON.stringify(form.values));
    };
    

   
  const addRow = () => {
    const newId = rows.length > 0 ? Math.max(...rows.map((row) => row.id)) + 1 : 1;
    setRows([...rows, { id: newId }]);
  };

  const removeRow = (id) => {
    setRows(rows.filter((row) => row.id !== id));
  };
  console.log("rows", rows);
    return (
      <>
        <Card my={35} mx="auto" className={classes.card} withBorder w="80%">
          <Flex
            justify="space-between"
            align="center"
            direction="column"
            w="100%"
            h="100%"
          >
            <Tabs
              variant="pills"
              color="dark"
              defaultValue="Oneway"
              my={30}
              w="100%"
            >
              <Flex gap={19} w="100%">
                <Tabs.List w="100%">
                  <Tabs.Tab value="Oneway">One way</Tabs.Tab>
                  <Tabs.Tab value="RoundTrip">Round Trip</Tabs.Tab>
                  <Tabs.Tab value="Multicity">Multicity</Tabs.Tab>
                </Tabs.List>
                <Select
                w={{ base: "100%", sm: "auto" }}
                  ml="auto"
                  placeholder="Select Class"
                  classNames={{ input: classes.select }}
                  data={[]}
                />
                <Select
                w={{ base: "100%", sm: "auto" }}
                  classNames={{ input: classes.select }}
                  placeholder="2 Adults 1 Child 1 Infant"
                  data={[]}
                />
              </Flex>
   
              <Tabs.Panel  wrap={{ base: "wrap", sm: "nowrap" }} value="Oneway" pt="xl">
                <Flex gap={20} w="100%"  wrap={{ base: "wrap", sm: "nowrap" }}>
                  {fields}
                  {fields1}
                  {fields2}
                </Flex>
                <Image
                  className={classes.image}
                  bg={"white"}
                  withBorder
                  mt={-55}
                  ml={220}
                  src={component}
                  style={{
                    position: "absolute",
                  }}
                  width={35}
                  height={30}
                />
              </Tabs.Panel>
   
              <Tabs.Panel  wrap={{ base: "wrap", sm: "nowrap" }} value="RoundTrip" pt="xl">
                <Flex gap={20} w="100%" wrap={{ base: "wrap", sm: "nowrap" }}>
                {fields}
                {fields1}
                {fields2}
                </Flex>
                <Image
                  className={classes.image}
                  bg={"white"}
                  withBorder
                  mt={-55}
                  ml={220}
                  src={component}
                  style={{
                    position: "absolute",
                  }}
                  width={35}
                  height={30}
                />
                <Flex gap={20} w="100%" my={8} wrap={{ base: "wrap", sm: "nowrap" }}>
                  <Card radius={21} bg="#E2E2E2" w="100%">
                    <Flex justify="space-between">
                      <Text className={classes.text}>From</Text>
                      <Image
                        src={flight_takeoff}
                        alt="from logo"
                        width={20}
                        height={20}
                      />
                    </Flex>
   
                    <TextInput
                      placeholder="Enter Departure Airport or City"
                      classNames={{ input: classes.input }}
                      w="100%"
                      
                    />
                  </Card>
   
                  <Card radius={21} bg="#E2E2E2" w="100%">
                    <Flex justify="space-between">
                      <Text className={classes.text}>To</Text>
                      <Image
                        src={flight_land}
                        alt="from logo"
                        width={20}
                        height={20}
                      />
                    </Flex>
   
                    <TextInput
                      placeholder="Enter Destination Airport or City"
                      classNames={{ input: classes.input }}
                      w="100%"
                      
                    />
                  </Card>
   
                  <Card radius={21} bg="#E2E2E2" w="100%">
                    <Flex justify="space-between">
                      <Text className={classes.text}>Departure Date</Text>
                      <Image
                        src={calender}
                        alt="from logo"
                        width={20}
                        height={20}
                      />
                    </Flex>
                    <TextInput
                      placeholder="Select Date"
                      classNames={{ input: classes.input }}
                      w="100%"
                    />
                  </Card>
                </Flex>
                <Image
                  className={classes.image}
                  bg={"white"}
                  withBorder
                  mt={-55}
                  ml={220}
                  src={component}
                  style={{
                    position: "absolute",
                  }}
                  width={35}
                  height={30}
                />
              </Tabs.Panel>
   
              <Tabs.Panel  wrap={{ base: "wrap", sm: "nowrap" }} value="Multicity" pt="xl">
                {rows.map((row, index) => (
                  <Flex key={row.id} gap={20} my={20} w="100%"  wrap={{ base: "wrap", sm: "nowrap" }}>
                    <Card radius={21} bg="#E2E2E2" w="100%">
                      <Flex justify="space-between">
                        <Text className={classes.text}>From</Text>
                        <Image
                          src={flight_takeoff}
                          alt="from logo"
                          width={20}
                          height={20}
                        />
                      </Flex>
   
                      <TextInput
                        placeholder="Enter Departure Airport or City"
                        classNames={{ input: classes.input }}
                        w="100%"
                        
                      />
                    </Card>
   
                    <Card radius={21} bg="#E2E2E2" w="100%">
                      <Flex justify="space-between">
                        <Text className={classes.text}>To</Text>
                        <Image
                          src={flight_land}
                          alt="to logo"
                          width={20}
                          height={20}
                        />
                      </Flex>
   
                      <TextInput
                        placeholder="Enter Destination Airport or City"
                        classNames={{ input: classes.input }}
                        w="100%"
                        
                      />
                    </Card>
   
                    <Card radius={21} bg="#E2E2E2" w="100%">
                      <Flex justify="space-between">
                        <Text className={classes.text}>Departure Date</Text>
                        <Image
                          src={calender}
                          alt="calendar logo"
                          width={20}
                          height={20}
                        />
                      </Flex>
                      
                      <TextInput
                        placeholder="Select Date"
                        classNames={{ input: classes.input }}
                        w="100%"
                      />
                    </Card>
   
                    {index === rows.length - 1 ? (
                      <Button color="green" onClick={addRow}>
                        +
                      </Button>
                    ) : (
                      <Button color="red" onClick={() => removeRow(row.id)}>
                        -
                      </Button>
                    )}
                  </Flex>
                ))}
   
               
              </Tabs.Panel>
            </Tabs>
          </Flex>
        </Card>
        <Flex pb={20} justify="flex-end" mr={60}>
          <Button
            h={65}
            my={-60}
            w={200}
           
            className={classes.button}
            bg={"#FDB913"}
            fz={20}
            onClick={handleSearch}
            
           
          >
            Find ticket    <IconArrowNarrowRight stroke={2.5} />
   
          </Button>
         
        </Flex>
      </>
    );
  };
  export default Search;