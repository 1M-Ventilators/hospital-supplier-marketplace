import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Feedback.css';

const Feedback: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Contact the Developers</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Contact the Developers</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="This page is under construction. Please check back later." />
      </IonContent>
    </IonPage>
  );
};

export default Feedback;
