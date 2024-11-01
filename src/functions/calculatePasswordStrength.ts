export function calculatePasswordStrength(password: string) {
  let strength = 0

  // Verifica se a senha tem pelo menos 8 caracteres
  if (password.length < 8) return 0

  // Incrementa a força com base nos critérios atendidos
  if (/[A-Z]/.test(password)) strength++ // Letras maiúsculas
  if (/[a-z]/.test(password)) strength++ // Letras minúsculas
  if (/\d/.test(password)) strength++ // Números
  if (/[^A-Za-z\d]/.test(password)) strength++ // Caracteres especiais

  // Retorna a força da senha como um valor entre 0 e 100
  return strength * 25 // Multiplica por 25 para converter em porcentagem
}
