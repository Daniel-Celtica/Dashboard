const images = [
    { id: 1, src: process.env.PUBLIC_URL + 'home.svg', text: 'Home', state: 'home', link:'/' },
    { id: 2, src: process.env.PUBLIC_URL + 'perdas.svg', text: 'Perdas', state: 'perdas', link:'/perdas' },
    { id: 3, src: process.env.PUBLIC_URL + 'dt.svg', text: 'Dados Técnicos', state: 'dt', link:'/dadostecnicos' },
    { id: 4, src: process.env.PUBLIC_URL + 'os.svg', text: 'Ordem de Serviço', state: 'os', link:'/os' },
    { id: 5, src: process.env.PUBLIC_URL + 'config.svg', text: 'Configurações', state: 'config', link:'/configuracoes' }
  ];
  
  export default images;
 