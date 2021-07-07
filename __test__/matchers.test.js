describe("Comparadores comunes", () => {
    const user = {
        name: "Erika",
        lastname: "Espinoza"
    }

    const user2 = {
        name: "Erika",
        lastname: "Espinoza"
    }

    test('igualdad de elementos', () => {
        expect(user).toEqual(user2);
    });

    test('No son exactamente iguales', () => {
        expect(user).not.toEqual(user2);
    })
});