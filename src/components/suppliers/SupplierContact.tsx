import React from 'react'
import { IonCard, IonCardContent, IonCardTitle, IonIcon, IonButton, IonText } from '@ionic/react'
import { addCircleOutline, call } from 'ionicons/icons'
import './SupplierContact.css'

interface CardProps {
  onClick?: (event: any) => any;
  supplier: any;
}

export default function SupplierContact(props: CardProps) {
  return (
    <IonCard onClick={props.onClick} color="light" className="SupplierContact-container">
      <IonCardContent>
        <br />
        <br />
        <br />
        <br />
        <br />
        <IonCardTitle>{props.supplier && props.supplier.name}</IonCardTitle>
        <br />
        <div className="SupplierContact-ctas">
          <a href={`/supplier/${props.supplier && props.supplier.id}`}>
            <div className="SupplierContact-details">
              <IonIcon size="large" icon={addCircleOutline} onClick={props.onClick} color="secondary"/>
              <IonText color="secondary">Details</IonText>
            </div>
          </a>
          <a href={
            props.supplier && props.supplier.numbers && props.supplier.numbers.main ?
            `tel:${props.supplier.numbers.main}` :
            '#'
          }>
            <IonButton shape="round" size="large" className="SupplierContact-call">
              <IonIcon icon={call} color="dark" slot="icon-only"/>
            </IonButton>
          </a>
        </div>
      </IonCardContent>
    </IonCard>
  );
}