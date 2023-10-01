// Your code here


export function currentAgeForBirthYear(birthyear){
    const currentYear = new Date().getFullYear();
    return currentYear - birthyear;
}
