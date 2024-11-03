import { ERROR_MESSAGE } from "./constants/errorMessage.js";

class BonusLotto {
  #number;

  constructor(bonusNumber, winningNumbers) {
    this.#validate(bonusNumber, winningNumbers);
    this.#number = bonusNumber;
  }

  #validate(bonusNumber, winningNumbers) {
    this.#validateIsEmpty(bonusNumber);
    this.#validateNumberOnly(bonusNumber);
    this.#validateNumberRange(bonusNumber);
    this.#validateIncludedInWinningNumbers(bonusNumber, winningNumbers);
  }

  #validateIsEmpty(bonusNumber) {
    if (bonusNumber === 0) {
      throw new Error(ERROR_MESSAGE.EMPTY_INPUT);
    }
  }

  #validateNumberOnly(bonusNumber) {
    if (isNaN(bonusNumber)) {
      throw new Error(ERROR_MESSAGE.BONUS_INVALID);
    }
  }

  #validateNumberRange(bonusNumber) {
    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error(ERROR_MESSAGE.BONUS_NUMBER_FORMAT);
    }
  }

  #validateIncludedInWinningNumbers(bonusNumber, winningNumbers) {
    if (winningNumbers.includes(bonusNumber)) {
      throw new Error(ERROR_MESSAGE.BONUS_NOT_IN_WINNING_NUMBERS);
    }
  }
}

export default BonusLotto;
