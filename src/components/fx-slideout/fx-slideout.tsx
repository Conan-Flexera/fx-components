import { Component, Event, EventEmitter, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'fx-slideout',
  styleUrl: 'fx-slideout.css',
  shadow: true,
})
export class FxSlideout {
  @Prop({
    mutable: true,
    reflect: true,
  })

  /**
   * Toggle if the slideout is open or not.
   * This is closed by default.
   */
  @Prop()
  isopen: boolean;

  /**
   * The title / heading of the slideout. Note that "title" isnt used
   * as a prop name here as "title" is a native html prop which
   * we do not want to overwrite
   */
  @Prop()
  heading: string;

  /**
   * An optional list of buttons that can be applied
   */
  @Prop()
  buttons: string;

  @State()
  _buttons: Array<any>;

  /**
   * This creates a custom event that can be listened
   * to via document.addEventListener
   *
   * In this example, we have created a new event
   * listener called "action", so we can access this
   * via document.addEventListener('action', customFunctionHere)
   */
  @Event() private action: EventEmitter;

  /**
   *
   * @param buttons
   * Since native HTML props expect a string as a value,
   * we need to parse the string to be able to be able to
   * manipulate it.
   * In this instance, we expect the parsed string to
   * return as an array of objects
   */
  handleButtons(buttons: string) {
    if (typeof buttons === 'string') {
      this._buttons = JSON.parse(buttons);
    }
  }

  componentWillLoad() {
    this.handleButtons(this.buttons);
  }

  private handleClose = () => {
    this.isopen = false;
  };

  private handleAction = () => {
    this.action.emit();
  };

  render() {
    return (
      <aside class={`slideout ${this.isopen && 'open'}`}>
        <div class="slideout__bg" onClick={this.handleClose}></div>
        <div class="slideout__content">
          <h2>{this.heading}</h2>

          <slot />

          <div class="slideout__buttons">
            {this._buttons.map(button => (
              <fx-button theme={button.theme || 'primary'} onClick={this.handleAction}>
                {button.label}
              </fx-button>
            ))}
            <fx-button onClick={this.handleClose}>Close</fx-button>
          </div>
        </div>
      </aside>
    );
  }
}
