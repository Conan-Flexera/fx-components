import { newSpecPage } from '@stencil/core/testing';
import { FxModal } from '../fx-modal';

describe('fx-modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FxModal],
      html: `<fx-modal></fx-modal>`,
    });
    expect(page.root).toEqualHtml(`
      <fx-modal>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </fx-modal>
    `);
  });
});
