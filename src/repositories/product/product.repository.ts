// Repository é uma Interface, e interfaces são Contratos que definiem quais métodos e propriedades uma classe ou objeto deve implementar.
// Contratos são interfaces que vão fazer a conexão entre outras partes da minha aplicação com as implementações concretas
// sem que alguém que dependa de um repository precise conhecer a implementação concreta

import { Product } from "../../entities/product";

export interface ProductRepository {
  // Em interfaces os métodos não precisam de modificadores de acesso como "public" ou "private".
  // Isso ocorre porque em uma inteface "todos os métodos são implicitamente públicos."
  // Uma interface serve apenas para descrever o contrato, e o foco é apenas na assinatura dos métodos, 
  // não em seus detalhes de implementação ou modificadores de acesso.
  save(product: Product): Promise<void>
  list(): Promise<Product[]>
  update(product: Product): Promise<void>
  find(id: string): Promise<Product | null>
}