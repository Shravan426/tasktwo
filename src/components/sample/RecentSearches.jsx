import { Button, Grid, Box, Text, Image, Flex, BackgroundImage, Title, Container,MultiSelect } from '@mantine/core';
import useStyles from './style';
import { useState,useEffect } from 'react';

function RecentSearches() {
    const { classes } = useStyles();
    const [recent, setRecent] = useState([]);

    useEffect(() => {
        const storedValues = JSON.parse(localStorage.getItem('flightSearchForm'));
        if (storedValues && storedValues.search) {
            const searchOptions = storedValues.search.map((item) => ( {
                value:`${item.from}-${item.to}`,
                label:`${item.from} to ${item.to}`,
            }));
            setRecent(searchOptions);
        }
    },[]);

    

    return (
        <>
        <Box py={40}>
        <Flex gap="md" justify="space-around" align="center" direction="row" wrap="wrap">
            <Title order={2}>Recent Searches</Title>
            <MultiSelect 
                     classNames={{
                        wrapper: classes.wrapper,
                         
                      }}
                        data={recent}
                        defaultValue={recent.map(option => option.value)}
                        clearButtonProps={{ 'aria-label': 'Clear selection' }}
                        clearable
                        variant='unstyled'
                        
                    />
        </Flex>
        </Box>
        </>
    )
}

export default RecentSearches;