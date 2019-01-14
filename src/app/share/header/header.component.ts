import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {LINKS} from '../../config/constants/homeLinks';
import {DeviceDetectorService} from 'ngx-device-detector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Input() hovered: boolean;
  deviceInfo = null;
  links = LINKS;

  private onDestroyStream$ = new Subject<void>();
  linkName: string;

  constructor(private route: ActivatedRoute, public deviceService: DeviceDetectorService) {
      this.detectDevice();
  }

  ngOnInit() {
    this.route.paramMap
      .pipe(takeUntil(this.onDestroyStream$))
      .subscribe(name => {
        this.linkName = name.get('name');
      });
  }

  public detectDevice() {
    this.deviceInfo = this.deviceService.getDeviceInfo();
  }

  ngOnDestroy(): void {
    this.onDestroyStream$.next();
    this.onDestroyStream$.complete();
  }

}
