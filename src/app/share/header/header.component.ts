import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {LINKS} from '../../config/constants/homeLinks';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Input() hovered: boolean;

  links = LINKS;

  private onDestroyStream$ = new Subject<void>();
  linkName: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
      .pipe(takeUntil(this.onDestroyStream$))
      .subscribe(name => {
        this.linkName = name.get('name');
      });
  }

  ngOnDestroy(): void {
    this.onDestroyStream$.next();
    this.onDestroyStream$.complete();
  }

}
