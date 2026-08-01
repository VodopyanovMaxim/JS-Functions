function isWorkingAgePerson(age) {
  if (age < 64 && age > 16) {
    return true;
  } else {
    return false;
  }
}

const checkMultiplicity = function (a, b) {
  if (b === 0) {
    return null;
  }
  const remainder = a % b;
  if (remainder > 0) {
    return false;
  } else {
    return true;
  }
};

let loop = true;
while (loop) {
  const choice = Number(
    prompt(`
    Виберіть номер задачі для тестування:\n
       1. Перевірка працездатного віку\n
       2. Перевірка кратності чисел\n
       3. Реконструкція парку: Розрахунок матеріалів`),
  );
  switch (choice) {
    case 1:
      const age = Number(
        prompt("Введіть вік для перевірки на те, чи є він працездатним:"),
      );
      if (!Number.isNaN(age) && age > 0) {
        if (isWorkingAgePerson(age)) {
          alert(`Людина віком ${age} є працездатною`);
        } else {
          alert(`Людина віком ${age} не є працездатною`);
        }
      } else {
        alert(`Помилка, введіть коректне значення`);
      }
      break;
    case 2:
      const arg1 = Number(prompt("Виберіть перший аргумент:"));
      const arg2 = Number(prompt("Виберіть другий аргумент:"));
      if (Number.isNaN(arg1) || Number.isNaN(arg2)) {
        alert("Помилка, введіть коректні значення");
      } else {
        const result = checkMultiplicity(arg1, arg2);
        if (result === null) {
          alert(`Помилка, число ${arg1} не може бути поділено на ${arg2}`);
        } else if (result) {
          alert(`Число ${arg1} ділиться на ${arg2} без залишку`);
        } else if (!result) {
          alert(`Число ${arg1} ділиться на ${arg2} із залишком`);
        }
      }
      break;
    case 3:
      break;
    default:
      loop = false;
      break;
  }
}
