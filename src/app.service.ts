import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hola esta es una prueba de la API jakhjsakjsh';
  }
}
