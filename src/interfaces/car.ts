export interface Car {
  id: string;
  marca: string;
  modelo: string;
  ano: number;
  cor: string;
  precoDiaria: number;
  disponivel: boolean;
  imgUrl: string;
  descricao: string;
  dataCadastro: string;
	hasModel3d: boolean;
	model3dUrl: string | null;
}

export interface CarFilters {
  marcaModelo?: string;
  ano?: string;
  precoDiaria?: string;
}
