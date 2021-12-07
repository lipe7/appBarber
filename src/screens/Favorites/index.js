import React, { useState, useEffect } from 'react';
import { RefreshControl } from 'react-native';
import {
    Container,
    HeaderArea,
    HeaderTitle,
    Scroller,
    LoadingIcon,
    ListArea,
    EmptyWarning
} from './styles';

import BarberItem from '../../components/BarberItem';
import Api from '../../Api';

export default () => {

    const [loading, setLoading] = useState(false);
    const [list, setList] = useState([]);

    useEffect(()=>{
        getFavorites();
    }, []);

    const getFavorites = async () => {
        setLoading(true);
        setList([]);

        let res = await Api.getFavorites();
        if(res.error == '') {
            setList([{
                "avatar":"https://api.b7web.com.br/devbarber/media/avatars/2.png",
                "distance":0.691000000000108,
                "id":5,
                "latitude":"-23.5530907",
                "longitude":"-46.6682795",
                "name":"Pedro Diniz",
                "stars":4.5
             }]);
        } else {
            alert("Erro: "+res.error);
        }

        setLoading(false);
    }

    return (
        <Container>
            
            <HeaderArea>
                <HeaderTitle>Favoritos</HeaderTitle>
            </HeaderArea>

            <Scroller refreshControl={
                <RefreshControl refreshing={loading} onRefresh={getFavorites} />
            }>

                {!loading && list.length === 0 &&
                    <EmptyWarning>Não há favoritos.</EmptyWarning>
                }

                <ListArea>
                    {list.map((item, k)=>(
                        <BarberItem key={k} data={item} />
                    ))}
                </ListArea>
            </Scroller>

        </Container>
    );
}