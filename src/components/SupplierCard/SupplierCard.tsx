import React from "react";
import { IonCard, IonCardTitle, IonCardContent} from '@ionic/react';
import "./SupplierCard.css";
import allSuppliers from '../../Models/suppliers/index';

function SupplierCard() {
  return (
    <div>
        {allSuppliers.map((item, name) => (
          <IonCard key={name} >
            <IonCardContent>
              <IonCardTitle>{item.name}</IonCardTitle>
              <IonCardContent>
              <p>{item.address}</p>
              <p>{item.website}</p>
              <p>{item.numbers.main}</p>
              <p>{item.email}</p>
              </IonCardContent>
            </IonCardContent>
          </IonCard>
          ))}
    </div>
  )       
}

export default SupplierCard;
