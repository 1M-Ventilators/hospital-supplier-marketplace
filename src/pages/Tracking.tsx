import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tracking.css';

const Tracking: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Resource Tracking</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Resource Tracking</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Track and report resource shortages at your hospital. This page is under construction. Submit feedback to provide your opinion on how to best improve this." />
      </IonContent>
    </IonPage>
  );
};

export default Tracking;
