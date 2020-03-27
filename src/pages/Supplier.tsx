import React, { PureComponent } from 'react';
import './Supplier.css';
import { connect } from 'react-redux';
import SuppliersModel from '../Models/suppliers';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import SupplierCard from '../components/suppliers/SupplierCard'
import SupplierContact from '../components/suppliers/SupplierContact'
import suppliers from '../Models/suppliers/allSuppliers.json'

interface HomePageState {
  active: number | null;
  supplierLookup?: {[id: string]: any};
  rawSuppliers: any[];
}

export default class Home extends PureComponent<any, HomePageState> {
  state: HomePageState = {
    active: null,
    rawSuppliers: suppliers.data,
  }

  changeActiveSupplier = (idx: number | null) => {
    this.setState({ active: idx })
  }
  render() {
    const suppliers = this.state.rawSuppliers;

    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Ventilator Manufacturers</IonTitle>
          </IonToolbar>
        </IonHeader>
          <IonContent color="warning">
            {/* <SupplierCard /> */}
            {this.state.active === null && suppliers.length && suppliers.map(
              (eachSupplier: any, index: number) => (
                <SupplierContact 
                  supplier={eachSupplier} 
                  onClick={(_) => this.changeActiveSupplier(index)}
                  key={eachSupplier.id}
                />
              )
            )}
            {typeof this.state.active === 'number' &&
              <SupplierCard supplier={suppliers[this.state.active]} />
            }
          </IonContent>
      </IonPage>
    );
  }
};
