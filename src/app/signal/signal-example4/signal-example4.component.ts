import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signal-example4',
  standalone: true,
  templateUrl: './signal-example4.component.html',
  styleUrls: ['./signal-example4.component.scss'],
  imports: [FormsModule],
})
export default class SignalExample4Component {
  count = signal(0);
  doubleCount = computed(() => this.count() + 2);

  increaseCount() {
    this.count.update(() => this.count() + 1);
  }
}