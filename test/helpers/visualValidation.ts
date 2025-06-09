class validations {

    async validateTitles(first: ChainablePromiseElement, second: string) {
        await expect(first).toBeDisplayed();
        await expect(first).toHaveText(second);
    }

}
export default new validations();