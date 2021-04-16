import { Component, h } from '@stencil/core';

@Component({
  tag: 'fx-p',
  styleUrl: 'fx-p.css',
  shadow: true,
})
export class FxP {
  render() {
    return (
      <p>
        <slot />
      </p>
    );
  }
}
