import React from "react";
import { useHistory } from 'react-router-dom';
import { IonButton, IonHeader, IonIcon } from "@ionic/react";
import { returnUpBack, settingsOutline } from 'ionicons/icons';
import './Header.css';
import CluesLogo from '../static/cluesLogo';
import ProgressBar from "./ProgressBar";
import { HeaderProps } from "./headerTypings";

const Header: React.FC<HeaderProps> = ({leftType, midType, rightType, progress}) => {
    // console.log("Header: ", showBack);

    return (
        <IonHeader className="row jc-sb ai-c" id="app-header">
            <div id="app-header-1" className="grid-center">
                {leftType === "backButton" && <BackButton />}
            </div>
            <div id="app-header-2">
                
                {midType === "logo" && <CluesLogo />}
                {midType === "progressBar" && progress && <ProgressBar progress={progress} />}

            </div>
            <div id="app-header-3" className="grid-center">
                {rightType === "settings" && <SettingsButton />}
            </div>
        </IonHeader>
    );
};

const BackButton: React.FC = () => {

    return (
        <IonButton expand="block" fill="clear" routerLink="/home">
            <IonIcon icon={returnUpBack} />
        </IonButton>
    );
}

const SettingsButton: React.FC = () => {

    return (
        <IonButton expand="block" fill="clear" >
            <IonIcon icon={settingsOutline} />
        </IonButton>
    );
}


export default Header;