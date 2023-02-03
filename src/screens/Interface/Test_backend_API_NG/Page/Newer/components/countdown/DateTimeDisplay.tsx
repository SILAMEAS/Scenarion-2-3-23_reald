import {Box, HStack, Text} from 'native-base';
import React from 'react';

const DateTimeDisplay = ({value, type, isDanger}: any) => {
  return (
    <Box>
      <HStack>
        <Text color={'white'} fontWeight={'bold'}>
          {isDanger}
        </Text>
        <Text color={'white'} fontWeight={'bold'}>
          {value}
        </Text>
        {type !== 's' ? (
          <Text color={'white'} fontWeight={'bold'}>
            {' ' + type + ' '} : {''}
          </Text>
        ) : (
          <Text color={'white'} fontWeight={'bold'}>
            {type}
          </Text>
        )}
      </HStack>
      {/* <Text color={'black'} fontWeight={'bold'}>
        {isDanger ? 'countdown danger' : 'countdown'}
      </Text> */}
    </Box>
  );
};

export default DateTimeDisplay;
