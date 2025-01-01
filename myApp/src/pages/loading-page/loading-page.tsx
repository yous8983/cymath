import React, { useEffect } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSpinner,
  IonFooter,
} from "@ionic/react";
import { useHistory } from "react-router-dom";
import "./loading-page.css";

const LoadingPage: React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    // Redirige vers /home après 3 secondes
    const timer = setTimeout(() => {
      history.push("/home");
    }, 10000);

    return () => clearTimeout(timer); // Cleanup le timer si le composant est démonté avant la fin du délai
  }, [history]);

  return (
    <IonPage className="container">
      <IonHeader>
        <IonToolbar color="medium">
          <IonTitle>Loading...</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding loading-content">
        <div className="spinner-container">
          <IonSpinner name="crescent" />
        </div>
        <div className="custom-content">
          TERMINALE C
          <p>
            Cours de Mathématiques, Exercices et Solutions pour le niveau
            Terminal C
          </p>
        </div>
      </IonContent>
      <IonFooter>
        <IonToolbar color="medium">
          <IonTitle className="footer-text">Cymath</IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default LoadingPage;
