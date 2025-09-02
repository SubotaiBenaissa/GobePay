import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Input } from '@rneui/themed';
import { useFormik } from "formik"
import { authControl } from "../../../api"
import { initialValues, validationSchema } from './LoginForm.form';
import { Separator } from '../../../components/Shared';
import { screens } from '../../../utils';

export const LoginForm = () => {

    const { navigate } = useNavigation();

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async ( formValue ) => {
            try {
                const response = await authControl.login(
                    formValue.email, 
                    formValue.password
                )
                console.log(response)
            } catch (error) {
                console.error(error)
            }
        }
    })

    const goToRegister = () => {
        navigate(screens.auth.registerScreen);
    }

    return (
        <View>
            <Input placeholder='Correo electrónico' 
                autoCapitalize='none' 
                keyboardType='email-address' 
                value={ formik.values.email }
                onChangeText={ text => formik.setFieldValue("email", text) } 
                errorMessage={ formik.errors.email }
            />
            <Input 
                placeholder='Contraseña' 
                secureTextEntry 
                value={ formik.values.password }
                onChangeText={ text => formik.setFieldValue("password", text) } 
                errorMessage={ formik.errors.password }
            />
            <Separator height={ 30 } />
            <Button title='Iniciar sesión' onPress={ formik.handleSubmit } loading={ formik.isSubmitting } />
            <Separator height={ 20 } />
            <Button title="Registrarse" type='outline' onPress={ goToRegister } />
        </View>
    )

}
