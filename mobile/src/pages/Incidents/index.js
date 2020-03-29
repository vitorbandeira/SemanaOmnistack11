import React from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Incidents() {
  const navigation = useNavigation();

  function navigateToDetails() {
    navigation.navigate('IncidentsDetails');
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}> 0 casos </Text>.
        </Text>
      </View>

      <Text style={styles.title}> Bem-vindo! </Text>
      <Text style={styles.description}> Escolha um dos casos abaixo e salve o dia. </Text>

      <FlatList
        style={styles.incidentList}
        showsVerticalScrollIndicator={false}
        data={[1, 2, 3, 4, 5, 6]}
        keyExtractor={ incident => String(incident) }
        renderItem={ () => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}> ONG: </Text>
            <Text style={styles.incidentValue }> APD </Text>

            <Text style={styles.incidentProperty}> CASO: </Text>
            <Text style={styles.incidentValue }> Poluição sonora </Text>

            <Text style={styles.incidentProperty}> Valor: </Text>
            <Text style={styles.incidentValue }> R$ 120,00 </Text>

            <TouchableOpacity onPress={navigateToDetails} style={styles.detailsButton} >
              <Text style={styles.detailsButtonText}> Ver mais detalhes </Text>
              <Feather name="arrow-right" size={16} color="#E02041" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
