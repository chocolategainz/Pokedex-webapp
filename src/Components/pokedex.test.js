import { render, screen } from '@testing-library/react';
import Sum from './Sum';
import Home from './Pages/Home';


//Practice
test('adds 1 + 2 to equal 3', () => {
  expect(Sum(1, 2)).toBe(3);
});

//Rendering an image at the top of the page
test('renders image', () => {
    const filePath = "./pokeball.png"; 
    render (<Home div = {filePath}/>)
    const image = screen.getByAltText('pokemon ball');
     expect(image).toBeInTheDocument();
     expect(image).toHaveAttribute('src');
      });