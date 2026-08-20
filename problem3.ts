/*
 * Fixed Expense Tracker Component
 *
 * Bug found: the <option> element used malformed property-binding syntax
 * `[value ="cat"` instead of `[value]="cat"`. Because Angular couldn't parse
 * that as a binding, every <option> rendered without a real `value`, so
 * choosing a category never updated `selectedCategory` to an actual category
 * string — which made filtering appear broken.
 *
 * The `filteredExpenses` getter and `calculateTotal()` logic were already
 * correct (getters re-evaluate on every change detection cycle in Angular,
 * and the total is already derived from the filtered list), so no changes
 * were needed there — they just had nothing valid to react to until the
 * template binding was fixed.
 */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Expense {
  id: number;
  category: string;
  amount: number;
  date: Date;
}

@Component({
  selector: 'app-expense-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Expense Tracker</h2>

    <div class="filter-section">
      <label for="categoryFilter">Filter by Category:</label>
      <select id="categoryFilter" [(ngModel)]="selectedCategory">
        <option value="">All Categories</option>
        <option *ngFor="let cat of categories" [value]="cat">{{ cat }}</option>
      </select>
    </div>

    <table>
      <thead>
        <tr>
          <th>Category</th>
          <th>Amount</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let expense of filteredExpenses">
          <td>{{ expense.category }}</td>
          <td>{{ expense.amount | currency:'INR':'symbol':'1.2-2' }}</td>
          <td>{{ expense.date | date:'shortDate' }}</td>
        </tr>
      </tbody>
    </table>

    <h3>Total Expenses: {{ calculateTotal() | currency:'INR':'symbol':'1.2-2' }}</h3>
  `,
  styles: [`
    table { width: 100%; border-collapse: collapse; margin-top: 20px; }
    th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
    th { background-color: #f2f2f2; }
    .filter-section { margin-bottom: 15px; }
    select { padding: 5px; }
  `]
})
export class ExpenseListComponent implements OnInit {
  expenses: Expense[] = [
    { id: 1, category: 'Food', amount: 500, date: new Date('2023-10-26') },
    { id: 2, category: 'Travel', amount: 1200, date: new Date('2023-10-25') },
    { id: 3, category: 'Movie', amount: 350, date: new Date('2023-10-26') },
    { id: 4, category: 'Food', amount: 200, date: new Date('2023-10-24') },
    { id: 5, category: 'Utilities', amount: 750, date: new Date('2023-10-23') }
  ];

  selectedCategory: string = '';
  categories: string[] = [];

  ngOnInit() {
    this.categories = [...new Set(this.expenses.map(e => e.category))];
  }

  get filteredExpenses(): Expense[] {
    if (this.selectedCategory === '') {
        return this.expenses;
    }
    return this.expenses.filter(
        expense => expense.category === this.selectedCategory
    );
    }

    calculateTotal(): number {
        const visibleExpenses = this.filteredExpenses;
        return visibleExpenses.reduce((sum, expense) => sum + expense.amount, 0);
    }
}