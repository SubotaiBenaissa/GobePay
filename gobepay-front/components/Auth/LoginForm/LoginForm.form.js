import * as Yup from 'yup';

export const initialValues = () => {

    return {
        email: "",
        password: ""
    }

}

export const validationSchema = () => {

    return Yup.object({
        email: Yup.string().email("El correo electrónico no es válido").required("El correo electrónico es obligatorio"),
        password: Yup.string().required("La contraseña es obligatoria")
    })
}