import React from "react";
import { connect } from 'react-redux';
import { IonCard, IonCardContent, IonPage, IonHeader, IonContent, IonToolbar, IonTitle, IonBackButton, IonButtons, IonButton, IonIcon} from '@ionic/react';
import {  call, chevronForward, chevronBack } from 'ionicons/icons';
import './SupplierCard.css';

interface SupplierCardProps {
  onClick?: (event: any) => any;
  index: any;
  match: any;
  history: any;
  supplierLookup: any;
  prevId:any;
  nextId: any;
}



function SupplierCard(props: SupplierCardProps) {
  const {  index, match, history, supplierLookup, prevId, nextId} = props;
  console.log(props);
  console.log(index);
  console.log(prevId);
  console.log(nextId);
  
  let supplier: any;
  let supplierId: string = match && match.params && match.params.id;

  if (supplierId && supplierId in supplierLookup) {
    supplier = supplierLookup[supplierId];
  } else {
    console.warn('Supplier ID not found: ', supplierId);
    console.info('redirecting...')
    history.push('/');
  }
//need to optimize this- working on figuring out how to dispatch these functions and 
//return supplier, in order to re-render Supplier card
  function increment(){
    console.log(nextId);
    if(nextId !== undefined){
      supplier = supplierLookup[nextId]
      // return supplier
      history.push('/supplier/'+ nextId)
    }
  }

  function decrement(){
    console.log(prevId);
    if(prevId !== undefined){
      supplier = supplierLookup[prevId]
      // return supplier
      history.push('/supplier/'+ prevId)
    }
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
            <IonButtons onClick={decrement} className="SupplierCard-Prev">
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
            <IonButtons onClick={increment} className="SupplierCard-Next">
                <IonIcon  size="large" icon={chevronForward} color="light" slot="icon-only"/>
            </IonButtons>
          </div>
        </IonToolbar> 
      </IonContent>
    </IonPage>
  );
}

const mapStateToProps = (globalState, ownProps) => {
  const supplierId = ownProps.match && ownProps.match.params && ownProps.match.params.id;
  const orderedSuppliers = globalState.suppliers.ordered;
  console.log(ownProps)
  const supplierIndex = orderedSuppliers.indexOf(supplierId);
  // if supplierIndex = 0 remove the left arrow anf if supplierIndex orderedSuppliers.length
  return {
    index: supplierIndex,
    supplierLookup: globalState.suppliers.all,
    prevId: orderedSuppliers[supplierIndex - 1],
    nextId: orderedSuppliers[supplierIndex + 1 ]
  };
}

export default connect(mapStateToProps)(SupplierCard);
