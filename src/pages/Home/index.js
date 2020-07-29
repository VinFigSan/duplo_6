import React from 'react';
import PageDefault from '../../components/PageDefault'
import BannerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel'
import dadosInicias from '../../data/dados_iniciais.json'

function Home() {
  return (
    <div style={{backgroundColor: "#000"}}>
      <PageDefault>
        <BannerMain
          videoTitle={dadosInicias.categorias[0].videos[0].titulo}
          url={dadosInicias.categorias[0].videos[0].url}
          videoDescription={"O que é front-end?"}
        />
        <Carousel
          ignoreFirstVideo
          category={dadosInicias.categorias[0]}
        />
        <Carousel
          category={dadosInicias.categorias[1]}
        />
        <Carousel
          category={dadosInicias.categorias[2]}
        />
      </PageDefault>
    </div>
  )
}

export default Home;
