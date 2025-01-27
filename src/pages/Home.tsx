import { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonModal } from '@ionic/react';
import { useHistory } from "react-router-dom";
import './Home.css';

import Header from '../components/header/Header';
import CustomizeQuiz from '../components/quiz/CustomizeQuiz';
import SuggestedReview from '../components/SuggestedReview';

const Home: React.FC = () => {
  // console.log("Home");
  const history = useHistory();
  
  // State bool for displaying customize quiz modal. Currently only needed in Home
  const [showCustomizeQuiz, setShowCustomizeQuiz] = useState(false);

  const handleShowCustomizeQuiz = (show: boolean) => {
    setShowCustomizeQuiz(show);
  }

  return (
    <IonPage>
      <IonContent fullscreen>
        <Header leftType="none" midType='logo' rightType='settings' />

          <div id='home-page'>
            <div id='home-page-welcome'>
              Hello Luke
            </div>
            <div id='customize-quiz-card'>
            Generate Custom Practice Test
            Select from a variety of course concepts for your custom Practice Tests.
              <IonButton id='customize-quiz-button' fill="clear" style={{marginLeft: "auto"}} expand="block" onClick={() => setShowCustomizeQuiz(true)}>
                Customize Quiz
              </IonButton>
            </div>

            <SuggestedReview />

          </div>

          <IonModal 
            isOpen={showCustomizeQuiz} 
            trigger='customize-quiz-button'
            onDidDismiss={() => handleShowCustomizeQuiz(false)}
            keepContentsMounted={true}
            // Breakpoints are currently buggy. Blurry when using them
            // initialBreakpoint={0.5}
            // breakpoints={[0, 0.5, 1]}
            >
            <IonContent className='ion-padding'>
              <IonHeader className='row' id="customize-quiz-header">
                <IonToolbar >
                  <IonTitle>Customize Quiz</IonTitle>
                </IonToolbar>
                <IonButton onClick={() => handleShowCustomizeQuiz(false)}>Close Modal</IonButton>
              </IonHeader>
              <CustomizeQuiz handleShowCustomizeQuiz={handleShowCustomizeQuiz} />
            </IonContent>
          </IonModal>

      </IonContent>
    </IonPage>
  );
};

export default Home;
