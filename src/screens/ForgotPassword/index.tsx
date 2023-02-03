import {
    Box,
    Button,
    Center,
    Input,
    Text,
    View,
    VStack
} from 'native-base';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {faUser} from "@fortawesome/free-solid-svg-icons";

export interface Props {
    navigation: any,
}

export function ForgotPasswordScreen({navigation}: Props) {
    return (
        <View
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: "100%",
                height: "100%"
            }}
        >
            <Box safeArea w={{base: 250, md: 300, sm: 250}} backgroundColor='rgb(69,56,74)' borderRadius={30} mx="auto">
                <Box backgroundColor='rgb(87,77,102)' p={3} borderRadius={29} borderBottomRadius={0}>
                    <Center>
                        <Text size={"md"}>CUSTOMER LOGIN</Text>
                    </Center>
                </Box>
                <VStack p={10} pt={5} space={6} w="100%">
                    <Input
                        type="text"
                        pl={2}
                        variant="underlined"
                        placeholder="username"
                        InputLeftElement={<FontAwesomeIcon icon={faUser} color="white"/>}
                    />
                    <Button
                        mx="auto"
                        w={
                            {base: '75%'}
                        }
                        onPress={() => {
                            navigation.
                            navigation.navigate("Index")
                        }}>Login</Button>
                </VStack>
            </Box>
        </View>
    );
}
