import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'fx-button',
  styleUrl: 'fx-button.css',
  shadow: true,
})
export class FxButton {
  /**
   * @Prop() is how we define props that our web component
   * will have. The below example of "theme", of various string types,
   *
   */
  @Prop() theme: 'primary' | 'secondary' | 'danger';

  render() {
    return (
      <button type="button" class={`btn ${this.theme}`}>
        <slot />
      </button>
    );
  }
}
