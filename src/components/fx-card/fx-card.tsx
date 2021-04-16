import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'fx-card',
  styleUrl: 'fx-card.css',
  shadow: true,
})
export class FxCard {
  @Prop({
    mutable: true,
    reflect: true,
  })

  /**
   * Toggle the type of card to use
   */
  @Prop()
  type: 'default' | 'withHeader';

  /**
   * The title / heading of the card. Note that "title" isnt used
   * as a prop name here as "title" is a native html prop which
   * we do not want to overwrite
   */
  @Prop()
  heading: string;

  render() {
    return (
      <div class={`card ${this?.type}`}>
        <h3>{this.heading}</h3>
        <slot />
      </div>
    );
  }
}
