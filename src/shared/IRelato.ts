export interface IRelato {
  id?: Number | string | undefined;
  data: Date | string;
  texto: string;
  favorito?: boolean;
  createdAt?: Date;
}
