import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import TaskList from './TaskList';
import Login from './Login';
import Logout from './Logout';
import AuthViewer from './AuthViewer';
import styles from './stylesheet.js';

export default function App() {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <AuthViewer reverse={true}>
                    <Login />
                </AuthViewer>

                <AuthViewer>
                    <ScrollView style={styles.scrollView}>
                        <Logout />
                        <TaskList />
                    </ScrollView>
                </AuthViewer>
            </View>
        </Provider>
    );
}
