import React, { PureComponent } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon } from '@ionic/react';
import './Supplier.css';
import { connect } from 'react-redux';
import supplierModel from '../Models/suppliers';
import SupplierCard from '../components/suppliers/SupplierCard'
import SupplierContact from '../components/suppliers/SupplierContact'

interface HomePageProps {
  suppliers: any[];
  history: any; // react router
}

class Home extends PureComponent<HomePageProps> {
  render() {
    const { suppliers } = this.props;

    return (
      <IonPage>
        <IonHeader>
          <IonToolbar color="secondary">
            {/* {this.renderBackButton()} */}
            <IonTitle className="SupplierPage-title" color="light">Ventilator Manufacturers</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          {/* <SupplierCard /> */}
          {suppliers && suppliers.map(
            (eachSupplier: any) => (
              <SupplierContact
                supplier={eachSupplier}
                key={eachSupplier.id}
              />
            )
          )}
          {/* {typeof this.state.active === 'number' &&
            <SupplierCard supplier={suppliers[this.state.active]} />
          } */}
        </IonContent>
      </IonPage >
    );
  }
  // renderBackButton() {
  //   return this.state.active !== null && (
  //     <IonButtons slot="start">
  //       <IonButton color="primary" onClick={(_) => this.changeActiveSupplier(null)}>
  //         <IonIcon icon="chevron-back" /> Back
  //       </IonButton>
  //     </IonButtons>
  //   )
  // }
};

// creates a single prop (list of suppliers with index) to add to component 
const mapStateToProps = (state: any) => ({
  suppliers: state.suppliers && state.suppliers.ordered.map(
    (supplierId: string, index: number) => {
      const supplierLookup = state.suppliers.all;
      if (supplierId in supplierLookup) {
        const supplier = supplierLookup[supplierId]
        return {
          ...supplier,
          index
        };
      } else {
        console.warn('Supplier not found in store: ', supplierId);
        return null;
      }
    }
  ),
});
export default connect(mapStateToProps)(Home);
