import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Supplier.css';
import SupplierCard from '../components/SupplierCard/SupplierCard'

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ventilator Manufacturers</IonTitle>
        </IonToolbar>
      </IonHeader>
        <IonContent color="warning">
          <SupplierCard />
        </IonContent>
    </IonPage>
  );
};
export default Home;
