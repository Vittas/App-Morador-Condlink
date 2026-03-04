import { Controller, Control, FieldPath, FieldValues, FieldError } from 'react-hook-form';
import { Text, TextInput, View } from 'react-native';

type TextFieldProps<T extends FieldValues> = {
    control: Control<T>;
    name: FieldPath<T>;
    placeholder: string;
};

export function TextField<T extends FieldValues>({
    control,
    name,
    placeholder,
}: TextFieldProps<T>) {
    return (
        <>
            <Controller
                control={control}
                name={name}
                render={({ field: { onChange, value }, fieldState: {error} }) => (

                    <View>
                        <TextInput
                            className={`border w-full pl-3 ${error ? 'border-red-500' : ' border-gray-300'}`}
                            placeholder={placeholder}
                            onChangeText={onChange}
                            value={value}
                        />

                        {error && <Text className='text-red-500'>{error.message}</Text>}
                    </View>
                )}
            />
        </>
    );
}