import HtmlLogo from "../../assets/icon-html.svg"
import CssLogo from "../../assets/icon-css.svg"
import JsLogo from "../../assets/icon-js.svg"
import AssLogo from "../../assets/icon-accessibility.svg"
import "../LanguagesWraper/LanguagesWraper.css";
import LanguageItem from "../LanguageItem/LanguageItem";
function LanguagesWraper(){
    const ArrayOfObject = [
        {LanguageName:"HTML", LanguageImg: HtmlLogo },
        {LanguageName:"CSS", LanguageImg: CssLogo},
        {LanguageName:"Javascirpt", LanguageImg: JsLogo},
        {LanguageName:"Asscisbilty", LanguageImg: AssLogo}
    ]
    
    return(
        <div id="LanguagesWraper"> 


        {ArrayOfObject.map((item)=>{
            return(
                <LanguageItem
                LanguageName={item.LanguageName}
                LanguageImg={item.LanguageImg}
                ></LanguageItem>
            )
        })}
            {/* <LanguageItem LanguageName="HTML" LanguageImg={HtmlLogo}></LanguageItem>
            <LanguageItem LanguageName="CSS" LanguageImg={CssLogo}></LanguageItem>
            <LanguageItem LanguageName="Javascribt" LanguageImg={JsLogo}></LanguageItem>
            <LanguageItem LanguageName="Assisbilty" LanguageImg={AssLogo}></LanguageItem> */}
        </div>
    )
}
export default LanguagesWraper