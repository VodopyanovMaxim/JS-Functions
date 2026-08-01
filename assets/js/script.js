function isWorkingAgePerson(age) {
  if (age < 64 && age > 16) {
    return true;
  } else {
    return false;
  }
}

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
      break;
    case 3:
      break;
    default:
      loop = false;
      break;
  }
}
