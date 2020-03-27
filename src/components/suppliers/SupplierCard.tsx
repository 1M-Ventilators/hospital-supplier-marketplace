import React from "react";
import { connect } from 'react-redux';
import { IonCard, IonCardTitle, IonCardContent, IonPage, IonHeader, IonContent, IonToolbar, IonTitle, IonBackButton, IonButtons} from '@ionic/react';
import './SupplierCard.css';

interface SupplierCardProps {
  match: any;
  history: any;
  supplierLookup: any;
}

function SupplierCard(props: SupplierCardProps) {
  const { match, history, supplierLookup } = props;
  let supplier: any;
  let supplierId: string = match && match.params && match.params.id;
  if (supplierId && supplierId in supplierLookup) {
    supplier = supplierLookup[supplierId];
  } else {
    console.warn('Supplier ID not found: ', supplierId);
    console.info('redirecting...')
    history.push('/');
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="secondary">
          <IonButtons slot="start">
            <IonBackButton color="light" defaultHref="/supplier" />
          </IonButtons>
          <IonTitle color="light">{supplier && supplier.name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardContent>
            <IonCardTitle>{supplier.name}</IonCardTitle>
            <IonCardContent>
            <p><strong>Phone Number:</strong> {supplier.numbers.main}</p>
            <p><strong>Email:</strong> {supplier.email}</p>
            <p><strong>Website:</strong> <a target="blank" href={supplier.website}>{supplier.website}</a></p>
            <p><strong>Address:</strong> {supplier.address}</p>
            </IonCardContent>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
}

const mapStateToProps = (globalState) => {
  return {
    supplierLookup: globalState.suppliers.all
  };
}
export default connect(mapStateToProps)(SupplierCard);
