import { Text, View, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import { Link, router } from 'expo-router';
import Button from '../components/Button';
import Bg from './Bg';

export default function Index() {
  return (
    <View className="bg-white h-full w-full">
      <Bg
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      />
      <View className="flex flex-col justify-around h-full w-full px-10">
        <View className="flex items-center justify-center h-full gap-y-10">

          <Text className="text-6xl font-bold text-black">startup</Text>

          <View className='w-full'>

            <Button
              label="Let's Get Started"
              handlePress={() => router.push('/createAcc')}
            />

            {/* <TouchableOpacity className='w-full bg-sky-400 p-3 rounded mt-5' onPress={() => router.push('/createAcc')}>
              <Text className='text-white text-center text-lg font-bold'>Let's Get Started</Text>
            </TouchableOpacity> */}

            <Link href="/login" className='mt-2'>
              <Text className='text-blue-500 text-center text-md underline'>I already have an account</Text>
            </Link>

          </View>
        </View>
      </View>
    </View>
  );
}
