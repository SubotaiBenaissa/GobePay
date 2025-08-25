import { View } from "react-native"
import { Input, Button } from "@rneui/themed"
import { useFormik } from "formik"
import { Separator } from "../../Shared"
import { initialValues, validationSchema } from "./RegisterForm.form"

export const RegisterForm = () => {

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async ( formValue ) => {
            console.log(formValue)
        }
    })

    return (
        <View>
            <Input 
                placeholder="Correo electrónico" 
                autoCapitalize="none" 
                onChangeText={ (text) => formik.setFieldValue("email", text) } 
                value={ formik.values.email }
                errorMessage={ formik.errors.email }
            />
            <Input 
                placeholder="Contraseña" 
                secureTextEntry 
                onChangeText={ (text) => formik.setFieldValue("password", text) } 
                value={ formik.values.password }
                errorMessage={ formik.errors.password }
            />
            <Input 
                placeholder="Repetir Contraseña" 
                secureTextEntry
                onChangeText={ (text) => formik.setFieldValue("repeatPassword", text) } 
                value={ formik.values.repeatPassword }
                errorMessage={ formik.errors.repeatPassword }
            />
            <Separator height={ 20 } />
            <Button title="Crear cuenta" onPress={ formik.handleSubmit } loading={ formik.isSubmitting } />
        </View>
    )
}
