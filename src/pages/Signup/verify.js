export function VerifyNome(nome) {

    const nomeRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s'-]+$/

    return nomeRegex.test(nome);
}

export function VerifyEmail(email) {

    const emailRegex = /^[a-zA-Z0-9._%+-]+@(alunos\.utfpr\.edu\.br|professores\.utfpr\.edu\.br|utfpr\.edu\.br)$/;

    return emailRegex.test(email)
}

export function VerifyNumero(numero) {

    const numeroRegex = /^\(?\d{2}\)?\s?9\d{4}-?\d{4}$/;

    return numeroRegex.test(numero)
}

export function VerifySenha(senha){

    const senhaRegex = /^.{8,}$/;

    return senhaRegex.test(senha);
}

export function VerifyNickname(nick){

    const nickRegex = /^.{1,12}$/;

    return nickRegex.test(nick);
}