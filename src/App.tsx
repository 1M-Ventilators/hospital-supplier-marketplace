import React from 'react';
import { Provider } from 'react-redux'
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
import { constructOutline, mailOutline } from 'ionicons/icons';
import Supplier from './pages/Supplier';
import Training from './pages/Training';
import Feedback from './pages/Feedback';
import Tracking from './pages/Tracking';
import SupplierCard from './components/suppliers/SupplierCard';
import store from './Models/store';

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
    <Provider store={store}>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/supplier" component={Supplier} exact={true} />
            <Route path="/supplier/:id" component={SupplierCard} />
            <Route path="/training" component={Training} exact={true} />
            <Route path="/tracking" component={Tracking} exact={true} />
            <Route path="/feedback" component={Feedback} exact={true} />
            <Route path="/" render={() => <Redirect to="/supplier" />} exact={true} />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="supplier" href="/supplier">
              <IonIcon icon={constructOutline} />
              <IonLabel>Manufacturers</IonLabel>
            </IonTabButton>
            {/* <IonTabButton tab="training" href="/training">
              <IonIcon icon={trainOutline} />
              <IonLabel>Training</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tracking" href="/tracking">
              <IonIcon icon={hourglassOutline} />
              <IonLabel>Resource Tracking</IonLabel>
            </IonTabButton> */}
            <IonTabButton tab="feedback" href="/feedback">
              <IonIcon icon={mailOutline} />
              <IonLabel>Support</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </Provider>
  </IonApp>
);

export default App;
