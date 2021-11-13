import React, { useEffect } from 'react';
import { Container, LoadingIcon } from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/core';

import BarberLogo from '../../assets/barber.svg'

export default () => {

    const navigation = useNavigation();

    useEffect(() => {
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');

            token  ? navigation.navigate('SignUp') : navigation.navigate('SignIn');
        }

        checkToken();
    }, []);

    return(
        <Container>
            <BarberLogo
                width="100%" height="150"
            ></BarberLogo>
            <LoadingIcon
                size="large" color="#FFFFFF"
            ></LoadingIcon>
        </Container>
    );
}