import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import { useHistory } from "react-router-dom";
import './Home.css';

import Header from '../components/header/Header';

const Home: React.FC = () => {
  const history = useHistory();

  // console.log("Home");

  return (
    <IonPage>
      <IonContent fullscreen>
        <Header leftType="none" midType='logo' rightType='settings' />

        <IonContent fullscreen>
          <div id='home-page'>
            <div id='home-page-welcome'>
              Hello Luke
            </div>
            <div id='customize-quiz-card'>
            Generate Custom Practice Test
            Select from a variety of course concepts for your custom Practice Tests.
              <IonButton id='customize-quiz-button' fill="clear" style={{marginLeft: "auto"}} expand="block" onClick={() => history.push("/customize-quiz")}>
                Customize Quiz
              </IonButton>
            </div>
            <div id='suggested-review'>
              Suggested Review
              <IonButton style={{marginLeft: "auto"}} expand="block">
                Item1
              </IonButton>
              <IonButton style={{marginLeft: "auto"}} expand="block">
                Item2
              </IonButton>
              <IonButton style={{marginLeft: "auto"}} expand="block">
                Item3
              </IonButton>
            </div>

          </div>

        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Home;
