import { Tooltip } from "react-tooltip";
import { Trash2 } from "lucide-react";
import scss from "./ButtonUniversal.module.scss";

type ButtonType = "button" | "submit" | "reset" | undefined;

interface ButtonUniversalProps {
  buttonType?: ButtonType;
  buttonName: string;
  buttonText: string;
  buttonIcon?: React.ReactNode;
  buttonDisabled?: boolean;
  buttonClick?: React.MouseEventHandler<HTMLButtonElement>;
  classNameButtonContainer?: string;
  toolTipId?: string;
  toolTipContent?: string;
  toolTipClassName?: string;
}

export const ButtonUniversal: React.FC<ButtonUniversalProps> = ({
  buttonType = "button",
  buttonName,
  buttonText,
  buttonIcon = <Trash2 />,
  buttonDisabled = false,
  buttonClick,
  classNameButtonContainer = "",
  toolTipId,
  toolTipContent,
  toolTipClassName,
}) => {
  const containerClassName =
    `${classNameButtonContainer} ${scss["button-universal-container"]}`.trim();

  return (
    <button
      className={containerClassName}
      name={buttonName}
      id={buttonName}
      type={buttonType}
      onClick={buttonClick}
      disabled={buttonDisabled}
      data-tooltip-id={toolTipId}
      data-tooltip-html={toolTipContent ? toolTipContent : undefined}
    >
      <span className={scss["text"]}>{buttonText}</span>
      <span className={scss["icon-container"]}>{buttonIcon}</span>
      <Tooltip
        id={toolTipId}
        // className={`${scss["tooltip"]} ${scss["tooltip-error"]}`}
        className={toolTipClassName}
      />
    </button>
  );
};

{
  /* <ButtonUniversal
              buttonName="saveInvoice"
              buttonText={isEditMode ? "Zapisz zmiany" : "Zapisz fakturę"}
              buttonClick={openModalConfirmationSave}
              buttonDisabled={!isSaveButtonEnabled}
              buttonIcon={<RiSave3Fill />}
              classNameButtonContainer={scss["button-save-document"]}
              toolTipId="tooltipButtonSaveInvoiceFormAddInvoice"
              toolTipContent={
                !isSaveButtonEnabled
                  ? tooltipButtonSaveInvoiceFormAddInvoice(isEditMode)
                  : undefined
              }
              toolTipClassName={`${scss["tooltip"]} `}
            />
            <ButtonUniversal
              buttonName="closeInvoice"
              buttonText="Zamknij okno"
              buttonClick={handleCloseModalAddInvoice}
              buttonIcon={<ImExit />}
              classNameButtonContainer={scss[""]}
            /> */
}

{/* <ButtonUniversal
  buttonType="submit"
  buttonName="closeInvoice"
  buttonText="Pokaż"
/>; */}
