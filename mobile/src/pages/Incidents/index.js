import React, { useState, useEffect } from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import api from '../../services/api';

import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Incidents() {
  const navigation = useNavigation();
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);

  function navigateToDetails(incident) {
    navigation.navigate('IncidentsDetails', { incident });
  }

  async function loadIncidents() {
    const response = await api.get('incidents');

    setIncidents(response.data);
    setTotal(response.headers['x-total-count']);
  }

  // propriedade chamada assim que o componente é carregado
  useEffect(() => {
    loadIncidents();
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}> {total} casos</Text>.
        </Text>
      </View>

      <Text style={styles.title}> Bem-vindo! </Text>
      <Text style={styles.description}> Escolha um dos casos abaixo e salve o dia. </Text>

      <FlatList
        style={styles.incidentList}
        showsVerticalScrollIndicator={false}
        data={incidents}
        keyExtractor={ incident => String(incident.id) }
        renderItem={ ({ item: incident }) => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}> ONG: </Text>
            <Text style={styles.incidentValue }> {incident.name}</Text>

            <Text style={styles.incidentProperty}> CASO: </Text>
            <Text style={styles.incidentValue }> {incident.title} </Text>

            <Text style={styles.incidentProperty}> Valor: </Text>
            <Text style={styles.incidentValue }>
              {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(incident.value) }
            </Text>

            <TouchableOpacity onPress={() => navigateToDetails(incident)} style={styles.detailsButton} >
              <Text style={styles.detailsButtonText}> Ver mais detalhes </Text>
              <Feather name="arrow-right" size={16} color="#E02041" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
