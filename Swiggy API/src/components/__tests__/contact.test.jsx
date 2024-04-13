import {render, screen} from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";


describe("Contact Us Page Test Case", () => {
  it('should load contact us component', () => {
    render(<Contact />);
 
 //const button = screen.getByRole('button');
 const btn = screen.getByText('Submit');
 
   //Assertion
   expect(btn).toBeInTheDocument();
 });
 
 test('should load 2 input boxes on the Contact component', ()=> {
   render(<Contact />);
   
   const inputBoxes = screen.getAllByRole('textbox');
   console.log(inputBoxes);
   //Assertion
 expect(inputBoxes.length).toBe(2);
 });
});



