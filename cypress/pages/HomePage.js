import GenericUtils from "../support/GenericUtils"
class HomePage{

    verifyListOfInventoryNames(){
        GenericUtils.getFixtureData("example").then((data)=>{
            
        })
    }

}
export const homePage = new HomePage()