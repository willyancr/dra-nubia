export default function Location() {
  return (
    <section id="location" className="w-full bg-[#F6D1DC]/15 py-16">
      <div className="mx-auto max-w-6xl px-4">
        {/* Title */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
            Nossa <span className="text-tertiary">Localização</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Venha nos visitar em nosso consultório
          </p>
        </div>

        {/* Map Container */}
        <div className="w-full overflow-hidden rounded-lg shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.844224019222!2d-48.336916088815!3d-10.193302989880172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9324cbd30260479f%3A0xd755b0e6eccd0a86!2zVXJiYW4gSW5jb3Jwb3Jhw6fDtWVz!5e0!3m2!1spt-BR!2sbr!4v1738669766383!5m2!1spt-BR!2sbr"
            className="h-[450px] w-full"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          />
        </div>

        {/* Address Info */}
        <div className="mt-8 text-center">
          <h3 className="mb-2 text-xl font-semibold text-gray-800">
            Endereço do Consultório
          </h3>
          <p className="text-gray-600">
            Edifício Comercial Urban Futuro
            <br />
            Q. 201 Sul Avenida Joaquim Teotônio Segurado - Sala 2301
            <br />
            CEP: 77015-202
            <br />
            Tel: (63) 98485-7092
          </p>
        </div>
      </div>
    </section>
  );
}
