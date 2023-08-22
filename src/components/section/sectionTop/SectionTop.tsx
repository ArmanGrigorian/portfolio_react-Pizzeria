import "./SectionTop.scss";
import PropTypes from "prop-types";

export default function SectionTop({children}) {
  return (
      <div className="sectionTop">
          {children}
      </div>
  )
}

SectionTop.propTypes = {
    children: PropTypes.node,
}
