# Use a imagem oficial do Node.js
FROM node:18-alpine

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app/backend

# Copie os arquivos de package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie os arquivos do código-fonte para o diretório de trabalho
COPY . .

# Comando padrão para iniciar o servidor Node.js
CMD ["npm", "start"]
