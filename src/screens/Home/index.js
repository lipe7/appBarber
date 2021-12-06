import React, {useState} from 'react';
import { Platform } from 'react-native';
import { request, PERMISSIONS } from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';

import { 
    Container,
    Scroller,
    HeaderArea,
    HeaderTitle,
    LocationArea,
    LocationInput,
    LocationFinder,

    LoadingIcon
 } from './styles';

import MyLocationIcon from '../../assets/my_location.svg';

export default () => {

    const [locationText, setLocationText] = useState('');
    const [coords, setCoords] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleLocationFinder = async () => {
        setCoords(null);

        let result =  await request(
            Platform.OS === 'ios' ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
        );

        if(result == 'granted'){
            setLoading(true);
            Geolocation.getCurrentPosition((info) => {
                setCoords(info.cords);
                setLocationText('');
                setList([]);
            });
        }
    }


    return (
        <Container>
            <Scroller>
                <HeaderArea>
                    <HeaderTitle numberOfLines={2}>Encontre um barbeiro</HeaderTitle>
                </HeaderArea>

                <LocationArea>
                    <LocationInput
                        placeholder="Onde você está?"
                        placeholderTextColor="#FFFFFF"
                        value={locationText}
                        onChangeText={t=>setLocationText(t)}
                        />
                    <LocationFinder onPress={handleLocationFinder}>
                        <MyLocationIcon width="24" height="24" fill="#FFFFFF" />
                    </LocationFinder>
                </LocationArea>

                <LoadingIcon size='large' color='#FFF'/>

            </Scroller>
        </Container>
    );
}