import nextElementInList from "@/utils/nextElementInList";

describe("nextElementInList", () => {
  it("returns the next element in the list", () => {
    const list = ["a", "b", "c", "d"];
    const currentElement = "b";
    const result = nextElementInList(list, currentElement);
    expect(result).toBe("c");
  });

  describe("when the current element is the last element in the list", () => {
    it("returns the first element in the list", () => {
      const list = ["a", "b", "c", "d", "e", "f"];
      const currentElement = "f";
      const result = nextElementInList(list, currentElement);
      expect(result).toBe("a");
    });
  });
});
