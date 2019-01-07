import { Component, VERSION, OnInit, ViewChild } from '@angular/core';

import { ZXingScannerComponent } from '@zxing/ngx-scanner';

import { Result, BarcodeFormat } from '@zxing/library';

@Component({
  selector: 'app-zxing-qr-barcode-scanner',
  templateUrl: './zxing-qr-barcode-scanner.component.html',
  styleUrls: ['./zxing-qr-barcode-scanner.component.css']
})
export class ZxingQrBarcodeScannerComponent implements OnInit {

  flagCameraOn: boolean = true;

  device_id;
  allowedFormats = [
    BarcodeFormat.AZTEC,

    /** CODABAR 1D format. */
    BarcodeFormat.CODABAR,

    /** Code 39 1D format. */
    BarcodeFormat.CODE_39,

    /** Code 93 1D format. */
    BarcodeFormat.CODE_93,

    /** Code 128 1D format. */
    BarcodeFormat.CODE_128,

    /** Data Matrix 2D barcode format. */
    BarcodeFormat.DATA_MATRIX,

    /** EAN-8 1D format. */
    BarcodeFormat.EAN_8,

    /** EAN-13 1D format. */
    BarcodeFormat.EAN_13,

    /** ITF (Interleaved Two of Five) 1D format. */
    BarcodeFormat.ITF,

    /** MaxiCode 2D barcode format. */
    BarcodeFormat.MAXICODE,

    /** PDF417 format. */
    BarcodeFormat.PDF_417,

    /** QR Code 2D barcode format. */
    BarcodeFormat.QR_CODE,

    /** RSS 14 */
    BarcodeFormat.RSS_14,

    /** RSS EXPANDED */
    BarcodeFormat.RSS_EXPANDED,

    /** UPC-A 1D format. */
    BarcodeFormat.UPC_A,

    /** UPC-E 1D format. */
    BarcodeFormat.UPC_E,

    /** UPC/EAN extension format. Not a stand-alone format. */
    BarcodeFormat.UPC_EAN_EXTENSION
  ];
  
  ngVersion = VERSION.full;

  @ViewChild('scanner')
  scanner: ZXingScannerComponent;

  hasDevices: boolean;
  hasPermission: boolean;
  qrResultString: string;
  qrResult: Result;

  availableDevices: MediaDeviceInfo[];
  currentDevice: MediaDeviceInfo;

  ngOnInit(): void {

    this.scanner.camerasFound.subscribe((devices: MediaDeviceInfo[]) => {
      this.hasDevices = true;
      this.availableDevices = devices;

      // // selects the devices's back camera by default
      for (const device of devices) {
          console.log('device: ', device.kind);
          if (/back|rear|environment/gi.test(device.label)) {
              this.scanner.changeDevice(device);
              this.currentDevice = device;
              this.device_id = device.deviceId;
              break;
          }
      }
    });

    this.scanner.camerasNotFound.subscribe(() => this.hasDevices = false);
    this.scanner.scanComplete.subscribe((result: Result) => this.qrResult = result);
    this.scanner.permissionResponse.subscribe((perm: boolean) => this.hasPermission = perm);
  }

  // displayCameras(cameras: MediaDeviceInfo[]) {
  //   console.debug('Devices: ', cameras);
  //   this.availableDevices = cameras;
  // }

  handleQrCodeResult(resultString: string) {
    console.debug('Result: ', resultString);
    this.qrResultString = resultString;
  }

  onDeviceSelectChange(selectedValue?: string) {
    console.debug('Selection changed: ', selectedValue);
    this.currentDevice = this.scanner.getDeviceById(selectedValue);
  }

  stateToEmoji(state: boolean): string {

    const states = {
      // not checked
      undefined: '❔',
      // failed to check
      null: '⭕',
      // success
      true: '✔',
      // can't touch that
      false: '❌'
    };

    return states['' + state];
  }

onCamera(){
  this.flagCameraOn = !this.flagCameraOn;
  this.onDeviceSelectChange(this.device_id);
}

}
