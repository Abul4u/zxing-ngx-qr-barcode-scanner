import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

import { AppComponent } from './app.component';
import { ZxingQrBarcodeScannerComponent } from './shared/component/zxing-qr-barcode-scanner/zxing-qr-barcode-scanner.component';
import { CameraBackComponent } from './shared/component/camera-back/camera-back.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ZXingScannerModule],
  declarations: [AppComponent, ZxingQrBarcodeScannerComponent, CameraBackComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
