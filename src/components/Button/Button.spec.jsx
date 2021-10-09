import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "."

describe('<Button />', () => {
    test('Should render the Button with text "Load more"', () => {
        render(<Button text='Load more' />)
        expect.assertions(1); //testando o test

        const button = screen.getByRole('button', {name: /load more/i });
        
        expect(button).toBeInTheDocument(); //assertion
    });

    it('Should call function on Button click', () => {
        const fn = jest.fn(); //função criada pelo jest
        render(<Button text='Load more' onclick={fn} />)

        const button = screen.getByRole('button', {name: /load more/i });              
        fireEvent.click(button); //acionar o evento
      
        expect(fn).toHaveBeenCalledTimes(1);
    });
});