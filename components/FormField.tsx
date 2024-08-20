import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { icons } from '@/constants/Index'

const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, keyBoardType, ...props }: { title: string, value: string, placeholder?: string, handleChangeText: (text: string) => void, otherStyles?: any, props?: any, keyBoardType?: any }) => {

    const [showPassword, setShowPassword] = useState(false)

    return (
        <View className={`space-y-1 ${otherStyles}`}>
            <Text className='text-base font-pmedium'>{title}</Text>
            <View className='border-b-[1px] w-full h-16 px-4 focus:border-b-secondary items-center flex-row'>
                <TextInput
                    className='flex-1 text-white font-psemibold text-base'
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor="#c9c9c9"
                    onChangeText={handleChangeText}
                    secureTextEntry={title === 'Password' && !showPassword}
                />

                {title === 'Password' && (
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <Image
                            source={!showPassword ? icons.eye : icons.eyeHide}
                            className='w-6 h-6'
                            resizeMode='contain'
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}

export default FormField