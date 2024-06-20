import React from 'react';
import {
    Image,
    StatusBar,
    StyleSheet, TouchableOpacity,
    useColorScheme,
    DrawerLayoutAndroid,
    View,
    Text, GestureResponderEvent,
} from 'react-native';
import {NavigationContainer, useNavigation} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Home from "./component/Home.tsx";
import Profile from "./component/Profile.tsx";
import {StackNavigationProp} from "@react-navigation/stack";
import ListFavori from "./component/ListFavori.tsx";
import Actor from "./component/Actor.tsx";
import Film from "./component/Film.tsx";
import Connecxion from "./component/Connecxion.tsx";

type RootStackParamList = {
    Home: undefined;
    Profile: undefined;
    Favori: undefined;
    Actor: undefined;
    Film: undefined;
    Connecxion: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

const App = (): React.JSX.Element => {
    const drawer = React.useRef<DrawerLayoutAndroid>(null);
    return (
            <NavigationContainer>
                <DrawerLayoutAndroid
                    ref={drawer}
                    drawerWidth={300}
                    drawerPosition={'left'}
                    renderNavigationView={() => <NavigationView drawerRef={drawer} />}
                >
                    <HeaderBar onPress={() => drawer.current?.openDrawer()}/>

                    <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
                        <Stack.Screen name="Home" component={Home}/>
                        <Stack.Screen name="Profile" component={Profile}/>
                        <Stack.Screen name="Favori" component={ListFavori}/>
                        <Stack.Screen name="Actor" component={Actor}/>
                        <Stack.Screen name="Film" component={Film}/>
                        <Stack.Screen name="Connecxion" component={Connecxion} />
                    </Stack.Navigator>
                </DrawerLayoutAndroid>
            </NavigationContainer>

    );
}

// @ts-ignore
const NavigationView = ({drawerRef}) => {
    const navigation = useNavigation();
    return (
        <View style={[styles.container, styles.navigationContainer]}>
            <Image
                source={require('../CritiquOCine/asset/logo.png')}
                style={styles.logoSmall}
            />
            <TouchableOpacity onPress={() => {
                navigation.navigate('Favori');
                if (drawerRef) {
                    drawerRef.current?.closeDrawer();
                }
            }}>
                <View style={styles.col}>
                <Image
                    source={require('../CritiquOCine/asset/coeur.png')}
                    style={styles.icon}
                />
                <Text style={styles.paragraph}>Ma liste favori</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                navigation.navigate('Home');
                if (drawerRef) {
                    drawerRef.current?.closeDrawer();
                }
            }}>
                <View style={styles.col}>
                    <Image
                        source={require('../CritiquOCine/asset/maison.png')}
                        style={styles.icon}
                    />
                    <Text style={styles.paragraph}>Acceuil</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.col}>
                <Image
                    source={require('../CritiquOCine/asset/reglages.png')}
                    style={styles.icon}
                />
                <Text style={styles.paragraph}>Paramères</Text>
            </View>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Connecxion');
                if (drawerRef) {
                    drawerRef.current?.closeDrawer();
                }
            }}>
                <View style={styles.col}>
                    <Image
                        source={require('../CritiquOCine/asset/connexion-alt.png')}
                        style={styles.icon}
                    />
                    <Text style={styles.paragraph}>Déconnecter</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};
const HeaderBar = (props: { onPress: ((event: GestureResponderEvent) => void) | undefined; }) => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    return(
        <View style={styles.headerContainer}>
            <TouchableOpacity onPress={props.onPress}>
                <Image
                    source={require('../CritiquOCine/asset/liste.png')}
                    style={styles.icon}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image
                source={require('../CritiquOCine/asset/logoN.png')}
                style={styles.logo}
            />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Profile', {isConnected:true})}>
                <Image
                    source={require('../CritiquOCine/asset/tete-de-femme.png')}
                    style={styles.icon}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
    content: {
        flex: 1,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 100,
        backgroundColor: '#FFC1E7',
        padding: 20
    },
    logo: {
        marginTop:30,
        width: 250,
        resizeMode: 'contain'
    },
    picker: {
        flex: 0.6,
        height: 50,
    },
    navigationContainer: {
        backgroundColor: '#ecf0f1',
    },
    paragraph: {
        padding: 16,
        fontSize: 20,
    },
    icon: {
        width: 35,
        height: 35,
        resizeMode: 'contain'
    },
    col: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 15,
    },
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 2,
        flex: 1,
    },
    logoSmall : {
        height:240,
        width:240,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default App;
