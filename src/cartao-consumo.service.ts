import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './environments/environment';
import { iConsumo } from './app/iConsumo';
import { Observable } from 'rxjs';
import { iMov } from './app/iMov';
import {iRes} from './app/iRes';


@Injectable({
  providedIn: 'root'
})
export class CartaoConsumoService {

  public isAdmin: any;
  public token: any;
  public movIdAtual: any;

  constructor(private HttpClient: HttpClient) { }

  public obterConsuByRes() {
    return this.HttpClient.get<iConsumo[]>(`${environment.apiurl}api/CartaoConsumo/obterByConsuRes/${environment.resId}`).toPromise();
  }

  public obterTodosConsu() {
    return this.HttpClient.get<iConsumo[]>(`${environment.apiurl}api/CartaoConsumo/obterTodosConsu`).toPromise();
  }

  public obterConsuById(id: any) {
    return this.HttpClient.get<iConsumo>(`${environment.apiurl}api/CartaoConsumo/obterByConsuId/${id}`).toPromise();
  }

  public insertConsu(consumo: iConsumo) {
    return this.HttpClient.post<iConsumo>(`${environment.apiurl}api/CartaoConsumo/adicionarConsul`, consumo).toPromise();
  }

  public obterConsuByNr(id: any) {
    return this.HttpClient.get<iConsumo>(`${environment.apiurl}api/CartaoConsumo/obterByConsuNr/${environment.resId}/${id}`).toPromise();
  }

  public obterConsuByNrOrName(id: any, name: any) {
    return this.HttpClient.get<iConsumo>(`${environment.apiurl}api/CartaoConsumo/obterByConsuNrOrName/${environment.resId}/${id}/${name}`).toPromise();
  }

  public updateConsu(consumo: iConsumo) {
    console.log(consumo)
    return this.HttpClient.put<iConsumo>(`${environment.apiurl}api/CartaoConsumo/alterarConsu`, consumo).toPromise();
  }
  public deleteConsu(id: any) {
    return this.HttpClient.delete<iConsumo>(`${environment.apiurl}api/CartaoConsumo/deletarConsu/${id}`).toPromise();
  }

  //mov

  public obterMovByConsuId(id: any){
    return this.HttpClient.get<iConsumo[]>(`${environment.apiurl}api/CartaoConsumo/obterMovByConsuId/${id}`).toPromise();
  }

  public obterMovPos(id: any){
    return this.HttpClient.get<iConsumo[]>(`${environment.apiurl}api/CartaoConsumo/obterMovPos/${id}`).toPromise();
  }

  public obterMovById(id: any){
    return this.HttpClient.get<iConsumo[]>(`${environment.apiurl}api/CartaoConsumo/obterMovByMovId/${id}`).toPromise();
  }

  public obterMovNeg(id: any){
    return this.HttpClient.get<iConsumo[]>(`${environment.apiurl}api/CartaoConsumo/obterMovNeg/${id}`).toPromise();
  }

  public insertMov(mov: iMov) {
    return this.HttpClient.post<iMov>(`${environment.apiurl}api/CartaoConsumo/adicionarMov`, mov).toPromise();
  }

  public updateMov(mov: iMov) {
    return this.HttpClient.put<iMov>(`${environment.apiurl}api/CartaoConsumo/alterarMov`, mov).toPromise();
  }

  public deleteMovCartConsu(id: any) {
    return this.HttpClient.delete<iMov>(`${environment.apiurl}api/CartaoConsumo/deletarConsuCart/${id}`).toPromise();
  }

  public deleteMovById(id: any) {
    return this.HttpClient.delete<iMov>(`${environment.apiurl}api/CartaoConsumo/deletarMov/${id}`).toPromise();
  }

  //res

  public obterResById(id: any) {
    return this.HttpClient.get<iRes>(`${environment.apiurl}api/Restaurante/getById/${id}`).toPromise();
  }

}
