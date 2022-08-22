import Image from "next/image";

const SkillCard = ({ title, img, invertColor }) => {
  return (
    <div className={`cardSingleContainer ${invertColor || ""}`}>
      <Image
        src={img}
        width={60}
        height={60}
        className="cardSingleImage"
        alt="Icono sobre la habilidad en cuestion"
      />
      <h3 className="cardSingleTitle">{title}</h3>
    </div>
  );
};

export default SkillCard;
