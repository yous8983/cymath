import React, { useState } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonAccordionGroup,
  IonAccordion,
  IonItem,
  IonLabel,
  IonList,
  IonText,
  IonButtons,
  IonButton,
  IonIcon,
  IonToggle,
  IonRouterLink
} from '@ionic/react';
import { exercicesList } from '../../data/exercices';
import './exercices.css';
import { home } from 'ionicons/icons';

const Exercices: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
  const [showCorrige, setShowCorrige] = useState<boolean>(false); // État pour le toggle

  const handleToggleChange = () => {
    setShowCorrige(!showCorrige);
  };

  return (
    <IonPage>
      <IonHeader className="exercices-header" >
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton routerLink="/home">
              <IonIcon icon={home} />
              <IonTitle>Exercices</IonTitle>
            </IonButton>
          </IonButtons>
          <IonButtons slot="end">
            <IonItem lines="none">
              <IonLabel
                color={showCorrige ? 'success' : 'primary'}
              >
                {showCorrige ? 'Corrigé' : 'Énoncé'}
              </IonLabel>
              <IonToggle
                checked={showCorrige}
                onIonChange={handleToggleChange}
              />
            </IonItem>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonAccordionGroup value={activeAccordion}>
          {exercicesList.map((exercice) => (
            <IonAccordion key={exercice.id} value={`domaine-${exercice.id}`}>
              <IonItem className="exercices-domaine-item" slot="header">
                <IonLabel>{exercice.domaine}</IonLabel>
              </IonItem>
              <div slot="content" className="exercices-domaine-div">
                <IonAccordionGroup value={activeAccordion}>
                  {exercice.chapitres.map((chapitre) => (
                    <IonAccordion key={chapitre.id} value={`chapitre-${chapitre.id}`}>
                      <IonItem className="exercices-titre-item" slot="header">
                        <IonLabel className="exercices-titre-label">{chapitre.titre}</IonLabel>
                      </IonItem>
                      <div slot="content" className="exercices-titre-div">
                        <IonList
                        className={showCorrige ? 'exercices-titre-corrige' : 'exercices-titre-enonce'}
                        >
                          {chapitre.descriptions.map((desc, index) => (
                            <IonItem
                              key={index}
                              className={`description-item ${desc.disponible ? 'description-active option-link ' : 'description-inactive'}`}
                            >
                             {desc.disponible ? (
  <IonRouterLink
    routerLink={`/description/${desc.titre}/${showCorrige ? 'Disponible' : 'Non disponible'}`}
  >
    <IonLabel>{desc.titre}</IonLabel>
  </IonRouterLink>
) : (
  <IonLabel>{desc.titre}</IonLabel>
)}

                                 
                              {/* <div className="options-container"> */}
                                {desc.disponible && (
                                
                                    // className="option-link"
                             
                                    <IonText slot="end" color={showCorrige ? 'success' : 'primary'}>
                                      {showCorrige ? 'Corrigé' : 'Énoncé'}
                                    </IonText>
                                    )}
                              {/* </div> */}
                              
                              <IonText className="availability-text" slot="end">
                                {desc.disponible ? 'Disponible' : 'Non disponible'}
                              </IonText>
                            </IonItem>
                          ))}
                        </IonList>
                      </div>
                    </IonAccordion>
                  ))}
                </IonAccordionGroup>
              </div>
            </IonAccordion>
          ))}
        </IonAccordionGroup>
      </IonContent>
    </IonPage>
  );
};

export default Exercices;
