export type Position = 'Presidente' | 'Diretor' | 'Gerente' | 'Desenvolvedor' | 'Desenvolvedora';

export interface Professional {
  id: number;
  foto: string;
  nome: string;
  cargo: Position;
  idade: 28;
}