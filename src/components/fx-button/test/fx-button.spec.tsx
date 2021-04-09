import { newSpecPage } from '@stencil/core/testing';
import { FxButton } from '../fx-button';

describe('fx-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FxButton],
      html: `<fx-button></fx-button>`,
    });
    expect(page.root).toEqualHtml(`
      <fx-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </fx-button>
    `);
  });
});
