import { StyleSheet, View, Pressable, Text, TextInput } from 'react-native';

type Props = {
    value?: string;
    onChangeText?: (text: string) => void;
};

export default function InputField({ value, onChangeText }: Props) {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#666"
                keyboardType="email-address"
                autoCapitalize="none"
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 320,
        height: 68,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
    },
    input: {
        flex: 1,
        width: '100%',
        height: 50,
        backgroundColor: '#f5f5f5',
        borderRadius: 20,
        marginBottom: 15,
        paddingHorizontal: 20,
        fontSize: 16,
        boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
    },
});
