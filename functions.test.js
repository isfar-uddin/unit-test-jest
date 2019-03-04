const functions = require('./functions');

//beforeEach(()=> initDatabase());
//afterEach(() => closeDatabase());
beforeAll(() => initDatabase());
afterAll(() => closeDatabase());

const initDatabase = () => console.log("Initialize the database");
const closeDatabase = () => console.log("Close the database");

test("Add 2+2 is equal to 4", () => {
    expect(functions.add(2,2)).toBe(4);
});

test("Should return Isfar Uddin", () => {
    expect(functions.createUser()).toEqual({
        firstName: "Isfar",
        lastName: "Uddin"
    });
});

test("Should return email equal to Sincere@april.biz", () => {
    expect.assertions(1);
    return functions.fetchUser().then((data) => {
        expect(data.email).toEqual(
            "Sincere@april.biz")
    })
});