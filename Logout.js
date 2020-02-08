import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-native';

function Logout(props) {
    return (
        <Button
            title='Logout'
            onPress={() => {
                props.dispatch({ type: 'LOGOUT' });
            }}
        />
    );
}

export default connect()(Logout);
