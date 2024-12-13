import { BadRequestException, Controller, Get, Query } from '@nestjs/common';
import { CalculatorService } from './calculator.service';

@Controller()
export class CalculatorController {
  constructor(private readonly calculatorService: CalculatorService) {}

  @Get('add')
  add(@Query('num1') num1: string, @Query('num2') num2: string) {
    const { a, b } = this.validateQueryParams(num1, num2);
    return { result: this.calculatorService.add(a, b) };
  }

  @Get('subtract')
  subtract(@Query('num1') num1: string, @Query('num2') num2: string) {
    const { a, b } = this.validateQueryParams(num1, num2);
    return { result: this.calculatorService.subtract(a, b) };
  }

  @Get('multiply')
  multiply(@Query('num1') num1: string, @Query('num2') num2: string) {
    const { a, b } = this.validateQueryParams(num1, num2);
    return { result: this.calculatorService.multiply(a, b) };
  }

  @Get('divide')
  divide(@Query('num1') num1: string, @Query('num2') num2: string) {
    const { a, b } = this.validateQueryParams(num1, num2);
    return { result: this.calculatorService.divide(a, b) };
  }

  private validateQueryParams(
    num1?: string,
    num2?: string,
  ): { a: number; b: number } {
    if (!num1 || !num2) {
      throw new BadRequestException('Необходимы два числа для операции');
    }

    const a = Number(num1);
    const b = Number(num2);

    if (isNaN(a) || isNaN(b)) {
      throw new BadRequestException('Параметры должны быть числами');
    }

    return { a, b };
  }
}
