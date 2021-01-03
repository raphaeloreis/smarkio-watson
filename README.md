# smarkio-watson
Teste prático de programação
Por Raphael Oliveira dos Reis

## Execução
É necessário ter o MySQL rodando com as seguintes configurações:
```
host: 'localhost',
port: 3306,
user: 'root',
password: '',
database: 'smarkio'
```

OBS.: A base de dados **smarkio** deve ser previamente criada.

Para executar basta rodar o comando no diretorio raiz da aplicação:
```
npm start
```

E acessar o endereço abaixo via browser
```
http://localhost:3000
```

## Requisitos
- Node.js 14.15.x
- MySQL 7.4.x

No Windows, você precisa instalar algumas ferramentas de build (Python incluído). Basta executar no PowerShell (como administrador) a seguinte linha:
```
npm install --global --production windows-build-tools
```