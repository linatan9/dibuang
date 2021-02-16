import React, {useRef, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { WelcomePage } from '../screens/WelcomePage/WelcomePage';
import LoginPage  from '../screens/LoginPage';
import OtpPage from '../screens/OtpPage';
import SignUpPage from '../screens/SignUpPage';
import HomePage from '../screens/HomePage';
import RequestsPage from '../screens/RequestsPage';
import ProfilePage from '../screens/ProfilePage';
import {images,colors, icons} from '../constants';
import CollectionRequestPage from '../screens/CollectionRequestPage';
import ManageAddressPage from '../screens/ManageAddressPage';
import WareHousePage from '../screens/WareHousePage';
import OrderDetailsPage from '../screens/OrderDetailsPage';
import WithdrawalPage from '../screens/WithdrawalPage';
import WithdrawHistoryListPage from '../screens/WithdrawHistoryListPage';
import BannersListPage from '../screens/BannersListPage';




const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const tabBarIconColors = (props) => {
  return {
    color: props.focused ? colors.mainMediumGreen : colors.inActiveTabIconColor
  }
};

const CallCarStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomePage" component={HomePage} options={{headerLeft: () => null, headerShown: false}}  />
      <Stack.Screen name="CollectionRequestPage" component={CollectionRequestPage} options={{headerLeft: () => null, headerShown: false}} />
      <Stack.Screen name="ManageAddressPage" component={ManageAddressPage} options={{headerLeft: () => null, headerShown: false}} />
      <Stack.Screen name="WareHousePage" component={WareHousePage} options={{headerLeft: () => null, headerShown: false}} />
      <Stack.Screen name="OrderDetailsPage" component={OrderDetailsPage} options={{headerLeft: () => null, headerShown: false}} />
      <Stack.Screen name="WithdrawalPage" component={WithdrawalPage} options={{headerLeft: () => null, headerShown: false}} />
      <Stack.Screen name="WithdrawHistoryListPage" component={WithdrawHistoryListPage} options={{headerLeft: () => null, headerShown: false}} />
    </Stack.Navigator>
  )
};
const getIsTabBarVisible = (navigation) => {
  const routeName = getFocusedRouteNameFromRoute(navigation.route);
  if (routeName === 'CollectionRequestPage'
    || routeName === 'ManageAddressPage'
    || routeName === 'WareHousePage'
    || routeName === 'OrderDetailsPage'
    || routeName === 'WithdrawalPage'
    || routeName === 'WithdrawHistoryListPage'
  ) {
    return false;
  }
  return true;
};

const TabAppNavigation = () => (
  <Tab.Navigator
    screenOptions={(navigation) => ({
      tabBarVisible: getIsTabBarVisible(navigation),
    })}
    tabBarOptions={{
      activeTintColor: colors.mainMediumGreen,
      inactiveTintColor: 'gray',
    }}
  >
    <Tab.Screen name="Beranda" component={CallCarStack} options={{tabBarIcon: (props) => <icons.HomeTabIcon style={tabBarIconColors(props)}/>}}/>
    <Tab.Screen name="Pesanan" component={RequestsPage} options={{tabBarIcon: (props) => <icons.RequestsTabIcon style={tabBarIconColors(props)}/>}}/>
    <Tab.Screen name="Akun" component={ProfilePage} options={{tabBarIcon: (props) => <icons.ProfileTabIcon style={tabBarIconColors(props)}/>}}/>
  </Tab.Navigator>
);

const AppNavigator = (props) => {
  const navigationRef = useRef(null);
  useEffect(() => {
    if(navigationRef && navigationRef.current) {
      props.onGetNavigationRef(navigationRef.current);
    }
  }, []);
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomePage} options={{headerLeft: () => null, headerShown: false}} />
        <Stack.Screen name="Login" component={LoginPage} options={{headerLeft: () => null, headerShown: false}} />
        <Stack.Screen name="OtpPage" component={OtpPage} options={{headerLeft: () => null, headerShown: false}} />
        <Stack.Screen name="SignUpPage" component={SignUpPage} options={{headerLeft: () => null, headerShown: false}} />
        <Stack.Screen name="MainTabs" component={TabAppNavigation} options={{headerLeft: () => null, headerShown: false}} />
        <Stack.Screen name="BannersListPage" component={BannersListPage} options={{headerLeft: () => null, headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};


const styles = StyleSheet.create({
  needUpdateIcon: {
    position: 'absolute',
    top: -10,
    right: -10,
    backgroundColor: 'red',
    width: 10,
    height: 10,
    borderRadius: 5,
  },
});

export default AppNavigator;
