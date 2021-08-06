import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonInput,
  IonItem,
  IonLabel,
  IonDatetime,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from '@ionic/react';
import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>BioRhythms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position='floating'>Name:</IonLabel>
        <IonInput value={name}
        onIonChange={(event)=> setName(event.detail.value)}/>
        </IonItem>
        <IonItem>
          <IonLabel position='floating'>Date of Birth:</IonLabel>
        <IonDatetime displayFormat='D MMM YYYY' value={birthDate}
        onIonChange={(event)=> setBirthDate(event.detail.value)}/>
        </IonItem>
        <IonCard>
          <IonCardHeader className='ion-text-center'>
            <IonCardTitle>Your Biorhythm Today:</IonCardTitle>
            <IonCardTitle>5-Jan-2021</IonCardTitle>
          </IonCardHeader>
          <IonCardContent className='ion-text-center'>
          
            <p>Physical: 83%</p>
            <p>Emotional: 83%</p>
            <p>Mental: 83%</p>
          </IonCardContent>
        </IonCard>
        <p>Name: {name}</p>
        <p>Date of Birth: {birthDate}</p>
      </IonContent>
    </IonApp>
  );
}

export default App;
