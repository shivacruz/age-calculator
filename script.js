function calculateAge() {
    const birthdateInput = document.getElementById("birthdate").value;
    const birthdate = new Date(birthdateInput);
    const today = new Date();
    const age = today.getFullYear() - birthdate.getFullYear();

    document.getElementById("result").innerHTML = `Your age is ${age} years.`;
}
