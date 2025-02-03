
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
  IonRouterLink
} from '@ionic/react';
import { coursList } from '../../data/cours';
import './cours.css';
import { home } from 'ionicons/icons';

const Cours: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  return (
    <IonPage>
      <IonHeader className="cours-header">
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton routerLink="/home">
              <IonIcon  icon={home} />
              <IonTitle >Cours</IonTitle>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="cours-content">
        <IonAccordionGroup value={activeAccordion} >
          {coursList.map((cours) => (
            <IonAccordion  key={cours.id} value={`domaine-${cours.id}`}>
              <IonItem className="cours-domaine-item" slot="header">
                <IonLabel >{cours.domaine}</IonLabel>
              </IonItem>
              <div slot="content" className="cours-domaine-div">
                <IonAccordionGroup value={activeAccordion}>
                  {cours.chapitres.map((chapitre) => (
                    <IonAccordion key={chapitre.id} value={`chapitre-${chapitre.id}`}>
                      <IonItem className="cours-titre-item"  slot="header">
                        <IonLabel className="cours-titre-label">{chapitre.titre}</IonLabel>
                      </IonItem>
                      <div slot="content" className="cours-titre-div">
                        <IonList>
                      
   {chapitre.descriptions.map((desc, index) => (
  <IonRouterLink key={index} routerLink={`/description/${desc.id}`}>
    <IonItem
      className={`description-item ${desc.disponible ? 'description-active' : 'description-inactive'}`}
    >
      <IonLabel className="cours-desc">{desc.titre}</IonLabel>
      <IonText className="cours-desc" slot="end" color={desc.disponible ? 'bold' : ''}>
        {desc.disponible ? 'Disponible' : 'Non disponible'}
      </IonText>
    </IonItem>
  </IonRouterLink>


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

export default Cours;


