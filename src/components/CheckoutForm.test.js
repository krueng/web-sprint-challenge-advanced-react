import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm />);
});


test("shows success message on submit with form details", async () => {
    render(<CheckoutForm />);

    const inputFields = [
        [/First Name/i, 'Fnamed'],
        [/Last Name/i, 'Lnamed'],
        [/Address/i, '999 Adress Blvd.'],
        [/City/i, 'Kalimanjaroo'],
        [/State/i, 'Bhutan'],
        [/Zip/i, '12345'],
    ];

    for (let field of inputFields) {
        const input = screen.getByLabelText(field[0]);
        userEvent.type(input, field[1]);
    }

    const checkoutBtn = screen.getByRole('button');
    userEvent.click(checkoutBtn);


    const success = await screen.findByTestId('successMessage');

    const fields = ['Fnamed', 'Lnamed', '999 Adress Blvd.', 'Kalimanjaroo', 'Bhutan', '12345']
    for (let field of fields) {
        expect(success).toHaveTextContent(field);
    }

    //fail test
    const failFields = ['Fxnamed', 'Lxnamed', '9799 Adress Blvd.', 'Kalimanjarooxx', 'Bhutanx', '12345x'];
    for (let field of failFields) {
        expect(success).not.toHaveTextContent(field);
    }

});
