export function checkPasswordCriteria(password?: string) {
  if (!password) return

  const criteriaMet = []

  // Verifica se a senha tem pelo menos 8 caracteres
  if (password.length >= 8) criteriaMet.push('Tem pelo menos 8 caracteres')

  // Verifica se a senha contém letras maiúsculas
  if (/[A-Z]/.test(password)) criteriaMet.push('Contém letras maiúsculas')

  // Verifica se a senha contém letras minúsculas
  if (/[a-z]/.test(password)) criteriaMet.push('Contém letras minúsculas')

  // Verifica se a senha contém números
  if (/\d/.test(password)) criteriaMet.push('Contém números')

  // Verifica se a senha contém caracteres especiais
  if (/[^A-Za-z\d]/.test(password)) criteriaMet.push('Contém caracteres especiais')

  return criteriaMet
}
