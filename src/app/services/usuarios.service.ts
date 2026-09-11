import { Injectable, signal } from '@angular/core';

export interface Usuario {
  id: number;
  nombre: string;
  correo: string;
  clave: string;
}

@Injectable({ providedIn: 'root' })
export class UsuariosService {
  private usuarios: Usuario[] = [];

  usuarioActual = signal<Usuario | null>(null);

  todos(): Usuario[] {
    return this.usuarios;
  }

  registrar(usuario: Usuario): void {
    this.usuarios.push(usuario);
  }

  validar(correo: string, clave: string): Usuario | undefined {
    return this.usuarios.find(
      usuario => usuario.correo === correo && usuario.clave === clave
    );
  }

  entrar(usuario: Usuario): void {
    this.usuarioActual.set(usuario);
  }

  salir(): void {
    this.usuarioActual.set(null);
  }
}
