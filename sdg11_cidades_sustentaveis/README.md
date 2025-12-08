# ODS 11 - Cidades e Comunidades Sustentáveis
**Análise de Adequabilidade e Acessibilidade Cicloviária em Curitiba/PR**

**Aluno:** Halan Patrick Pereira Nowak  

---

## 🌍 Acesso Online

🔗 **[Clique aqui para visualizar o Mapa Interativo (WebGIS)](https://labgeolivreufpr.github.io/sig_sdgs_2025/sdg11_cidades_sustentaveis/)**

---

## 🗺️ Sobre o Projeto

Este projeto tem como objetivo avaliar a infraestrutura cicloviária de Curitiba utilizando técnicas de Geoprocessamento e Análise Espacial. O foco é identificar vazios urbanos, áreas com barreiras físicas (relevo) e medir a acessibilidade temporal aos terminais de transporte público, promovendo a integração intermodal.

---

## 📥 Downloads (Pranchas em PDF)

Acesse os mapas em alta resolução formatados em A4 para impressão:

* 📄 **[Mapa 01 - Índice de Adequabilidade (PDF)](pdfs/mapa1.pdf)**
* 📄 **[Mapa 02 - Acessibilidade Temporal (PDF)](pdfs/mapa2.pdf)**
* 📄 **[Mapa 03 - Esforço Físico / Declividade (PDF)](pdfs/mapa3.pdf)**

---

## 🛠️ Metodologia e Camadas

O processamento foi realizado no software **QGIS 3.34.5**. Abaixo, a descrição de cada análise:

### Mapa 01: Índice de Adequabilidade (MCDA)
Aplicação de uma Análise Multicritério (Algebra de Mapas) para identificar locais ideais para novas ciclovias.
* **Critérios:** Declividade (Peso Alto) + Densidade Demográfica (Peso Médio) + Proximidade de Serviços.
* **Simbolização:** Escala de cores de **Laranja (Inadequado)** a **Azul (Ideal)**.

### Mapa 02: Acessibilidade Temporal (Isócronas)
Cálculo de áreas de serviço baseado em tempo de deslocamento utilizando o plugin **QNEAT3**.
* **Análise:** Tempo necessário para se deslocar de qualquer ponto da cidade **até** o Terminal de Ônibus mais próximo.
* **Parâmetros:** Velocidade média de 15 km/h (bicicleta).
* **Simbolização:** Faixas de 5 minutos (Azul = < 5 min; Vermelho = > 30 min).

### Mapa 03: Esforço Físico (Declividade)
Classificação da rede viária conforme a inclinação do terreno, destacando barreiras físicas.
* **Nota Técnica:** Devido à alta densidade da malha viária de Curitiba (+50 mil segmentos), a camada vetorial foi convertida para **Raster** para otimização de performance na Web.
* **Simbolização:** Verde (Plano 0-3%), Amarelo (Moderado) e Vermelho (Íngreme >8%).

---

## 📂 Fontes de Dados

1.  **Eixos de Logradouros e Ciclovias:** * Portal de Dados Abertos do IPPUC (Instituto de Pesquisa e Planejamento Urbano de Curitiba).  
    * [Acessar IPPUC](https://ippuc.org.br/geodownloads/geo.htm)

2.  **Dados Demográficos (Densidade):** * Censo Demográfico 2022 - Agregados por Setores Censitários.  
    * [Acessar IBGE](https://www.ibge.gov.br/)

3.  **Altimetria (Relevo):** * Modelo Digital de Terreno (MDT) do projeto Topodata (INPE), derivado do SRTM.  
    * [Acessar Topodata](http://www.webmapit.com.br/inpe/topodata/)

---

## 💻 Tecnologias Web

O mapa web foi gerado utilizando o plugin **QGIS2Web** (biblioteca Leaflet), com customizações em HTML/CSS/JS para implementação de:
* Menu de navegação estilo "Dock".
* Gerenciador de legendas dinâmicas.
* Painel lateral informativo.

