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

/**
 * Розраховує площу поверхні заданої фігури
 *
 * @param {string} shapeType - задана фігура
 * @param {number} param1 - довижна ребра кубу або радіус основи циліндру
 * @param {number} param2 - висота циліндру
 * @returns {number} - повертає площу поверхні фігури або 0, в залежності від коректності наданих даних
 * @example
 * calculateSurfaceArea('unknownShapeType', 5, 5); // 0
 * calculateSurfaceArea('cube', 5, 0); // 0
 * calculateSurfaceArea('cube', 0, 5); // 0
 * calculateSurfaceArea('cube', 5, 5); // 150
 */

function calculateSurfaceArea(shapeType, param1, param2 = param1) {
  if (
    Number.isNaN(param1) ||
    param1 <= 0 ||
    Number.isNaN(param2) ||
    param2 <= 0
  ) {
    return 0;
  }
  if (shapeType === "cube") {
    return 6 * param1 ** 2;
  } else if (shapeType === "cylinder") {
    return 2 * Math.PI * param1 * (param1 + param2);
  } else {
    return 0;
  }
}

/**
 * Розраховує кількість потрібних літрових банок фарби
 *
 * @param {number} area - площа поверхні фігури
 * @param {number} layersCount - кількість шарів фарбування
 * @returns {number} - повертає округлену до більшого, цілу кількість банок, необхідних для покраски фігури у задану кількість шарів
 * @example
 * calculatePaintBoxes(150, 0); // 0
 * calculatePaintBoxes(0, 1); // 0
 * calculatePaintBoxes(150, 1); // 15
 */
const calculatePaintBoxes = function (area, layersCount) {
  if (
    Number.isNaN(area) ||
    area <= 0 ||
    Number.isNaN(layersCount) ||
    layersCount <= 0
  ) {
    return 0;
  }
  return Math.ceil(area * layersCount * 0.1);
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
      const shapeType = prompt("Виберіть форму фігури:");
      const shapeArg1 = Number(prompt("Введіть перший аргумент:"));
      const shapeArg2 = Number(prompt("Введіть другий аргумент:"));
      const area = calculateSurfaceArea(shapeType, shapeArg1, shapeArg2);
      if (area > 0) {
        const layerCount = Number(
          prompt("Введіть потрібну кількість шарів покраски:"),
        );
        const bucketsAmount = calculatePaintBoxes(area, layerCount);
        if (bucketsAmount > 0) {
          alert(
            `Для фарбування фігури ${shapeType} у ${layerCount} шарів необхідно придбати ${bucketsAmount} банок фарби`,
          );
        } else {
          alert(
            `Для фарбування фігури ${shapeType} у ${layerCount} шарів неможливо розрахувати кількість банок фарби. Перевірте правильність введених даних`,
          );
        }
      } else {
        alert(
          `Помилка обрахування площі для фігури ${shapeType} за параметрами '${arg1}' та '${arg2}'`,
        );
      }
      break;
    default:
      loop = false;
      break;
  }
}
