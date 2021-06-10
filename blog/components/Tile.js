import ContentTile from "./ContentTile";
import TitleTile from "./TitleTitle";

function Tile({
  title,
  subtitle,
  img,
  direction,
  firstDivColor,
  secondDivColor,
  margin,
  type,
}) {
  return (
    <>
      {type == "title" ? (
        <TitleTile
          title={title}
          subtitle={subtitle}
          img={img}
          margin={margin}
          direction={direction}
        />
      ) : (
        <ContentTile
          margin={margin}
          firstDivColor={firstDivColor}
          secondDivColor={secondDivColor}
          direction={direction}
          title={title}
          subtitle={subtitle}
        />
      )}
    </>
  );
}

export default Tile;
