
const persianNumber= ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
const PersianDigit=(number)=>{
    return number.toString().replace(/[0-9]/g, function(w){
        return persianNumber[+w]
    });
}
export default PersianDigit
