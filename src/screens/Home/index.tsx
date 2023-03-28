import { useState } from "react";
import {
    Text,
    TextInput,
    View,
    TouchableOpacity,
    FlatList,
    Alert,
} from "react-native";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";

export function Home() {
    const [newParticipants, setnewParticipants] = useState('');
    const [participants, setParticipants] = useState<string[]>([]);

    function handleParticipantAdd() {
        if (participants.includes(newParticipants)) {
            return Alert.alert(
                "Participante Existe",
                "Já existe um participante com esse nome na lista"
            );
        }

        setParticipants((oldState) => [...oldState, newParticipants]);
        setnewParticipants('');
    }

    function handleParticipantRemove(name: string) {
        Alert.alert("Remover", `Deseja remover o participante ${name}?`, [
            {
                text: "Sim",
                onPress: () => {
                    setParticipants(prevState => prevState.filter(
                        participant => participant !== name
                    ))
                },
            },
            {
                text: "Não",
                style: "cancel",
            },
        ]);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>Nome do Evento</Text>
            <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2023</Text>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor="#6b6b6b"
                    onChangeText={setnewParticipants}
                    value={newParticipants}
                />

                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.5}
                    onPress={() => handleParticipantAdd()}
                    disabled={!newParticipants} 
                >
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={participants}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <Participant
                        key={item}
                        name={item}
                        onRemove={() => handleParticipantRemove(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Ninguém chegou no evento ainda? Adicione participantes a sua lista
                        de presença.
                    </Text>
                )}
            />
        </View>
    );
}
