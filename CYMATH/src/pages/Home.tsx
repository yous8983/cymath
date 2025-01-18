// src/pages/Home.tsx
import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFooter, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonRouterLink, IonIcon } from '@ionic/react';
import { bookOutline, checkmarkDoneOutline } from 'ionicons/icons'; // Import des icônes
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage className="class-ion-page">
      <IonHeader>
        <IonToolbar className="class-ion-toolbar">
          <IonTitle>Mathématique Terminale C</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="class-ion-content">
        <IonHeader collapse="condense" className="class-ion-content-header">
          <IonToolbar className="class-ion-content-toolbar">
            <IonTitle size="large" className="class-ion-content-title">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="cards-container">
          {/* Card for Cours */}
          <IonRouterLink routerLink="/cours" className="card-link">
            <IonCard className="card-item card-cours">
              <IonCardHeader>
                <IonCardTitle>
                  <IonIcon icon={bookOutline} style={{ marginRight: '8px' }} /> Cours
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                Découvrez nos cours pour approfondir vos connaissances.
              </IonCardContent>
            </IonCard>
          </IonRouterLink>

          {/* Card for Exercices */}
          <IonRouterLink routerLink="/exercices" className="card-link">
            <IonCard className="card-item card-exercice">
              <IonCardHeader>
                <IonCardTitle>
                  <IonIcon icon={checkmarkDoneOutline} style={{ marginRight: '8px' }} /> Exercices
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                Mettez en pratique ce que vous avez appris avec nos exercices .
              </IonCardContent>
            </IonCard>
          </IonRouterLink>
        </div>

      </IonContent>

      <IonFooter>
        <IonToolbar className="class-ion-footer">
          <IonTitle>© 2025 CYMATH</IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Home;
