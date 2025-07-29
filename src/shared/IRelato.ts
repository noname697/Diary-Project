export interface IRelato {
  id?: number | string | undefined;
  data: Date | string;
  texto: string;
  favorito?: boolean | undefined;
  createdAt?: Date;
}
