import { Text, TouchableOpacity } from 'react-native';

type Props = {
    label: string;
    handlePress?: () => void;
};

export default function Button({ label, handlePress }: Props) {
    return (
        <TouchableOpacity className='w-full bg-sky-400 p-3 rounded mt-5' onPress={handlePress}>
            <Text className='text-white text-center text-lg font-bold'>{label}</Text>
        </TouchableOpacity>
    );
}
