import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store'; // Adjust this path to your store file
import App from './App';

// Mock Firebase to prevent network calls and side effects during tests
jest.mock('./utils/firebase/firebase.utils', () => ({
  auth: {
    onAuthStateChanged: jest.fn(),
  },
  getCurrentUser: jest.fn(),
  // Add any other firebase functions your App.js calls
}));

test('renders navigation links', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );

  // Check for something that actually exists in your Navigation component
  const shopLink = screen.getByRole('link', { name: /shop/i });
  expect(shopLink).toBeInTheDocument();
});