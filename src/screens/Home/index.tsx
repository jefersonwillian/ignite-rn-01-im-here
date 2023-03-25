import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { Participant } from '../../components/Participant';
import { styles } from './styles';

export function Home() {
    function handleParticipantAdd() {
        console.log("handleParticipantAdd");
    }

    function handleParticipantRemove(name: string) {
        console.log("handleParticipantRemove", name);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>Nome do Evento</Text>
            <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2023</Text>
            <View style={styles.form}>
                <TextInput style={styles.input} placeholder="Nome do participante" placeholderTextColor="#6b6b6b" />

                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>
            <Participant name="Jeferson" onRemove={() => handleParticipantRemove('Jeferson')} />
            <Participant name="Carvalho" onRemove={() => handleParticipantRemove('Carvalho')} />
            <Participant name="Willian" onRemove={() => handleParticipantRemove('Willian')} />
        </View>

    );
}

