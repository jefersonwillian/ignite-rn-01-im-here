import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View, TouchableOpacity, ScrollView } from 'react-native';
import { Participant } from '../../components/Participant';
import { styles } from './styles';

export function Home() {
    const participants = ['Jeferson', 'Izabel', 'Maicon', 'Miguel', 'Jeferson 1', 'Izabel 1', 'Maicon 1', 'Miguel 1', 'Jeferson 2', 'Izabel 2']
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
            <ScrollView showsVerticalScrollIndicator={false}>
                {
                    participants.map(participant => (
                        <Participant key={participant} name={participant} onRemove={() => handleParticipantRemove('Jeferson')} />
                    ))
                }
            </ScrollView>

        </View>

    );
}

