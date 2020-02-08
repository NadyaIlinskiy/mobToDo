import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

function AuthViewer(props) {
    let show = props.token !== '';
    if (props.reverse) show = !show;

    if (show) return <View>{props.children}</View>;
    else return <View></View>;
}

const mSTP = state => ({
    token: state.auth.token,
});

export default connect(mSTP)(AuthViewer);
