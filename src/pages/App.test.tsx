import {screen} from '@testing-library/react';
// import App from './_app';

test('renders learn react link', () => {
    // TODO: Next-----------------------------
    //  render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
