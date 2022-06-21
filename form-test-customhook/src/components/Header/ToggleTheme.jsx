import React, { useEffect, useState } from 'react'
import ToggleThemeStyle from './ToggleTheme.module.css'
import { ImSun } from 'react-icons/im'
import { BiMoon } from 'react-icons/bi'
import PropTypes from 'prop-types';
import classNames from 'classnames';


const CheckedIcon = () => <>🌜</>;
const UncheckedIcon = () => <>🌞</>;

export const ToggleTheme = ( props ) => {

  const [toggle, setToggle] = useState(false);
  const { defaultChecked, onChange, disabled, className } = props;

  useEffect(() => {
    if (defaultChecked) {
        setToggle(defaultChecked);
    }
  }, [defaultChecked]);

  const triggerToggle = () => {
    if ( disabled ) {
        return;
    }

    setToggle(!toggle);

    if ( typeof onChange === 'function' ) {
        onChange(!toggle);
    }
  }

  const toggleClasses = classNames('wrg-toggle', {
    'wrg-toggle--checked': toggle,
    'wrg-toggle--disabled': disabled
  }, className);

  const getIcon = (type) => {
    const { icons } = props;
    if ( ! icons ) {
        return null;
    }

    return icons[type] === undefined ?
        ToggleButton.defaultProps.icons[type] :
        icons[type];
  }

  return (
    <>
      <div onClick={triggerToggle} className={toggleClasses}>
        <div className="wrg-toggle-container">
          <div className="wrg-toggle-check">
            <span>{getIcon("checked")}</span>
          </div>
          <div className="wrg-toggle-uncheck">
            <span>{getIcon("unchecked")}</span>
          </div>
        </div>
        <div className="wrg-toggle-circle"></div>
        <input
          type="checkbox"
          aria-label="Toggle Button"
          className="wrg-toggle-input"
        />
      </div>
    </>
  );
}

ToggleTheme.defaultProps = {
  icons: {
      checked: <CheckedIcon />, 
      unchecked: <UncheckedIcon />
  }
};

ToggleTheme.propTypes = {
  disabled: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func,
  icons: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
        checked: PropTypes.node,
        unchecked: PropTypes.node
    })
  ])
};
