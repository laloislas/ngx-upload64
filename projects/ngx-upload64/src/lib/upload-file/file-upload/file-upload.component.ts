import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

interface responseFile {
  nameFile: string;
  size: number;
  type: string;
  data: string;
}

@Component({
  selector: 'ngx-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
})
export class FileUploadComponent implements OnInit {
  @Input() multiple: boolean = false;
  @Input() typeAccept: string = '.pdf';
  @Output() dataFile = new EventEmitter<any>();
  private response: responseFile;
  public dropArea: HTMLElement | any;
  public dragText: HTMLElement | any;
  public button: HTMLElement | any;
  public input: HTMLElement | any;
  public files: any = null;
  constructor() {
    this.response = {
      nameFile: '',
      size: 0,
      type: '',
      data: '',
    };
  }

  ngOnInit(): void {
    this.dropArea = document.querySelector('.upload__container')!;
    this.dragText = document.querySelector('h2')!;
    this.button = document.querySelector('button')!;
    this.input = document.querySelector('#upload-file')!;
  }

  public onUpload(event: any) {
    this.input.click();
  }

  public async onChangeInputUpload(event: any) {
    this.files = event.srcElement.files;
    this.dropArea.classList.add('active');

    this.dropArea.classList.remove('active');
    const response_aux = this.files[0];
    const data = await this.getDataBase64(response_aux);
    this.dataFile.emit({
      nameFile: response_aux.name,
      size: response_aux.size,
      type: response_aux.type,
      data,
    });
    this.files = null;
    this.input.value = null;
  }

  private getDataBase64(value: any): Promise<any> {
    return new Promise((resolve, reject) => {
      // la funcion devuelve una promesa
      const reader = new FileReader();
      reader.onloadend = (e: any) => {
        const response = e.target.result.split('base64,')[1];
        resolve(response);
      };
      //Aqui comienza a leer el archivo para posteriormente ejecutar la función onloadend
      reader.readAsDataURL(value);
    });
  }

  public onDragout(event: DragEvent) {
    event.stopPropagation();
    event.preventDefault();
    console.log('DragOut');
    this.dropArea.classList.remove('active');
    this.dragText.textContent = 'Arrastra y suelta';
  }

  public onDragover(event: DragEvent) {
    console.log(event);
    event.stopPropagation();
    event.preventDefault();
    console.log('DragOver');
    this.dropArea.classList.add('active');
    this.dragText.textContent = 'Suelta para subir archivo';
  }
}
