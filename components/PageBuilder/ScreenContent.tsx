import { Button } from 'components/UI/Button';
import ModalComponent from 'components/UI/Modal';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { initialWindowMetrics, SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface ScreenContentProps {
  title: string;
  path: string;
  children?: React.ReactNode;
}

export const ScreenContent: React.FC<ScreenContentProps> = ({ title, path, children }) => {
  const router = useRouter();
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);

  const handleLogoutModal = () => {
    setLogoutModalVisible(true);
  };

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <SafeAreaView className='h-[100%] w-[100%] bg-white'>
        {path !== "App.tsx" && (
          <View className='w-full bg-green-700 flex flex-row justify-between p-2 items-center '>
            <Button onPress={handleLogoutModal} className='p-1 relative bg-transparent'>
              <MaterialIcons name="arrow-back" size={30} color="white" />
            </Button>
            <View className='flex-1 items-center justify-self-center'>
              <Text className="text-3xl text-white font-bold text-center">{title}</Text>
            </View>

          </View>
        )}
        {logoutModalVisible && (<ModalComponent visible={logoutModalVisible} onClose={() => setLogoutModalVisible(false)} title="Logout">
          <Text>Tem certeza de que deseja sair?</Text>
          <View className='flex-row gap-4 mt-4 justify-end'>
            <Button onPress={() => setLogoutModalVisible(false)} variant="outline"><Text>Cancelar</Text></Button>
            <Button onPress={() => { setLogoutModalVisible(false); router.navigate('/'); }} variant="default"><Text className='text-white'>Sair</Text></Button>
          </View>
        </ModalComponent>)}
        <View className="flex-1 items-center p-[5vh]">
          {children}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>

  );
};
