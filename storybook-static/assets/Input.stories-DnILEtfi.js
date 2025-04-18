import{I as C}from"./index-BcftvrW1.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-C08qFUpE.js";import"./stitches.config-C7D1k03O.js";const T={title:"Components/Input",component:C,tags:["autodocs"],argTypes:{inputSize:{control:"radio",options:["sm","md","lg"],description:"Tamanho do input"},fullWidth:{control:"boolean",description:"Ocupa 100% da largura do container"},label:{control:"text",description:"Label do input"},placeholder:{control:"text",description:"Texto placeholder"},errorMessage:{control:"text",description:"Mensagem de erro"},iconLeft:{control:!1,description:"Ícone à esquerda"},iconRight:{control:!1,description:"Ícone à direita"},css:{control:!1,description:"Estilos customizados com Stitches"},id:{control:"text",description:"ID único para acessibilidade"},type:{control:"select",options:["text","password","email","number"],description:"Tipo do input"}}},e={args:{id:"default-input",placeholder:"Digite algo...",inputSize:"md"}},o={args:{...e.args,id:"labeled-input",label:"Nome completo"}},r={args:{...e.args,id:"icon-input",label:"Buscar"}},a={args:{...e.args,id:"error-input",label:"Email",errorMessage:"Email inválido",placeholder:"exemplo@email.com"}},t={args:{...e.args,id:"fullwidth-input",label:"Endereço completo",fullWidth:!0,placeholder:"Rua, número, complemento..."}},s={args:{...e.args,id:"disabled-input",label:"Campo desabilitado",placeholder:"Campo não editável"}};var n,i,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    id: "default-input",
    placeholder: "Digite algo...",
    inputSize: "md"
  }
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var c,d,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "labeled-input",
    label: "Nome completo"
  }
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,m,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "icon-input",
    label: "Buscar"
  }
}`,...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var h,b,f;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "error-input",
    label: "Email",
    errorMessage: "Email inválido",
    placeholder: "exemplo@email.com"
  }
}`,...(f=(b=a.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var D,W,x;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "fullwidth-input",
    label: "Endereço completo",
    fullWidth: true,
    placeholder: "Rua, número, complemento..."
  }
}`,...(x=(W=t.parameters)==null?void 0:W.docs)==null?void 0:x.source}}};var E,I,S;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "disabled-input",
    label: "Campo desabilitado",
    placeholder: "Campo não editável"
  }
}`,...(S=(I=s.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};const w=["Default","WithLabel","WithIcons","WithError","FullWidthInput","DisabledInput"];export{e as Default,s as DisabledInput,t as FullWidthInput,a as WithError,r as WithIcons,o as WithLabel,w as __namedExportsOrder,T as default};
