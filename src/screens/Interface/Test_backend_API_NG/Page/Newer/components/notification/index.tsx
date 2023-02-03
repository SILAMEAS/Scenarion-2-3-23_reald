import {Box, CheckIcon, HStack, Slide, Text} from 'native-base';
import React from 'react';

type Props = {isOpen: boolean; text: string; bg?: string; color?: string};

const Notification = ({
  isOpen,
  text,
  bg = 'emerald.100',
  color = 'emerald.600',
}: Props) => {
  return (
    <Slide in={isOpen} placement="top">
      <Box
        w="100%"
        position="absolute"
        p="5"
        borderRadius="xs"
        bg={bg}
        alignItems="center"
        justifyContent="center"
        _dark={{
          bg: 'emerald.200',
        }}
        safeArea
      >
        <HStack space={2}>
          <CheckIcon
            size="4"
            color={color}
            mt="1"
            _dark={{
              color: 'emerald.700',
            }}
          />
          <Text
            color="emerald.600"
            textAlign="center"
            _dark={{
              color: 'emerald.700',
            }}
            fontWeight="medium"
          >
            {text}
          </Text>
        </HStack>
      </Box>
    </Slide>
  );
};

export default Notification;
