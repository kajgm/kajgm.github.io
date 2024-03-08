/**
 * @jest-environment jsdom
 */

import '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import App from 'App';

describe('renders the app', () => {
  let container: HTMLDivElement;

  beforeEach(async () => {
    container = document.createElement('div');
    document.body.appendChild(container);
    await act(async () => {
      await ReactDOM.createRoot(container).render(<App />);
    });
  });

  afterEach(() => {
    document.body.removeChild(container);
    jest.clearAllMocks();
  });

  it('should render the app', async () => {
    expect(document.body).toBeInTheDocument();
  });

  it('should render the title', async () => {
    expect(document.title).toBe('Kaj Grant-Mathiasen');
  });

  it('should toggle darkmode', async () => {
    const currentTheme = document.body.attributes.getNamedItem('theme')!.value;
    expect(currentTheme).toBe('light');

    const themeToggle = document.querySelector('#theme-toggle');
    expect(themeToggle).toBeInTheDocument();

    await userEvent.click(themeToggle!);

    const toggledTheme = document.body.attributes.getNamedItem('theme')!.value;
    expect(toggledTheme).toBe('dark');
  });
});
