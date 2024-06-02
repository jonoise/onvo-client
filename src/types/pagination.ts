export interface OnvoPaginationParams {
  createdAt_lt?: string // Filtrar createdAt menor que el valor especificado
  createdAt_lte?: string // Filtrar createdAt menor o igual que el valor especificado
  createdAt_gt?: string // Filtrar createdAt mayor que el valor especificado
  createdAt_gte?: string // Filtrar createdAt mayor o igual que el valor especificado
  endingBefore?: string // Cursor para paginación, ID de un objeto existente
  limit?: number // Límite en la cantidad de objetos a retornar
  startingAfter?: string // Cursor para paginación, ID de un objeto existente
}
