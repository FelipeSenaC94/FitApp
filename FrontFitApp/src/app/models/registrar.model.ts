//cadastrar um novo usuário
export interface Registrar {
  id: number;
  email: string;
  senha: string;
  dataDeCriacao: Date;
  dataDeAlteracao: Date;
}
