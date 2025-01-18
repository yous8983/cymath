// src/pages/Loading.tsx
import React, { useEffect } from 'react';
import { IonPage, IonContent, IonSpinner, IonHeader, IonToolbar, IonTitle, IonFooter } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { SplashScreen } from '@capacitor/splash-screen';
import './loading.css';

const Loading: React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    const timer = setTimeout(() => {
      SplashScreen.hide();
      history.push('/home');
    }, 7000);

    return () => clearTimeout(timer);
  }, [history]);

  return (
    <IonPage>
      <IonHeader > 
        <IonToolbar className="class-ion-toolbar-loading">
          <IonTitle className="class-ion-toolbar-title" >Chargement</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="class-ion-content-loading" fullscreen>
        <IonSpinner name="crescent" className="class-ion-content-spinner"/>
        <div className="loading-text">
          <p>Le programme de Mathématique pour la classe de Terminale C.</p>
          <p>Vous trouverez des Cours et des Exercices ainsi que leurs corrigés !</p>
        </div>
      </IonContent>

      <IonFooter>
        <IonToolbar className="class-ion-footer-loading">
          <IonTitle>© 2025 CYMATH</IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Loading;
