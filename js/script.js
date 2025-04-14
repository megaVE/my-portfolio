function calculateAge() {
  const birthday = "2003-04-12";

  const birthdayDate = new Date(birthday);
  const currentDate = new Date();

  const age = currentDate.getYear() - birthdayDate.getYear();

  const hadCurrentYearBirthday =
    currentDate.getMonth() > birthdayDate.getMonth() ||
    (currentDate.getMonth() === birthdayDate.getMonth() &&
      currentDate.getDate() >= birthdayDate.getDate());

  return hadCurrentYearBirthday ? age : age - 1;
}

const ageTag = document.querySelector("#age");
ageTag.textContent = calculateAge();
