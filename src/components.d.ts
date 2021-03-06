/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface FxButton {
        /**
          * @Prop () is how we define props that our web component will have. The below example of "theme", of various string types,
         */
        "theme": 'primary' | 'secondary' | 'danger';
    }
    interface FxCard {
        /**
          * The title / heading of the card. Note that "title" isnt used as a prop name here as "title" is a native html prop which we do not want to overwrite
         */
        "heading": string;
        "type": 'default' | 'withHeader';
    }
    interface FxModal {
        /**
          * An optional list of buttons that can be applied
         */
        "buttons": string;
        /**
          * The title / heading of the modal. Note that "title" isnt used as a prop name here as "title" is a native html prop which we do not want to overwrite
         */
        "heading": string;
        "isopen": boolean;
    }
    interface FxP {
    }
    interface FxSlideout {
        /**
          * An optional list of buttons that can be applied
         */
        "buttons": string;
        /**
          * The title / heading of the slideout. Note that "title" isnt used as a prop name here as "title" is a native html prop which we do not want to overwrite
         */
        "heading": string;
        "isopen": boolean;
    }
}
declare global {
    interface HTMLFxButtonElement extends Components.FxButton, HTMLStencilElement {
    }
    var HTMLFxButtonElement: {
        prototype: HTMLFxButtonElement;
        new (): HTMLFxButtonElement;
    };
    interface HTMLFxCardElement extends Components.FxCard, HTMLStencilElement {
    }
    var HTMLFxCardElement: {
        prototype: HTMLFxCardElement;
        new (): HTMLFxCardElement;
    };
    interface HTMLFxModalElement extends Components.FxModal, HTMLStencilElement {
    }
    var HTMLFxModalElement: {
        prototype: HTMLFxModalElement;
        new (): HTMLFxModalElement;
    };
    interface HTMLFxPElement extends Components.FxP, HTMLStencilElement {
    }
    var HTMLFxPElement: {
        prototype: HTMLFxPElement;
        new (): HTMLFxPElement;
    };
    interface HTMLFxSlideoutElement extends Components.FxSlideout, HTMLStencilElement {
    }
    var HTMLFxSlideoutElement: {
        prototype: HTMLFxSlideoutElement;
        new (): HTMLFxSlideoutElement;
    };
    interface HTMLElementTagNameMap {
        "fx-button": HTMLFxButtonElement;
        "fx-card": HTMLFxCardElement;
        "fx-modal": HTMLFxModalElement;
        "fx-p": HTMLFxPElement;
        "fx-slideout": HTMLFxSlideoutElement;
    }
}
declare namespace LocalJSX {
    interface FxButton {
        /**
          * @Prop () is how we define props that our web component will have. The below example of "theme", of various string types,
         */
        "theme"?: 'primary' | 'secondary' | 'danger';
    }
    interface FxCard {
        /**
          * The title / heading of the card. Note that "title" isnt used as a prop name here as "title" is a native html prop which we do not want to overwrite
         */
        "heading"?: string;
        "type"?: 'default' | 'withHeader';
    }
    interface FxModal {
        /**
          * An optional list of buttons that can be applied
         */
        "buttons"?: string;
        /**
          * The title / heading of the modal. Note that "title" isnt used as a prop name here as "title" is a native html prop which we do not want to overwrite
         */
        "heading"?: string;
        "isopen"?: boolean;
        /**
          * This creates a custom event that can be listened to via document.addEventListener  In this example, we have created a new event listener called "action", so we can access this via document.addEventListener('action', customFunctionHere)
         */
        "onAction"?: (event: CustomEvent<any>) => void;
    }
    interface FxP {
    }
    interface FxSlideout {
        /**
          * An optional list of buttons that can be applied
         */
        "buttons"?: string;
        /**
          * The title / heading of the slideout. Note that "title" isnt used as a prop name here as "title" is a native html prop which we do not want to overwrite
         */
        "heading"?: string;
        "isopen"?: boolean;
        /**
          * This creates a custom event that can be listened to via document.addEventListener  In this example, we have created a new event listener called "action", so we can access this via document.addEventListener('action', customFunctionHere)
         */
        "onAction"?: (event: CustomEvent<any>) => void;
    }
    interface IntrinsicElements {
        "fx-button": FxButton;
        "fx-card": FxCard;
        "fx-modal": FxModal;
        "fx-p": FxP;
        "fx-slideout": FxSlideout;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "fx-button": LocalJSX.FxButton & JSXBase.HTMLAttributes<HTMLFxButtonElement>;
            "fx-card": LocalJSX.FxCard & JSXBase.HTMLAttributes<HTMLFxCardElement>;
            "fx-modal": LocalJSX.FxModal & JSXBase.HTMLAttributes<HTMLFxModalElement>;
            "fx-p": LocalJSX.FxP & JSXBase.HTMLAttributes<HTMLFxPElement>;
            "fx-slideout": LocalJSX.FxSlideout & JSXBase.HTMLAttributes<HTMLFxSlideoutElement>;
        }
    }
}
