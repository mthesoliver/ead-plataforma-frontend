'use client';

import CardCustomBorder from "Ead/Components/CardCustomBorder";
import styles from "./page.module.scss";
import Header from "Ead/Components/Header";
import VideoPlaceholder from "Ead/Components/VideoPlaceholder";
import YourCoursePlaceholder from "Ead/Components/YourCoursePlaceholder";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import 'bootstrap/dist/css/bootstrap.min.css';
import { List, ListItem, StyledEngineProvider, Typography } from "@mui/material";
import Carousel from "Ead/Components/SliderCustom";
import HeroTextCustom from "Ead/Components/HeroTextCustom";
import CardSimple from "Ead/Components/CardSimple";
import Button from "Ead/Components/Button";
import Image from "next/image";
import StampCircle from "Ead/Components/StampCircle";
import InfiniteLogoScroll from "Ead/Components/InfiniteLogoScroll";
import YouTube from "react-youtube";
import CardTransparent from "Ead/Components/CardTransparent";
import CtaWrapper from "Ead/Components/CtaWrapper";
import IntegrationsImageCols from "Ead/Components/IntegrationsImageCols";
import PriceCard from "Ead/Components/PriceCard";
import AccordionCustom from "Ead/Components/AccordionCustom";
import Footer from "Ead/Components/Footer";
import { useState } from "react";
import DemonstrationCta from "Ead/Components/DemonstrationCta";
import DemonstrationForm from "Ead/Components/DemonstrationForm";
import BestFee, { CardFeeContent } from "Ead/Components/BestFee";
import PixIcon from '@mui/icons-material/Pix';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ReceiptIcon from '@mui/icons-material/Receipt';
import useResize from "Ead/CustomHooks/useResize";
import Link from "next/link";

export default function Home() {
  const { isMobile } = useResize();
  const [oveflowCard, setOverflowCard] = useState<boolean>(false);

  const handleOverflow = (e: any) => {
    e.preventDefault();
    setOverflowCard(!oveflowCard);
  }

  return (

    <StyledEngineProvider injectFirst>
      <header>
        <Header />
      </header>

      <main className={"container " + styles.main}>

        <section id="video_container" className="container d-flex flex-row row mb-5 w-100">
          <div className="container d-flex flex-column col w-100">
            <YourCoursePlaceholder />
            <div>
              <VideoPlaceholder videoId="OnH8go5IKEc" />
            </div>
          </div>
        </section>

        <section id="carousel_container" className="container d-flex flex-row row my-3 w-100">
          <div className="container d-flex flex-column col">
            <Typography component="h2" gutterBottom className='fw-semibold mb-3 z3 position-relative ' sx={{ fontSize: !isMobile ? 44 : 32, lineHeight: 1.4, textAlign: 'center', fontFamily: "Rajdhani" }} >
              Veja as possibilidades com a EAD Plataforma
            </Typography>
            <div className={"z3 position-relative"}>
              <Carousel>
                <CardCustomBorder givenIcon={ImportantDevicesIcon}
                  title="Venda seus cursos em nossa vitrine"
                  content="Com nossa plataforma, você pode criar, gerenciar e vender infoprodutos de forma fácil e eficaz." />
                <CardCustomBorder givenIcon={Diversity3Icon}
                  title="Criação de cursos coorporativos"
                  content="Nossa plataforma oferece tudo o que você precisa para criar uma escola de cursos online completa." />
                <CardCustomBorder givenIcon={DashboardCustomizeIcon}
                  title="Transforme sua plataforma para seu nicho"
                  content="Com nossa plataforma, você pode desenvolver capacitar seus colaboradores e acompanhar o progresso de cada um." />
                <CardCustomBorder givenIcon={ImportantDevicesIcon}
                  title="Venda seus cursos em nossa vitrine"
                  content="Com a nossa ferramenta de criação de áreas de membros, você pode oferecer acesso a materiais exclusivos e muito mais." />
              </Carousel>
            </div>
          </div>
        </section>

        <section id="cards_img_container" className="container d-flex flex-row row gap-4 mb-5 w-100">
          <div className="container d-flex flex-column col gap-4">
            <HeroTextCustom sub={"da nossa plataforma?"} title={"Quais são os principais recursos"} titleSize={80} />
            <div className={`d-flex flex-row gap-4 flex-${!isMobile ? 'nowrap' : 'wrap'}`}>
              <CardSimple title="EAD Live"
                link="https://docs.eadplataforma.com/docs/aulas-ao-vivo"
                subTitle="Deixe seus alunos mais engajados criando aulas ao vivo. Você pode disponibilizar um chat em tempo real para comunicação."
                imagePath="/assets/images/bg_card_image_2.png" size={!isMobile ? 7 : 12} />
              <CardSimple title="EAD Player"
                link="https://eadplataforma.com/eadplayer"
                subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim"
                imagePath="/assets/images/bg_card_image_1.png" size={!isMobile ? 5 : 12} />
            </div>
            <div className={`d-flex flex-row gap-4 flex-${!isMobile ? 'nowrap' : 'wrap'}`}>
              <CardSimple title="Provas e Certificados"
                link="https://docs.eadplataforma.com/docs/certificados-emitidos"
                subTitle="Insira provas entre aulas e módulos, torne a prova requisito, programe a liberação com data fixa ou flexível, área de boletim."
                imagePath="/assets/images/bg_card_image_4.png" size={!isMobile ? 5 : 12} />
              <CardSimple title="EAD Checkout"
                link="https://docs.eadplataforma.com/docs/ead-checkout"
                subTitle="Ofereça opções customizadas de pagamentos, configure parcelamento, juros e vencimento do boleto por curso."
                imagePath="/assets/images/bg_card_image_3.png" size={!isMobile ? 7 : 12} />
            </div>

            <section className={`d-flex flex-${!isMobile ? 'row' : 'column'} gap-4 flex-nowrap text-center justify-content-center align-items-center`}>
              <div className="justify-content-center align-items-center">
                <Button givenClass="fw-regular p-3 fs-6" rounded link="https://docs.eadplataforma.com/docs/ead-store">Confira todas as funcionalidades</Button>
              </div>
              <div className={`d-flex flex-${!isMobile ? 'row' : 'column'} text-center justify-content-${!isMobile ? 'end' : 'center'} align-items-${!isMobile ? 'end' : 'center'} gap-${!isMobile ? '4' : '1'}`}>
                <Typography component="h4" gutterBottom className='fw-light mb-2' sx={{ fontSize: 20, fontFamily: "Rajdhani" }} >
                  ou
                </Typography>
                <Typography component="a" gutterBottom className='fw-bold' sx={{ fontSize: 26, fontFamily: "Rajdhani" }} href="https://eadplataforma.com/criar-conta">
                  Crie sua plataforma agora mesmo
                </Typography>
              </div>
            </section>
          </div>
        </section>

        <section id="best_fee_container" className="container d-flex flex-row row gap-4 my-5 w-100">
          <div className="container d-flex flex-column col my-3 gap-4">

            <div className="d-flex flex-row col m-auto gap-4">
              <HeroTextCustom sub={"do mercado"} title={"As melhores taxas"} titleSize={86} />
            </div>

            <div className={"d-flex flex-row row gap-1"}>
              <BestFee direction={!isMobile ? 'row' : 'column'} >
                <CardFeeContent title="Pix" feeValues="R$0,00 + 1.89%" release="Imediatamente" givenIcon={PixIcon} size={!isMobile ? 3 : 12} />
                <CardFeeContent title="Cartão de crédito à vista" feeValues="R$0,10 + 4.29%" release="7 dias corridos" givenIcon={CreditCardIcon} size={!isMobile ? 3 : 12} />
                <CardFeeContent title="12x Cartão de crédito a prazo" feeValues="R$0,10 + 4.99%" release="7 dias corridos" givenIcon={CreditCardIcon} size={!isMobile ? 3 : 12} />
                <CardFeeContent title="Boleto" feeValues="R$1,85 + 3.79%" release="1 dia útil" givenIcon={ReceiptIcon} size={!isMobile ? 3 : 12} />
              </BestFee>
            </div>

          </div>
        </section>

        <section id="trust_us_container" className="container row gap-4 my-3 w-100">
          <div className="container d-flex flex-column col gap-4">
            <HeroTextCustom sub={"Sucesso com nossa plataforma EAD"} title={"Quem confia em nós!"} titleSize={60} />
            <figure>
              <Image src="/assets/images/trust_us_image.png" width={!isMobile ? 1440 : 480} height={!isMobile ? 450 : 160} alt="Imagem com clientes da empresa"
                className="position-relative top-0 start-50 translate-middle-x" placeholder="blur" blurDataURL="/assets/images/trust_us_image.png" loading="lazy" />
            </figure>
            <section className="text-center my-2 py-2">
              <StampCircle>Mais de 1.600 escolas confiam em nós</StampCircle>
              <InfiniteLogoScroll />
            </section>
          </div>
        </section>

        <section id="light_container" className={"container d-flex flex-row row gap-4 p-5 bg-light " + styles.full_width + ' ' + styles.align_to_top_el}>
          <div className={" d-flex flex-column col mt-5 " + styles.inner_contents}>
            <section id="clients_feedback_container" className={"d-flex flex-row row align-items-center"}>
              <div className={"d-flex flex-column col"}>
                <Typography component="h2" gutterBottom className='fw-bolder mb-3 z3 position-relative ' sx={{ fontSize: !isMobile ? 44 : 32, lineHeight: !isMobile ? 1.4 : 1, textAlign: 'center', fontFamily: "Rajdhani", color: "#7C038E" }} >
                  Veja o que nossos cliente falam sobre nós
                </Typography>
                <div className={`d-inline-flex flex-${!isMobile ? 'row' : 'column'} gap-4 justify-content-center align-items-center`}>
                  <YouTube videoId={'YNDLz591K1g'} className={styles.round_border_video} />
                  <YouTube videoId={'92Cyo_axj2w'} className={styles.round_border_video} />
                </div>

                <section className={`d-flex flex-${!isMobile ? 'row' : 'column'} gap-4 flex-nowrap text-center justify-content-center align-items-center my-5`}>
                  <div className="justify-content-center align-items-center">
                    <Button givenClass="fw-regular p-3 fs-6" rounded link="https://eadplataforma.com/demonstracao">Quero vender como eles!</Button>
                  </div>
                  <div className={`d-flex flex-${!isMobile ? 'row' : 'column'} text-center justify-content-${!isMobile ? 'end' : 'center'} align-items-${!isMobile ? 'end' : 'center'} gap-${!isMobile ? '4' : '1'}`}>
                    <Typography component="h4" gutterBottom className='fw-semibold mb-2' sx={{ fontSize: 20, fontFamily: "Rajdhani", color: "#1C0237" }} >
                      ou
                    </Typography>
                    <Typography component="a" gutterBottom className='fw-bold' sx={{ fontSize: 26, fontFamily: "Rajdhani", color: "#1C0237!important" }} href="https://eadplataforma.com/criar-conta" >
                      Crie sua conta gratuitamente
                    </Typography>
                  </div>
                </section>
              </div>
            </section>

            <section id="customize_container" className={" d-flex flex-row row gap-4"}>
              <div className={`d-flex flex-${!isMobile ? 'row' : 'column'} col gap-4`}>
                <div className={`justify-content-center align-items-center col-${!isMobile ? 5 : 12} mt-5`}>
                  <HeroTextCustom sub={"do seu jeito!"} title={"Sua plataforma EAD,"} titleSize={80} colorMode={"light"} align="left" />
                  <Typography component="p" sx={{ color: "#3F3F3F", fontSize: !isMobile ? 26 : 22 }}>
                    Na EAD você também pode personalizar sua plataforma em estilo Netflix!
                  </Typography>
                  <div className="mt-5">
                    <Button givenClass="fw-bold p-4 fs-5" rounded link="https://eadplataforma.com/trial">Comece agora mesmo</Button>
                  </div>
                </div>

                <figure className="justify-content-center align-items-center">
                  <Image src={"/assets/images/customize/custom_dark_purp.png"} width={!isMobile ? 1276 : 1276 / 3} height={!isMobile ? 830 : 830 / 3} alt="Layout personalizado" />
                </figure>
              </div>
            </section>
          </div>
        </section>

        <section id="features_container" className={"container d-flex flex-row gap-4 pt-5 mt-5 w-100"}>
          <div className={"container d-flex flex-column col gap-4 pt-5"}>
            <HeroTextCustom sub={"Confira nossas funcionalidades"} title={"Por que escolher a EAD plataforma?"} titleSize={60} align="left" />

            <section id="features_overflow" className={"row " + (!oveflowCard ? styles.features_overflow + ' ' + styles.features_overflow_closed : styles.features_overflow + ' ' + styles.features_overflow_open)}>
              {!isMobile && (
                <span className={"d-flex flex-row justify-content-center " + (!oveflowCard ? styles.features_overflow_btn : styles.features_overflow_btn_open)} onClick={(e: any) => handleOverflow(e)}>
                  <Button btnColor="light" rounded>
                    {!oveflowCard ? 'Confira a lista completa de funcionalidades' : 'Ocultar a lista de funcionalidades'}
                  </Button>
                </span>
              )}
              <div id="features_cards" className={`d-flex flex-row ${!isMobile ? 'row' : 'col'} pt-5 m-auto gap-4 justify-content-start w-100`}>
                <CardTransparent title="EAD LIVE"
                  subTitle="Deixe seus alunos mais engajados criando aulas ao vivo. Você pode disponibilizar um chat em tempo real para comunicação."
                  imagePath="/assets/images/card_icons/EAD_LIVE.png" size={!isMobile ? 3 : 8} />
                <CardTransparent title="EAD Checkout"
                  subTitle="Ofereça opções customizadas de pagamentos, configure parcelamento, juros e vencimento do boleto por curso."
                  imagePath="/assets/images/card_icons/EAD_Checkout.png" size={!isMobile ? 3 : 8} />
                <CardTransparent title="API Webhooks"
                  subTitle="Integre seu EAD com sistemas externos, automatize processos de cadastro do aluno, matrículas e outros."
                  imagePath="/assets/images/card_icons/API_Webhooks.png" size={!isMobile ? 3 : 8} />
                <CardTransparent title="EAD Store"
                  subTitle="Aqui você tem a possibilidade de integrar ferramentas de terceiros que auxiliam todo o processo de vendas"
                  imagePath="/assets/images/card_icons/EAD_Store.png" size={!isMobile ? 3 : 8} />
                <CardTransparent title="Assinatura e recorrência"
                  subTitle="Seu EAD como um Netflix! Crie planos de assinatura com cobranças mensais, trimestrais, semestrais ou anuais."
                  imagePath="/assets/images/card_icons/Assinatura_e_recorrência.png" size={!isMobile ? 3 : 8} />
                <CardTransparent title="Grupos e turmas"
                  subTitle="Crie grupos e automatize o processo de cadastro e matrículas em seu EAD, importe até 1.000 alunos por vez."
                  imagePath="/assets/images/card_icons/Grupos_e_turmas.png" size={!isMobile ? 3 : 8} />
                <CardTransparent title="Carrinho de Compras"
                  subTitle="Receba pagamentos através de cartão ou boleto com matrícula automática após confirmação de recebimento."
                  imagePath="/assets/images/card_icons/Carrinho_de_Compras.png" size={!isMobile ? 3 : 8} />
                <CardTransparent title="Cupom de desconto"
                  subTitle="Ofereça cupons de desconto com até 100% do valor e matrícula automática no curso."
                  imagePath="/assets/images/card_icons/Cupom_de_desconto.png" size={!isMobile ? 3 : 8} />
                <CardTransparent title="Aulas"
                  subTitle="Deixe seus alunos mais engajados criando aulas ao vivo. Você pode disponibilizar um chat em tempo real para comunicação."
                  imagePath="/assets/images/card_icons/Aulas.png" size={!isMobile ? 3 : 8} />
                <CardTransparent title="Provas"
                  subTitle="Insira provas entre aulas e módulos, torne a prova requisito, programe a liberação com data fixa ou flexível, área de boletim."
                  imagePath="/assets/images/card_icons/Provas.png" size={!isMobile ? 3 : 8} />
                <CardTransparent title="Certificados"
                  subTitle="Certificado de conclusão de curso com código de autenticação, envio automático para o e-mail do aluno."
                  imagePath="/assets/images/card_icons/Certificados.png" size={!isMobile ? 3 : 8} />
                <CardTransparent title="Permissões"
                  subTitle="Determine funções administrativas customizadas para cada usuário, crie seus próprios padrões de permissões."
                  imagePath="/assets/images/card_icons/Permissões.png" size={!isMobile ? 3 : 8} />
                <CardTransparent title="Multiplos professores"
                  subTitle="Adicione múltiplos professores em seus cursos e planos com pagamento automático da participação nas vendas."
                  imagePath="/assets/images/card_icons/Multiplos_professores.png" size={!isMobile ? 3 : 8} />
                <CardTransparent title="Cobranças"
                  subTitle="Envie cobranças por e-mail com a automação de liberar cursos ou grupo, defina condições de pagamento e vencimento."
                  imagePath="/assets/images/card_icons/Cobranças.png" size={!isMobile ? 3 : 8} />
                <CardTransparent title="Biblioteca"
                  subTitle="Você pode reaproveitar uma  aula em vários cursos, gerenciar conteúdo de maneira separada dos cursos."
                  imagePath="/assets/images/card_icons/Biblioteca.png" size={!isMobile ? 3 : 8} />
                <CardTransparent title="Notificações"
                  subTitle="Acompanhe tudo o que acontece em seu perfil, seja notificado a cada venda, solicitação de suporte, correção de provas, novas aulas..."
                  imagePath="/assets/images/card_icons/Notificações.png" size={!isMobile ? 3 : 8} />
                <CardTransparent title="Fórum professores"
                  subTitle="Fórum público para gerar conteúdos / Fórum fechado para  cada curso, apenas para  professores e alunos  matriculados.."
                  imagePath="/assets/images/card_icons/Fórum.png" size={!isMobile ? 3 : 8} />
                <CardTransparent title="Domínio e SSL"
                  subTitle="Configure seu próprio domínio com hospedagem e certificado de segurança inclusos."
                  imagePath="/assets/images/card_icons/Domínio_e_SSL.png" size={!isMobile ? 3 : 8} />
                <CardTransparent title="Personalize"
                  subTitle="Fácil configuração, tema customizável, painel administrativo para você mesmo gerenciar todas as áreas do EAD."
                  imagePath="/assets/images/card_icons/Personalize.png" size={!isMobile ? 3 : 8} />
              </div>
            </section>
          </div>
        </section>

        <section id="cta_container" className={"container d-flex flex-row row gap-4 pt-5 mt-5 w-100"}>
          <div className={"container d-flex flex-column col gap-4"}>
            <CtaWrapper
              border
              imagePath="/assets/images/cta_bg_card.png"
              fontColor="#FE00FE"
              titleSize={42}
              title="Precisa de um parceiro?"
              subTitle="Amplie suas oportunidades com uma série de benefícios! Gere receita recorrente, conecte-se com novos clientes, acesse recursos específicos de parceiros e seja descoberto por suas habilidades.">
              <Button givenClass="p-3 fw-bold w-100 fs-5" link="https://eadplataforma.com/parceiros"> Pesquisar parceiros</Button>
              <Button givenClass="p-3 fw-bold w-100 fs-5" btnColor={'light'} link="https://eadplataforma.com/seja-parceiro"> Quero ser parceiro</Button>
            </CtaWrapper>
          </div>
        </section>

        <section id="integrations_container" className={"container d-flex flex-row row gap-4 my-5 w-100 position-relative"}>
          <div className={"container d-flex flex-row row gap-4 position-relative py-5 z-3 m-auto"}>
            <CtaWrapper
              titleSize={56}
              title="Mais de 50 integrações para você em um só lugar"
              subTitle="Explore um universo de integrações que só a EAD Store pode te oferecer. Potencialize suas vendas com gateways de pagamentos, emita NFs, amplie seu marketing, integre chats, CRM, análise de dados, acesso a nossa API e muito mais!">
              <Button givenClass="p-3 fw-bold fs-6" rounded link="https://docs.eadplataforma.com/docs/ead-store">Conheça todas as integrações!</Button>
            </CtaWrapper>
          </div>
          <div className={"container d-flex flex-row row justify-content-center " + styles.integrations_bg}>
            <IntegrationsImageCols />
          </div>
        </section>

        <section id="light_container" className={"container d-flex flex-row row gap-4 py-5 bg-light " + styles.full_width + ' ' + styles.align_to_top_el}>
          <div className={"d-flex flex-column col mt-5 " + styles.inner_contents}>

            <section id="price_container" className={"d-flex flex-row row align-items-center my-4"}>
              <div className={"d-flex flex-column col"}>
                <HeroTextCustom sub={"com a sua necessidade"} title={"Planos sob demanda de acordo"} titleSize={80} colorMode="light" />

                <div className={"d-inline-flex flex-row gap-4 justify-content-center row align-items-center"}>
                  <PriceCard column={isMobile ?? true}
                    plans={'Grátis'}
                    btnText={'Comece hoje mesmo'}
                    btnLink="https://eadplataforma.com/trial"
                    opts={{
                      smallDescription: 'De graça para sempre',
                      description: 'Para começar sua escola online hoje com custo zero!'
                    }}
                    listchildren={
                      <List className="d-flex flex-column col gap-2">
                        <ListItem>
                          <CheckCircleIcon htmlColor={'#FE00FE'} className="me-2" />
                          Alunos: Ilimitados
                        </ListItem>
                        <ListItem>
                          <CheckCircleIcon htmlColor={'#FE00FE'} className="me-2" />
                          Produtos: Ilimitados
                        </ListItem>
                        <ListItem>
                          <CheckCircleIcon htmlColor={'#FE00FE'} className="me-2" />
                          Cursos: Ilimitados
                        </ListItem>
                        <ListItem>
                          <CheckCircleIcon htmlColor={'#FE00FE'} className="me-2" />
                          Cursos ativos: 1
                        </ListItem>
                        <ListItem>
                          <CheckCircleIcon htmlColor={'#FE00FE'} className="me-2" />
                          Aulas: Ilimitadas
                        </ListItem>
                        <ListItem>
                          <CheckCircleIcon htmlColor={'#FE00FE'} className="me-2" />
                          Armazenamento: 1 GB
                        </ListItem>
                        <ListItem>
                          <CheckCircleIcon htmlColor={'#FE00FE'} className="me-2" />
                          Acessos simultâneos: 5
                        </ListItem>
                      </List>
                    }>
                    R$0
                  </PriceCard>
                </div>

                <div className={"d-inline-flex flex-row gap-4 justify-content-center align-items-center"}>
                  <Typography component="h2" gutterBottom className='fw-semibold my-3 z3 position-relative ' sx={{ fontSize: 44, lineHeight: 1.4, textAlign: 'center', fontFamily: "Rajdhani", color: '#000' }} >
                    Anual / Mensal
                  </Typography>
                </div>

                <div id="price_cards" className={`d-inline-flex flex-row gap-4 mt-5 justify-content-center align-items-center ` + (isMobile ? 'row' : '')}>
                  <PriceCard
                    plans={'Standard'}
                    btnText={'Comece hoje mesmo'}
                    btnLink="https://eadplataforma.com/trial"
                    typeOfpay="/mês"
                    column
                    opts={{
                      description: 'Permite criar e gerenciar cursos com ferramentas básicas de avaliação.'
                    }}
                    listchildren={
                      <List className={`d-flex flex-column col gap-${!isMobile ? 3 : 1}`}>
                        <ListItem>
                          <CheckCircleIcon htmlColor={'#FE00FE'} className="me-2" />
                          + Tudo do  Plano Grátis
                        </ListItem>
                        <ListItem>
                          <CheckCircleIcon htmlColor={'#FE00FE'} className="me-2" />
                          Cursos ativos: Ilimitados
                        </ListItem>
                        <ListItem>
                          <CheckCircleIcon htmlColor={'#FE00FE'} className="me-2" />
                          Armazenamento: 25 GB
                        </ListItem>
                        <ListItem>
                          <CheckCircleIcon htmlColor={'#FE00FE'} className="me-2" />
                          Acessos simultâneos: 30
                        </ListItem>
                        <ListItem>
                          <CheckCircleIcon htmlColor={'#FE00FE'} className="me-2" />
                          Suporte Prioritário (sem robôs)
                        </ListItem>
                        <ListItem>
                          <CheckCircleIcon htmlColor={'#FE00FE'} className="me-2" />
                          Suporte: E-mail/Telefone/Whats
                        </ListItem>
                        <ListItem>
                          <CheckCircleIcon htmlColor={'#FE00FE'} className="me-2" />
                          Acompanhamento time de CS
                        </ListItem>
                        <ListItem>
                          <CheckCircleIcon htmlColor={'#FE00FE'} className="me-2" />
                          EAD Checkout (Taxas especiais)
                        </ListItem>
                      </List>
                    }>
                    R$399
                  </PriceCard>

                  <PriceCard
                    plans={'Essencials'}
                    btnText={'Comece hoje mesmo'}
                    btnLink="https://eadplataforma.com/trial"
                    badge="Mais popular"
                    color="#fff"
                    typeOfpay="/mês"
                    column
                    opts={{
                      description: 'Oferece transmissões ao vivo e maior alcance para suas aulas.'
                    }}
                    listchildren={
                      <List className={`d-flex flex-column col gap-${!isMobile ? 4 : 2}`}>
                        <ListItem>
                          <CheckCircleIcon htmlColor={'#FE00FE'} className="me-2" />
                          + Tudo do  Plano Standard
                        </ListItem>
                        <ListItem>
                          <CheckCircleIcon htmlColor={'#FE00FE'} className="me-2" />
                          Armazenamento: 50 GB
                        </ListItem>
                        <ListItem>
                          <CheckCircleIcon htmlColor={'#FE00FE'} className="me-2" />
                          Acessos simultâneos: 60
                        </ListItem>
                        <ListItem>
                          <CheckCircleIcon htmlColor={'#FE00FE'} className="me-2" />
                          Lives simultâneas: 1
                        </ListItem>
                        <ListItem>
                          <CheckCircleIcon htmlColor={'#FE00FE'} className="me-2" />
                          Provas ilimitadas
                        </ListItem>
                        <ListItem>
                          <CheckCircleIcon htmlColor={'#FE00FE'} className="me-2" />
                          Controle de acesso
                        </ListItem>
                        <ListItem>
                          <CheckCircleIcon htmlColor={'#FE00FE'} className="me-2" />
                          Marca d&aposágua na aulas
                        </ListItem>
                        <ListItem>
                          <CheckCircleIcon htmlColor={'#FE00FE'} className="me-2" />
                          Customização gratuita
                        </ListItem>
                      </List>
                    }>
                    R$499
                  </PriceCard>

                  <PriceCard
                    plans={'Premium'}
                    btnText={'Comece hoje mesmo'}
                    btnLink="https://eadplataforma.com/trial"
                    typeOfpay="/mês"
                    column
                    opts={{
                      description: 'Permite personalizações avançadas e mais controle sobre sua plataforma.'
                    }}
                    listchildren={
                      <List className={`d-flex flex-column col gap-${!isMobile ? 3 : 1}`}>
                        <ListItem>
                          <CheckCircleIcon htmlColor={'#FE00FE'} className="me-2" />
                          + Tudo do  Plano Essentials
                        </ListItem>
                        <ListItem>
                          <CheckCircleIcon htmlColor={'#FE00FE'} className="me-2" />
                          Armazenamento: 75 GB
                        </ListItem>
                        <ListItem>
                          <CheckCircleIcon htmlColor={'#FE00FE'} className="me-2" />
                          Acessos simultâneos: 100
                        </ListItem>
                        <ListItem>
                          <CheckCircleIcon htmlColor={'#FE00FE'} className="me-2" />
                          Suporte Prioritário (sem robôs)
                        </ListItem>
                        <ListItem>
                          <CheckCircleIcon htmlColor={'#FE00FE'} className="me-2" />
                          Suporte: E-mail/Telefone/Whats
                        </ListItem>
                        <ListItem>
                          <CheckCircleIcon htmlColor={'#FE00FE'} className="me-2" />
                          Acompanhamento time de CS
                        </ListItem>
                        <ListItem>
                          <CheckCircleIcon htmlColor={'#FE00FE'} className="me-2" />
                          Customização gratuita
                        </ListItem>
                      </List>
                    }>
                    R$599
                  </PriceCard>
                </div>

                <section className={`d-flex flex-${!isMobile ? 'row' : 'column'} gap-4 flex-nowrap text-center justify-content-center align-items-center m-5`}>
                  <div className="justify-content-center align-items-center">
                    <Button givenClass="fw-regular p-3 fs-6" rounded link="https://bit.ly/planos-ead">Conheça os outros planos</Button>
                  </div>
                  <div className={`d-flex flex-${!isMobile ? 'row' : 'column'} text-center justify-content-${!isMobile ? 'end' : 'center'} align-items-${!isMobile ? 'end' : 'center'} gap-${!isMobile ? '4' : '1'}`}>
                    <Typography component="h4" gutterBottom className='fw-semibold mb-2' sx={{ fontSize: 20, fontFamily: "Rajdhani", color: "#1C0237" }} >
                      ou
                    </Typography>
                    <Typography component="a" gutterBottom className='fw-bold' sx={{ fontSize: 26, fontFamily: "Rajdhani", color: "#1C0237!important" }} href="https://eadplataforma.com/criar-conta">
                      Crie sua conta gratuitamente
                    </Typography>
                  </div>
                </section>

              </div>
            </section>

            <section id="faq_container" className={"d-flex flex-row row align-items-center my-4 w-100"}>
              <div className={"d-flex flex-column col align-items-center justify-content-center"}>
                <HeroTextCustom sub={"perguntas mais frequentes"} title={"Respostas às nossas"} titleSize={80} colorMode="light" align="left" />
              </div>
              <div className={"d-flex flex-row row my-4 gap-5 m-auto"}>
                <div className={"d-flex flex-column col my-4 gap-4"}>
                  <AccordionCustom accordionIndex={'1'} title="Quais os diferenciais da EAD Plataforma para a Hotmart?">
                    Assim como na Hotmart, aqui você também pode criar sua conta grátis e já começar a vender! <br /> <br />
                    Temos diversos diferenciais como:<br />
                    <b>Segurança:</b>Proteção DRM (anti-piratraria) dos seus conteúdos e marca dágua para vídeo aulas e pdf <br />
                    <b>Percepção de marca:</b> Quanto custa adquirir um aluno (CAC) ? Imagine gastar com anúncios e o aluno lembrar da empresa Hotmart
                    e não da sua, aqui na EAD Plataforma você tem a sua própria plataforma com a sua logo, cores, baners, emails e domínio próprio,
                    tornando sua marca exclusiva com uma vitrine só sua onde seus cursos não ficarão misturados com os cursos dos concorrentes.<br />
                    <b>Controle do seus dados:</b> Exporte relatórios, gerencie seus Leads e integre com +50 aplicativos integrados<br />
                    <b>Taxa justa de checkout:</b> Venda seus cursos, crie planos de assinaturas (recorrência), venda com cartão, pix e boleto
                    (inclusive boleto parcelado) com a menor taxa do mercado, à partir de 1.89%. Você vende no cartão com juros? <br />
                    (fique também com o juros das suas vendas ao não antecipar seus pagamentos, rentabilizando ainda mais seus ganhos)
                  </AccordionCustom>
                  <AccordionCustom accordionIndex={'2'} title="A EAD Plataforma é customizável?">
                    Sim, você terá um espaço exclusivo para chamar de seu e poderá customizar as cores, banners, logotipo da página e criar seus próprios certificados personalizados.
                  </AccordionCustom>
                  <AccordionCustom accordionIndex={'3'} title="Posso usar meu domínio próprio?">
                    Sim, à partir do plano Lite se você possui um domínio comprado é possível configurá-lo através do nosso painel gerenciador de DNS.
                  </AccordionCustom>
                  <AccordionCustom accordionIndex={'4'} title="O que são acessos simultâneos?">
                    É a quantidade de usuários que estão conectados ao mesmo tempo acessando/visitando as páginas do seu EAD.
                  </AccordionCustom>
                  <AccordionCustom accordionIndex={'5'} title="Quantos alunos podem ser cadastrados?">
                    A EAD Plataforma permite que você tenha usuários<b>ILIMITADOS!</b> Até mesmo no plano grátis 😎
                  </AccordionCustom>
                  <AccordionCustom accordionIndex={'6'} title="Quais modelos de área de membros vocês oferecem?">
                    Trabalhamos com os modelos:<br /><br />
                    <b>Plataforma comercial:</b>Plataforma comercial: Versão com recursos de E-Commerce, carrinho de compras, cupom de desconto e integração com sistemas de pagamento online.<br />
                    <b>Plataforma corporativa:</b> feita para treinamentos com ambiente fechado e login exclusivo para membros cadastrados
                  </AccordionCustom>
                </div>

                <div className={"d-flex flex-column col my-4 gap-4"}>
                  <AccordionCustom accordionIndex={'7'} title="Possui API e Webhooks para automatizar integrações?">
                    Sim, disponilizamos API REST e Webhooks de vários eventos para que possa integrar com seu CRM e automatizar processo.
                  </AccordionCustom>
                  <AccordionCustom accordionIndex={'8'} title="A EAD Plataforma tem APP?">
                    Possuímos o PWA (Progressive Web Application) ou Aplicação Web Progressiva, que é um meio termo entre o Design Responsivo e APP mobile nativo.
                    O aluno poderá instalar no celular e ter o ícone de atalho de acesso rápido semelhante aplicativos instalados das lojas de aplicativos Google Play e Apple Store.
                  </AccordionCustom>
                  <AccordionCustom accordionIndex={'9'} title="Posso ter cursos gratuitos e outros pagos?">
                    Sim, você pode oferecer diferentes produtos como cursos totalmente ou parcialmente gratuitos, vendas de certificados, suporte ao aluno, períodos extra, planos de assinatura e combos. São diversas possibilidades.
                  </AccordionCustom>
                  <AccordionCustom accordionIndex={'10'} title="Quais tipos de arquivos posso cadastrar?">
                    Podem ser cadastrados arquivos digitais como .pdf, .ppt, .xls, vídeos e áudios nas extensões: .mp4, .avi, .mov, .flv, .3gp, .wmv, .ogv, .mpg, .mpeg, .webm, .m4v) / Áudio: (.mp3), além de arquivos para downloads em .zip ou .rar de qualquer extensão.
                  </AccordionCustom>
                  <AccordionCustom accordionIndex={'11'} title="Quantas aulas cabem em cada plano?">
                    Cada plano tem uma capacidade máxima de armazenamento, recomendamos que você adicione todos seus arquivos de aulas em uma pasta no seu computador e verifique a quantidade de espaço que ocupou, assim saberá qual plano escolher. Caso exceda a capacidade de armazenamento do seu plano, não se preocupe, sua página continuará online e você poderá solicitar upgrade de plano a qualquer momento.
                  </AccordionCustom>
                  <AccordionCustom accordionIndex={'12'} title="Posso incluir vários professores em um curso?">
                    Pode sim. O professor terá uma área exclusiva para acompanhar e gerenciar suas aulas do curso e seus alunos. Ah, e você também poderá dividir os pagamentos recebidos e definir o percentual de ganho dele por venda.
                  </AccordionCustom>
                </div>
              </div>
            </section>

            <section id="form_container" className={"d-flex flex-row row align-items-center my-4 m-auto w-100"}>
              <div className={"d-flex flex-column col align-items-center justify-content-center"}>
                <DemonstrationCta
                  imagePath="/assets/images/support_team_ead.png"
                  title="Agende uma demonstração gratuita com nosso time de especialistas"
                  titleSize={44}
                  subTitle="Veja o que a EAD Plataforma é capaz de fazer por você!">

                  <DemonstrationForm />

                </DemonstrationCta>
              </div>
            </section>

          </div>
        </section>

      </main >

      <footer>
        <Footer />
      </footer>
    </StyledEngineProvider>
  );
}
