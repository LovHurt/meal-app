import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator // buraya vererek tüm screenlerimizde bu stilleri vermiş olduk
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: "All Categories",
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            // options={({route, navigation}) => {
            //   const catId = route.params.categoryId
            //   return {
            //     title: catId,
            //   }
            // }}
          />
          <Stack.Screen name= "MealDetail" component={MealDetailScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const style = StyleSheet.create({
  container: {},
});
