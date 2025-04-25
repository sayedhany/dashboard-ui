import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { BadgeModule } from 'primeng/badge';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [InlineSVGModule,BadgeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  openSidebar = output()

}
