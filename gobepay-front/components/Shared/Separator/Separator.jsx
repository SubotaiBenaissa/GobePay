import { View } from 'react-native'

export const Separator = ({ height = 0, backgroundColor = "transparent" }) => {
    return (
        <View style={{ height: height, backgroundColor: backgroundColor }} />
    )
}
