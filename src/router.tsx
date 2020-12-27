import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const AppStack = createStackNavigator();

import Home from "./pages/Home";
import NewTransaction from "./pages/NewTransaction";

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode="none"
      >
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="NewTransaction" component={NewTransaction} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;