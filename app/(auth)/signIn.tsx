import React, { useState } from 'react'
import { KeyboardAvoidingView, Platform, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import CustomButton from '@/components/CustomButton'
import FormField from '@/components/FormField'

const SignIn = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)

    const submit = async () => {
        console.log("first")
    }

    return (
        <SafeAreaView className=' bg-blue-100 h-full'>
            <View className='absolute top-80 left-0 right-28  h-56 bg-white transform -rotate-[33.3deg] origin-bottom-right'></View>
            <View className='absolute top-80 left-28 right-0 h-56 bg-white transform rotate-[33.3deg] origin-bottom-left'></View>
            <View className='absolute bg-white h-[45%] bottom-0 left-0 right-0'></View>
            <ScrollView>
                    <View className='w-full justify-between min-h-[88vh] px-4 my-6'>
                        <View className='flex justify-center items-center flex-row gap-4 mt-10'>
                            <View className='bg-secondary rounded-full w-16 h-16'></View>
                            <View className='align-middle'>
                                <Text className='text-2xl font-psemibold'>App</Text>
                                <Text className='text-2xl font-psemibold'>Construction</Text>
                            </View>
                        </View>
                        <View>
                            <Text className='text-3xl text-center font-psemibold'>Bienvenido</Text>
                            <FormField
                                title="Correo Electronico"
                                value={form.email}
                                handleChangeText={(e: any) => setForm({ ...form, email: e })}
                                otherStyles="mt-9"
                                keyBoardType="email-address"
                                placeholder='Ingresa tu correo electronico'
                            />
                            <FormField
                                title="Contraseña"
                                value={form.password}
                                handleChangeText={(e: any) => setForm({ ...form, password: e })}
                                otherStyles="mt-10"
                                placeholder='Ingrese su contraseña'
                            />
                            <CustomButton
                                title='Ingresar'
                                handlePress={submit}
                                containerStyles="mt-10"
                                isLoading={isSubmitting}
                            />
                        </View>
                    </View>
            </ScrollView>
        </SafeAreaView >
    )
}

export default SignIn