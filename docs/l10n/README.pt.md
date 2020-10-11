<!-- armirage .github README.md -->

[:earth_americas: :speech_balloon: Portuguese](https://github.com/armirage/grunt-remove-js-comments/blob/master/docs/l10n/index.md)\
[Índice](#índice)

<!-- Armirage OSS Header -->
<div align="right">
	<a href="https://armirage.github.io" target="_blank" rel="noopener">
		<img src="https://armirage.github.io/images/banners/armirage-oss-header.webp" alt="Armirage OSS Header. The Armirage logo; A person icon wrapped in a leaf forming an 'A'. Armirage name and a tilted rubber stamp of approval with the letters 'OSS' cover the rightmost corner." width="160px">
	</a>
</div>

<!-- Banner -->
<div align="center" id="anchor-1">
	<img src="https://raw.githubusercontent.com/armirage/grunt-remove-js-comments/master/docs/images/grunt-remove-js-comments-banner.webp" alt="A wall is covered in notes. Different size sticky notes litter its surface. Hand written notes written on paper ripped from spiral bond notebooks are pinned to the surface. Some pages are torn from glue bond notepads and thumb tacked up. Some sticky notes are heart shaped. The messages are haphazardly placed deeply layered atop each other. They Contain messages such as, 'see you again', reminders of upcoming events, messages of encouragement. The notes overwhelm the wall, its surface completely covered and unknowable." width="100%">
	<div align="right">
		<small>"Sticky Note Lot" by Min An, licensed under Pexels.</small>
		<sup>
			<a href="#banner-note">[1]</a>
		</sup>
	</div>
</div>

&nbsp;

<!-- Content -->
<!-- Workaround to display <h1> correctly in NPM lest it duplicate rendering. -->
<!-- omit in toc -->

# <sup><em>@armirage/</em></sup>grunt-remove-js-comments&nbsp;&nbsp;<a href="https://www.npmjs.com/package/@armirage/grunt-remove-js-comments" alt="npm package link" target="_blank"><img src="https://armirage.github.io/images/external-companies/npm/npm-logo/classic/npm-2009.svg" alt="npm logo" width="64"></a>&nbsp;&nbsp;<a href="https://github.com/armirage/grunt-remove-js-comments" alt="github repo link" target="_blank"><img src="https://armirage.github.io/images/external-companies/github/github-mark/GitHub-Mark-64px.png" alt="github logo" width="32"></a>

[![GitHub tag (latest by date)](https://img.shields.io/github/v/release/armirage/grunt-remove-js-comments)](https://github.com/armirage/grunt-remove-js-comments/releases)
[![GitHub issues](https://img.shields.io/github/issues/armirage/grunt-remove-js-comments)](https://github.com/armirage/grunt-remove-js-comments/issues/)
[![Github code size](https://img.shields.io/github/languages/code-size/armirage/grunt-remove-js-comments)](https://github.com/armirage/grunt-remove-js-comments/releases)
[![GitHub license](https://img.shields.io/github/license/armirage/grunt-remove-js-comments)](https://github.com/armirage/grunt-remove-js-comments/blob/master/LICENSE.md)
[![armirage-style](https://img.shields.io/badge/code%20style-armirage-brightgreen)](https://github.com/armirage/grunt-remove-js-comments)
[![liberapay-patrons](https://img.shields.io/liberapay/patrons/armirage.svg?logo=liberapay)](https://www.liberapay.com/armirage)

> Escolha entre JSDocs, Multiline, Single line, Header lines, Comment Anchors, Marked comments, comentarios em estilo HTML, ou remova de acordo com um padrão Regex. Esse plugin oferece esse tipos de seleções.

&nbsp;

<div align="center">
	<img src="https://raw.githubusercontent.com/armirage/grunt-remove-js-comments/master/docs/images/example-removal.gif" alt="Screen recording showing inconsistent code being linted into the Armirage style." width="730px">
</div>

<!-- omit in toc -->

## Índice

- [Sobre](#sobre)
- [Instalar](#instalar)
  - [Requisitos](#requisitos)
- [Uso](#uso)
- [Opções](#opções)
  - [removeJSDocs](#removejsdocs)
  - [removeMultilines](#removemultilines)
  - [removeAnchors](#removeanchors)
  - [removeSpecials](#removespecials)
  - [removeHeaderLines](#removeheaderlines)
  - [removeDoubleSlashes](#removedoubleslashes)
  - [removeHTMLStyle](#removehtmlstyle)
  - [removeRegex](#removeregex)
- [Como Contribuir](#como-contribuir)
- [Reconhecimentos](#reconhecimentos)
- [Contato](#contato)
- [Histórico de Releases](#histórico-de-releases)
- [Rodapé](#rodapé)

## Sobre

Grunt é um executador de tasks em Javascript. Ele facilita a automação de processos. Eles tem tipos diferentes de plugin para tipos diferentes de tasks. Se um plugin não existe é facil e rápido e construir um personalizado.

Se voce é novo no grunt, da uma olhada no guia de ["Getting Started"](http://gruntjs.com/getting-started). Esse guia explica em detalhes como instalar Grunt, usar plugins e criar um `Gruntfile.js`.

Esse plugin permite voce selecionar quais comentarios remover (por sintaxe) e quais não remover. Se a lista de opções de comentários não abrange seu caso voce pode usar uma expressão Regex para encontrar o codigo que deve ser removido. (Uma opção bem poderosa de personalizar esse plugin)

## Instalar

### Requisitos

- ✅ [Grunt](https://gruntjs.com)

Para instalar grunt e esse plugin, rode o seguinte commando no seu terminal:

```console
npm install grunt @armirage/grunt-remove-js-comments --save-dev
```

- :pencil: NOTA: O plugin é limitado ao npm e precisa ser referenciado dessa forma.

Esse comando irá nstalar esses projetos como uma dependencia de desenvolvimento. Provavelmente eles serão ultilizados apenas nesse estagio (de desenvolvimento) e não será necessário em builds de produção

No terminal, crie tambem o arquivo de configuração `Gruntfile.js`:

```console
touch Gruntfile.js
```

- :pencil: NOTE: O "G" deve ser maiúsculo.

Para a instalação completa veja [Uso](#uso).

## Uso

Assim que o plugin grunt-remove-js-comments estiver instalado, voce pode configurar as tarefas para rodar no arquivo `Gruntfile.js`.

// Gruntfile.js

```javascript
module.exports = function (grunt) {
  grunt.initConfig({
    "remove-js-comments": {
      dev: {
        options: {
          removeJSDocs: true,
          removeMultilines: true,
          removeAnchors: true,
          removeSpecials: false,
          removeHeaderLines: true,
          removeDoubleSlashes: true,
          removeHTMLStyle: true,
          removeRegex: "",
        },
        src: "index.js",
        dest: "output.js",
        expand: false,
      },
    },

    pkg: grunt.file.readJSON("package.json"),
  });

  grunt.loadNpmTasks("@armirage/grunt-remove-js-comments");

  grunt.registerTask("default", ["remove-js-comments"]);
};
```

- :pencil: NOTA: O plugin é limitado ao npm e precisa ser referenciado dessa forma.

## Opções

Para mais informações em passar opções em um arquivo `Gruntfile.js` veja [a documentação do Grunt: "Configuring Tasks"](https://gruntjs.com/configuring-tasks)

_\* Qualquer opção nao listada no Gruntfile.js terá seu valor padrão ultilizado._

### removeJSDocs

Tipo: `Boolean`
Valor padão: `false`

> JSDoc <sup id="anchor-3">[3](#jsdocs-note)</sup> é uma API de documentação de Javascript, bem similar ao Javadoc ou phpDocumentor.
>
> Você adiciona comentários com a documentação diretamente no arquivo que você esta codificando, junto do código em si. A aplicação do JSDoc vai escanear seu codigo finte e vai gerar um site com a documentação em HTML para você.
>
> Para ler mais sobre a API de geração de JSDoc, você pode acessar [Site do JSDoc](https://jsdoc.app/about-getting-started.html).

Para remover os comentarios JSDocs, corrspondentes o formato a seguir, configure como `true`.

```javascript
/** inline JSDoc comment */

/**
 * @comment stuff be here
 */
```

### removeMultilines

Tipo: `Boolean`
Valor padrão: `false`

Para remover comentarios que seguem o formato a serguir, coloque o valor como `true`.

```javascript
/* inline comment using multiline syntax */

/*
 comments in here
 */
```

- :pencil: NOTA:Colocar o valor como `true` não removeos comentários JSDoc, mesmo que eles sejam um tipo de comentario Multiline.

### removeAnchors

Tipo: `Boolean`
Valor padrão: `false`

> Comment Anchors <sup id="anchor-4">[4](#comment-anchors-note)</sup>é uma extensão do VS Code <sup id="anchor-5">[5](#vs-code-note)</sup>.
>
> Programadores co deficiência visual podem ter problemas navegando a base de código. Tecnicas como identação, quebra de linhas, cores diferentes para palavras chaves da linguagem (como IF-THEN), são dicas visuais para programadores conseguirem visualizar e navegar melhor pelo código. Esses sinais não são passados atravéz de dispositivos auxiliares.
>
> Comment Anchors escaneia e trata certas partes do codigo como se fossem hyperlinks no codigo. Provendo uma navegação textual com links no seu código.
>
> Para ter Comment Anchors faça o download em [Comment Anchors from Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=ExodiusStudios.comment-anchors)

Para remover comentários Comment Anchors, Seguindo o formato abaixo, set to `true`.

```javascript
// ANCHOR link here

// FIXME A pesky bug.

// TODO One more thing etc..
```

### removeSpecials

Type: `Boolean`
Default value: `false`

To remove special comments, matching the following format, configure como `true`.

```javascript
/*! Author: Nathaniel Hawthorne !*\

/*# Let's not lose this.
```

- :pencil: NOTA: Muitas bibliotecas usam esse tipo de comentarios para mostrar a autoria. Se você não é o dono codigo por inteiro, considere deixar essa opção como default por motivos de copyright.

### removeHeaderLines

Tipo: `Boolean`
Valor padrão: `false`

Para remover cometarios do tipo `header line comments`, que correspondem com o seguinte padrão, configure como `true.`

```javascript
//---------

//=========

//-+-+-+-+-+
```

### removeDoubleSlashes

Tipo: `Boolean`
Valor padrão: `false`

Para remover comentarios com duas barras ou `double slash comments`, que correspondem com o seguinte padrão, configure como `true.`

```javascript
// apenas uma linha
```

- :pencil: NOTA: Configurar como true não remove Comment Anchors, specials, ou header lines, mesmo que eles sejam um tipo de comentarios de uma unica linha usando duas barras.

### removeHTMLStyle

Tipo: `Boolean`
Pagraão: `false`

> Mesmo que grunt-remove-js-comments tem a a internaçao de ser usado e foi testado para arquivos JavaScript,
> eu percebi que é seguro usa-lo para o meu projeto inteiro. Eu so ele em arquivos HTML, CSS,
> XML e outro tipo de arquivos. As remoçoes sao seguras para urls de CSS.

Para remover comantários HTML, que correspondem com o seguinte padrão, configure como `true.`

```html
<!-- comentário aqui -->
```

### removeRegex

Tipo: `string`
Valor padrão: ""

> "Regex" é uma forma informal de se referir a RegExp. uma expressão regular é um objeto que descreve um padão de caracteres.
> Expressões regulares são usados para encontrar padrões e funções de "pesquisar e substituir" em textos.
>
> Para aprender mais sobre Expressões Reguraes em Javascript, você pode olhar [o site da W3C Schools](https://www.w3schools.com/jsref/jsref_obj_regexp.asp).

Para remover código que corresponde a uma expressão regular, configure está opçao para uma string "regex".

Exemplo "Configurando a opção removeRegex":
// Gruntfile.js excerpt

```javascript
...
options: {
	removeRegex: "/^[\t\s]*(\/\/)\s*T\d{2}:\d{2}:\d{2}Z/gm"
}
...
```

Vai remover todas as linhas que correspondem a esse padrão, por exemplo:

```javascript
// 2015-12-22T17:44:24Z
```

- :warning: AVISO: Isso vai remover tudo que corresponder a esse padrão. Não limitado a apenas comentários.

## Como Contribuir

de uma olhada nas [Guidelines de Contribuição](https://github.com/armirage/.github/blob/master/CONTRIBUTING.md) para formas de deixar esse repositorio melhor.

Open Source Software (OSS) é tão forte quanto sua comunidade.

<a href="https://liberapay.com/armirage/donate"><img alt="Donate using Liberapay" src="https://liberapay.com/assets/widgets/donate.svg"></a> &nbsp; Obrigada!

## Reconhecimentos

Grunt é fácil e extensivel. Ele interage bem com com processos de Integraçao Contínua (CI). Meus agradecimentos!

Inspirado pelo codigo original do grunt-remove-comments feito por [echoloyuk](https://github.com/echoloyuk).


Onrigado a [BeatrizHerculano](https://github.com/BeatrizHerculano) ![BeatrizHerculano](https://avatars1.githubusercontent.com/u/15809077?s=50) por traduzir o [README para Português.](https://github.com/armirage/grunt-remove-js-comments/blob/master/docs/l10n/README.pt.md)

## Contato

Os repositórios Armirage e os módulos NPM de @armirage são mantidos por [Armirage](https://www.armirage.com), uma empresa de soluções tecnologicas. Sinta-se live para <a href="mailto:helloyall@armirage.com">entrar em contato</a>!

## Histórico de Releases

- 2020-09-30 Mudança critica, logica revertida para remover algumas coisas. Atualizado para o estilo Armirage.
- 2020-09-18 Mudança critica, mudou JSdocs para JSDoc, e adicionou Expressões Regulares.
- 2020-09-16 Inicio

## Rodapé

<b id="banner-note">[1]:</b> ["Sticky Note Lot"](https://www.pexels.com/photo/sticky-note-lot-1629212/) by [Min An](https://www.pexels.com/@minan1398), licenciado sob [Pexels](https://www.pexels.com/license/) [:arrow_heading_up:](#anchor-1)

<b id="grunt-note">[2]:</b> Grunt: The JavaScript Task Runner <https://gruntjs.com/> [acessado dia 30 de Setembro de 2020] [:arrow_heading_up:](#anchor-2)

<b id="jsdocs-note">[3]:</b> @Use JSDoc <https://jsdoc.app/index.html/> [acessado dia 30 de Setembro de 2020] [:arrow_heading_up:](#anchor-3)

<b id="comment-anchors-note">[4]:</b> Comment Anchors - Exodius Studios <https://marketplace.visualstudio.com/items?itemName=ExodiusStudios.comment-anchors/> [acessado dia 30 de Setembro de 2020] [:arrow_heading_up:](#anchor-4)

<b id="vs-code-note">[5]:</b> Visual Studio Code <https://code.visualstudio.com/> [acessado dia 30 de Setembro de 2020] [:arrow_heading_up:](#anchor-5)

&nbsp;

&nbsp;

<div align="right">
  <p>Armirage logos Copyright © 2020, Clinton Mulligan. Todos os direitos reservados.</p>
</div>
</https:>
