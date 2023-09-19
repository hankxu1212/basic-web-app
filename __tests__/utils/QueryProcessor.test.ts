import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    test('should return andrew id', () => {
        const query = "what is my andrew id?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("ninghuax");
    });

    test('what is 10 plus 10', () => {
        const query = 'what is 10 plus 10';
        const response: string = QueryProcessor(query);
        expect(response).toBe("20");
    });

    test('Which of the following numbers is the largest: 81, 84, 15?', () => {
        const query = 'Which of the following numbers is the largest: 81, 84, 15?';
        const response: string = QueryProcessor(query);
        expect(response).toBe("84");
    });
});