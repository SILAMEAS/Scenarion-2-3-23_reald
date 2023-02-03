import {
  Box,
  Button,
  Center,
  Checkbox,
  HStack,
  Input,
  Pressable,
  Text,
  useBreakpointValue,
  View,
  VStack,
} from 'native-base';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {
  faUser,
  faLock,
  faEyeSlash,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import {TouchableOpacity /*, Platform*/} from 'react-native';
import {style} from '@styles/style';
// import {style} from './../../styles/style';

export interface Props {
  navigation: any;
}

export function LoginScreen({navigation}: Props) {
  const [show, setShow] = React.useState(true);
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const flexDir = useBreakpointValue({
    base: 'row',
  });

  return (
    <View style={[style.linearGradient, style.container]}>
      <Box
        style={style.card}
        alignSelf="center"
        marginTop="15%"
        w={{base: 300, md: 300, sm: 250, lg: 380}}
      >
        <Box style={style.cardHeader}>
          <Center>
            <Text size={'md'}>{'CUSTOMER LOGIN__'}</Text>
          </Center>
        </Box>
        <VStack p={10} pt={5} space={6}>
          <Input
            type="text"
            onChangeText={setUsername}
            variant="underlined"
            placeholder="Email ID"
            InputLeftElement={<FontAwesomeIcon icon={faUser} color="white" />}
          />
          <Input
            secureTextEntry={show}
            onChangeText={setPassword}
            variant="underlined"
            InputLeftElement={
              <FontAwesomeIcon icon={faLock} color="lightgray" />
            }
            InputRightElement={
              <Pressable onPress={() => setShow(!show)}>
                <FontAwesomeIcon
                  icon={show ? faEyeSlash : faEye}
                  color="lightgray"
                />
              </Pressable>
            }
            placeholder="Password"
          />
          <HStack
            style={{
              flexDirection: flexDir,
            }}
            space={6}
            alignItems="center"
            justifyContent="center"
          >
            <Checkbox bg="transparent" size="sm" value="one">
              <Text variant={'smallText'}>Remember me</Text>
            </Checkbox>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Index');
              }}
            >
              <Text style={{paddingTop: 0}} italic variant={'smallText'}>
                Forgot password?
              </Text>
            </TouchableOpacity>
          </HStack>

          <Button
            style={style.button}
            mx="auto"
            w={{base: '75%'}}
            onPress={() => {
              navigation.navigate('Home', {
                username: username,
                password: password,
              });
            }}
          >
            LOGIN
          </Button>
        </VStack>
      </Box>
    </View>
  );
}
