import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { listOutline, trainOutline, mailOutline } from 'ionicons/icons';
import Home from './pages/Home';
import Training from './pages/Training';
import Feedback from './pages/Feedback';

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

/* Theme variables */
import './theme/variables.css';

// Allow custom elements in react
defineCustomElements(window);

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/home" component={Home} exact={true} />
          <Route path="/training" component={Training} exact={true} />
          <Route path="/feedback" component={Feedback} />
          <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={listOutline} />
            <IonLabel>Suppliers</IonLabel>
          </IonTabButton>
          <IonTabButton tab="training" href="/training">
            <IonIcon icon={trainOutline} />
            <IonLabel>Training</IonLabel>
          </IonTabButton>
          <IonTabButton tab="feedback" href="/feedback">
            <IonIcon icon={mailOutline} />
            <IonLabel>Support</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
