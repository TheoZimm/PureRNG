import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    bgImageWrapper: {
        position: 'absolute',
        top: 0, bottom: 0, left: 0, right: 0
    },
    logpage:{
        flex:1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "stretch"
    },
    logcontent:{
        flex:2,
        flexDirection:'column',
        justifyContent:'center',
        alignItems: 'center',
    },

});