import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
interface ExampleModel {
  title: string;
  content: string;
  routerLink: string;
}
const EXAMPLES: ExampleModel[] = [
  {
    title: 'Example 1',
    content: 'Count Increment/Decrement',
    routerLink: '/signal/signal-example1',
  },
  {
    title: 'Example 2',
    content: 'Auto increment count',
    routerLink: '/signal/signal-example2',
  },
  {
    title: 'Example 3',
    content: 'Update name using the input',
    routerLink: '/signal/signal-example3',
  },
  {
    title: 'Example 4',
    content: 'Computed signal value',
    routerLink: '/signal/signal-example4',
  },
  {
    title: 'Example 5',
    content: 'todo list with signal',
    routerLink: '/signal/signal-example5',
  },
  {
    title: 'Example 6',
    content: 'Input text field using the ngModel',
    routerLink: '/signal/signal-example6',
  },
  {
    title: 'Example 7',
    content: 'converts an observable to a signal',
    routerLink: '/signal/signal-example7',
  },
  {
    title: 'Example 8',
    content: 'use signal with side effects',
    routerLink: '/signal/signal-example8',
  },
  {
    title: 'Example 9',
    content: 'Simple VAT calculator with angular signals',
    routerLink: '/signal/signal-example9',
  },
  {
    title: 'Example 10',
    content: 'List of products and searching with angular signals',
    routerLink: '/signal/signal-example10',
  },
  {
    title: 'Example 11',
    content: 'Signal as input',
    routerLink: '/signal/signal-example11',
  },
  {
    title: 'Example 12',
    content: 'untracked signal - even if the signal changes, the context is not notified of its change',
    routerLink: '/signal/signal-example12',
  },
  {
    title: 'Example 13',
    content: 'Using Signals to list products and add to cart, update total price',
    routerLink: '/signal/signal-example13',
  },
];

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  examples = signal(EXAMPLES);
}
