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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.8440835327538!2d-48.33688628881503!3d-10.193314389880104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9324cb48c9e9e5eb%3A0x2c02818b59c05c9f!2sUrban%20Futuro!5e0!3m2!1spt-BR!2sbr!4v1739143824684!5m2!1spt-BR!2sbr"
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
            Edifício Comercial Urban Futuro - <strong>Sala 301</strong>
            <br />
            Quadra 201 Sul Avenida Joaquim Teotônio Segurado 
            <br />
            CEP: 77015-202 | Palmas - TO 
            <br />
            Tel: (63) 99281-9154
          </p>
        </div>
      </div>
    </section>
  );
}
