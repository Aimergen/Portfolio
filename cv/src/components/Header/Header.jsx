import { useState } from "react";
import css from "./header.module.scss";
import { BiMenuAltRight } from "react-icons/bi";
import { getMenuStyles } from "../../utils/motion";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className={`paddings ${css.wrapper}`}>
      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={css.name}>Hi beeb</div>
        <ul className={`flexCenter ${css.menu}`}>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
        </ul>

        <div
          className={css.menuIcon}
          style={getMenuStyles(menuOpened)}
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </div>
  );
};

export default Header;
