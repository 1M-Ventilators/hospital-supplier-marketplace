import React from 'react'
import { IonCard, IonCardContent, IonCardTitle, IonIcon } from '@ionic/react'
import { addCircleOutline } from 'ionicons/icons'
import './SupplierContact.css'

interface CardProps {
  onClick?: (event: any) => any;
  supplier: any;
}

export default function SupplierContact(props: CardProps) {
  return (
    <IonCard onClick={props.onClick} color="light">
      <IonCardContent className="SupplierContact-container">
        <br />
        <br />
        <br />
        <br />
        <br />
        <IonCardTitle>{props.supplier && props.supplier.name}</IonCardTitle>
        <br />
        <a href={`/supplier/${props.supplier && props.supplier.id}`}>
          <IonIcon size="large" icon={addCircleOutline} onClick={props.onClick} color="secondary"/>
        </a>
      </IonCardContent>
    </IonCard>
  );
}