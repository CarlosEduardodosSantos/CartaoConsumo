import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  /* isAdmin define o tipo de usuário.
1 = ADMIN, 
2 = CLIENTE, 
3 = CAIXA

tipoMov define o tipo de movimentação.
1 = POSITIVA,
2 = NEGATIVA

totalzao calcula e formata o saldo na pag user-mov.
O login e senha são definidos na classe de rotas.
a rota é definida na classe enviroment assim como o id do restaurante.
*/