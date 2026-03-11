import { ScreenContent } from 'components/PageBuilder/ScreenContent';
import { Image, Text, View, StyleSheet, ScrollView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  logo: {
    width: 192,
    height: 192,
    marginBottom: 16,
  },
});

interface MenuIcons {
  id: string;
  name: string;
  path: string
}


export default function Home() {

  const data: MenuIcons[] = [
    { id: '1', name: 'pets', path: '/home' },
    { id: '2', name: 'settings', path: '/settings' },
    { id: '3', name: 'notifications', path: '/notifications' },

    { id: '4', name: 'mail', path: '/home' },
    { id: '5', name: 'restaurant', path: '/settings' },
    { id: '6', name: 'local-laundry-service', path: '/notifications' },

    { id: '7', name: 'pool', path: '/home' },
    { id: '8', name: 'fitness-center', path: '/settings' },
    { id: '9', name: 'local-parking', path: '/notifications' },

    { id: '10', name: 'videocam', path: '/home' },
    { id: '11', name: 'build', path: '/settings' },
    { id: '12', name: 'event', path: '/notifications' },

    { id: '13', name: 'chat', path: '/home' },
    { id: '14', name: 'payment', path: '/settings' },
    { id: '15', name: 'receipt', path: '/notifications' },
    { id: '16', name: 'report-problem', path: '/home' },
    { id: '17', name: 'people', path: '/settings' },
    { id: '18', name: 'directions-car', path: '/notifications' },
    { id: '19', name: 'local-shipping', path: '/home' },
    { id: '20', name: 'wifi', path: '/settings' },
    { id: '21', name: 'star', path: '/notifications' }
  ];

  return (
    <ScreenContent title="Animais" path="animais.tsx">
      <View className='flex-1 w-full gap-4'>
        <View className="flex items-center justify-self-start w-full flex-row gap-4">
          <Image
            className='w-[5em] h-[5em] object-cover rounded-md'
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7awcQZRnbrToH9Hwkh9NsbbAlGThRcfHvCA&s'
            }}
          />
          <Text className='text-2xl font-bold'>Olá Vitor!</Text>
        </View>



      </View>


    </ScreenContent>
  );
}
