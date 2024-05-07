# Usar a imagem oficial do Node.js como base
FROM node:14

# Definir o diretório de trabalho no contêiner
WORKDIR /app

# Copiar o arquivo package.json e package-lock.json (se disponível)
COPY package*.json ./

# Instalar dependências do projeto
RUN npm install

# Copiar os arquivos restantes do projeto para o diretório de trabalho
COPY . .

# Expor a porta que a aplicação usa
EXPOSE 3010

# Comando para rodar a aplicação
CMD ["npm", "run", "start"]