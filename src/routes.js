import { createStackNavigator, createAppContainer } from "react-navigation";

/**/
// import Maino from "./pages/maino";
// import Product from "./pages/product";
/**/

import MainPage from "./pages/mainpage";
import EnviarCod from "./pages/enviarcod";
import ValidarCod from "./pages/validarcod";
import Cadastro from './pages/cadastro';

import Colors from "./config/Colors"

const MainNavigator = createStackNavigator(
  {
    MainPage,
    EnviarCod,
    ValidarCod,
    Cadastro
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
          backgroundColor: Colors.Dark,
      },
      headerTintColor: '#fff'
    }
  }
);

const App = createAppContainer(MainNavigator);

export default App;
// import MainPage from "./pages/mainpage";
// export default MainPage;
