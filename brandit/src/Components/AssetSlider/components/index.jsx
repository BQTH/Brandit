import React from 'react';
import './../styles/styles.scss'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { socials } from '../data/socials/socials';

function AssetSlider() {
  const [selected, setSelected] = React.useState([]);
  const [position, setPosition] = React.useState(0);

  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const handleClick =
    (id) =>
      ({ getItemById, scrollToItem }) => {
        const itemSelected = isItemSelected(id);

        setSelected((currentSelected) =>
          itemSelected
            ? currentSelected.filter((el) => el !== id)
            : currentSelected.concat(id)
        );
      };



  return (
    <div className="asset-slider">
      <ScrollMenu >
        {socials.map((s) => (
          <Card
            itemId={s.id} // NOTE: itemId is required for track items
            url={s.url}
            key={s.id}
            onClick={handleClick(s.id)}
            selected={isItemSelected(s.id)}
            icon={s.icon}
          />
        ))}
      </ScrollMenu>
    </div>
  );
}

// function LeftArrow() {
//   const { isFirstItemVisible, scrollPrev } =
//     React.useContext(VisibilityContext);

//   return (
//     <Arrow disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
//       Left
//     </Arrow>
//   );
// }

// function RightArrow() {
//   const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

//   return (
//     <Arrow disabled={isLastItemVisible} onClick={() => scrollNext()}>
//       Right
//     </Arrow>
//   );
//}
const copyText = (entryText) => {
  navigator.clipboard.writeText(entryText);
}

function Card({ onClick, selected, url, icon }) {
  const visibility = React.useContext(VisibilityContext);

  return (
    <div
      className="asset-slider__item"
      onClick={() => {
        onClick(visibility)
        copyText(url)
      }}
      tabIndex={0} >
      {icon}
    </div>
  );
}

export default AssetSlider;