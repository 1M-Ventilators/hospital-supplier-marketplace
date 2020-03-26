import React from 'react'
import { IonCard, IonCardContent, IonCardTitle, IonIcon } from '@ionic/react'
import { addCircleOutline } from 'ionicons/icons'

interface CardProps {
  onClick: (id: string) => any;
  supplier: any;
}

export default function SupplierContact(props: CardProps) {
  const selectSupplier = (event: any) => {
    event.preventDefault();
    props.onClick(props.supplier && props.supplier.id);
  }
  return (
    <IonCard onClick={selectSupplier}>
      <IonCardContent>
        <IonCardTitle>{props.supplier && props.supplier.name}</IonCardTitle>
        <br />
        <br />
        <IonIcon icon={addCircleOutline} onClick={selectSupplier} />
      </IonCardContent>
    </IonCard>
  );
}