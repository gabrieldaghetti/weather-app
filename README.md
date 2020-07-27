# Aplicativo de Clima

by Gabriel Daghetti <br/>

## Descrição
Na paste /src/index.js temos a mains function, responsável por fazer as chamadas para a api da OpenWatherMap, assim como acessar a api de localização do telefone do usuário e controlar as animações do app.

## Chamadas OWM e Location
As duas chamadas são feitas com a ajuda de um hook useEffect e depois as informações são armazenadas em um state.

## Animações
Neste componente também é realizado o controle da animação do Card que possui a previsão da semana.

##  Basic Usage
Para instalar os pacotes, rodar o comando:
> yarn

Para executar o app em um emulador, rodar o comando abaixo substituindo 'platform' por android ou ios:
> yarn 'platform'

Para ler a documentação completa, rodar o comando:
> yarn docz dev
