import { ScreenContent } from 'components/PageBuilder/ScreenContent';
import { Image, Pressable, Switch, Text, View } from 'react-native';
import { loginSchema } from 'schemas/validationSchemas';
import { set, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { TextField } from 'components/UI/FormFields/TextField';
import { PasswordField } from 'components/UI/FormFields/PasswordField';
import { useState } from 'react';
import { Link, useRouter } from 'expo-router';
import { useValidateLogin } from 'hooks/useValidateLogin';
import { Button } from 'components/UI/Button';
import { TextApp } from 'components/UI/Text';

type LoginData = yup.InferType<typeof loginSchema>;

export default function Login() {
  const { control, handleSubmit, formState: { errors } } = useForm<LoginData>({
    resolver: yupResolver(loginSchema),
    defaultValues: { username: '', password: '' },
  });
  const { validateLogin, loading } = useValidateLogin();
  const router = useRouter();
  const [isConnected, setIsConnected] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (formData: LoginData) => {
    // const isValid = await validateLogin(formData.username, formData.password);
    const isValid = await validateLogin("admin", "password");

    if (isValid) {
      router.navigate('/home');
    } else {
      setErrorMessage('Usuário ou senha inválidos. Tente novamente.');
    }
  };

  return (
    <ScreenContent title="Login" path="App.tsx">
      <View className='gap-4 flex items-center w-full'>
        <Image source={require('../assets/condlink-fav.png')} className='w-48 h-48 mb-4' />

        <View>
          <TextApp className='font-bold'>Seu usuário:</TextApp>
          <TextField<LoginData> control={control} name="username" placeholder="Digite seu usuário" />
        </View>

        <View>
          <TextApp className='font-bold'>Senha:</TextApp>
          <PasswordField<LoginData> control={control} name="password" placeholder="Digite sua senha" />
        </View>

        { errorMessage && (<TextApp className='text-red-500'>{errorMessage}</TextApp>) }

        <View className='w-full'>
          <Button className='w-full' onPress={handleSubmit(onSubmit)} variant="default" disabled={loading}>
            <TextApp className='text-white font-bold'>
              {loading ? 'Entrando...' : 'Entrar'}
            </TextApp>
          </Button>
        </View>

        <View className='flex flex-row gap-1 items-center'>
          <Switch
            trackColor={{ false: "#767577", true: "#2C8F5C" }}
            thumbColor={isConnected ? "#ffffff" : "#ffffff"}
            value={isConnected}
            onValueChange={setIsConnected}
          />
          <TextApp>Manter conectado</TextApp>
        </View>

        <View>
          <TextApp>Esqueceu usuário ou senha? <TextApp className='font-bold'>Obtenha Ajuda</TextApp></TextApp>
          <TextApp>Nossa <Link className='font-bold' href="https://example.com/privacy-policy">política de privacidade</Link></TextApp>
        </View>
      </View>
    </ScreenContent>
  );
}
