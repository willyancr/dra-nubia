import { Brush } from "@/components/brand/brush";
import { CONDITIONS } from "@/lib/site";

export default function Treats() {
  return (
    <section
      id="o-que-trata"
      aria-labelledby="trata-titulo"
      className="py-[clamp(5rem,10vw,9rem)]"
    >
      <div className="mx-auto grid max-w-[1240px] gap-12 px-5 lg:grid-cols-12 lg:gap-10 lg:px-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <h2 id="trata-titulo" className="font-display text-[clamp(2.25rem,1.9rem+1.2vw,3rem)] font-bold leading-[1.05] tracking-[-0.02em]">
              O que a reumatopediatra trata
            </h2>
            <p className="mt-6 max-w-[30rem] text-lead text-plum-soft">
              Doenças reumáticas na infância são aquelas em que o corpo inflama articulações,
              pele, músculos ou vasos.
            </p>
            <p className="mt-6 max-w-[30rem] text-plum-soft">
              Quando o tratamento pede, trabalho junto com fisioterapeutas, nutricionistas e
              psicólogos.
            </p>
          </div>
        </div>

        <ul className="lg:col-span-7">
          {CONDITIONS.map((condition) => (
            <li
              key={condition.name}
              className="group relative isolate border-b border-blush py-8 first:pt-0 md:py-10 md:first:pt-2"
            >
              {/* No hover, a pincelada cresce atrás do nome */}
              <div
                aria-hidden="true"
                className="absolute -left-6 top-1/2 -z-10 h-24 w-[min(34rem,90%)] -translate-y-1/2 origin-left scale-x-0 transition-transform duration-500 ease-expo group-hover:scale-x-100 motion-reduce:hidden"
              >
                <Brush className="size-full" />
              </div>
              <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-10">
                <div>
                  <h3 className="font-display text-[clamp(1.5rem,1.3rem+0.8vw,2rem)] font-bold leading-tight tracking-[-0.015em]">
                    {condition.name}
                  </h3>
                  <p className="mt-2 text-[0.9375rem] font-semibold text-rose">
                    Costuma começar por {condition.signs}
                  </p>
                </div>
                <p className="max-w-[30rem] text-plum-soft md:pt-1">{condition.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
