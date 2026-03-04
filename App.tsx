import { ScreenContent } from 'components/ScreenContent';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Button, Text, TextInput, View } from 'react-native';
import { loginSchema } from 'components/validationSchemas';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup'; import { yupResolver } from '@hookform/resolvers/yup';
import { values } from 'eslint.config';
import { TextField } from 'components/FormFields/TextField';
import { PasswordField } from 'components/FormFields/PasswordField'; import { useState } from 'react';
import "./global.css";

type LoginData = yup.InferType<typeof loginSchema>;

export default function App() {

  const { control, handleSubmit, formState: { errors } } = useForm<LoginData>({ resolver: yupResolver(loginSchema), defaultValues: { username: '', password: '', }, });
  const [data, setData] = useState<LoginData>({ username: '', password: '', });

  const onSubmit = (formData: LoginData) => {
    setData(formData);
  };

  return (
    <SafeAreaProvider>
      <ScreenContent title="Login" path="App.tsx">
        <Text className="text-2xl font-bold">Bem-vindo ao Condlink!</Text>
        <Text className="text-lg mt-4"> Faça login para acessar as funcionalidades do aplicativo. </Text>
        <View className="w-full gap-4">
          <TextField<LoginData> control={control} name="username" placeholder="Nome de usuário" />
          <PasswordField<LoginData> control={control} name="password" placeholder="Senha do usuário" />
          <Button title="Login" onPress={handleSubmit(onSubmit)} />
        </View>
        <Text>Info:</Text>
        <Text>{data.username}</Text>
        <Text>{data.password}</Text>
      </ScreenContent>
      <StatusBar style="auto" />
    </SafeAreaProvider>);
}