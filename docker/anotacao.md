# Aprendendo Sobre o Docker 🐳

## O que é Docker?

_O docker é um software. Isso é claro pra mim como água. Um software de virtualização. Um software que pega nossas aplicações, serviços e etc e faz meio que um "padrão universal" da nossa aplicação em um cantainer. Guardando lá, imagino eu, codigos, dados sensiveis, necessidades pra funcionamento com suas versões e regras. Foi a concepção que eu tive estudando o docker (embora ainda revisando, e posso estar enganada) a questão dos containeir e image foram mais claras pra mim._

_OBS: O docker, mais especificamente os containers usam a tecnologia linux por debaixo dos panos ali_

---

## Os três conceitos principais

### Image (Imagem)

_Pelo nome ser image ou imagem passada para o português, já deixa tudo bem claro. Gosto de usar analogias pra que um assunto complexo fique simples. Colocaria images como literalmente uma foto, para ser mais visual e pra que você que esteja lendo entenda, colocaria como uma foto de um balanço. Certamente sabemos que a foto de um balanço vai conter o assento onde se vai balançar, pilares de sustentação (ou a classica árvore do quintal) e sabera que para se ter um balanço funcional, precisaria disso tudo. Então é assim que eu defino uma image, uma definição de necessidades de uma aplicação para a geração de uma imagem_

### Container

_Já os containers podemos ver como um "video do balanço", tem as necessidades do balanço, pilares e assentos  é uma instancia da nossa foto(image), uma image em execução._

### Docker Compose

_( pra que serve o Docker Compose? )_

---

## O problema que o Docker resolve

Bem, eu peguei um exemplo muito bom e vou querer aplicar a maneira da Vhicky🌻. Vamos lá, imagina que você é um jardineiro de flores, árvores frutíferas, escolha o que lhe for mais confortável, vou usar flores, mas ainda sim é um jardineiro, ponto final.

No jardim da sua casa você tem seus **conhecimentos** pra cuidar das suas plantações de flores. E como um jardineiro competente que é, você não tem apenas seu conhecimento, você tem **ferramentas.**

Suponhamos que a senhorita Narciso viu que você cuida muito bem das suas flores, então decidiu pedir pra que cuidasse das dela também. Você, como um ávido jardineiro, disse que sim. Porém, entretanto, todavia, assim que chegou na casa da senhora Narciso, viu que as que ela tinha em seu kit não eram as mesmas **ferramentas** necessarias pra cuidar de um belo jardim, as ferramentas dela não eram compatíveis com o seu serviço e seus **conhecimentos** se mostraram inúteis sem as ferramentas certas, e mesmo que você tentasse, as flores e o jardim continuariam a ficar sem graça..

Vendo isso, você definiu com a senhora Narciso que trabalharia com as suas próprias ferramentas. Mas em vez de carregá-las soltas por ai , pelo jardim dela e o seu, você as organizou em um **kit básico**, que sempre tem: a pá certa, o adubo certo, a tesoura certa, um kit que você sempre leva onde quer que vá, e que sempre tem exatamente o que você precisa. Mesmo que o jardim mude, o kit não muda. E por isso, o seu trabalho de jardineiro vai ser belo e bonito em qualquer jardim, porque as **ferramentas** certas junto com o **conhecimento** sempre chegam juntos com você.

Certo Vicky e como isso funciona? Oque bulhufas isso tem haver com Docker? como isso me explica o que o problema que o docker soluciona? Simples.

você o jardineiro, poda as flores, capina as ervas doninhas, você trabalha, "funciona". -> **Aplicação**.

seu **conhecimento** é precioso, como um guia marcado das acões do que o jardineiro faz -> **códigos**

E tudo que a aplicação, no caso o jardinerio precisa pra trabalhar, aberto e pronto pra usar em qualquer jardim, conhecimentos e ferramentas essenciais. -> **container**.

A lista de seu kit? Uma lista de ferramentas que você precisa pra trabalhar, listada com todas as ferramentas necessarias, logo -> **Image**

O jardim da dona Narciso, é o ambiente que vai receber você, que vai receber todo o jardineiro, as ferramentas dele, que vai permitir a verificação das ferramentas, se todas seguem a lista, que vai abrir espaço pra aplicação do conhecimento. -> **Docker**

---

## docker-compose.yml

### O que é esse arquivo?

_( pra que serve o arquivo YAML do Docker? )_

### Estrutura básica

```yaml
# cola aqui os exemplos que forem aparecendo durante a aula
```

### Explicação linha a linha

_( anota aqui o que cada parte do YAML faz )_

---

## Comandos úteis

| Comando               | O que faz |
| --------------------- | --------- |
| `docker compose up`   |           |
| `docker compose down` |           |
|                       |           |

---

## ✏️ O que aprendi

_( resumo geral com suas palavras )_

## ✅ O que ficou claro

_( o que você consegue explicar sem consultar )_

## ❓ O que ainda gera dúvida

_( o que ficou em aberto )_
