import React from 'react'
import { KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';

//KEYBOARD AVOID WRAPPER COMPONENT SO THAT THE KEYBOARD DOESN'T COVER THE INPUT FIELDS
function KeyboardAvoidWrapper({ children }: { children: React.ReactNode }) {
    return (
        <KeyboardAvoidingView
            className='flex-1 h-1'
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                {children}
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default KeyboardAvoidWrapper