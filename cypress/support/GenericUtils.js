class GenericUtils{
    static getFixtureData = (fixtureName)=>{

        return cy.fixture(fixtureName)
    }
}
export default GenericUtils