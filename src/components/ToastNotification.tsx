import { IonToast } from '@ionic/react'
import { closeCircleOutline } from 'ionicons/icons'
import React from 'react'
interface ToastNotificationProps {
  isOpenToast: boolean
  alertMessage: string
  auth: boolean
  handleToast: () => void
}

const ToastNotification: React.FC<ToastNotificationProps> = ({
  isOpenToast,
  alertMessage,
  auth,
  handleToast,
}) => {
  return (
    <IonToast
      isOpen={isOpenToast}
      message={alertMessage}
      animated={true}
      icon={`https://unpkg.com/ionicons@7.1.0/dist/svg/${
        auth ? 'checkmark-circle-sharp' : 'alert-circle-sharp'
      }.svg`}
      color={`${auth ? 'toast' : 'toast-error'}`}
      onDidDismiss={handleToast}
      buttons={[
        {
          icon: closeCircleOutline,
          role: 'cancel',
          handler: handleToast,
        },
      ]}
      position="top"
      duration={3500}
      swipe-gesture="vertical"
      className={`${isOpenToast ? 'toast-enter' : 'toast-exit'} text-white`}
    ></IonToast>
  )
}

export default ToastNotification
