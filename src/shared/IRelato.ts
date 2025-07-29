export interface IRelato {
  id?: string | undefined;
  data: Date | string;
  texto: string;
  favorito?: boolean;
  createdAt?: Date;
}
