
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Hello from "./src/components/hello"

const AppNavigator = createStackNavigator({
  Hello: {
    screen: Hello,
  },
});

export default createAppContainer(AppNavigator);