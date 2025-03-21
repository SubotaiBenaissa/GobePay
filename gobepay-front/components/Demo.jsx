import React from 'react'
import { View } from "react-native"
import { Button } from "@rneui/themed"

export const Demo = () => {
    return (
        <View>
            <Button title="botón" />
            <Button title="botón" type='outline'/>
            <Button title="botón" type='clear'/>
        </View>
    )
}
