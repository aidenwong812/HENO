import { usePopupWidget } from "../../providers/PopupWidgetProvider"
import DraggableModal from "../Core/DraggableModal"
import { SCREENS } from "../../lib/screens"

const PopUpWindows = () => {
  const { openPopupStatus, openPopUp } = usePopupWidget()

  return (
    <>
      {Object.entries(SCREENS).map(
        ([id, screen]) =>
          openPopupStatus?.[screen.screenName] && (
            <DraggableModal
              href={screen.href}
              handleClose={() => openPopUp(screen.screenName)}
              isVisible={openPopupStatus[screen.screenName]}
              key={id}
            >
              {screen.screen}
            </DraggableModal>
          ),
      )}
    </>
  )
}

export default PopUpWindows
