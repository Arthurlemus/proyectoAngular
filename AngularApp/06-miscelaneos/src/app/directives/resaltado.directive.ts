import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private element: ElementRef) { }

  @Input('appResaltado') nuevoColor: string;

  @HostListener('mouseenter') mouseEntro() {

    this.resaltar(this.nuevoColor || 'yellow');
  }

  @HostListener('mouseleave') mouseSalio() {
    this.resaltar(null, null);
  }

  private resaltar(color: string, posicion: string = 'center') {
    this.element.nativeElement.style.backgroundColor = color;
    this.element.nativeElement.style.textAlign = posicion;
  }

}
