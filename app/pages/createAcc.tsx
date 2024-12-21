import { Text, View, StyleSheet, TextInput, LogBox, TouchableOpacity } from 'react-native';
import Button from '../../components/Button';
import { router } from 'expo-router';
import { useState } from 'react';
import PhoneInput from "react-native-phone-number-input";
import Bg from '../../assets/svg/Bg';
import Ionicons from '@expo/vector-icons/Ionicons';
import KeyboardAvoidWrapper from '@/components/KeyboardAvoidWrapper';

export default function CreateAccount() {
    LogBox.ignoreAllLogs();

    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [ccode, setCcode] = useState('91');
    const [password, setPassword] = useState('');
    const [passFocus, setPassFocus] = useState(false);
    const [passStrength, setPassStrength] = useState(0);
    const [showPassword, setShowPassword] = useState(false);

    const width = ["w-1/4", "w-1/2", "w-3/4", "w-3/4", "w-full"];
    const passStrengthText = ["Bad", "Weak", "Good", "Good", "Strong"];
    const colors = ["bg-red-500", "bg-yellow-500", "bg-blue-500", "bg-blue-500", "bg-green-500"];


    function validEmail(e: string) {
        const patt = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return patt.test(e);
    }

    function hasNumber(e: string) {
        const patt = /[0-9]/;
        return patt.test(e);
    }

    function hasUpper(e: string) {
        const patt = /[A-Z]/;
        return patt.test(e);
    }

    function hasSymbol(e: string) {
        const patt = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
        return patt.test(e);
    }

    function handlePassChange(e: string) {
        setPassword(e);
        let score = 0;
        if (e.length < 8) score = 0;
        else score = 1;
        if (hasNumber(e)) score += 1;
        if (hasUpper(e)) score += 1;
        if (hasSymbol(e)) score += 1;
        if (score == 0) setPassStrength(0);
        else if (score == 1) setPassStrength(1);
        else if (score <= 3) setPassStrength(score);
        else setPassStrength(4);
    }

    function handlePress() {
        // router.push({ pathname: '/otp', params: { phone, ccode } });

        if (email === '' || password === '' || phone === '') alert('All fields are required');
        else if (!validEmail(email)) alert('Invalid Email');
        else if (password.length < 8) alert('Password must be at least 8 characters');
        else {
            setEmail('');
            setPassword('');
            setPhone('');
            router.push({ pathname: '/pages/otp', params: { phone, ccode } });
        }
    }

    return (
        <KeyboardAvoidWrapper>
            <View className='bg-white h-max w-full'>
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
                        <Text className='text-6xl font-bold text-black'>
                            Create Account
                        </Text>
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
                                value={password}
                                onChangeText={handlePassChange}
                                secureTextEntry={!showPassword}
                                onFocus={() => setPassFocus(true)}
                                onBlur={() => setPassFocus(false)}
                            />

                            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                                <Ionicons name={showPassword ? "eye-off" : "eye"} size={25} color="black" />
                            </TouchableOpacity>


                        </View>

                        {
                            password == "" || (passFocus == false && passStrength > 0) ? null : <View className="flex-row justify-between items-center mb-4">

                                <View className="w-1/2 bg-gray-300 rounded-xl h-3 overflow-hidden">
                                    <View className={`h-full ${colors[passStrength]} ${width[passStrength]}`} />
                                </View>

                                <Text className="text-sm text-gray-500">Strength:
                                    <Text className="text-sm font-bold text-black">
                                        {passStrengthText[passStrength]}
                                    </Text>
                                </Text>
                            </View>
                        }

                        <PhoneInput
                            value={phone}
                            defaultCode='IN'

                            onChangeText={setPhone}
                            onChangeCountry={(country) => setCcode(country.callingCode[0])}
                            textContainerStyle={{ backgroundColor: "#e5e7eb" }}
                            textInputStyle={{ height: 50 }}
                            containerStyle={{ height: 60, marginTop: 15 }}
                        // codeTextStyle={{ marginBottom: 1 }}
                        />

                        <View className='w-full mt-5'>
                            <Button label="Next" handlePress={handlePress} />
                        </View>
                    </View>

                </View>

                <Button
                    label="Done"
                    handlePress={() => router.push('/pages/otp')}
                />

            </View>
        </KeyboardAvoidWrapper>
    );
}
