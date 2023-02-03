import {HStack, Text} from 'native-base';
import React from 'react';
const Statusbar = ({
  color,
  fw,
  fs,
  date = 'Mon 13',
  time = '10:58 AM',
  battery = '100%',
  w = '100%',
  px = 2,
  bg = 'white',
}: any) => {
  return (
    <HStack justifyContent={'space-between'} bg={bg} w={w} px={px}>
      <Text color={color} fontWeight={fw} fontSize={fs}>
        {date}
      </Text>
      <Text color={color} fontWeight={fw} fontSize={fs}>
        {time}
      </Text>
      <Text color={color} fontWeight={fw} fontSize={fs}>
        {battery}
      </Text>
    </HStack>
  );
};

export default Statusbar;
