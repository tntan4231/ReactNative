import React from 'react';
import { createStackNavigator} from 'react-navigation';
import TodoScreen from '../screens/TodoScreen';
import TabBarIcon from '../components/TabBarIcon';
import { Platform } from 'react-native';
const TodoStack = createStackNavigator(
    {
      Todo: TodoScreen,
    },
  );
  
  TodoStack.navigationOptions = {
    tabBarLabel: 'TodoList',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={
          Platform.OS === 'ios'
            ? `ios-information-circle${focused ? '' : '-outline'}`
            : 'md-information-circle'
        }
      />
    ),
  };

  export default TodoStack;