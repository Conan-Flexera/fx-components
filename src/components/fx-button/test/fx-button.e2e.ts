import { newE2EPage } from '@stencil/core/testing';

describe('fx-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<fx-button></fx-button>');

    const element = await page.find('fx-button');
    expect(element).toHaveClass('hydrated');
  });
});
