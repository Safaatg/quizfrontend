
function LanguageItem(props){
    return(
        <button>
                <img src={props.LanguageImg}/>
                <span>{props.LanguageName}</span>
            </button>
    )
}
export default LanguageItem