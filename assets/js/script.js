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
  let choice = Number(prompt("Виберіть номер задачі для тестування"));
  switch (choice) {
    case 1:
      alert("Помилка, введіть коректні значення");
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
