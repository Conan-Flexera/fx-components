import { newE2EPage } from '@stencil/core/testing';

describe('fx-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<fx-modal></fx-modal>');

    const element = await page.find('fx-modal');
    expect(element).toHaveClass('hydrated');
  });
});
