import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View, TouchableOpacity, FlatList, Alert } from 'react-native';
import { Participant } from '../../components/Participant';
import { styles } from './styles';

export function Home() {
    const participants = ['Jeferson', 'Izabel', 'Maicon', 'Miguel', 'Jeferson 1', 'Izabel 1', 'Maicon 1', 'Miguel 1', 'Jeferson 2', 'Izabel 2']
    function handleParticipantAdd() {
        if (participants.includes('Jeferson')) {
            return Alert.alert('Participante Existe', 'Já existe um participante com esse nome na lista')
        }
        console.log("handleParticipantAdd");
    }

    function handleParticipantRemove(name: string) {
        Alert.alert('Remover', `Deseja remover o participante ${name}?`, [
            {
                text: 'Sim',
                onPress: () => Alert.alert('Deletado!')
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
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
            <FlatList
                data={participants}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Participant key={item} name={item} onRemove={() => handleParticipantRemove(item)} />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
                    </Text>
                )}
            />



        </View>

    );
}

