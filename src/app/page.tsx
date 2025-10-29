'use client'
import { ChangeEvent, useActionState, useEffect, useState } from "react";
import checkIcon from './../../public/icon-park-solid_check-one.svg'
import closeIcon from './../../public/material-symbols_close-rounded.svg'
import copyIcon from './../../public/lucide_copy.svg'
import giftList from './../../public/giftList.json'
import giftIcon from './../../public/bxs_gift1.svg'
import dressCode from './../../public/images/dresscode.svg'
import dressCode2 from './../../public/images/bridal-shower.svg'
import dressCode3 from './../../public/images/wedding-dress.svg'
import dressCode4 from './../../public/images/champagne.svg'
import flowerBottom from './../../public/images/Luana-Photoroom.png'
import flowerBottom2 from './../../public/images/Luana-Photoroom2.png'
import location from './../../public/location.svg'
import time from './../../public/time.svg'
import car from './../../public/bx_car.svg'

import logoLM from './../../public/logo-lm.svg'
import { appendSheetData } from "./actions/google-sheets.action";
import Maps from "@/components/maps";


export default function Home() {


   const initialState = {
    success: '',
    failed: undefined,
  }

   const [IsConfirmed, formAction, IsConfirming] = useActionState(appendSheetData, initialState)

    
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    useEffect(() => {
    const targetDate = new Date('2026-01-03T16:00:00'); // 3 January 2025, 4pm local time

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      // console.log('difference', difference)

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
    }, []);


    const [guestName, setGuestName] = useState<string>('')
    const guests = [
      'Luana de Paula Antunes Damião',
      'Matheus Oliveira Damião',
      'Ana Antunes',
      'Flávio Barbosa',
      'Letícia de Paula Antunes Barbosa',
      'Ana Luísa Miranda da Silva',
      'Vanessa Cupulille',
      'Marcos Cunha',
      'Maya Cunha',
      'Lucia Helena Cupulille Baptista',
      'Maria Helena',
      'Roberto Júnior',
      'Natália Carapenticow',
      'Ana Beatriz Cupulille',
      'Maycon Luiz Eugênio da Silva',
      'Sophia Mariucha',
      'Claudia Helena Cupulille Baptista',
      'Milena Antunes',
      'Yuri Seoane',
      'Luna Seoane',
      'Catarina Seoane',
      'Angela Cristina Antunes',
      'José Manoel de Souza e Silva',
      'Afranio Antunes',
      'Adriana Antunes',
      'Diogo Antunes',
      'Cecília Sanches',
      'Lucas Antunes',
      'Beatriz Jevoux',
      'Amanda Mendes',
      'Alexandre Almeida',
      'Isis Nascimento',
      'Yara Ligia Andrade Lemos',
      'Bruno Walter Matos',
      'Gabriel de Souza e Silva',
      'Arthur de Souza e Silva',
      'Heitor de Souza e Silva',
      'Luisa Henrici',
      'Nathália Nogueira Nunes dos Santos',
      'Paula Pereira dos Santos',
      'Olga Queiroz Veridiano',
      'Dayane Rodrigues',
      'André Bravo',
      'Xênia Gabrielle dos Santos',
      'Davi Lopes',
      'Rosana Petrilho Coimbra',
      'Alberto Ferreira Gomes',
      'Rita de Cássia de Oliveira Costa',
      'Carlos Nery',
      'Raquel Bitetti Legey',
      'Miguel Bitetti Padilha Mira',
      'Keyla Legey',
      'Thays Oliveira de Medeiros',
      'Victor Fernandes de Melo Coutinho',
      'Rosa Angela de Oliveira',
      'Paulo Carlos Damião',
      'Theophilo Damião',
      'Patrícia Damião',
      'Luna Damião',
      'Gael Damião',
      'Agueda Oliveira',
      'Mecias Oiveira',
      'Thiago Martins Guarino',
      'Elias Antonio Guarino',
      'Elisete Martins de Oliveira Guarino',
      'Isabella Martins Guarino',
      'Cássia Cristina Rozzante Marinonio',
      'Oseás Cancio dos Santos Nascimento',
      'Tadeu Marinonio',
      'Juliana Marinonio',
      'Betina Marinonio',
      'Leonardo da Silva Lopes',
      'Larissa Bittencourt Marinonio',
      'Elcides Ribeiro Lustosa',
      'Paulo Roberto Marinonio',
      'Renato Barros',
      'Juliana Gonçalves de Souza e Silva',
      'Pedro de Souza Silva Nascimento',
      'Bruna de Souza Silva Nascimento',
      'Marcelo Fernando Martins de Oliveira',
      'Rosangela Martins de Oliveira',
      'Marysangela Martins',
      'Roseli Martins',
      'Luis Albuquerque Pinto',
      'Victor Hugo',
      'Louise Marins',
      'Jhady Percu',
      'Luciana Mello Silveira Paixão',
      'Matheus Parreiras',
      'Barbara Andrade',
      'João Miguel Carvalho',
      'Maria Lúcia Stael',
      'Luisa Varella Meyer',
      'Thereza Varella',
      'Cainho Seoane',
      'Cátia Barbosa'
    ]

    const [filteredGuestNames, setfilteredGuestNames] = useState<string[]>([''])

    const updateGuestName = (e: ChangeEvent<HTMLInputElement>) => {
      setGuestName(e.target.value);
    }

    const [selectedGuest, setSelectedGuest] = useState<string>('')

    useEffect(()=>{
       if(guestName.length > 3 && guestName !== selectedGuest) {
        const normalize = (s: string) =>
          s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

        const filtered = guests.filter((guest) =>
          normalize(guest).includes(normalize(guestName))
        );
        console.log('filtered', filtered)
        setfilteredGuestNames(filtered)
      } 
      if(guestName.length < 3) {
        setfilteredGuestNames([])
        setSelectedGuest('')
      } 
      
    },[guestName, selectedGuest])

    const [IsPresenceConfirmed, setIsPresenceConfirmed] = useState(false);
    
    const confirmPresence = ()=>{
      setIsPresenceConfirmed(true);
      try {
        // formAction.apply()
        
      } catch (error) {
        
      }
    }

    const [IsPixCopied, setIsPixCopied] = useState(false);
      const copyToClipBoard = async () => {
        try {
          const text = choseGift.pixKey;
          if (!text) return;

          if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(text);
          } else {
            const textarea = document.createElement('textarea');
            textarea.value = text;
            textarea.style.position = 'fixed';
            textarea.style.left = '-9999px';
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
          }

          setIsPixCopied(true)
        } catch (error) {
          console.error(error);
          alert('Não foi possível copiar o código Pix');
        }
      }
    


    const [choseGift, setChoseGift] = useState({name: '', price: '', pixKey: ''})


    useEffect(()=>{
      if(IsConfirmed?.success && !IsConfirming){
        setIsPresenceConfirmed(true)
        setGuestName('')
        setSelectedGuest('')

        setTimeout(()=>{
          setIsPresenceConfirmed(false)
        }, 4000)
      }

      
    },
  [IsConfirmed?.success, IsConfirming])

  // simple scroll-to-top button injected into the page

  const handleClick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div id='hero' className="relative ">

      {IsPresenceConfirmed ? 
        <div className="w-full bg-[#6666] top-0 h-full fixed z-[999999999999999999999] flex items-center justify-center"> 

          <div className="max-w-[600px] mx-[16px] h-min flex flex-col bg-white gap-[32px] lg:gap-[40px] lg:h-[334px] px-[24px] py-[24px]">
            <h5 className="text-[14px]">Confirmação de Presença</h5>
            <div className="flex flex-col gap-[24px]">
              <div className="flex gap-4">
                <img src={checkIcon.src} alt="" />
                <h4 className="text-[#222420] cinzel-bold text-lg">Sua presença está confirmada!</h4>
              </div>
              <p className="text-[14px]">Que alegria saber que você estará conosco neste capítulo tão importante da nossa história</p>
              <p className="text-[14px]"> Sua presença tornará esse dia ainda mais especial.</p>
            </div>
            <button onClick={ ()=> setIsPresenceConfirmed(false)} className="w-full h-[58px] text-lg bg-[#EAEAE3] cursor-pointer "> Fechar </button>

          </div>

        </div> 
        :
        null
      }

        {choseGift.pixKey !== '' ? 
        <div className="w-full bg-[#6666] top-0 h-full fixed z-[999999999999999999999] flex items-center justify-center"> 

          <div className="lg:max-w-[650px] rounded-[6px] mx-[16px] h-min w-full flex flex-col gap-[32px] bg-white lg:gap-[32px]  px-[24px] py-[24px]">
            <div className="flex justify-between">
              <div className="flex gap-4">
                <img src={giftIcon.src} alt="" />
                <h5 className="text-[14px]">Presente selecionado</h5>
              </div>
              <button className="cursor-pointer" onClick={ ()=> {
                setChoseGift({name: "", pixKey: "", price: ""})
                setIsPixCopied(false)
                } }><img src={closeIcon.src} alt="" /></button>
            </div>
            <div className="flex flex-col gap-[24px]">
              <div className="flex gap-4">
                <h4 className="text-[#222420] cinzel-bold text-lg text-nowrap">{choseGift.price}</h4>
                <p className="text-[16px]">{choseGift.name}</p>
              </div>
              <div className="text-[14px] w-full bg-[#F5F5F5] px-[24px] py-[24px]">
                <p className="break-all">
                  {choseGift.pixKey}
                </p>
              </div>
            </div>
            <button onClick={copyToClipBoard} className="flex gap-[10px] items-center justify-center py-[17px] w-full h-[58px] text-lg bg-[#EAEAE3] cursor-pointer ">
              <img src={copyIcon.src} alt="" />
               {!IsPixCopied ? 'Copiar Código Pix' : 'Pix Copiado'}
            </button>

          </div>

        </div> 
        :
        null
      }


      <div
        className="fixed z-[999999999999999999999999999999] top-0 left-0 right-0 bg-white/40 backdrop-blur-md backdrop-saturate-125 border border-white/20"
        style={{ WebkitBackdropFilter: 'blur(8px)', backdropFilter: 'blur(8px)' }}
      >
        <div className="flex items-center justify-center h-[8svh] pt-4 z-[9999999] px-[16px]">
          <a onClick={()=>handleClick()}><img src="/images/logo-topo.svg" className="px-4 w-full max-w-[450px]" alt="" /></a>
        </div>

        <nav className="lg:flex items-center hidden flex-wrap flex-col lg:flex-row z-[9999999] text-sm lg:text-xl my-4  justify-center gap-2 lg:gap-20">
          <a href="#presenca" className="inline-block border-b-2 border-transparent hover:border-current transition-colors duration-200">
            Confirmar Presença
          </a>
          <a href="#lista" className="inline-block border-b-2 border-transparent hover:border-current transition-colors duration-200">
            Lista de Presentes
          </a>
          <a href="#localizacao" className="inline-block border-b-2 border-transparent hover:border-current transition-colors duration-200">
            Como chegar
          </a>
           <a href="#dicas" className="inline-block border-b-2 border-transparent hover:border-current transition-colors duration-200">
            Dicas
          </a>
        </nav>
        <nav className="flex items-center lg:hidden flex-wrap flex-row z-[9999999] text-sm lg:text-xl my-4 lg:mt-10 justify-between px-[16px] gap-2 lg:gap-20">
          <a href="#presenca" className="inline-block border-b-2 border-transparent hover:border-current transition-colors duration-200">
            Confirmar
          </a>
          <a href="#lista" className="inline-block border-b-2 border-transparent hover:border-current transition-colors duration-200">
            Presentear
          </a>
          <a href="#localizacao" className="inline-block border-b-2 border-transparent hover:border-current transition-colors duration-200">
            Local
          </a>
            <a href="#dicas" className="inline-block border-b-2 border-transparent hover:border-current transition-colors duration-200">
            Dicas
          </a>
        </nav>
      </div>


      <div  className="w-full h-[60svh] lg:h-[100svh] mt-[15svh] lg:mt-[15svh] relative">
        <img src="/images/previa-hero.png" alt="" className="object-[55%] lg:object-top object-cover hidden lg:block absolute w-full h-full z-[99999]" />
        <img src="/images/previa-hero-mobile.png" alt="" className="object-cover absolute lg:hidden w-full h-full z-[99999]" />

      </div>

      <div className="relative">
        <img src="/images/green-cloud.png" alt="" className="absolute w-full top-[-200px] opacity-30 sm:top-[-500px] lg:w-[20084.21px] lg:h-[1862.99px] lg:top-[-1100px] z-[9]" />
        <img src="/images/flowers-right.png" className="right-0 top-[400px] hidden lg:block lg:top-[300px] opacity-60 lg:opacity-30 lg:h-full absolute z-[999999999]" alt="" />
        <img src="/images/flower-division.png" className="w-[250px] lg:w-[350px] mx-auto pt-[4px]" alt="" />

        <div className="pb-[60px] px-[16px] flex items-center justify-center relative z-[99999999]">
            
            <div className="flex justify-center items-center  bg-[#F8F7F4]/30 text-[#5D6955] py-[15px] px-[20px] lg:pb-[30px] lg:px-[40px]">
              <div className="text-[45px] cinzel-black lg:text-[70px]">
                <p>03</p>
              </div>
              <div className="text-[14px] lg:text-[18px] px-[8px] ">
                <p>de</p>
              </div>
              <div className="cinzel-black text-[32px] lg:text-[60px]">
                  <p>Janeiro</p>
              </div>
              <div className="flex items-center px-[16px]">
                  <div className="h-[47px] lg:h-[70px] w-px bg-gray-300" aria-hidden="true" />
              </div>
              <div className="text-[16px]  lg:text-[24px]">
                <p>SÁB</p>
                <p>16h</p>
              </div>
            </div>
          </div>
        <div className="relative z-[9999999]">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="gap-[32px] lg:gap-[40px] px-[16px] flex flex-col max-w-[903px]">
              <p className="text-lg lg:text-[24px]">
                Com o coração repleto de amor e gratidão,<br /> <b> convidamos você para viver conosco um dos momentos mais especiais da nossa história.</b>
              </p>
              <div className="flex flex-col text-base gap-[24px] text-base">
                <p>
                   Cada pedacinho foi pensado com carinho, para que este dia seja inesquecível — não apenas para nós, mas para todos que fazem parte dele.
                </p>
                <p>
                  <b>A cerimônia e a festa acontecerão no mesmo local </b>, para que todos possam aproveitar cada instante dessa data tão única — sem pressa, com leveza e muita emoção.  
                </p>
                <p>
                  <b>As portas estarão abertas a partir das 16h </b>, para que todos possam chegar com calma e se envolver no clima desse dia tão especial.
                </p>
                <p>
                  <b>A cerimônia terá início pontualmente às 16h30.</b> 
                </p>
                
              </div>
              <p className="text-base lg:text-lg">
                  Esperamos por você para compartilhar esse momento tão especial.
                </p>
            </div>
          </div>
        
          <div className="relative flex flex-col items-center justify-center py-24 lg:pt-[150px] lg:gap-[40px] gap-[24px] lg:py-16 text-gray-800 px-[16px]">
                  <h2 className="text-[24px] lg:text-[32px] cinzel-bold text-center">Contagem regressiva para o grande dia</h2>
                  <div className="flex flex-wrap items-center max-w-[200px] lg:max-w-full justify-center gap-[40px] lg:gap-[100px] text-center text-[#5D6955] w-full lg:pt-[40px] pt-[24px]">
                    <div className="flex flex-col items-center justify-center gap-[8px] w-[80px] h-[105px] lg:w-[119px] lg:h-[116px]" >
                      <div className="text-[32px] flex items-center justify-center text-center w-[80px] !h-[78px] font-bold bg-[#F8F7F4] grow-0 shrink-0 flex-0 lg:!w-[119px] lg:!h-[116px] lg:text-[55px] lg:px-[32px] lg:px-[32px] px-[24px] py-[24px] rounded-[20px] lg:rounded-[30px] ">{timeLeft.days}</div>
                      <div className="text-[14px] lg:text-lg w-[80px] h-[19px] uppercase grow-0 shrink-0 lg:w-[119px] flex-0">dias</div>
                    </div>
                    <div className="flex flex-col  items-center justify-center gap-[8px]  lg:!w-[119px] lg:h-[116px]" >
                      <div className="text-[32px] flex items-center justify-center font-bold bg-[#F8F7F4] w-[80px]  !h-[78px]  lg:!w-[119px] lg:!h-[116px] lg:text-[55px] px-[24px] py-[24px] lg:px-[32px] lg:px-[32px] rounded-[20px] lg:rounded-[30px]">{timeLeft.hours}</div>
                      <div className="text-[14px] lg:text-lg uppercase grow-0 shrink-0 lg:w-[119px]">horas</div>
                    </div>
                    <div  className="flex flex-col  items-center justify-center gap-[8px] lg:!w-[119px] lg:h-[116px]" >
                      <div className="text-[32px] flex items-center justify-center font-bold bg-[#F8F7F4] w-[80px]  h-[78px] lg:!w-[119px] lg:!h-[116px] lg:text-[55px] px-[24px] py-[24px]  rounded-[20px] lg:rounded-[30px]">{timeLeft.minutes}</div>
                      <div className="text-[14px] lg:text-lg uppercase grow-0 shrink-0 lg:w-[119px]">minutos</div>
                    </div>
                    <div  className="flex flex-col  items-center justify-center gap-[8px]  lg:w-[119px] lg:h-[116px]" >
                      <div className="text-[32px] flex items-center justify-center font-bold bg-[#F8F7F4] w-[80px]  h-[78px] lg:!w-[119px] lg:!h-[116px] lg:text-[55px] px-[24px] py-[24px] rounded-[20px] lg:rounded-[30px]">{timeLeft.seconds}</div>
                      <div className="text-[14px] lg:text-lg uppercase">segundos</div>
                    </div>
                  </div>
          </div>
        </div>
      </div>


      <div id='presenca' className="pb-[50px] pt-[150px] lg:py-[150px]">
         <div className="flex flex-col items-center justify-center text-center ">
            <img src="/images/flower-division.png" className="w-[250px] pt-[4px] pb-[16px]" alt="" />
            <div className="flex flex-col align-center justify-center lg:gap-[40px] gap-[32px] px-[16px]">
              <div className="flex flex-col align-center justify-center">
                <h3 className="text-[32px] font-bold cinzel-bold text-[#222420] text-center">Confirmar Presença</h3>
                <h4 className="text-[#222420] cinzel-regular text-base lg:pt-[16px] pt-[8px] text-center">
                   Busque seu nome, selecione-o na lista que aparecer e, em seguida, clique no botão para confirmar sua presença.
                </h4>
              </div>
              <div className="flex flex-col align-center justify-center lg:w-[668px] lg:gap-[15px]">
                 <form action={formAction} >
                  <div className="relative">
                    <input value={guestName} onChange={updateGuestName} type="text" name='nome' id='searchName' className=" w-full placeholder: h-[50px] bg-[#F5F5F5] px-[12px] py-[15px]" placeholder="Digite seu nome..." />
                    {filteredGuestNames.length > 0 ?
                    <div className="absolute z-[99999] w-full top-[50px] bg-white">
                      {filteredGuestNames.map((name)=>{
                      return (
                        <div key={name} onClick={() => {
                          setGuestName(name)
                          setSelectedGuest(name)
                          setfilteredGuestNames([])
                          }} className="w-full hover:cursor-pointer hover:bg-[#969F90] transition-all   hover:text-white hover:font-bold border-[#F5F5F5] border-2 py-[16px] text-start  px-[12px] text-[#222420] text-[14px]"> 
                          {name}
                        </div>
                      )
                    })} </div> : ''}
                  </div>
               
                  {/* <button disabled={!guestName || IsConfirming ? true : false} className={`w-full h-[58px] mt-[15px] disabled:cursor-not-allowed text-lg ${selectedGuest !== '' && selectedGuest == guestName ? 'bg-[#969F90] cursor-pointer text-white font-bold': 'bg-[#EAEAE3]'}`}>
                    {IsConfirming ? 'Carregando... ' : IsPresenceConfirmed ? 'Presença confirmada!' : 'Confirmo minha presença'}
                  </button> */}
   
                  <button
                  disabled={!selectedGuest || IsConfirming ? true : false}
                  className={`w-full h-[58px] mt-[15px] disabled:cursor-not-allowed text-lg ${
                    selectedGuest !== "" && selectedGuest == guestName
                      ? "bg-[#969F90] cursor-pointer text-white font-bold"
                      : "bg-[#EAEAE3]"
                  }`}
                >
                  {IsConfirming
                    ? "Carregando... "
                    : IsPresenceConfirmed
                    ? "Presença confirmada!"
                    : "Confirmo minha presença"}
                      </button>
                   {guestName !== selectedGuest ? (
                     <p className="text-red-500 text-[14px] pt-[8px]">
                       Por favor, selecione seu nome na lista.
                     </p>
                   ) : (
                     ""
                   )}
                    
                </form>
              </div>
            </div>
          </div>
      </div>


       <div id='lista' className="pb-[50px] pt-[150px]">
         <div className="flex flex-col items-center justify-center text-center ">
            <img src="/images/flower-division.png" className="w-[250px] pt-[4px] pb-[16px]" alt="" />
            <div className="flex flex-col align-center justify-center gap-[45px] px-[16px]">
                <div className="flex flex-col align-center justify-center gap-[16px]">
                  <h3 className="text-[32px] font-bold cinzel-bold text-[#222420] text-center">Lista de Presentes</h3>
                  <h4 className="text-[#222420] cinzel-regular text-base  text-center max-w-[1175px] mx-auto"> Nosso lar já está cheio de amor (e de tudo o que precisamos!). Criamos essa lista divertida para quem desejar nos presentear. <b> O valor será revertido em Pix </b> — um gesto de carinho que fará parte dessa nova fase.</h4>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-12">
                  {giftList.map((gift)=>{
                    return (
                      <div key={gift.pixKey} className="bg-[#FFFF] px-[24px] py-[24px] w-[339px] h-[436px] gap-[16px] flex flex-col border-[#F5F5F5] border-[1px]" >
                        <img src={gift.photo} alt="" />
                        <div className="flex flex-col items-start gap-[16px]">
                          <h5 className="text-left text-base">
                          {gift.nome}
                          </h5>
                          <p className="text-[20px] text-[#346017] cinzel-bold">
                          {gift.price}
                          </p>
                        </div>
                        <button onClick={()=> setChoseGift({name: gift.nome, pixKey: gift.pixKey, price: gift.price})} className="bg-[#EAECE9] w-full hover:bg-[#5D6955] hover:text-white hover:font-bold rounded-[6px] transition-all h-[58px] cursor-pointer ">Presentear</button>
                      </div>
                    )
                  })}
                </div>
            </div>  
          </div>
        </div>      



        <div id='localizacao' className="pt-[150px]">
          <div className="flex flex-col items-center justify-center text-center px-[16px]">
              <img src="/images/flower-division.png" className="w-[250px] pt-[4px] pb-[16px]" alt="" />
              <div className="flex flex-col align-center justify-center gap-[45px]">
                  <div className="flex flex-col align-center justify-center ">
                    <h3 className="lg:text-[32px] text-[24px] font-bold cinzel-bold text-[#222420] text-center">Como Chegar</h3>
                    <div className="lg:gap-[50px] flex flex-col items-center justify-center ">
                      <div className="flex flex-col  gap-[32px] text-base lg:pb-[0px] lg:pt-[32px] py-[24px] max-w-[818px]">
                        <div className="flex items-start gap-[16px] text-left">
                          <img src={location.src} alt="" />
                           <p>
                              A cerimônia e a festa acontecerão no <b>Solar de Gração</b>, localizado na <b>Estrada Caetano Monteiro, 916 — Pendotiba, Niterói - RJ.</b>
                            </p>
                        </div>
                        <div className="flex items-start gap-[16px] text-left">
                           <img src={car.src} alt="" />
                            <p>
                              O local conta com estacionamento, e também é fácil chegar por aplicativo — basta buscar pelo nome do Solar de Gração.
                            </p>
                        </div>
                       <div className="flex items-start gap-[16px] text-left">
                            <img src={time.src} alt="" />
                             <p>
                              <b>As portas estarão abertas a partir das 16h, e a cerimônia terá início pontualmente às 16h30.</b>
                            </p>
                       </div>
                     </div>
                     <p className="lg:text-lg text-[14px] py-[24px]">
                        Tudo foi preparado com carinho para que cada convidado aproveite cada instante desse dia especial.
                      </p>
                   </div>
                  </div>          
              </div>     
            </div>
         <Maps/>

        </div>          


         <div id='dicas' className="pt-[150px] lg:pb-[200px] px-[16px]">
            <div className="flex flex-col items-center justify-center text-center ">
                <img src="/images/flower-division.png" className="w-[250px] pt-[4px] pb-[16px]" alt="" />
                <div className="flex flex-col align-center justify-center gap-[45px]">
                   <h3 className="text-[32px] font-bold cinzel-bold text-[#222420] text-center">Dicas</h3>
                </div>

                <div className="flex flex-wrap text-base items-center pt-[32px] lg:pt-[80px] justify-center gap-[32px] lg:gap-[50px] max-w-[1200px]">

                  <div className="flex gap-[24px] items-start text-left max-w-[450px]">
                    <img src={dressCode.src} alt="" className="w-[60px]" />
                    <p>
                     <b>Dress Code</b> : Esporte Fino.
                      Não é necessário usar paletó (é verão!). Para os vestidos, podem ser midi ou longo — escolha o que fizer você se sentir incrível!
                    </p>
                  </div>

                  <div className="flex gap-[24px] items-start text-left  max-w-[450px]">
                    <img src={dressCode2.src} alt=""  className="w-[60px]"/>
                    <p>
                     <b>O verde e o marrom foram escolhidos para as madrinhas e os padrinhos, </b> respectivamente. Por isso, pedimos gentilmente que os convidados optem por outras cores.
                    </p>
                  </div>

                  <div className="flex gap-[24px] items-start text-left  max-w-[450px]">
                    <img src={dressCode3.src} alt=""  className="w-[60px]"/>
                    <p>
                     <b>Evite usar vestidos brancos, off white ou nude. </b> Queremos reservar essas cores especiais só para a noiva.
                    </p>
                  </div>


                  <div className="flex gap-[24px] items-start text-left  max-w-[450px]">
                    <img src={dressCode4.src} alt=""  className="w-[60px]"/>
                    <p>
                    <b> Aproveitem o grande dia!</b> Curtam cada momento, celebrem com alegria e façam parte dessa festa tão especial ao nosso lado.
                    </p>
                  </div>  


                </div>
            </div>             
          </div>  


         <div className="px-[16px] flex flex-col items-center justify-center relative gap-[100px] lg:gap-[150px] h-[700px] lg:h-[900px] py-[50px]  w-full overflow-hidden">
             <h4 className="text-[24px] text-[#222420] cinzel-bold text-center z-[999999999999999999999]">“Sonho que se sonha junto é realidade.”</h4>     
            <img src={logoLM.src} alt="" className="max-w-[204px] z-[99999999999999999]" />    
            <img src={flowerBottom.src} alt="" className="absolute lg:h-[1018.22px] right-[-50px] bottom-[-100px] h-[590px] lg:w-[790px] lg:right-[20px] lg:bottom-[0px] lg:overflow-hidden z-[9999]"/>      
            <img src={flowerBottom2.src} alt="" className="absolute h-[735.89px] lg:overflow-hidden lg:w-full bottom-[0px] lg:bottom-[-0px]  "/>      

         </div>         

              
    </div>
  );
}
