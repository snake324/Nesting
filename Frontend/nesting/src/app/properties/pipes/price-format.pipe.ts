import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFormat',
})
export class PriceFormatPipe implements PipeTransform {
  transform(value: number | string): string {
    if (value === null || value === undefined) {
      return '';
    }

    const amount = typeof value === 'string' ? parseFloat(value) : value;

    if (!isNaN(amount)) {
      const parts = amount.toFixed(2).toString().split('.');

      const formattedInteger = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');

      const formattedDecimal = parts[1] === '00' ? '' : `.${parts[1]}`;

      return `${formattedInteger}${formattedDecimal}`;
    }

    return value.toString();
  }
}
