import React, { useState, useEffect } from 'react';
import { RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { 
    Container,
    HeaderArea,
    HeaderTitle,
    Scroller,
    LoadingIcon,
    ListArea,
    EmptyWarning
 } from './styles';
import UserItem from '../../components/UserItem';
import Api from '../../Api';

export default () => {
    const navigation = useNavigation();
    const [user, setUser] = useState([]);

    const handleLogoutClick = async () => {
        await Api.logout();
        navigation.reset({
            routes:[{name:'SignIn'}]
        });
    }

    useEffect(()=>{
        getUser();
    }, []);

    const getUser = async () => {
        setUser([{
            "avatar":"https://api.b7web.com.br/devbarber/media/avatars/2.png",
            "distance":0.691000000000108,
            "id":5,
            "uf":"Bahia",
            "city":"Vitória da Conquista",
            "phone":"77 90000-0000",
            "latitude":"-23.5530907",
            "longitude":"-46.6682795",
            "name":"Filipi",
             }]);
        
    }

    return (
        <Container>
            
            <HeaderArea>
                <HeaderTitle>Meu Perfil</HeaderTitle>
            </HeaderArea>

                <ListArea>
                    {user.map((item, k)=>(
                        <UserItem key={k} data={item} />
                    ))}
                </ListArea>

        </Container>
    );
}