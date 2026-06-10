import judeteSvg from "../data/JudeteSvg";

export default function HartaRomanieiSvg({ judetCurent, handleClickJudet }) {
  return (
    <svg
      className="harta-romaniei"
      xmlns="http://www.w3.org/2000/svg"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 1000 700"
      preserveAspectRatio="none"
    >
      {judeteSvg.map(({ d, id, name, resedinta }) => (
        <path
          key={id}
          d={d}
          id={id}
          data-name={name}
          data-resedinta={resedinta}
          onClick={() => handleClickJudet(name, resedinta)}
          fill={judetCurent === name ? "white" : "gold"}
          stroke="black"
          strokeWidth={2}
          className="judet"
        />
      ))}
    </svg>
  );
}