/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import store from './components/redux/store';
import Wrapper from './App';
const AppRedux=()=>(
    <Provider store={store}>
        <Wrapper></Wrapper>
    </Provider>
)

AppRegistry.registerComponent(appName, () => AppRedux);
