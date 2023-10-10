export default function verify_nome(nome){
    if(/^[A-Za-z]+( [A-Za-z]+)*&/.test(nome)){
        return true;
    }
    return false;
}
