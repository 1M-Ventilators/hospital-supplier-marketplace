import React, { PureComponent } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Supplier.css';
import SupplierCard from '../components/SupplierCard/SupplierCard'
import SupplierContact from '../components/SupplierContact'
import suppliers from '../Models/suppliers/allSuppliers.json'

interface HomePageState {
  active: string | null;
  supplierLookup?: {[id: string]: any};
}

export default class Home extends PureComponent<any, HomePageState> {
  state: HomePageState = {
    active: null
  }

  componentDidMount() {
    if (suppliers && suppliers.data && suppliers.data.length) {
      const supplierMap = suppliers.data.reduce(
        (accumulator, item) => {
          if (item.id) {
            accumulator[item.id] = item;
          }
          return accumulator;
        }, {}
      );
      this.setState({
        supplierLookup: supplierMap
      })
    }
  }

  changeActiveSupplier = (id: string | null) => {
    this.setState({ active: id })
  }
  render() {
    const supplierIds: string[] = this.state.supplierLookup ?
      Object.keys(this.state.supplierLookup!) : 
      [];

    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Ventilator Manufacturers</IonTitle>
          </IonToolbar>
        </IonHeader>
          <IonContent color="warning">
            {/* <SupplierCard /> */}
            {supplierIds.length && supplierIds.map(
              (id: string) => (
                <SupplierContact 
                  supplier={this.state.supplierLookup && this.state.supplierLookup[id]} 
                  onClick={this.changeActiveSupplier}
                  key={id}
                />
              )
            )}
          </IonContent>
      </IonPage>
    );
  }
};
