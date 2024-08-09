import React, { useState } from 'react'
import { Alert, Image, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Link, router } from 'expo-router'
import CustomButton from '@/components/CustomButton'
import FormField from '@/components/FormField'

interface User {
	id: string;
	avatar: string;
	username: string;
	$id: string; // Add the $id property
}

interface GlobalContextType {
	isLoggedIn: boolean;
	user: User | null;
	setUser: (user: any) => void;
	isLoading: boolean;
	setIsLoggedIn: (isLoggedIn: boolean) => void;
}

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
        <SafeAreaView className='bg-primary h-full'>
            <ScrollView>
                <View className='w-full justify-center min-h-[82vh] px-4 my-6'>
                    {/* <Image
                        source={images.logo}
                        resizeMode='contain'
                        className='w-[115px] h-[35px]'
                    /> */}
                    <Text className='text-2xl text-white text-semibold mt-10 font-psemibold'>Log In to Aora</Text>
                    <FormField
                        title="Email"
                        value={form.email}
                        handleChangeText={(e: any) => setForm({ ...form, email: e })}
                        otherStyles="mt-7"
                        keyBoardType="email-address"
                        placeholder='Enter your email address'
                    />
                    <FormField
                        title="Password"
                        value={form.password}
                        handleChangeText={(e: any) => setForm({ ...form, password: e })}
                        otherStyles="mt-7"
                        placeholder='Enter your password'
                    />
                    <CustomButton
                        title='Sign In'
                        handlePress={submit}
                        containerStyles="mt-7"
                        isLoading={isSubmitting}
                    />
                    <View className='justify-center pt-5 flex-row gap-2'>
                        <Text className='text-lg text-gray-100 font-pregular'>
                            Don't have account?
                        </Text>
                        <Link href="/" className='text-lg font-psemibold text-secondary'>Sign Up</Link>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignIn