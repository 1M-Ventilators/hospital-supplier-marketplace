import React from "react";
import { IonCard, IonCardTitle, IonCardContent} from '@ionic/react';
import "./SupplierCard.css";
import allSuppliers from '../../Models/suppliers/index';

function SupplierCard() {
  return (
    <div>
        {allSuppliers.map((supplier, index) => (
          <IonCard key={index} >
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
          ))}
    </div>
  )       
}

export default SupplierCard;
