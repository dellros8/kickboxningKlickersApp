import { createStackNavigator, createAppContainer } from "react-navigation";
import React from 'react';
import Protokoll from './components/Protokoll';
import Klickers from './components/Klickers';

import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { protokollReducer }  from './redux/reducers/protokoll-reducer';
import { klickersReducer } from './redux/reducers/klickers-reducer';

const allReducers = combineReducers({
  protokoll: protokollReducer,
  klickers: klickersReducer
})

const store = createStore(
  allReducers,
  {
    klickers: {
      blue: {
        klicker: 0,
        penalty: 0
      },
      red: {
        klicker: 0,
        penalty: 0
      },
      rond: 1,
    },
    protokoll: {
      red: {
        winner: false,
        total: "",
        klickersTotal: "",
        roundOne: {
          klickers: "",
          points: "",
          penalty: "",
          sum: "",
        },
        roundTwo: {
          klickers: "",
          points: "",
          penalty: "",
          sum: "",
        },
        roundThree: {
          klickers: "",
          points: "",
          penalty: "",
          sum: "",
        },
      },
      blue: {
        winner: false,
        total: "",
        klickersTotal: "",
        roundOne: {
          klickers: "",
          points: "",
          penalty: "",
          sum: "",
        },
        roundTwo: {
          klickers: "",
          points: "",
          penalty: "",
          sum: "",
        },
        roundThree: {
          klickers: "",
          points: "",
          penalty: "",
          sum: "",
        },
      }
    }
  }
)



const Routes = createStackNavigator({
  Protokoll: {
    screen: Protokoll,
  },
  Klickers: {
    screen: Klickers,
  }
},
  {
    initialRouteName: 'Protokoll',
    mode: 'modal',
  },
);

let Navigation = createAppContainer(Routes);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}