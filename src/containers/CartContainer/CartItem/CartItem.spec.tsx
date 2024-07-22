import { faker } from "@faker-js/faker";
import { render } from "@testing-library/react";
import { CartItem } from "./CartItem";

describe("CartItem", () => {
    it("should render cart item", () => {
        const handleOrderMock = jest.fn();
        const handleRemoveMock = jest.fn();

        const imageUrlMock = faker.image.url();
        const nameMock = faker.person.firstName();
        const amountMock = faker.number.int();
        const priceMock = faker.number.int();

        const { container } = render(
            <CartItem
                image={imageUrlMock}
                name={nameMock}
                amount={amountMock}
                pricePerOne={priceMock}
                handleOrder={handleOrderMock}
                handleRemove={handleRemoveMock}
            />
        );

        expect(container).toMatchSnapshot();
    });
});
