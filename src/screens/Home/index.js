import React, {useState, useEffect} from 'react';
import { Platform, RefreshControl } from 'react-native';
import { request, PERMISSIONS } from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';
import Api from '../../Api';
import BarberItem from '../../components/BarberItem';

import { 
    Container,
    Scroller,
    HeaderArea,
    HeaderTitle,
    LocationArea,
    LocationInput,
    LocationFinder,
    LoadingIcon,
    ListArea
 } from './styles';

import MyLocationIcon from '../../assets/my_location.svg';

export default () => {

    const [locationText, setLocationText] = useState('');
    const [coords, setCoords] = useState(null);
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const handleLocationFinder = async () => {
        setCoords(null);

        let result =  await request(
            Platform.OS === 'ios' ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
        );

        if(result == 'granted'){
            setLoading(true);
            setLocationText('');
            setList([]);

            Geolocation.getCurrentPosition((info) => {
                setCoords(info.cords);
                getBarbers();
            });
        }
    }

    const getBarbers = async () => {
        setLoading(true);
        setList([]);

        lat = null;
        lng = null;

        if(coords){
            const lat = coords.latitude;
            const lng = coords.longitude;
        }

        let res = await Api.getBarbers(lat, lng, locationText);
        if(res.error == '') {
            if(res.loc) {
                setLocationText(res.loc);
            }
            setList(res.data);
            console.log('list');
        } else {
            alert('Erro: ' + res.error);
        }

        setLoading(false);
    }

    const onRefresh = () => {
        setRefreshing(false);
        getBarbers();
    }

    const handleLocationSearch = () => {
        setCoords();
        getBarbers();
    }

    useEffect(() => {
        getBarbers();
    }, []);

    return (
        <Container>
            <Scroller refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
                <HeaderArea>
                    <HeaderTitle numberOfLines={2}>Encontre um barbeiro</HeaderTitle>
                </HeaderArea>

                <LocationArea>
                    <LocationInput
                        placeholder="Onde você está?"
                        placeholderTextColor="#FFFFFF"
                        value={locationText}
                        onChangeText={t=>setLocationText(t)}
                        onEndEditing={handleLocationSearch}
                        />
                    <LocationFinder onPress={handleLocationFinder}>
                        <MyLocationIcon width="24" height="24" fill="#FFFFFF" />
                    </LocationFinder>
                </LocationArea>

                { loading
                    &&
                    <LoadingIcon size='large' color='#FFF'/>
                }

                <ListArea>
                    {list.map((value, key)=>(
                        <BarberItem key={key} data={value} />
                    ))}
                </ListArea>

            </Scroller>
        </Container>
    );
}