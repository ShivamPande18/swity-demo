import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Button from '../../components/Button';
import { router } from 'expo-router';
import { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import Bg from '../../assets/svg/Bg';
import KeyboardAvoidWrapper from '@/components/KeyboardAvoidWrapper';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    function validEmail(e: string) {
        const patt = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return patt.test(e);
    }

    function handlePress() {
        if (email === '' || password === '') alert('All fields are required');
        else if (!validEmail(email)) alert('Invalid Email');
        else {
            setEmail('');
            setPassword('');
            router.push('/');
        }
    }

    return (
        <KeyboardAvoidWrapper>
            <View className='bg-white h-full w-full'>
                <Bg
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                    }}
                />
                <View className='grid grid-flow-col grid-rows-2 justify-around h-full w-full px-10'>
                    <View>
                        <Text className='text-6xl font-bold text-black'>Login</Text>
                        <Text className='text-black text-md'>Good to see you back</Text>
                    </View>

                    <View>
                        <TextInput
                            className='w-full bg-gray-200 p-3 rounded mt-4'
                            placeholder='Email'
                            placeholderTextColor='gray'
                            keyboardType='email-address'
                            value={email}
                            onChangeText={setEmail}
                        />

                        {
                            (validEmail(email) || email == "") ? null : <Text className='text-red-500 ml-2'>Invalid Email</Text>
                        }

                        <View className='flex-row justify-around items-center w-full bg-gray-200 mt-4 px-2 rounded'>

                            <TextInput
                                className='py-3 flex-1'
                                placeholder='Password'
                                placeholderTextColor='gray'
                                secureTextEntry={!showPassword}
                                value={password}
                                onChangeText={setPassword}
                            />

                            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                                <Ionicons name={showPassword ? "eye-off" : "eye"} size={25} color="black" />
                            </TouchableOpacity>

                        </View>


                        <Button
                            label="Login"
                            handlePress={handlePress}
                        />

                    </View>


                </View>
            </View>
        </KeyboardAvoidWrapper>
    );
}
