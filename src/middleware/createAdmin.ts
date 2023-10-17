import { AdminService } from '../services/Admin.service';

// Exemplo de uso:
AdminService.create('admin', 'genshinimpact@gmail.com', '020619!Ns')
  .then(admin => {
    console.log('Administrador criado:', admin);
  })
  .catch(error => {
    console.error('Erro ao criar administrador:', error);
  });
