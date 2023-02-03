import {RootState} from '@src/redux/Store';
import {Constant_Navigator} from '@src/screens/Interface/CloneUI_Facebook/Constant_Navigator';
import {Box, Button, Center, Heading, HStack, Text, VStack} from 'native-base';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import Notification from '../components/notification';

const PageScenario = ({navigation}: any) => {
  const {DataScenario} = useSelector((state: RootState) => state.counter);
  console.log(
    '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>',
  );
  const [ALERT, SETALERT] = useState(false);
  const [SenarioOrOTP, setSenarioOrOTP] = useState(true);

  useEffect(() => {
    if (DataScenario.url == '' || undefined) {
      navigation.navigate(Constant_Navigator.NewP_PageScenario);
      alert('Invalid');
    }
  }, []);

  return (
    <Box py={4} px={4} rounded={'lg'} w={['100%']} h={['60%', '50%']}>
      <Notification
        isOpen={ALERT}
        text="Your Scenarion was Active Successfully."
      />
      <Heading color={'yellow.600'} fontWeight={'bold'} textAlign={'center'}>
        {SenarioOrOTP === false
          ? 'Generate OTP for Process Next Step'
          : ' Scenario was created'}
      </Heading>
      {SenarioOrOTP === false ? (
        <Center h={'70%'}>
          <VStack space={2}>
            <Button color={'blue.700'} bg={'black'}>
              Press "OK" for generate OTP
            </Button>
            <HStack w={'100%'} space={10}>
              <Button
                borderWidth={1}
                borderColor={'white'}
                bg={'black'}
                onPress={() => {
                  SETALERT(false);
                  setSenarioOrOTP(true);
                }}
                px={5}
              >
                Cancel
              </Button>
              <Button
                borderWidth={1}
                borderColor={'white'}
                bg={'black'}
                px={10}
                onPress={() => {
                  SETALERT(true);
                  setSenarioOrOTP(false);
                }}
              >
                OK
              </Button>
            </HStack>
          </VStack>
        </Center>
      ) : (
        <>
          <Center h={'70%'}>
            <Text fontWeight={'bold'} color={'yellow.600'}>
              Date :{DataScenario.date.split('T')[0]}
            </Text>
            <Text fontWeight={'bold'} color={'yellow.600'}>
              Time :{DataScenario.date.split('T')[1].split('.')[0]}
            </Text>
            <Text fontWeight={'bold'} color={'yellow.600'}>
              Id :{DataScenario.url.split('/')[6]}
            </Text>
            <Text fontWeight={'bold'} color={'yellow.600'}>
              In session :{DataScenario.url.split('/')[4]}
            </Text>
            <Text fontWeight={'bold'} color={'yellow.600'}>
              Version :{DataScenario.url.split('/')[2]}
            </Text>
          </Center>
          <VStack space={2}>
            <Button color={'blue.700'} bg={'black'}>
              Press "OK" to Active Your Scenarion
            </Button>
            <Button
              borderWidth={1}
              borderColor={'white'}
              bg={'black'}
              onPress={() => {
                SETALERT(true);
                setSenarioOrOTP(false);
              }}
            >
              OK
            </Button>
          </VStack>
        </>
      )}
    </Box>
  );
};

export default PageScenario;
