import { useState, FC } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./package.css";
import Exterior from "./ExteriorPrices.jpeg";
import Interior from "./InteriorPrices.jpeg";
import Special from "./Special.png";

interface HistoryProps {
  current: number;
  items: string[];
  changeSlide: (curIndex: number, index: number) => void;
}

const History: FC<HistoryProps> = ({ current, items, changeSlide }) => {
  let modifiedItems = items.map((el, index) => {
    let name = index === current ? "active" : "";
    return (
      <li key={index}>
        <button className={name} onClick={() => changeSlide(current, index)} />
      </li>
    );
  });

  return <ul>{modifiedItems}</ul>;
};

const Packages: FC = () => {
  const [items, setItems] = useState<string[]>([Exterior, Interior, Special]);
  const [current, setCurrent] = useState<number>(0);
  const [isNext, setIsNext] = useState<boolean>(true);

  const handlerPrev = () => {
    let index = current;
    let length = items.length;

    if (index < 1) {
      index = length;
    }

    index = index - 1;

    setCurrent(index);
    setIsNext(false);
  };

  const handlerNext = () => {
    let index = current;
    let length = items.length - 1;

    if (index === length) {
      index = -1;
    }

    index = index + 1;

    setCurrent(index);
    setIsNext(true);
  };

  const goToHistoryClick = (curIndex: number, index: number) => {
    let next = curIndex < index;
    setCurrent(index);
    setIsNext(next);
  };

  let index = current;
  let isnext = isNext;
  let src = items[index];

  return (
    <div className="myCustomHeight backborder-leftmm">
      <div className="carousel">
        <TransitionGroup>
          <CSSTransition
            key={index}
            timeout={500}
            classNames={{
              enter: isnext ? "enter-next" : "enter-prev",
              enterActive: "enter-active",
              exit: "leave",
              exitActive: isnext ? "leave-active-next" : "leave-active-prev",
            }}
          >
            <div className="carousel_slide">
              <img style={{ minWidth: "100%" }} src={src} alt="" />
            </div>
          </CSSTransition>
        </TransitionGroup>
        <button
          className="carousel_control carousel_control__prev"
          onClick={handlerPrev}
        >
          <span />
        </button>
        <button
          className="carousel_control carousel_control__next"
          onClick={handlerNext}
        >
          <span />
        </button>
        <div className="carousel_history">
          <History
            current={current}
            items={items}
            changeSlide={goToHistoryClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Packages;
