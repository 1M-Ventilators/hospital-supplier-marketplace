import React from 'react'
import { IonCard, IonCardContent, IonCardTitle, IonIcon } from '@ionic/react'
import { addCircleOutline } from 'ionicons/icons'
import './SupplierContact.css'

interface CardProps {
  onClick: (event: any) => any;
  supplier: any;
}

export default function SupplierContact(props: CardProps) {
  return (
    <IonCard onClick={props.onClick} className="SupplierContact-container">
      <IonCardContent>
        <IonCardTitle>{props.supplier && props.supplier.name}</IonCardTitle>
        <br />
        <br />
        <IonIcon icon={addCircleOutline} onClick={props.onClick} />
      </IonCardContent>
    </IonCard>
  );
}