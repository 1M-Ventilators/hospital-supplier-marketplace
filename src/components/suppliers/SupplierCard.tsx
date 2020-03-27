import React from "react";
import { connect } from 'react-redux';
import { IonCard, IonCardContent, IonPage, IonHeader, IonContent, IonToolbar, IonTitle, IonBackButton, IonButtons, IonButton, IonIcon} from '@ionic/react';
import {  call, chevronForward, chevronBack } from 'ionicons/icons'
import './SupplierCard.css';

interface SupplierCardProps {
  onClick?: (event: any) => any;
  match: any;
  history: any;
  supplierLookup: any;

}

function SupplierCard(props: SupplierCardProps) {
  const {  match, history, supplierLookup } = props;
  console.log(props)

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
        <IonCard className='CardDetailView'>
            <IonCardContent>
            <p className='supplierName col'>{supplier.name}</p>
            <hr />
            <p className='col'>{supplier.address}</p>
            <hr/>
            <p className='col'><a target="blank" href={supplier.website}>{supplier.website}</a></p>
            <hr/>
            <p className='col'>{supplier.numbers.main}</p>
            <hr/>
            <p className='col'>{supplier.email}</p>
            </IonCardContent>
        </IonCard>
        <IonToolbar color="secondary">
          <div className='supplierCard-footer'>
            <IonButtons onClick={props.onClick} className="SupplierCard-Prev">
                <IonIcon size="large" icon={chevronBack} color="light" slot="icon-only"/>
              </IonButtons>
              <a href={
                supplier && supplier.numbers && supplier.numbers.main ?
                `tel:${supplier.numbers.main}` :
                '#'
              }>
              <IonButton shape="round" className="SupplierContact-call">
                <IonIcon  size="large" icon={call} color="light" slot="icon-only"/>
              </IonButton>
            </a>
            <IonButtons onClick={props.onClick} className="SupplierCard-Next">
                <IonIcon  size="large" icon={chevronForward} color="light" slot="icon-only"/>
            </IonButtons>
          </div>
        </IonToolbar> 
      </IonContent>
    </IonPage>
  );
}

const mapStateToProps = (globalState) => {
  console.log(globalState)
  return {
    supplierLookup: globalState.suppliers.all,
  };

}
export default connect(mapStateToProps)(SupplierCard);
