function AQ() {
  return (
    <section className=" flex flex-col py-10 px-40 bg-sky-100">
      <h2 className="text-center text-4xl font-bold">
        Frequently asked questions
      </h2>
      <div className="pt-10 flex flex-col gap-3 text-customBlack text-lg max-w-[80rem] mx-auto w-full">
        <details name="info">
          <summary className="font-extrabold border-b-[2px] border-blue-900 ">
            ¿Qué es Weclasses?
          </summary>
          Weclasses es una plataforma de aprendizaje de idiomas diseñada para
          hacer que el proceso de aprender sea más fácil y sencillo. Con una
          amplia variedad de recursos y herramientas, Weclasses te ofrece la
          oportunidad de mejorar tus habilidades lingüísticas de una manera
          divertida y efectiva. Nuestro enfoque centrado en el usuario y nuestra
          comunidad amigable hacen que aprender un nuevo idioma sea una
          experiencia agradable y enriquecedora.
        </details>
        <details name="info" className=" border-b-[2px] border-blue-900">
          <summary className="font-extrabold border-b-[1px]">
            ¿Cómo puedo inscribirme en una clase de Weclasses?
          </summary>
          ¡Comenzar a aprender idiomas con Weclasses es sencillo!, solo debes
          ingresar tus datos en el formulario de inscripción de nuestra página
          web. Luego uno de nuestros asesores te contactará para brindarte más
          información, responder todas tus preguntas sobre el curso y nuestros
          métodos de pago.
        </details>
        <details name="info" className=" border-b-[2px] border-blue-900">
          <summary className="font-extrabold border-b-[1px]">
            ¿Todos los profesores de Weclasses son nativos?
          </summary>
          Si, son profesores nativos. Los profesores de Weclasses son
          seleccionados de una base global de talento y aplican estrategias de
          enseñanza que aceleran el proceso de aprendizaje, dedicándose
          constantemente al éxito de los estudiantes.
        </details>
        <details name="info" className=" border-b-[2px] border-blue-900">
          <summary className="font-extrabold border-b-[1px]">
            ¿Cómo funciona la plataforma?
          </summary>
          Si, son profesores nativos. Los profesores de Weclasses son
          seleccionados de una base global de talento y aplican estrategias de
          enseñanza que aceleran el proceso de aprendizaje, dedicándose
          constantemente al éxito de los estudiantes.
        </details>
        <details name="info" className=" border-b-[2px] border-blue-900">
          <summary className="font-extrabold border-b-[1px]">
            ¿Cómo contactar con Weclasses?
          </summary>
          Puedes contactar con el equipo de atención al cliente de Weclasses a
          través del chat. Weclasses cuenta con un equipo de atención al cliente
          por chat, disponible de manera ininterrumpida para atender las
          solicitudes de estudiantes y profesores y que cumple con la normas
          establecidas en el Reglamento General de Protección de Datos (RGPD).
          Hablamos tu idioma e intentaremos responder tus preguntas en menos de
          10 minutos durante todo el día, 2 horas para correos electrónicos.
        </details>
      </div>
    </section>
  );
}

export default AQ;
