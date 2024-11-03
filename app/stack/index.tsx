import { styles } from "@/constants/styles";
import { Link } from "expo-router";
import { View, Text } from "react-native";
import Botao from '../../components/Botao';

export default function TelaInicial() {
    return (
        <View style={[styles.container, {gap: 10}]}>
            <Text>Tela inicial</Text>
            <Botao>
                <Link style={{color: '#fff'}} href={"/stack/nova"}>ir para Tela Nova</Link>
            </Botao>
        </View>
    )
}