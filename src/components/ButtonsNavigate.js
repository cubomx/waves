import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const SButton = (props) => {
    return (
        <Button
            type='outline'
            onPress={props.func}
            icon={
                <Icon name ={props.name} size={props.size} color="gray" />
            }
    />
    );
}

const ButtonNavigate = (props) => {
    const navigation = useNavigation();
    const handleGoTo = () => navigation.navigate(props.place);

    return (
        <Button
            type='outline'
            onPress={handleGoTo}
            icon={
                <Icon name ={props.name} size={props.size} color="gray" />
            }
    />
    );
}

export  {ButtonNavigate, SButton};

