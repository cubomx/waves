import React from 'react';

import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


const ButtonNavigate = (props) => {
    
    return (
        <Button
            type='outline'
            onPress={action = () => alert('This is a button!')}
            icon={
                <Icon name ={props.name} size={props.size} color="gray" />
            }
    />
    );
}

export  {ButtonNavigate};

