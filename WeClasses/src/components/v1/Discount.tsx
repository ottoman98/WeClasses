function Discount() {
  return (
    <section className="bg-blue-950 text-white flex gap-8 p-16 justify-around">
      <div>
        <h2 className="font-black text-4xl">
          La oportunidad de aprender idiomas con un 30% de descuento.
        </h2>
        <p>
          No dejes que esta oferta exclusiva pase; inscríbete hoy y amplía tus
          horizontes.
        </p>
      </div>
      <button className="bg-white p-5 text-blue-700 duration-500 hover:bg-black hover:text-white">
        Mas información
      </button>
    </section>
  );
}

export default Discount;
