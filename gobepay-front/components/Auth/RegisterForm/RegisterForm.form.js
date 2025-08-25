import * as Yup from "yup"

export const initialValues = () => {

    return {
        email: "",
        password: "",
        repeatPassword: ""
    }

}

export const validationSchema = () => {

    return Yup.object({
        email: Yup.string().email("El correo electrónico no es válido").required("El correo electrónico es obligatorio"),
        password: Yup.string().required("La contraseña es obligatoria").min(5, "Mínimo 5 caracteres"),
        repeatPassword: Yup.string().required("Repetir la contraseña es obligatorio").oneOf([Yup.ref("password")], "Las contraseñas no son iguales")
    })
    
}