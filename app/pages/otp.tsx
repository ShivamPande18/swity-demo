import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { OtpInput } from "react-native-otp-entry";
import { useState, useEffect } from 'react';
import Bg from '../../assets/svg/Bg';

//OTP SCREEN COMPONENT

export default function OTPScreen() {

    //GET PHONE NUMBER AND COUNTRY CODE FROM PREVIOUS SCREEN
    const { phone, ccode } = useLocalSearchParams();

    const [canResend, setCanResend] = useState(false);
    const [time, setTime] = useState(10);

    //COUNTDOWN FOR RESENDING OTP
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(time - 1);
            if (time == 0) {
                setCanResend(true);
                setTime(0);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [time]);


    function handleResend() {
        setCanResend(false);
        setTime(10);
    }

    return (
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
            <View className='flex-1 items-center justify-center h-full w-full'>
                <View className='flex-1 items-center justify-center h-full w-max mx-10'>

                    <Text className='text-black text-4xl text-center font-bold'>Verify Phone</Text>

                    <View className='w-full'>

                        <Text className='text-black text-md text-center'>Code has been sent to <Text className='font-bold text-black text-md text-center'> {ccode ? `+${ccode} ${phone}` : phone}</Text> </Text>

                    </View>



                    {/* OTP INPUT COMPONENT */}
                    <OtpInput
                        // onChangeText={(otp) => console.log(otp)}
                        numberOfDigits={4}
                        autoFocus={true}
                        theme={{
                            containerStyle: styles.otpContainer,
                        }}
                    />

                    {/* ALLOWS YOU TO RESEND OTP AFTER 10 SECONDS */}
                    <View className='w-full'>
                        <Text className='text-black text-md text-center mt-5'>Didn't get OTP?
                            <Text className='font-bold text-black text-md text-center'> wait: 00:{time < 10 ? '0' + time : time}</Text>
                        </Text>

                        <TouchableOpacity className='text-center w-full mt-2 underline' onPress={handleResend} disabled={!canResend}>
                            <Text className={`${canResend ? "text-blue-500" : "text-gray-500"} text-center text-md underline`}>Resend OTP</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30,
    },
});
