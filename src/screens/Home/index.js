import React from 'react';
import { Text } from 'react-native';
import { 
    Container,
    Scroller,
    HeaderArea,
    HeaderTitle,
    LocationArea,
    LocationInput,
    LocationFinder
 } from './styles';

import MyLocationIcon from '../../assets/my_location.svg';

export default () => {
    return (
        <Container>
            <Scroller>
                <HeaderArea>
                    <HeaderTitle numberOfLines={2}>Encontre um barbeiro</HeaderTitle>
                </HeaderArea>

                <LocationArea>
                    <LocationInput
                        placeholder="Onde você está?"
                        placeholderTextColor="#FFFFFF"/>
                    <LocationFinder >
                        <MyLocationIcon width="24" height="24" fill="#FFFFFF" />
                    </LocationFinder>
                </LocationArea>

            </Scroller>
        </Container>
    );
}