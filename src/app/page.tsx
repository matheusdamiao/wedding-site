'use client'
import Image from "next/image";
import { useEffect, useState } from "react";


export default function Home() {
      const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    useEffect(() => {
    const targetDate = new Date('2026-01-03T16:00:00'); // 3 January 2025, 4pm local time

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      console.log('difference', difference)

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

  return (
    <div>
      <div
        className="fixed z-[999999] top-0 left-0 right-0 bg-white/60 backdrop-blur-md backdrop-saturate-125 border border-white/20"
        style={{ WebkitBackdropFilter: 'blur(8px)', backdropFilter: 'blur(8px)' }}
      >
        <div className="flex items-center justify-center pt-4 z-[9999999]">
          <img src="/images/logo-topo.svg" className="px-4 lg:max-w-[800px]" alt="" />
        </div>

        <nav className="flex items-center flex-wrap flex-col lg:flex-row z-[9999999] text-sm lg:text-xl my-4 lg:mt-10 justify-center gap-2 lg:gap-20">
          <a href="#confirmar" className="inline-block border-b-2 border-transparent hover:border-current transition-colors duration-200">
            Confirmar Presença
          </a>
          <a href="#lista" className="inline-block border-b-2 border-transparent hover:border-current transition-colors duration-200">
            Lista de Presentes
          </a>
          <a href="#localizacao" className="inline-block border-b-2 border-transparent hover:border-current transition-colors duration-200">
            Como chegar
          </a>
        </nav>
      </div>


      <div className="w-full h-[60svh] mt-[200px] lg:mt-[250px] relative">
        <img src="/images/hero-foto.png" alt="" className="object-cover absolute w-full h-full z-[99999]" />
      </div>

      <div className="relative">
        <img src="/images/green-cloud.png" alt="" class="absolute lg:w-[20084.21px] lg:h-[1762.99px] lg:top-[-1050px] v z-[9]" />
        <img src="/images/flowers-right.png" class="right-0 top-[300px] h-full lg:absolute z-[999999999]" alt="" />
        <div>
          <div className="flex flex-col items-center justify-center text-center ">
            <img src="/images/flower-division.png" className="w-[350px] pt-[4px] pb-[45px]" alt="" />
            <div class="lg:gap-[54px] flex flex-col">
              <p className="text-2xl">
                Com o coração repleto de amor e gratidão,<br /> <b> convidamos você para viver conosco um dos momentos mais especiais da nossa história.</b>
              </p>
              <div class="flex flex-col gap-[24px] text-lg">
                <p>
                  Um dia de amor, de risadas, de encontros e de tudo aquilo que faz a vida valer a pena.
                </p>
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
              <p class="text-lg">
                  Esperamos por você para compartilhar esse momento tão especial.
                </p>
            </div>
          </div>
          <div class="py-[100px] flex items-center justify-center">
            <div class="flex justify-center items-center w-min gap-[12px] lg:gap-[24px] bg-[#F8F7F4] text-[#5D6955] py-[15px] px-[20px] lg:py-[30px] lg:px-[40px]">
              <div className="text-[24px] lg:text-[40px]">
                <p>Sábado</p>
                <p> Janeiro</p>
              </div>
              <div className="flex items-center px-4">
                  <div className="h-24 lg:h-36 w-px bg-gray-300" aria-hidden="true" />
              </div>
              <div className="cinzel-black text-[62px] lg:text-[90px]">
                  <p>03</p>
              </div>
              <div className="flex items-center px-4">
                  <div className="h-24 lg:h-36 w-px bg-gray-300" aria-hidden="true" />
              </div>
              <div className="text-[24px] lg:text-[40px]">
                <p>16h</p>
                <p>2026</p>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col items-center justify-center py-16 text-gray-800 ">
                  <h2 className="text-2xl lg:text-4xl mb-6">Contagem regressiva para o grande dia</h2>
                  <div className="flex gap-[100px] text-center text-[#5D6955]">
                    <div className="flex flex-col gap-[8px] flex-1 w-[119px] h-[116px]">
                      <div className="text-4xl font-bold bg-[#F8F7F4] lg:text-[55px] lg:px-[26px] lg:py-[36px] rounded-[30px] ">{timeLeft.days}</div>
                      <div className="text-lg uppercase">dias</div>
                    </div>
                    <div className="flex flex-col gap-[8px] flex-1  w-[119px] h-[116px]">
                      <div className="text-4xl font-bold bg-[#F8F7F4] lg:text-[55px] lg:px-[26px] lg:py-[36px] rounded-[30px]">{timeLeft.hours}</div>
                      <div className="text-lg uppercase">horas</div>
                    </div>
                    <div  className="flex flex-col gap-[8px] flex-1  w-[119px] h-[116px]">
                      <div className="text-4xl font-bold bg-[#F8F7F4]  lg:text-[55px] lg:px-[26px] lg:py-[36px] rounded-[30px]">{timeLeft.minutes}</div>
                      <div className="text-lg uppercase">minutos</div>
                    </div>
                    <div  className="flex flex-col gap-[8px] flex-1  w-[119px] h-[116px]">
                      <div className="text-4xl font-bold bg-[#F8F7F4]  lg:text-[55px] lg:px-[26px] lg:py-[36px] rounded-[30px]">{timeLeft.seconds}</div>
                      <div className="text-lg uppercase">segundos</div>
                    </div>
                  </div>
          </div>
        </div>
      </div>


      <div className="py-[150px]">
         <div className="flex flex-col items-center justify-center text-center ">
            <img src="/images/flower-division.png" className="w-[350px] pt-[4px] pb-[45px]" alt="" />
          </div>
      </div>
    </div>
  );
}
