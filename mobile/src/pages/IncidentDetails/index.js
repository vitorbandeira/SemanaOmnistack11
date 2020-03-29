import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as mailComposer from 'expo-mail-composer';

import { Feather } from '@expo/vector-icons';

import styles from './styles';
import logoImg from '../../assets/logo.png';

export default function IncidentDetails() {
  const navigation = useNavigation();
  const message = 'Olá, APAD. Estou entrando em contato pois gostaria de ajudar no caso "HAHAAHHAHH" com o valor de R$ 120,00';

  function navigationBack() {
    navigation.goBack();
  }

  function sendMail() {
    mailComposer.composeAsync({
      subject: 'Herói do caso: HAHAHHAHAHH',
      recipients: ['vitor.ribas-@hotmail.com'],
      body: message,
    })
  }

  function sendWhatsapp() {
    
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />

        <TouchableOpacity onPress={navigationBack}>
          <Feather name="arrow-left" size={28} color="#e82041" />
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <Text style={[styles.incidentProperty, { marginTop: 0 }]}> ONG: </Text>
        <Text style={styles.incidentValue }> APD </Text>

        <Text style={styles.incidentProperty}> CASO: </Text>
        <Text style={styles.incidentValue }> Poluição sonora </Text>

        <Text style={styles.incidentProperty}> Valor: </Text>
        <Text style={styles.incidentValue }> R$ 120,00 </Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o dia!</Text>
        <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

        <Text style={styles.heroDescription}>Entre em contato</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={() => {}}>
            <Text style={styles.actionText}> Whatsapp </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.action} onPress={sendMail}>
            <Text style={styles.actionText}> Email </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
