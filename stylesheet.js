import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        fontSize: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },

    header: {
        fontSize: 50,
    },

    input: {
        width: 300,
        backgroundColor: '#eee',
        padding: 10,
        fontSize: 30,
        marginBottom: 20,
    },

    bodyText: {
        fontSize: 30,
        marginTop: 10,
        marginBottom: 10,
    },

    scrollView: {
        paddingTop: 50,
        paddingBottom: 50,
    },
});

export default styles;
