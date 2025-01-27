import { Redirect, Route, useLocation } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Home from './pages/Home';
import Quiz from './pages/Quiz';

import { QuizProvider } from './context/store/quizStore';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
// import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {
  // console.log('APP');
  return (
      <IonApp>
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet animated={false}>
              
              <Route exact path="/home" component={Home} />

              {/* <Route exact path="/tab2" component={Tab2} /> */}
              <QuizProvider>
                <Route exact path="/quiz" component={Quiz} />
              </QuizProvider>

              <Route exact path="/">
                <Redirect to="/home" />
              </Route>

            </IonRouterOutlet>

            <TabBar />
          </IonTabs>
        </IonReactRouter>
      </IonApp>
  );
};

const TabBar: React.FC = () => {
  const location = useLocation();
  const tabBarLocations = ['/home', '/tab2', 'customize-quiz'];
  const showTabBar = tabBarLocations.includes(location.pathname);
  // console.log('SHOW TAB BAR:', showTabBar);
  return (
    <>
      {showTabBar && (
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/home">
          <IonIcon aria-hidden="true" icon={triangle} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        {/* <IonTabButton tab="tab2" href="/tab2">
          <IonIcon aria-hidden="true" icon={ellipse} />
          <IonLabel>Tab 2</IonLabel>
        </IonTabButton> */}
        <IonTabButton tab="quiz" href="/quiz">
          <IonIcon aria-hidden="true" icon={square} />
          <IonLabel>Quiz</IonLabel>
        </IonTabButton>
      </IonTabBar>
      )}
    </>
  )
};

export default App;
