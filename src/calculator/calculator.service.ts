import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class CalculatorService {
  add(num1: number, num2: number): number {
    return num1 + num2;
  }

  subtract(num1: number, num2: number): number {
    return num1 - num2;
  }

  multiply(num1: number, num2: number): number {
    return num1 * num2;
  }

  divide(num1: number, num2: number): number {
    if (num2 === 0) {
      throw new BadRequestException('Деление на ноль невозможно');
    }
    return num1 / num2;
  }
}
