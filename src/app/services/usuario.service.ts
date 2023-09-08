import { Injectable } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { SettingSupabase } from '../models/setting-supabase';
import { Usuarios } from '../models/usuarios';
import { environment } from 'src/environments/environment';
import { ResultRequest } from '../models/result-request';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  supabase: SupabaseClient;
  resp: ResultRequest;

  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl, environment.supabaseKey
    );
    this.resp = new ResultRequest();
  }

  async buscarUsuario(){
    //...
    try {
      let idGerson: number = 1;
      let { data, error } = await this.supabase
      .from('Usuarios')
      .select('*')
      .eq('id', idGerson);
      this.resp.success = true;
      this.resp.data = data;
    } catch (e) {
      this.resp.success = false;
      this.resp.error = e;
      console.log(`Error en la consulta: ${e}`);
    }
    return this.resp;
  }

  buscarExperienciaProfesional(){
    //...
  }

  buscarDetalleDeExperiencia(){
    //...
  }

  buscarEducacion(){
    //...
  }

  async redesSocialesYRepositorio(){
    try {
      let idGerson: number = 1;
      let { data, error } = await this.supabase
      .from('PlataformasUtilizadasPorLosUsuarios')
      .select('*')
      this.resp.success = true;
      this.resp.data = data;
    } catch (e) {
      this.resp.success = false;
      this.resp.error = e;
      console.log(`Error en la consulta: ${e}`);
    }
    return this.resp;
  }

  async buscarExperienciasLaborales(){
    try {
      let { data, error } = await this.supabase
      .from('Educacion')
      .select('*')
      this.resp.success = true;
      this.resp.data = data;
    } catch (e) {
      this.resp.success = false;
      this.resp.error = e;
      console.log(`Error en la consulta: ${e}`);
    }
    return this.resp;
  }

  async buscarLasHabilidadesTecnicas(){
    try {
      let { data, error } = await this.supabase
      .from('Habilidades')
      .select('*')
      .order("habilidad")
      this.resp.success = true;
      this.resp.data = data;
    } catch (e) {
      this.resp.success = false;
      this.resp.error = e;
      console.log(`Error en la consulta: ${e}`);
    }
    return this.resp;
  }

  async buscarLasExperiencias(){
    try {
      let { data, error } = await this.supabase
      .from('ExperienciaProfesional')
      .select('*')
      .order("id")
      this.resp.success = true;
      this.resp.data = data;
    } catch (e) {
      this.resp.success = false;
      this.resp.error = e;
      console.log(`Error en la consulta: ${e}`);
    }
    return this.resp;
  }
}
